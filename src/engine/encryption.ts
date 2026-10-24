// Pure scratch-built Encryption & Decryption Engine
// Verified against pret/pokefirered src/pokemon.c, src/load_save.c, src/item.c

/**
 * Encrypts or decrypts the 48-byte secure substructure array of a Box Pokémon.
 * The algorithm is an XOR involution using (personality ^ otId).
 */
export function cryptBoxMonSubstructs(
  substructsData: Uint8Array,
  personality: number,
  otId: number
): Uint8Array {
  if (substructsData.length !== 48) {
    throw new Error(`Expected 48 bytes of substructure data, got ${substructsData.length}`);
  }

  const result = new Uint8Array(48);
  result.set(substructsData);
  const view = new DataView(result.buffer, result.byteOffset, 48);
  const key = (personality ^ otId) >>> 0;

  for (let i = 0; i < 12; i++) {
    const word = view.getUint32(i * 4, true);
    view.setUint32(i * 4, (word ^ key) >>> 0, true);
  }

  return result;
}

/**
 * Decrypts or encrypts FireRed SaveBlock1 Money (32-bit).
 * realMoney = rawMoney ^ encryptionKey
 */
export function cryptFireRedMoney(money: number, encryptionKey: number): number {
  return (money ^ encryptionKey) >>> 0;
}

/**
 * Decrypts or encrypts FireRed SaveBlock1 Game Corner Coins (16-bit).
 * realCoins = rawCoins ^ (encryptionKey & 0xFFFF)
 */
export function cryptFireRedCoins(coins: number, encryptionKey: number): number {
  return (coins ^ (encryptionKey & 0xFFFF)) & 0xFFFF;
}

/**
 * Decrypts or encrypts FireRed Bag item slot quantity (16-bit).
 * realQuantity = rawQuantity ^ (encryptionKey & 0xFFFF)
 */
export function cryptFireRedItemQuantity(quantity: number, encryptionKey: number): number {
  return (quantity ^ (encryptionKey & 0xFFFF)) & 0xFFFF;
}
