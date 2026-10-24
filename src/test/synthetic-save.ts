// Pure scratch-built Synthetic FireRed Save Generator for Unit Testing & Mock Previews

import { SECTOR_SIZE, writeSectorFooter } from '../engine/save/sector.ts';
import { encodeGen3String } from '../data/charset.ts';
import { packSubstructures, UnpackedSubstructs } from '../engine/substructures.ts';
import { calculateBoxMonChecksum } from '../engine/checksum.ts';
import { cryptBoxMonSubstructs, cryptFireRedMoney, cryptFireRedCoins, cryptFireRedItemQuantity } from '../engine/encryption.ts';
import { getSpeciesByInternalId } from '../data/species.ts';
import { getExpAtLevel } from '../engine/stats.ts';

export function createSyntheticPokemon(
  speciesId: number,
  level: number,
  nickname: string,
  personality: number,
  otId: number
): Uint8Array {
  const mon = new Uint8Array(100);
  const view = new DataView(mon.buffer, mon.byteOffset, 100);

  // Personality & OT ID
  view.setUint32(0x00, personality >>> 0, true);
  view.setUint32(0x04, otId >>> 0, true);

  // Nickname & OT
  mon.set(encodeGen3String(nickname, 10), 0x08);
  view.setUint8(0x12, 2); // English
  view.setUint8(0x13, 2); // has species
  mon.set(encodeGen3String('RED', 7), 0x14);

  const sp = getSpeciesByInternalId(speciesId);
  const growthRate = sp?.growthRate ?? 'medium_fast';
  const experience = getExpAtLevel(level, growthRate);

  // Substructures
  const substructs: UnpackedSubstructs = {
    growth: {
      species: speciesId,
      heldItem: 0,
      experience,
      ppBonuses: 0,
      friendship: 70,
    },
    attacks: {
      moves: [1, 0, 0, 0], // Pound
      pp: [35, 0, 0, 0],
    },
    evs: {
      hpEV: 0,
      attackEV: 0,
      defenseEV: 0,
      speedEV: 0,
      spAttackEV: 0,
      spDefenseEV: 0,
      cool: 0,
      beauty: 0,
      cute: 0,
      smart: 0,
      tough: 0,
      sheen: 0,
    },
    misc: {
      pokerus: 0,
      metLocation: 0x58,
      metLevel: level,
      metGame: 4, // 4 = FireRed
      pokeball: 4,
      otGender: 0,
      hpIV: 31,
      attackIV: 31,
      defenseIV: 31,
      speedIV: 31,
      spAttackIV: 31,
      spDefenseIV: 31,
      isEgg: false,
      abilityNum: 0,
      ribbons: 0,
    },
  };

  const decryptedSubstructs = packSubstructures(substructs, personality);
  const chk = calculateBoxMonChecksum(decryptedSubstructs);
  view.setUint16(0x1C, chk, true);

  const encryptedSubstructs = cryptBoxMonSubstructs(decryptedSubstructs, personality, otId);
  mon.set(encryptedSubstructs, 0x20);

  // Party stats
  view.setUint8(0x54, level);
  view.setUint16(0x56, 100, true); // HP
  view.setUint16(0x58, 100, true); // Max HP
  view.setUint16(0x5A, 50, true);  // Atk
  view.setUint16(0x5C, 50, true);  // Def
  view.setUint16(0x5E, 50, true);  // Spe
  view.setUint16(0x60, 50, true);  // SpA
  view.setUint16(0x62, 50, true);  // SpD

  return mon;
}

/**
 * Creates a valid, complete 128 KiB Pokémon FireRed save file byte array.
 */
export function createSyntheticSaveFile(saveCounter = 1): Uint8Array {
  const saveBytes = new Uint8Array(131072);
  const encryptionKey = 0x12345678;
  const otId = 12345 | (54321 << 16);

  // Prepare SaveBlock2 (3876 bytes)
  const sb2 = new Uint8Array(3876);
  const sb2View = new DataView(sb2.buffer, sb2.byteOffset, 3876);
  sb2.set(encodeGen3String('RED', 7), 0x000);
  sb2View.setUint8(0x008, 0); // Male
  sb2View.setUint32(0x00A, otId, true);
  sb2View.setUint16(0x00E, 25, true); // 25 hours
  sb2View.setUint8(0x010, 42);        // 42 mins
  sb2View.setUint8(0x011, 15);        // 15 secs
  sb2View.setUint32(0x0F20, encryptionKey, true);

  // Mark Bulbasaur (#1) and Pikachu (#25) as seen and caught
  sb2[0x028] |= 0x01; // Bulbasaur caught
  sb2[0x05C] |= 0x01; // Bulbasaur seen
  sb2[0x028 + 3] |= 0x01; // Pikachu (index 24) caught
  sb2[0x05C + 3] |= 0x01; // Pikachu seen

  // Prepare SaveBlock1 (15720 bytes)
  const sb1 = new Uint8Array(15720);
  const sb1View = new DataView(sb1.buffer, sb1.byteOffset, 15720);

  // Party: 2 Pokémon (Bulbasaur Lv. 15, Pikachu Lv. 20)
  sb1View.setUint8(0x0034, 2);
  const bulbasaurBytes = createSyntheticPokemon(1, 15, 'BULBASAUR', 0x12344321, otId);
  const pikachuBytes = createSyntheticPokemon(25, 20, 'PIKACHU', 0x87654321, otId);
  sb1.set(bulbasaurBytes, 0x0038);
  sb1.set(pikachuBytes, 0x0038 + 100);

  // Money: ₽50,000, Coins: 250
  sb1View.setUint32(0x0290, cryptFireRedMoney(50000, encryptionKey), true);
  sb1View.setUint16(0x0294, cryptFireRedCoins(250, encryptionKey), true);

  // Badges: Boulder, Cascade, Thunder (0b00000111 = 0x07)
  sb1View.setUint8(0x0FE4, 0x07);

  // Bag items: 10 Potions (ID 13) in items, 5 Poké Balls (ID 4) in balls
  sb1View.setUint16(0x0310, 13, true);
  sb1View.setUint16(0x0312, cryptFireRedItemQuantity(10, encryptionKey), true);
  sb1View.setUint16(0x0430, 4, true);
  sb1View.setUint16(0x0432, cryptFireRedItemQuantity(5, encryptionKey), true);

  // Prepare PokemonStorage (33744 bytes)
  const storage = new Uint8Array(33744);
  const storageView = new DataView(storage.buffer, storage.byteOffset, 33744);
  storageView.setUint8(0x0000, 0); // Box 0 current
  // Box 0, Slot 0 has a Charizard (Species 6)
  const charizardBox = createSyntheticPokemon(6, 36, 'CHARIZARD', 0xABCDDCBA, otId).slice(0, 80);
  storage.set(charizardBox, 0x0004);
  storage.set(encodeGen3String('BOX 1', 9), 0x8344);

  // Build Slot 1 (Sectors 0 to 13)
  const writeSlotSectors = (startSector: number, counter: number) => {
    for (let secId = 0; secId < 14; secId++) {
      const physOffset = (startSector + secId) * SECTOR_SIZE;
      const sectorSlice = saveBytes.subarray(physOffset, physOffset + SECTOR_SIZE);

      if (secId === 0) {
        sectorSlice.set(sb2.subarray(0, 3876), 0);
      } else if (secId >= 1 && secId <= 4) {
        const chunkNum = secId - 1;
        const size = secId === 4 ? 3816 : 3968;
        sectorSlice.set(sb1.subarray(chunkNum * 3968, chunkNum * 3968 + size), 0);
      } else if (secId >= 5 && secId <= 13) {
        const chunkNum = secId - 5;
        const size = secId === 13 ? 2000 : 3968;
        sectorSlice.set(storage.subarray(chunkNum * 3968, chunkNum * 3968 + size), 0);
      }

      writeSectorFooter(sectorSlice, secId, counter);
    }
  };

  // Write Slot 1 (Sectors 0..13) with current counter
  writeSlotSectors(0, saveCounter);

  // Write Slot 2 (Sectors 14..27) with previous counter (saveCounter - 1)
  writeSlotSectors(14, Math.max(0, saveCounter - 1));

  return saveBytes;
}
