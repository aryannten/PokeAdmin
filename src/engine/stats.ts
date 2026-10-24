// Pure scratch-built Generation III Experience and Stats Engine
// Verified against pret/pokefirered src/pokemon.c & Bulbapedia Gen 3 Experience Formulas

import { getNatureModifier, StatType } from '../data/natures.ts';

export type GrowthRate =
  | 'medium_fast'
  | 'erratic'
  | 'fluctuating'
  | 'medium_slow'
  | 'fast'
  | 'slow';

/**
 * Calculates the minimum experience required to reach a specific level.
 */
export function getExpAtLevel(level: number, growthRate: GrowthRate): number {
  const n = Math.max(1, Math.min(100, Math.floor(level)));
  if (n === 1) return 0;

  const n3 = n * n * n;

  switch (growthRate) {
    case 'medium_fast':
      return n3;

    case 'fast':
      return Math.floor((4 * n3) / 5);

    case 'slow':
      return Math.floor((5 * n3) / 4);

    case 'medium_slow': {
      const exp = Math.floor((6 * n3) / 5) - 15 * n * n + 100 * n - 140;
      return Math.max(0, exp);
    }

    case 'erratic': {
      if (n < 50) {
        return Math.floor((n3 * (100 - n)) / 50);
      } else if (n < 68) {
        return Math.floor((n3 * (150 - n)) / 100);
      } else if (n < 98) {
        return Math.floor((n3 * Math.floor((1911 - 10 * n) / 3)) / 500);
      } else {
        return Math.floor((n3 * (160 - n)) / 100);
      }
    }

    case 'fluctuating': {
      if (n < 15) {
        return Math.floor((n3 * (Math.floor((n + 1) / 3) + 24)) / 50);
      } else if (n < 36) {
        return Math.floor((n3 * (n + 14)) / 50);
      } else {
        return Math.floor((n3 * (Math.floor(n / 2) + 32)) / 50);
      }
    }
  }
}

/**
 * Computes level (1 to 100) from total experience points.
 */
export function getLevelFromExp(exp: number, growthRate: GrowthRate): number {
  if (exp <= 0) return 1;

  for (let lvl = 100; lvl >= 1; lvl--) {
    if (exp >= getExpAtLevel(lvl, growthRate)) {
      return lvl;
    }
  }
  return 1;
}

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  spAttack: number;
  spDefense: number;
}

export interface EVStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  spAttack: number;
  spDefense: number;
}

export interface IVStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  spAttack: number;
  spDefense: number;
}

export interface CalculatedStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  spAttack: number;
  spDefense: number;
}

/**
 * Calculates battle stats for a Pokémon at a given level, base stats, IVs, EVs, and nature.
 */
export function calculateStats(
  speciesId: number,
  base: BaseStats,
  ivs: IVStats,
  evs: EVStats,
  level: number,
  natureId: number
): CalculatedStats {
  // Shedinja (Internal ID 303, National Dex #292) is hardcoded to 1 HP in Gen 3.
  // Note: Internal ID 292 is Beautifly, which has standard HP.
  let hp = 1;
  if (speciesId !== 303) {
    hp = Math.floor(((2 * base.hp + ivs.hp + Math.floor(evs.hp / 4)) * level) / 100) + level + 10;
  }

  const calcStat = (statName: StatType, baseVal: number, ivVal: number, evVal: number): number => {
    const raw = Math.floor(((2 * baseVal + ivVal + Math.floor(evVal / 4)) * level) / 100) + 5;
    const natureMod = getNatureModifier(natureId, statName);
    return Math.floor(raw * natureMod);
  };

  return {
    hp,
    attack: calcStat('attack', base.attack, ivs.attack, evs.attack),
    defense: calcStat('defense', base.defense, ivs.defense, evs.defense),
    speed: calcStat('speed', base.speed, ivs.speed, evs.speed),
    spAttack: calcStat('spAttack', base.spAttack, ivs.spAttack, evs.spAttack),
    spDefense: calcStat('spDefense', base.spDefense, ivs.spDefense, evs.spDefense),
  };
}
