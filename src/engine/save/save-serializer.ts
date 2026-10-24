// Pure scratch-built Generation III Save Serializer Engine
// Verified against pret/pokefirered src/save.c & src/load_save.c

import { WorkingSaveState, DecodedPokemon, DecodedItem } from './types.ts';
import { SECTOR_SIZE, writeSectorFooter } from './sector.ts';
import { assembleSaveBlocks } from './save-parser.ts';
import { encodeGen3String } from '../../data/charset.ts';
import { packSubstructures } from '../substructures.ts';
import { calculateBoxMonChecksum } from '../checksum.ts';
import { cryptBoxMonSubstructs, cryptFireRedMoney, cryptFireRedCoins, cryptFireRedItemQuantity } from '../encryption.ts';
import { detectSaveFile } from './save-detector.ts';

/**
 * Serializes a single DecodedPokemon into raw bytes (100 bytes for party, 80 for PC).
 */
export function serializePokemonRecord(mon: DecodedPokemon, isParty: boolean): Uint8Array {
  const size = isParty ? 100 : 80;
  const buffer = new Uint8Array(size);
  // Preserve existing raw bytes where applicable
  if (mon.rawBytes && mon.rawBytes.length >= size) {
    buffer.set(mon.rawBytes.subarray(0, size));
  }
  const view = new DataView(buffer.buffer, buffer.byteOffset, size);

  // 1. Personality & OT ID
  view.setUint32(0x00, mon.personality >>> 0, true);
  view.setUint32(0x04, mon.otId >>> 0, true);

  // 2. Nickname
  const encodedNick = encodeGen3String(mon.nickname, 10);
  buffer.set(encodedNick, 0x08);

  // 3. Language & Flags
  view.setUint8(0x12, mon.language || 0x02); // 0x02 = English
  let flags = 0;
  if (mon.isBadEgg) flags |= 0x01;
  if (mon.hasSpecies) flags |= 0x02;
  if (mon.isEgg) flags |= 0x04;
  view.setUint8(0x13, flags);

  // 4. OT Name
  const encodedOt = encodeGen3String(mon.otName, 7);
  buffer.set(encodedOt, 0x14);

  // 5. Markings
  view.setUint8(0x1B, mon.markings & 0x0F);

  // 6. Substructures Packing & Encryption
  const decryptedSubstructs = packSubstructures(mon.substructs, mon.personality);
  const newChecksum = calculateBoxMonChecksum(decryptedSubstructs);
  view.setUint16(0x1C, newChecksum, true);
  view.setUint16(0x1E, 0x0000, true); // unknown/padding

  // Encrypt
  const encryptedSubstructs = cryptBoxMonSubstructs(decryptedSubstructs, mon.personality, mon.otId);
  buffer.set(encryptedSubstructs, 0x20);

  // 7. Party-specific battle data (offsets 0x50 to 0x63)
  if (isParty) {
    view.setUint32(0x50, mon.status ?? 0, true);
    view.setUint8(0x54, mon.level);
    view.setUint8(0x55, 0xFF); // mail
    view.setUint16(0x56, mon.currentHp ?? mon.calculatedStats.hp, true);
    view.setUint16(0x58, mon.maxHp ?? mon.calculatedStats.hp, true);
    view.setUint16(0x5A, mon.calculatedStats.attack, true);
    view.setUint16(0x5C, mon.calculatedStats.defense, true);
    view.setUint16(0x5E, mon.calculatedStats.speed, true);
    view.setUint16(0x60, mon.calculatedStats.spAttack, true);
    view.setUint16(0x62, mon.calculatedStats.spDefense, true);
  }

  return buffer;
}

/**
 * Serializes the full WorkingSaveState into a new, validated Uint8Array buffer.
 */
export function serializeSaveFile(state: WorkingSaveState): Uint8Array {
  // Clone working bytes to guarantee immutability of session
  const outputBytes = state.workingBytes.slice();

  const slotIndex = state.diagnostics.activeSlotIndex ?? 0;
  const startSector = state.diagnostics.slots[slotIndex].startSector;
  const newSaveCounter = (state.diagnostics.slots[slotIndex].saveCounter + 1) >>> 0;

  // Assemble current blocks to apply edits cleanly
  const { sb2Bytes, sb1Bytes, storageBytes } = assembleSaveBlocks(outputBytes, startSector);

  const sb2View = new DataView(sb2Bytes.buffer, sb2Bytes.byteOffset, sb2Bytes.byteLength);
  const sb1View = new DataView(sb1Bytes.buffer, sb1Bytes.byteOffset, sb1Bytes.byteLength);

  // 1. Write Trainer (playerName is 8 bytes: 7 chars + 0xFF terminator)
  const encName = encodeGen3String(state.trainer.name, 8);
  sb2Bytes.set(encName, 0x000);
  sb2View.setUint8(0x008, state.trainer.gender === 'female' ? 1 : 0);
  sb2View.setUint16(0x00A, state.trainer.trainerId, true);
  sb2View.setUint16(0x00C, state.trainer.secretId, true);
  sb2View.setUint16(0x00E, state.trainer.hours, true);
  sb2View.setUint8(0x010, state.trainer.minutes);
  sb2View.setUint8(0x011, state.trainer.seconds);
  sb2View.setUint8(0x012, state.trainer.frames);

  const key = state.trainer.encryptionKey;
  sb2View.setUint32(0x0F20, key, true);

  // Encrypt & write money and coins
  const encMoney = cryptFireRedMoney(state.trainer.money, key);
  sb1View.setUint32(0x0290, encMoney, true);

  const encCoins = cryptFireRedCoins(state.trainer.coins, key);
  sb1View.setUint16(0x0294, encCoins, true);

  // Write Badges (SaveBlock1 + 0x0FE4)
  let badgeByte = 0;
  for (let b = 0; b < 8; b++) {
    if (state.trainer.badges[b]) {
      badgeByte |= 1 << b;
    }
  }
  sb1View.setUint8(0x0FE4, badgeByte);

  // 2. Write Party Pokémon (SaveBlock1 + 0x0034 count, 0x0038 party)
  const partyCount = Math.min(6, state.party.length);
  sb1View.setUint8(0x0034, partyCount);

  for (let i = 0; i < 6; i++) {
    const monOffset = 0x0038 + i * 100;
    if (i < partyCount) {
      const monBytes = serializePokemonRecord(state.party[i], true);
      sb1Bytes.set(monBytes, monOffset);
    } else {
      // Clear empty party slots
      sb1Bytes.fill(0, monOffset, monOffset + 100);
    }
  }

  // 3. Write PC Storage
  const storageView = new DataView(storageBytes.buffer, storageBytes.byteOffset, storageBytes.byteLength);
  storageView.setUint8(0x0000, state.storage.currentBox);

  for (let b = 0; b < 14; b++) {
    const box = state.storage.boxes[b];
    const boxOffset = 0x0004 + b * (30 * 80);

    for (let s = 0; s < 30; s++) {
      const monOffset = boxOffset + s * 80;
      const mon = box?.pokemon[s];
      if (mon) {
        const monBytes = serializePokemonRecord(mon, false);
        storageBytes.set(monBytes, monOffset);
      } else {
        storageBytes.fill(0, monOffset, monOffset + 80);
      }
    }

    if (box) {
      // Box Name
      const encBoxName = encodeGen3String(box.name, 9);
      storageBytes.set(encBoxName, 0x8344 + b * 9);
      // Box Wallpaper
      storageView.setUint8(0x83C2 + b, box.wallpaper);
    }
  }

  // 4. Write Inventory (Pockets)
  const writePocket = (startOffset: number, capacity: number, items: DecodedItem[]) => {
    for (let slot = 0; slot < capacity; slot++) {
      const itemOffset = startOffset + slot * 4;
      const item = items[slot];
      if (item && item.id !== 0 && item.quantity > 0) {
        sb1View.setUint16(itemOffset, item.id, true);
        const encQty = cryptFireRedItemQuantity(item.quantity, key);
        sb1View.setUint16(itemOffset + 2, encQty, true);
      } else {
        sb1View.setUint16(itemOffset, 0, true);
        sb1View.setUint16(itemOffset + 2, 0, true);
      }
    }
  };

  writePocket(0x0310, 42, state.inventory.items);
  writePocket(0x03B8, 30, state.inventory.keyItems);
  writePocket(0x0430, 13, state.inventory.pokeBalls);
  writePocket(0x0464, 58, state.inventory.tmCase);
  writePocket(0x054C, 43, state.inventory.berries);

  // 5. Write Pokédex (SaveBlock2: 0x028 owned, 0x05C seen)
  const ownedBytes = new Uint8Array(52);
  const seenBytes = new Uint8Array(52);

  let hasNationalEntries = false;

  for (let dex = 1; dex <= 386; dex++) {
    const byteIndex = (dex - 1) >>> 3;
    const bitMask = 1 << ((dex - 1) & 7);

    if (state.pokedex.caught[dex]) {
      ownedBytes[byteIndex] |= bitMask;
      if (dex > 151) hasNationalEntries = true;
    }
    if (state.pokedex.seen[dex]) {
      seenBytes[byteIndex] |= bitMask;
      if (dex > 151) hasNationalEntries = true;
    }
  }

  sb2Bytes.set(ownedBytes, 0x028);
  sb2Bytes.set(seenBytes, 0x05C);

  // If National Pokédex species are seen/caught, activate FireRed National Dex mode
  if (hasNationalEntries) {
    sb2View.setUint8(0x019, 0x01); // DEX_MODE_NATIONAL
    sb2View.setUint8(0x01A, 0xDA); // National Dex magic byte in FireRed (SaveBlock2 + 0x01A)
  }

  // Note: FireRed Pokédex seen flags exist ONLY in SaveBlock2.
  // SaveBlock1 + 0x05F8 is struct Mail mail[16] and must NOT be overwritten!

  // 6. Partition assembled blocks back into 14 physical sectors in outputBytes
  // We identify physical sectors by their existing sectionId to preserve physical rotation order!
  for (let i = 0; i < 14; i++) {
    const physOffset = (startSector + i) * SECTOR_SIZE;
    const view = new DataView(outputBytes.buffer, outputBytes.byteOffset + physOffset, SECTOR_SIZE);
    const secId = view.getUint16(0x0FF4, true);

    const sectorSlice = outputBytes.subarray(physOffset, physOffset + SECTOR_SIZE);

    if (secId === 0) {
      // SaveBlock2 (3876 bytes)
      sectorSlice.set(sb2Bytes.subarray(0, 3876), 0);
    } else if (secId >= 1 && secId <= 4) {
      // SaveBlock1 chunks 0..3
      const chunkNum = secId - 1;
      const srcOffset = chunkNum * 3968;
      const size = secId === 4 ? 3816 : 3968;
      sectorSlice.set(sb1Bytes.subarray(srcOffset, srcOffset + size), 0);
    } else if (secId >= 5 && secId <= 13) {
      // PokemonStorage chunks 0..8
      const chunkNum = secId - 5;
      const srcOffset = chunkNum * 3968;
      const size = secId === 13 ? 2000 : 3968;
      sectorSlice.set(storageBytes.subarray(srcOffset, srcOffset + size), 0);
    }

    // Write updated footer (checksum, signature, saveCounter)
    writeSectorFooter(sectorSlice, secId, newSaveCounter);
  }

  // 7. Verify exported buffer
  const diag = detectSaveFile(outputBytes);
  if (!diag.canEdit || diag.errors.length > 0) {
    throw new Error(`Serialization integrity verification failed: ${diag.errors.join(', ')}`);
  }

  return outputBytes;
}
