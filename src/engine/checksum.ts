// Pure scratch-built Checksum Calculation Engine
// Verified against pret/pokefirered src/save.c & src/pokemon.c

/**
 * Calculates a 16-bit Section Checksum for Gen 3 Save Sectors.
 * Directly replicates:
 *   static u16 CalculateChecksum(void *data, u16 size) {
 *       u16 i; u32 checksum = 0;
 *       for (i = 0; i < (size / 4); i++) checksum += *(u32 *)data++;
 *       return ((checksum >> 16) + checksum);
 *   }
 */
export function calculateSectionChecksum(data: Uint8Array, size: number): number {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const wordsCount = Math.floor(size / 4);
  let checksum = 0;

  for (let i = 0; i < wordsCount; i++) {
    // Little-endian 32-bit addition with unsigned 32-bit wrap
    const word = view.getUint32(i * 4, true);
    checksum = (checksum + word) >>> 0;
  }

  // ((checksum >> 16) + checksum) & 0xFFFF
  return (((checksum >>> 16) + (checksum & 0xFFFF)) & 0xFFFF);
}

/**
 * Calculates a 16-bit Checksum for Box Pokémon record.
 * Directly replicates:
 *   static u16 CalculateBoxMonChecksum(struct BoxPokemon *boxMon)
 * Sum of all twenty-four 16-bit halfwords of the decrypted 48-byte substructs.
 */
export function calculateBoxMonChecksum(decryptedSubstructs: Uint8Array): number {
  if (decryptedSubstructs.length < 48) {
    throw new Error(`BoxMon decrypted substructs must be 48 bytes, got ${decryptedSubstructs.length}`);
  }

  const view = new DataView(decryptedSubstructs.buffer, decryptedSubstructs.byteOffset, 48);
  let checksum = 0;

  for (let i = 0; i < 24; i++) {
    const halfword = view.getUint16(i * 2, true);
    checksum = (checksum + halfword) & 0xFFFF;
  }

  return checksum;
}
