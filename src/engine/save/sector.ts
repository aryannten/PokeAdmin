// Pure scratch-built Save Sector Layout & Footer Engine
// Verified against pret/pokefirered include/save.h & src/save.c

import { SectorHeaderFooter } from './types.ts';
import { calculateSectionChecksum } from '../checksum.ts';

export const SECTOR_DATA_SIZE = 3968;
export const SECTOR_FOOTER_SIZE = 128;
export const SECTOR_SIZE = 4096;
export const SECTOR_SIGNATURE = 0x08012025;

export const NUM_SECTORS_PER_SLOT = 14;
export const TOTAL_SECTORS = 32;

// Offset of footer fields within 4096-byte sector
export const FOOTER_OFFSET_SECTION_ID = 0x0FF4;
export const FOOTER_OFFSET_CHECKSUM = 0x0FF6;
export const FOOTER_OFFSET_SIGNATURE = 0x0FF8;
export const FOOTER_OFFSET_SAVECOUNTER = 0x0FFC;

/**
 * Expected checksum input size for each of the 14 sections in Pokémon FireRed.
 * Directly corresponds to sSaveSlotLayout in pret/pokefirered src/save.c.
 */
export const FIRERED_SECTION_SIZES: Record<number, number> = {
  0: 3876,  // SaveBlock2 chunk 0 (sizeof(SaveBlock2) = 0xF24)
  1: 3968,  // SaveBlock1 chunk 0
  2: 3968,  // SaveBlock1 chunk 1
  3: 3968,  // SaveBlock1 chunk 2
  4: 3816,  // SaveBlock1 chunk 3 (15,720 - 3 * 3,968 = 3,816 = 0xEE8)
  5: 3968,  // PokemonStorage chunk 0
  6: 3968,  // PokemonStorage chunk 1
  7: 3968,  // PokemonStorage chunk 2
  8: 3968,  // PokemonStorage chunk 3
  9: 3968,  // PokemonStorage chunk 4
  10: 3968, // PokemonStorage chunk 5
  11: 3968, // PokemonStorage chunk 6
  12: 3968, // PokemonStorage chunk 7
  13: 2000, // PokemonStorage chunk 8 (33,744 - 8 * 3,968 = 2,000 = 0x7D0)
};

/**
 * Parses and verifies footer metadata for a single 4096-byte sector.
 */
export function readSectorHeaderFooter(
  sectorBytes: Uint8Array,
  physicalIndex: number
): SectorHeaderFooter {
  if (sectorBytes.length !== SECTOR_SIZE) {
    throw new Error(`Invalid sector size: expected ${SECTOR_SIZE}, got ${sectorBytes.length}`);
  }

  const view = new DataView(sectorBytes.buffer, sectorBytes.byteOffset, SECTOR_SIZE);
  const sectionId = view.getUint16(FOOTER_OFFSET_SECTION_ID, true);
  const checksum = view.getUint16(FOOTER_OFFSET_CHECKSUM, true);
  const signature = view.getUint32(FOOTER_OFFSET_SIGNATURE, true);
  const saveCounter = view.getUint32(FOOTER_OFFSET_SAVECOUNTER, true);

  const isValidSignature = signature === SECTOR_SIGNATURE;
  const expectedSize = FIRERED_SECTION_SIZES[sectionId] ?? SECTOR_DATA_SIZE;

  // Calculate actual checksum over expected size
  const expectedChecksum = calculateSectionChecksum(sectorBytes, expectedSize);
  const isValidChecksum = isValidSignature && checksum === expectedChecksum;

  return {
    physicalIndex,
    offset: physicalIndex * SECTOR_SIZE,
    sectionId,
    checksum,
    expectedChecksum,
    signature,
    saveCounter,
    isValidSignature,
    isValidChecksum,
    size: expectedSize,
  };
}

/**
 * Recalculates checksum and writes updated footer metadata for a sector.
 */
export function writeSectorFooter(
  sectorBytes: Uint8Array,
  sectionId: number,
  saveCounter: number
): void {
  const view = new DataView(sectorBytes.buffer, sectorBytes.byteOffset, SECTOR_SIZE);
  const payloadSize = FIRERED_SECTION_SIZES[sectionId] ?? SECTOR_DATA_SIZE;

  // 1. Calculate new checksum
  const newChecksum = calculateSectionChecksum(sectorBytes, payloadSize);

  // 2. Write metadata
  view.setUint16(FOOTER_OFFSET_SECTION_ID, sectionId, true);
  view.setUint16(FOOTER_OFFSET_CHECKSUM, newChecksum, true);
  view.setUint32(FOOTER_OFFSET_SIGNATURE, SECTOR_SIGNATURE, true);
  view.setUint32(FOOTER_OFFSET_SAVECOUNTER, saveCounter, true);
}
