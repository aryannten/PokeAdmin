// Pure scratch-built Save File Parser Engine
// Verified against pret/pokefirered src/save.c, include/global.h, src/pokemon.c, src/item.c

import {
  DecodedTrainer,
  DecodedPokemon,
  DecodedStorage,
  DecodedBox,
  DecodedInventory,
  DecodedItem,
  DecodedPokedex,
  WorkingSaveState,
  SaveFileDiagnostics,
} from './types.ts';
import { SECTOR_SIZE } from './sector.ts';
import { decodeGen3String } from '../../data/charset.ts';
import { cryptBoxMonSubstructs, cryptFireRedMoney, cryptFireRedCoins, cryptFireRedItemQuantity } from '../encryption.ts';
import { calculateBoxMonChecksum } from '../checksum.ts';
import { unpackSubstructures } from '../substructures.ts';
import { getSpeciesByInternalId } from '../../data/species.ts';
import { getNatureById } from '../../data/natures.ts';
import { getItemById, ItemPocket } from '../../data/items.ts';
import { isShiny, getNatureFromPersonality, getGenderFromPersonality } from '../personality.ts';
import { calculateStats, getLevelFromExp } from '../stats.ts';

/**
 * Reconstructs continuous SaveBlock memory from the 14 active save sectors.
 */
export function assembleSaveBlocks(fileBytes: Uint8Array, startSector: number) {
  // Map section ID (0..13) to its physical sector payload in file
  const sectionPayloads = new Map<number, Uint8Array>();

  for (let i = 0; i < 14; i++) {
    const physOffset = (startSector + i) * SECTOR_SIZE;
    const view = new DataView(fileBytes.buffer, fileBytes.byteOffset + physOffset, SECTOR_SIZE);
    const secId = view.getUint16(0x0FF4, true);
    if (secId >= 0 && secId < 14) {
      sectionPayloads.set(secId, fileBytes.slice(physOffset, physOffset + SECTOR_SIZE));
    }
  }

  // 1. SaveBlock2 (3,876 bytes from Section 0)
  const sb2Bytes = new Uint8Array(3876);
  const sec0 = sectionPayloads.get(0);
  if (sec0) {
    sb2Bytes.set(sec0.subarray(0, 3876));
  }

  // 2. SaveBlock1 (15,720 bytes from Sections 1, 2, 3, 4)
  const sb1Bytes = new Uint8Array(15720);
  const sec1 = sectionPayloads.get(1);
  const sec2 = sectionPayloads.get(2);
  const sec3 = sectionPayloads.get(3);
  const sec4 = sectionPayloads.get(4);

  if (sec1) sb1Bytes.set(sec1.subarray(0, 3968), 0);
  if (sec2) sb1Bytes.set(sec2.subarray(0, 3968), 3968);
  if (sec3) sb1Bytes.set(sec3.subarray(0, 3968), 3968 * 2);
  if (sec4) sb1Bytes.set(sec4.subarray(0, 3816), 3968 * 3);

  // 3. PokemonStorage (33,744 bytes from Sections 5 to 13)
  const storageBytes = new Uint8Array(33744);
  for (let s = 5; s <= 12; s++) {
    const sec = sectionPayloads.get(s);
    if (sec) {
      storageBytes.set(sec.subarray(0, 3968), (s - 5) * 3968);
    }
  }
  const sec13 = sectionPayloads.get(13);
  if (sec13) {
    storageBytes.set(sec13.subarray(0, 2000), 8 * 3968);
  }

  return { sb2Bytes, sb1Bytes, storageBytes, sectionPayloads };
}

/**
 * Decodes a single 80-byte or 100-byte Pokémon record.
 */
export function decodePokemonRecord(
  rawBytes: Uint8Array,
  source: 'party' | 'pc',
  partyIndex?: number,
  boxIndex?: number,
  slotIndex?: number
): DecodedPokemon | null {
  const view = new DataView(rawBytes.buffer, rawBytes.byteOffset, rawBytes.byteLength);

  const personality = view.getUint32(0x00, true);
  const otId = view.getUint32(0x04, true);

  // Empty slot detection (all zeros)
  if (personality === 0 && otId === 0) {
    return null;
  }

  const nicknameBytes = rawBytes.slice(0x08, 0x12);
  const nickname = decodeGen3String(nicknameBytes);

  const language = view.getUint8(0x12);
  const flags = view.getUint8(0x13);
  const isBadEgg = Boolean(flags & 0x01);
  const hasSpecies = Boolean(flags & 0x02);
  const isEgg = Boolean(flags & 0x04);

  const otNameBytes = rawBytes.slice(0x14, 0x1B);
  const otName = decodeGen3String(otNameBytes);

  const markings = view.getUint8(0x1B);
  const checksum = view.getUint16(0x1C, true);

  // Decrypt 48 bytes of secure substructs
  const encryptedSubstructs = rawBytes.slice(0x20, 0x50);
  const decryptedSubstructs = cryptBoxMonSubstructs(encryptedSubstructs, personality, otId);
  const expectedChecksum = calculateBoxMonChecksum(decryptedSubstructs);
  const isChecksumValid = checksum === expectedChecksum;

  // Unpack domain substructs
  const substructs = unpackSubstructures(decryptedSubstructs, personality);

  // Species lookup using verified game-internal species identifier
  const speciesData = getSpeciesByInternalId(substructs.growth.species);
  const nationalDex = speciesData?.nationalDex ?? 0;
  const speciesName = speciesData?.name ?? `Species #${substructs.growth.species}`;
  const generation = speciesData?.generation ?? 1;

  // Nature
  const natureId = getNatureFromPersonality(personality);
  const natureName = getNatureById(natureId)?.name ?? 'Hardy';

  // Gender
  const genderRatio = speciesData?.genderRatio ?? 127;
  const gender = getGenderFromPersonality(personality, genderRatio);

  // Shiny
  const shiny = isShiny(personality, otId);

  // Level & Stats
  const growthRate = speciesData?.growthRate ?? 'medium_fast';
  const level = getLevelFromExp(substructs.growth.experience, growthRate);

  const baseStats = speciesData?.baseStats ?? {
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    spAttack: 65,
    spDefense: 65,
  };

  const ivs = {
    hp: substructs.misc.hpIV,
    attack: substructs.misc.attackIV,
    defense: substructs.misc.defenseIV,
    speed: substructs.misc.speedIV,
    spAttack: substructs.misc.spAttackIV,
    spDefense: substructs.misc.spDefenseIV,
  };

  const evs = {
    hp: substructs.evs.hpEV,
    attack: substructs.evs.attackEV,
    defense: substructs.evs.defenseEV,
    speed: substructs.evs.speedEV,
    spAttack: substructs.evs.spAttackEV,
    spDefense: substructs.evs.spDefenseEV,
  };

  const calculatedStats = calculateStats(
    substructs.growth.species,
    baseStats,
    ivs,
    evs,
    level,
    natureId
  );

  let status: number | undefined;
  let currentHp: number | undefined;
  let maxHp: number | undefined;

  if (source === 'party' && rawBytes.length >= 100) {
    status = view.getUint32(0x50, true);
    currentHp = view.getUint16(0x56, true);
    maxHp = view.getUint16(0x58, true);
  }

  return {
    source,
    partyIndex,
    boxIndex,
    slotIndex,
    personality,
    otId,
    nickname,
    language,
    isBadEgg,
    hasSpecies,
    isEgg,
    otName,
    markings,
    checksum,
    expectedChecksum,
    isChecksumValid,
    substructs,
    nationalDex,
    speciesName,
    generation,
    level,
    natureId,
    natureName,
    gender,
    isShiny: shiny,
    calculatedStats,
    status,
    currentHp: currentHp ?? calculatedStats.hp,
    maxHp: maxHp ?? calculatedStats.hp,
    rawBytes: rawBytes.slice(0, source === 'party' ? 100 : 80),
  };
}

/**
 * Parses the full working save state from local file bytes.
 */
export function parseSaveFile(
  fileBytes: Uint8Array,
  diagnostics: SaveFileDiagnostics
): WorkingSaveState {
  if (diagnostics.activeSlotIndex === null) {
    throw new Error('Cannot parse save file without an active, valid save slot.');
  }

  const startSector = diagnostics.slots[diagnostics.activeSlotIndex].startSector;
  const { sb2Bytes, sb1Bytes, storageBytes } = assembleSaveBlocks(fileBytes, startSector);

  const sb2View = new DataView(sb2Bytes.buffer, sb2Bytes.byteOffset, sb2Bytes.byteLength);
  const sb1View = new DataView(sb1Bytes.buffer, sb1Bytes.byteOffset, sb1Bytes.byteLength);

  // 1. Trainer Profile
  const trainerName = decodeGen3String(sb2Bytes.slice(0x000, 0x008));
  const playerGender = sb2View.getUint8(0x008) === 1 ? 'female' : 'male';
  const trainerId = sb2View.getUint16(0x00A, true);
  const secretId = sb2View.getUint16(0x00C, true);
  const fullOtId = sb2View.getUint32(0x00A, true);

  const hours = sb2View.getUint16(0x00E, true);
  const minutes = sb2View.getUint8(0x010);
  const seconds = sb2View.getUint8(0x011);
  const frames = sb2View.getUint8(0x012);

  // Encryption key at SaveBlock2 + 0x0F20
  const encryptionKey = sb2View.getUint32(0x0F20, true);

  // Money & Coins (SaveBlock1)
  const rawMoney = sb1View.getUint32(0x0290, true);
  const money = cryptFireRedMoney(rawMoney, encryptionKey);

  const rawCoins = sb1View.getUint16(0x0294, true);
  const coins = cryptFireRedCoins(rawCoins, encryptionKey);

  // Badges at SaveBlock1 flags byte 260 (offset 0x0EE0 + 260 = 0x0FE4)
  const badgeByte = sb1View.getUint8(0x0FE4);
  const badges: boolean[] = [];
  for (let b = 0; b < 8; b++) {
    badges.push(Boolean((badgeByte >>> b) & 1));
  }

  const trainer: DecodedTrainer = {
    name: trainerName,
    gender: playerGender,
    trainerId,
    secretId,
    fullOtId,
    hours,
    minutes,
    seconds,
    frames,
    money,
    coins,
    badges,
    encryptionKey,
    rawSaveBlock2Bytes: sb2Bytes,
  };

  // 2. Party Pokémon (SaveBlock1 + 0x0034 count, 0x0038 party array)
  const partyCount = Math.min(6, sb1View.getUint8(0x0034));
  const party: DecodedPokemon[] = [];

  for (let i = 0; i < partyCount; i++) {
    const monOffset = 0x0038 + i * 100;
    const monBytes = sb1Bytes.slice(monOffset, monOffset + 100);
    const decoded = decodePokemonRecord(monBytes, 'party', i);
    if (decoded) {
      party.push(decoded);
    }
  }

  // 3. PC Storage (PokemonStorage)
  const storageView = new DataView(storageBytes.buffer, storageBytes.byteOffset, storageBytes.byteLength);
  const currentBox = storageView.getUint8(0x0000);
  const boxes: DecodedBox[] = [];

  for (let b = 0; b < 14; b++) {
    const boxPokemon: (DecodedPokemon | null)[] = [];
    const boxOffset = 0x0004 + b * (30 * 80);

    for (let s = 0; s < 30; s++) {
      const monOffset = boxOffset + s * 80;
      const monBytes = storageBytes.slice(monOffset, monOffset + 80);
      const decoded = decodePokemonRecord(monBytes, 'pc', undefined, b, s);
      boxPokemon.push(decoded);
    }

    // Box Name (PokemonStorage + 0x8344 + b * 9)
    const nameOffset = 0x8344 + b * 9;
    const boxNameBytes = storageBytes.slice(nameOffset, nameOffset + 9);
    const boxName = decodeGen3String(boxNameBytes) || `BOX ${b + 1}`;

    // Wallpaper (PokemonStorage + 0x83C2 + b)
    const wallpaper = storageView.getUint8(0x83C2 + b);

    boxes.push({
      name: boxName,
      wallpaper,
      pokemon: boxPokemon,
    });
  }

  const storage: DecodedStorage = {
    currentBox: Math.min(13, currentBox),
    boxes,
  };

  // 4. Inventory (SaveBlock1)
  const parsePocket = (startOffset: number, capacity: number, pocketName: ItemPocket): DecodedItem[] => {
    const items: DecodedItem[] = [];
    for (let slot = 0; slot < capacity; slot++) {
      const itemOffset = startOffset + slot * 4;
      const itemId = sb1View.getUint16(itemOffset, true);
      const rawQty = sb1View.getUint16(itemOffset + 2, true);
      const quantity = cryptFireRedItemQuantity(rawQty, encryptionKey);

      if (itemId !== 0 && quantity > 0) {
        const itemInfo = getItemById(itemId);
        items.push({
          id: itemId,
          name: itemInfo?.name ?? `Item #${itemId}`,
          quantity,
          pocket: pocketName,
          slotIndex: slot,
        });
      }
    }
    return items;
  };

  const inventory: DecodedInventory = {
    items: parsePocket(0x0310, 42, 'items'),
    keyItems: parsePocket(0x03B8, 30, 'key_items'),
    pokeBalls: parsePocket(0x0430, 13, 'poke_balls'),
    tmCase: parsePocket(0x0464, 58, 'tm_case'),
    berries: parsePocket(0x054C, 43, 'berries'),
  };

  // 5. Pokédex (SaveBlock2: 0x018 + 0x10 = owned[52], 0x018 + 0x44 = seen[52])
  const ownedBytes = sb2Bytes.slice(0x028, 0x028 + 52);
  const seenBytes = sb2Bytes.slice(0x05C, 0x05C + 52);

  const seen: boolean[] = new Array(387).fill(false);
  const caught: boolean[] = new Array(387).fill(false);
  let seenCount = 0;
  let caughtCount = 0;

  for (let dex = 1; dex <= 386; dex++) {
    const byteIndex = (dex - 1) >>> 3;
    const bitMask = 1 << ((dex - 1) & 7);

    const isSeen = (seenBytes[byteIndex] & bitMask) !== 0;
    const isCaught = (ownedBytes[byteIndex] & bitMask) !== 0;

    seen[dex] = isSeen;
    caught[dex] = isCaught;
    if (isSeen) seenCount++;
    if (isCaught) caughtCount++;
  }

  const pokedex: DecodedPokedex = {
    seenCount,
    caughtCount,
    seen,
    caught,
  };

  return {
    originalBytes: fileBytes,
    workingBytes: fileBytes.slice(),
    diagnostics,
    trainer,
    party,
    storage,
    inventory,
    pokedex,
    isDirty: false,
  };
}
