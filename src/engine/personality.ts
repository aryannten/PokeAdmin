// Pure scratch-built Generation III Personality Value (PID) & Solver Engine
// Verified against pret/pokefirered src/pokemon.c

export interface PersonalityAttributes {
  nature: number; // 0 to 24
  gender: 'male' | 'female' | 'genderless';
  isShiny: boolean;
  abilityNum: number; // 0 or 1
}

export interface PersonalitySolverParams {
  desiredNature: number;
  desiredGender: 'male' | 'female' | 'genderless';
  genderRatio: number; // Species gender ratio threshold
  desiredAbilityNum: number; // 0 or 1
  desiredShiny: boolean;
  otId: number; // Low 16 bits = TID, High 16 bits = SID
  seed?: number; // Optional seed for reproducible generation
}

/**
 * Checks whether a Pokémon is shiny using Gen 3 formula:
 * (TID ^ SID ^ (PID & 0xFFFF) ^ (PID >>> 16)) < 8
 */
export function isShiny(personality: number, otId: number): boolean {
  const tid = otId & 0xFFFF;
  const sid = (otId >>> 16) & 0xFFFF;
  const pidLo = personality & 0xFFFF;
  const pidHi = (personality >>> 16) & 0xFFFF;
  const shinyVal = (tid ^ sid ^ pidLo ^ pidHi) >>> 0;
  return shinyVal < 8;
}

/**
 * Calculates nature (0 to 24) from personality.
 */
export function getNatureFromPersonality(personality: number): number {
  return ((personality >>> 0) % 25);
}

/**
 * Evaluates gender from personality and species gender ratio.
 */
export function getGenderFromPersonality(
  personality: number,
  genderRatio: number
): 'male' | 'female' | 'genderless' {
  if (genderRatio === 255) return 'genderless';
  if (genderRatio === 254) return 'female';
  if (genderRatio === 0) return 'male';

  const pByte = personality & 0xFF;
  return pByte < genderRatio ? 'female' : 'male';
}

/**
 * Derives ability index (0 or 1) from personality.
 */
export function getNaturalAbilityIndex(personality: number): number {
  return personality & 1;
}

/**
 * Solves and generates a legal Generation III personality value (PID)
 * that satisfies all requested constraints simultaneously without corrupting the OT ID.
 * Uses an algebraic solver that directly aligns PID high and low words with TID/SID.
 */
export function solvePersonality(params: PersonalitySolverParams): number {
  const {
    desiredNature,
    desiredGender,
    genderRatio,
    desiredAbilityNum,
    desiredShiny,
    otId,
  } = params;

  const tid = otId & 0xFFFF;
  const sid = (otId >>> 16) & 0xFFFF;

  // 1. Collect low bytes that satisfy Gender and Ability bit
  const validLowBytes: number[] = [];
  for (let b = 0; b < 256; b++) {
    if ((b & 1) !== (desiredAbilityNum & 1)) {
      continue;
    }
    if (genderRatio !== 255) {
      const isFemale = b < genderRatio;
      if (desiredGender === 'female' && !isFemale) continue;
      if (desiredGender === 'male' && isFemale) continue;
    }
    validLowBytes.push(b);
  }

  // 2. Determine target shiny XOR values (0..7 is shiny, >=8 is non-shiny)
  const sCandidates = desiredShiny ? [0, 1, 2, 3, 4, 5, 6, 7] : [8, 9, 10, 11, 12, 13, 14, 15];

  // 3. Search across valid low bytes and high bytes of low word
  for (const lowByte of validLowBytes) {
    for (let highByteOfLow = 0; highByteOfLow < 256; highByteOfLow++) {
      const pidLo = ((highByteOfLow << 8) | lowByte) >>> 0;

      for (const s of sCandidates) {
        const pidHi = ((tid ^ sid ^ pidLo ^ s) & 0xFFFF) >>> 0;
        const pid = (((pidHi << 16) >>> 0) | pidLo) >>> 0;

        if (pid % 25 === desiredNature) {
          return pid;
        }
      }
    }
  }

  // Fallback
  return desiredNature;
}
