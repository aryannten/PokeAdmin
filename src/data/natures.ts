// Pure scratch-built Generation III Nature Registry
export type StatType = 'attack' | 'defense' | 'speed' | 'spAttack' | 'spDefense';

export interface NatureData {
  id: number;
  name: string;
  increasedStat: StatType | null;
  decreasedStat: StatType | null;
}

export const NATURES_REGISTRY: NatureData[] = [
  {
    "id": 0,
    "name": "Hardy",
    "increasedStat": null,
    "decreasedStat": null
  },
  {
    "id": 1,
    "name": "Lonely",
    "increasedStat": "attack",
    "decreasedStat": "defense"
  },
  {
    "id": 2,
    "name": "Brave",
    "increasedStat": "attack",
    "decreasedStat": "speed"
  },
  {
    "id": 3,
    "name": "Adamant",
    "increasedStat": "attack",
    "decreasedStat": "spAttack"
  },
  {
    "id": 4,
    "name": "Naughty",
    "increasedStat": "attack",
    "decreasedStat": "spDefense"
  },
  {
    "id": 5,
    "name": "Bold",
    "increasedStat": "defense",
    "decreasedStat": "attack"
  },
  {
    "id": 6,
    "name": "Docile",
    "increasedStat": null,
    "decreasedStat": null
  },
  {
    "id": 7,
    "name": "Relaxed",
    "increasedStat": "defense",
    "decreasedStat": "speed"
  },
  {
    "id": 8,
    "name": "Impish",
    "increasedStat": "defense",
    "decreasedStat": "spAttack"
  },
  {
    "id": 9,
    "name": "Lax",
    "increasedStat": "defense",
    "decreasedStat": "spDefense"
  },
  {
    "id": 10,
    "name": "Timid",
    "increasedStat": "speed",
    "decreasedStat": "attack"
  },
  {
    "id": 11,
    "name": "Hasty",
    "increasedStat": "speed",
    "decreasedStat": "defense"
  },
  {
    "id": 12,
    "name": "Serious",
    "increasedStat": null,
    "decreasedStat": null
  },
  {
    "id": 13,
    "name": "Jolly",
    "increasedStat": "speed",
    "decreasedStat": "spAttack"
  },
  {
    "id": 14,
    "name": "Naive",
    "increasedStat": "speed",
    "decreasedStat": "spDefense"
  },
  {
    "id": 15,
    "name": "Modest",
    "increasedStat": "spAttack",
    "decreasedStat": "attack"
  },
  {
    "id": 16,
    "name": "Mild",
    "increasedStat": "spAttack",
    "decreasedStat": "defense"
  },
  {
    "id": 17,
    "name": "Quiet",
    "increasedStat": "spAttack",
    "decreasedStat": "speed"
  },
  {
    "id": 18,
    "name": "Bashful",
    "increasedStat": null,
    "decreasedStat": null
  },
  {
    "id": 19,
    "name": "Rash",
    "increasedStat": "spAttack",
    "decreasedStat": "spDefense"
  },
  {
    "id": 20,
    "name": "Calm",
    "increasedStat": "spDefense",
    "decreasedStat": "attack"
  },
  {
    "id": 21,
    "name": "Gentle",
    "increasedStat": "spDefense",
    "decreasedStat": "defense"
  },
  {
    "id": 22,
    "name": "Sassy",
    "increasedStat": "spDefense",
    "decreasedStat": "speed"
  },
  {
    "id": 23,
    "name": "Careful",
    "increasedStat": "spDefense",
    "decreasedStat": "spAttack"
  },
  {
    "id": 24,
    "name": "Quirky",
    "increasedStat": null,
    "decreasedStat": null
  }
];

export const NATURES_BY_ID = new Map<number, NatureData>();
for (const n of NATURES_REGISTRY) {
  NATURES_BY_ID.set(n.id, n);
}

export function getNatureById(id: number): NatureData | undefined {
  return NATURES_BY_ID.get(id);
}

export function getNatureModifier(natureId: number, stat: StatType): number {
  const nature = NATURES_BY_ID.get(natureId);
  if (!nature) return 1.0;
  if (nature.increasedStat === stat && nature.decreasedStat === stat) return 1.0;
  if (nature.increasedStat === stat) return 1.1;
  if (nature.decreasedStat === stat) return 0.9;
  return 1.0;
}
