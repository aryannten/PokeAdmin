// Pure scratch-built Generation III Pokémon Substructures Engine
// Verified against pret/pokefirered src/pokemon.c (SUBSTRUCT_CASE & GetSubstruct)

/**
 * 0: Growth (G)
 * 1: Attacks (A)
 * 2: EVs & Condition (E)
 * 3: Miscellaneous (M)
 *
 * SUBSTRUCT_ORDERS[n] gives [slotForG, slotForA, slotForE, slotForM]
 * where slot is 0, 1, 2, or 3.
 */
export const SUBSTRUCT_ORDERS: number[][] = [
  /*  0: GAEM */ [0, 1, 2, 3],
  /*  1: GAME */ [0, 1, 3, 2],
  /*  2: GEAM */ [0, 2, 1, 3],
  /*  3: GEMA */ [0, 3, 1, 2],
  /*  4: GMAE */ [0, 2, 3, 1],
  /*  5: GMEA */ [0, 3, 2, 1],
  /*  6: AGEM */ [1, 0, 2, 3],
  /*  7: AGME */ [1, 0, 3, 2],
  /*  8: AEGM */ [2, 0, 1, 3],
  /*  9: AEMG */ [3, 0, 1, 2],
  /* 10: AMGE */ [2, 0, 3, 1],
  /* 11: AMEG */ [3, 0, 2, 1],
  /* 12: EGAM */ [1, 2, 0, 3],
  /* 13: EGMA */ [1, 3, 0, 2],
  /* 14: EAGM */ [2, 1, 0, 3],
  /* 15: EAMG */ [3, 1, 0, 2],
  /* 16: EMGA */ [2, 3, 0, 1],
  /* 17: EMAG */ [3, 2, 0, 1],
  /* 18: MGAE */ [1, 2, 3, 0],
  /* 19: MGEA */ [1, 3, 2, 0],
  /* 20: MAGE */ [2, 1, 3, 0],
  /* 21: MAEG */ [3, 1, 2, 0],
  /* 22: MEGA */ [2, 3, 1, 0],
  /* 23: MEAG */ [3, 2, 1, 0],
];

export interface SubstructGrowth {
  species: number; // 1 to 411 (game-internal species ID)
  heldItem: number;
  experience: number;
  ppBonuses: number;
  friendship: number;
}

export interface SubstructAttacks {
  moves: [number, number, number, number];
  pp: [number, number, number, number];
}

export interface SubstructEVs {
  hpEV: number;
  attackEV: number;
  defenseEV: number;
  speedEV: number;
  spAttackEV: number;
  spDefenseEV: number;
  cool: number;
  beauty: number;
  cute: number;
  smart: number;
  tough: number;
  sheen: number;
}

export interface SubstructMisc {
  pokerus: number;
  metLocation: number;
  metLevel: number;
  metGame: number;
  pokeball: number;
  otGender: number; // 0 = Male, 1 = Female
  hpIV: number;
  attackIV: number;
  defenseIV: number;
  speedIV: number;
  spAttackIV: number;
  spDefenseIV: number;
  isEgg: boolean;
  abilityNum: number; // 0 or 1
  ribbons: number;
}

export interface UnpackedSubstructs {
  growth: SubstructGrowth;
  attacks: SubstructAttacks;
  evs: SubstructEVs;
  misc: SubstructMisc;
}

/**
 * Unpacks the 48-byte decrypted substructure block into domain objects.
 */
export function unpackSubstructures(
  decryptedData: Uint8Array,
  personality: number
): UnpackedSubstructs {
  if (decryptedData.length !== 48) {
    throw new Error(`Expected 48 bytes, got ${decryptedData.length}`);
  }

  const orderIndex = (personality % 24 + 24) % 24;
  const [slotG, slotA, slotE, slotM] = SUBSTRUCT_ORDERS[orderIndex];

  const view = new DataView(decryptedData.buffer, decryptedData.byteOffset, 48);

  // Substruct 0: Growth (at offset slotG * 12)
  const gOff = slotG * 12;
  const growth: SubstructGrowth = {
    species: view.getUint16(gOff + 0, true),
    heldItem: view.getUint16(gOff + 2, true),
    experience: view.getUint32(gOff + 4, true),
    ppBonuses: view.getUint8(gOff + 8),
    friendship: view.getUint8(gOff + 9),
  };

  // Substruct 1: Attacks (at offset slotA * 12)
  const aOff = slotA * 12;
  const attacks: SubstructAttacks = {
    moves: [
      view.getUint16(aOff + 0, true),
      view.getUint16(aOff + 2, true),
      view.getUint16(aOff + 4, true),
      view.getUint16(aOff + 6, true),
    ],
    pp: [
      view.getUint8(aOff + 8),
      view.getUint8(aOff + 9),
      view.getUint8(aOff + 10),
      view.getUint8(aOff + 11),
    ],
  };

  // Substruct 2: EVs (at offset slotE * 12)
  const eOff = slotE * 12;
  const evs: SubstructEVs = {
    hpEV: view.getUint8(eOff + 0),
    attackEV: view.getUint8(eOff + 1),
    defenseEV: view.getUint8(eOff + 2),
    speedEV: view.getUint8(eOff + 3),
    spAttackEV: view.getUint8(eOff + 4),
    spDefenseEV: view.getUint8(eOff + 5),
    cool: view.getUint8(eOff + 6),
    beauty: view.getUint8(eOff + 7),
    cute: view.getUint8(eOff + 8),
    smart: view.getUint8(eOff + 9),
    tough: view.getUint8(eOff + 10),
    sheen: view.getUint8(eOff + 11),
  };

  // Substruct 3: Misc (at offset slotM * 12)
  const mOff = slotM * 12;
  const origins = view.getUint16(mOff + 2, true);
  const ivWord = view.getUint32(mOff + 4, true);

  const misc: SubstructMisc = {
    pokerus: view.getUint8(mOff + 0),
    metLocation: view.getUint8(mOff + 1),
    metLevel: origins & 0x7F,
    metGame: (origins >>> 7) & 0x0F,
    pokeball: (origins >>> 11) & 0x0F,
    otGender: (origins >>> 15) & 0x01,
    hpIV: ivWord & 0x1F,
    attackIV: (ivWord >>> 5) & 0x1F,
    defenseIV: (ivWord >>> 10) & 0x1F,
    speedIV: (ivWord >>> 15) & 0x1F,
    spAttackIV: (ivWord >>> 20) & 0x1F,
    spDefenseIV: (ivWord >>> 25) & 0x1F,
    isEgg: Boolean((ivWord >>> 30) & 0x01),
    abilityNum: (ivWord >>> 31) & 0x01,
    ribbons: view.getUint32(mOff + 8, true),
  };

  return { growth, attacks, evs, misc };
}

/**
 * Packs domain substructure objects into a 48-byte decrypted array
 * ordered according to (personality % 24).
 */
export function packSubstructures(
  unpacked: UnpackedSubstructs,
  personality: number
): Uint8Array {
  const result = new Uint8Array(48);
  const view = new DataView(result.buffer, result.byteOffset, 48);

  const orderIndex = (personality % 24 + 24) % 24;
  const [slotG, slotA, slotE, slotM] = SUBSTRUCT_ORDERS[orderIndex];

  // Pack Growth
  const gOff = slotG * 12;
  view.setUint16(gOff + 0, unpacked.growth.species, true);
  view.setUint16(gOff + 2, unpacked.growth.heldItem, true);
  view.setUint32(gOff + 4, unpacked.growth.experience, true);
  view.setUint8(gOff + 8, unpacked.growth.ppBonuses);
  view.setUint8(gOff + 9, unpacked.growth.friendship);
  view.setUint16(gOff + 10, 0, true); // filler

  // Pack Attacks
  const aOff = slotA * 12;
  view.setUint16(aOff + 0, unpacked.attacks.moves[0], true);
  view.setUint16(aOff + 2, unpacked.attacks.moves[1], true);
  view.setUint16(aOff + 4, unpacked.attacks.moves[2], true);
  view.setUint16(aOff + 6, unpacked.attacks.moves[3], true);
  view.setUint8(aOff + 8, unpacked.attacks.pp[0]);
  view.setUint8(aOff + 9, unpacked.attacks.pp[1]);
  view.setUint8(aOff + 10, unpacked.attacks.pp[2]);
  view.setUint8(aOff + 11, unpacked.attacks.pp[3]);

  // Pack EVs
  const eOff = slotE * 12;
  view.setUint8(eOff + 0, unpacked.evs.hpEV);
  view.setUint8(eOff + 1, unpacked.evs.attackEV);
  view.setUint8(eOff + 2, unpacked.evs.defenseEV);
  view.setUint8(eOff + 3, unpacked.evs.speedEV);
  view.setUint8(eOff + 4, unpacked.evs.spAttackEV);
  view.setUint8(eOff + 5, unpacked.evs.spDefenseEV);
  view.setUint8(eOff + 6, unpacked.evs.cool);
  view.setUint8(eOff + 7, unpacked.evs.beauty);
  view.setUint8(eOff + 8, unpacked.evs.cute);
  view.setUint8(eOff + 9, unpacked.evs.smart);
  view.setUint8(eOff + 10, unpacked.evs.tough);
  view.setUint8(eOff + 11, unpacked.evs.sheen);

  // Pack Misc
  const mOff = slotM * 12;
  view.setUint8(mOff + 0, unpacked.misc.pokerus);
  view.setUint8(mOff + 1, unpacked.misc.metLocation);

  const origins =
    (unpacked.misc.metLevel & 0x7F) |
    ((unpacked.misc.metGame & 0x0F) << 7) |
    ((unpacked.misc.pokeball & 0x0F) << 11) |
    ((unpacked.misc.otGender & 0x01) << 15);
  view.setUint16(mOff + 2, origins, true);

  const ivWord =
    (unpacked.misc.hpIV & 0x1F) |
    ((unpacked.misc.attackIV & 0x1F) << 5) |
    ((unpacked.misc.defenseIV & 0x1F) << 10) |
    ((unpacked.misc.speedIV & 0x1F) << 15) |
    ((unpacked.misc.spAttackIV & 0x1F) << 20) |
    ((unpacked.misc.spDefenseIV & 0x1F) << 25) |
    ((unpacked.misc.isEgg ? 1 : 0) << 30) |
    ((unpacked.misc.abilityNum & 0x01) << 31);
  view.setUint32(mOff + 4, ivWord >>> 0, true);

  view.setUint32(mOff + 8, unpacked.misc.ribbons >>> 0, true);

  return result;
}
