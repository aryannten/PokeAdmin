// Pure scratch-built Generation III Species Data Registry
// Verified against pret/pokefirered include/constants/species.h, pokedex.h, species_info.h

export interface SpeciesData {
  nationalDex: number; // 1 to 386
  internalId: number;  // 1 to 411 (game-internal species identifier)
  name: string;        // Display name
  internalKey: string; // e.g. "SPECIES_TREECKO"
  generation: 1 | 2 | 3;
  types: [string, string | null];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
  };
  genderRatio: number; // Threshold: 0=male, 254=female, 255=genderless, 31=12.5% F, 63=25% F, 127=50% F, 191=75% F
  growthRate: 'medium_fast' | 'erratic' | 'fluctuating' | 'medium_slow' | 'fast' | 'slow';
  expYield: number;
  friendship: number;
  catchRate: number;
  abilities: [string | null, string | null];
  obtainability: 'kanto_native' | 'johto_sevii' | 'trade_hoenn' | 'event_mythical';
  obtainabilityNote: string;
}

export const SPECIES_REGISTRY: SpeciesData[] = [
  {
    "nationalDex": 1,
    "internalId": 1,
    "name": "Bulbasaur",
    "internalKey": "SPECIES_BULBASAUR",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "speed": 45,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 64,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 2,
    "internalId": 2,
    "name": "Ivysaur",
    "internalKey": "SPECIES_IVYSAUR",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "speed": 60,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 141,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 3,
    "internalId": 3,
    "name": "Venusaur",
    "internalKey": "SPECIES_VENUSAUR",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "speed": 80,
      "spAttack": 100,
      "spDefense": 100
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 208,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 4,
    "internalId": 4,
    "name": "Charmander",
    "internalKey": "SPECIES_CHARMANDER",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "speed": 65,
      "spAttack": 60,
      "spDefense": 50
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 5,
    "internalId": 5,
    "name": "Charmeleon",
    "internalKey": "SPECIES_CHARMELEON",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "speed": 80,
      "spAttack": 80,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 142,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 6,
    "internalId": 6,
    "name": "Charizard",
    "internalKey": "SPECIES_CHARIZARD",
    "generation": 1,
    "types": [
      "Fire",
      "Flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "speed": 100,
      "spAttack": 109,
      "spDefense": 85
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 209,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 7,
    "internalId": 7,
    "name": "Squirtle",
    "internalKey": "SPECIES_SQUIRTLE",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "speed": 43,
      "spAttack": 50,
      "spDefense": 64
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 66,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 8,
    "internalId": 8,
    "name": "Wartortle",
    "internalKey": "SPECIES_WARTORTLE",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "speed": 58,
      "spAttack": 65,
      "spDefense": 80
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 143,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 9,
    "internalId": 9,
    "name": "Blastoise",
    "internalKey": "SPECIES_BLASTOISE",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "speed": 78,
      "spAttack": 85,
      "spDefense": 105
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 210,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 10,
    "internalId": 10,
    "name": "Caterpie",
    "internalKey": "SPECIES_CATERPIE",
    "generation": 1,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "speed": 45,
      "spAttack": 20,
      "spDefense": 20
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 53,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Shield Dust",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 11,
    "internalId": 11,
    "name": "Metapod",
    "internalKey": "SPECIES_METAPOD",
    "generation": 1,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "speed": 30,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 72,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 12,
    "internalId": 12,
    "name": "Butterfree",
    "internalKey": "SPECIES_BUTTERFREE",
    "generation": 1,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "speed": 70,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 160,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Compound Eyes",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 13,
    "internalId": 13,
    "name": "Weedle",
    "internalKey": "SPECIES_WEEDLE",
    "generation": 1,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "speed": 50,
      "spAttack": 20,
      "spDefense": 20
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 52,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Shield Dust",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 14,
    "internalId": 14,
    "name": "Kakuna",
    "internalKey": "SPECIES_KAKUNA",
    "generation": 1,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "speed": 35,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 71,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 15,
    "internalId": 15,
    "name": "Beedrill",
    "internalKey": "SPECIES_BEEDRILL",
    "generation": 1,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 40,
      "speed": 75,
      "spAttack": 45,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 159,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swarm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 16,
    "internalId": 16,
    "name": "Pidgey",
    "internalKey": "SPECIES_PIDGEY",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "speed": 56,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 55,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 17,
    "internalId": 17,
    "name": "Pidgeotto",
    "internalKey": "SPECIES_PIDGEOTTO",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "speed": 71,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 113,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 18,
    "internalId": 18,
    "name": "Pidgeot",
    "internalKey": "SPECIES_PIDGEOT",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "speed": 91,
      "spAttack": 70,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 172,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 19,
    "internalId": 19,
    "name": "Rattata",
    "internalKey": "SPECIES_RATTATA",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "speed": 72,
      "spAttack": 25,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 57,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Run Away",
      "Guts"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 20,
    "internalId": 20,
    "name": "Raticate",
    "internalKey": "SPECIES_RATICATE",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "speed": 97,
      "spAttack": 50,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 116,
    "friendship": 70,
    "catchRate": 127,
    "abilities": [
      "Run Away",
      "Guts"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 21,
    "internalId": 21,
    "name": "Spearow",
    "internalKey": "SPECIES_SPEAROW",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "speed": 70,
      "spAttack": 31,
      "spDefense": 31
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 58,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 22,
    "internalId": 22,
    "name": "Fearow",
    "internalKey": "SPECIES_FEAROW",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "speed": 100,
      "spAttack": 61,
      "spDefense": 61
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 162,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 23,
    "internalId": 23,
    "name": "Ekans",
    "internalKey": "SPECIES_EKANS",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "speed": 55,
      "spAttack": 40,
      "spDefense": 54
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 62,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Intimidate",
      "Shed Skin"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 24,
    "internalId": 24,
    "name": "Arbok",
    "internalKey": "SPECIES_ARBOK",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "speed": 80,
      "spAttack": 65,
      "spDefense": 79
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 147,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Intimidate",
      "Shed Skin"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 25,
    "internalId": 25,
    "name": "Pikachu",
    "internalKey": "SPECIES_PIKACHU",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 30,
      "speed": 90,
      "spAttack": 50,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 82,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 26,
    "internalId": 26,
    "name": "Raichu",
    "internalKey": "SPECIES_RAICHU",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "speed": 100,
      "spAttack": 90,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 122,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 27,
    "internalId": 27,
    "name": "Sandshrew",
    "internalKey": "SPECIES_SANDSHREW",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "speed": 40,
      "spAttack": 20,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 93,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Sand Veil",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 28,
    "internalId": 28,
    "name": "Sandslash",
    "internalKey": "SPECIES_SANDSLASH",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "speed": 65,
      "spAttack": 45,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 163,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Sand Veil",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 29,
    "internalId": 29,
    "name": "Nidoran\u2640",
    "internalKey": "SPECIES_NIDORAN_F",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "speed": 41,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 254,
    "growthRate": "medium_slow",
    "expYield": 59,
    "friendship": 70,
    "catchRate": 235,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 30,
    "internalId": 30,
    "name": "Nidorina",
    "internalKey": "SPECIES_NIDORINA",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "speed": 56,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 254,
    "growthRate": "medium_slow",
    "expYield": 117,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 31,
    "internalId": 31,
    "name": "Nidoqueen",
    "internalKey": "SPECIES_NIDOQUEEN",
    "generation": 1,
    "types": [
      "Poison",
      "Ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 82,
      "defense": 87,
      "speed": 76,
      "spAttack": 75,
      "spDefense": 85
    },
    "genderRatio": 254,
    "growthRate": "medium_slow",
    "expYield": 194,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 32,
    "internalId": 32,
    "name": "Nidoran\u2642",
    "internalKey": "SPECIES_NIDORAN_M",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "speed": 50,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 0,
    "growthRate": "medium_slow",
    "expYield": 60,
    "friendship": 70,
    "catchRate": 235,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 33,
    "internalId": 33,
    "name": "Nidorino",
    "internalKey": "SPECIES_NIDORINO",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "speed": 65,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 0,
    "growthRate": "medium_slow",
    "expYield": 118,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 34,
    "internalId": 34,
    "name": "Nidoking",
    "internalKey": "SPECIES_NIDOKING",
    "generation": 1,
    "types": [
      "Poison",
      "Ground"
    ],
    "baseStats": {
      "hp": 81,
      "attack": 92,
      "defense": 77,
      "speed": 85,
      "spAttack": 85,
      "spDefense": 75
    },
    "genderRatio": 0,
    "growthRate": "medium_slow",
    "expYield": 195,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 35,
    "internalId": 35,
    "name": "Clefairy",
    "internalKey": "SPECIES_CLEFAIRY",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "speed": 35,
      "spAttack": 60,
      "spDefense": 65
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 68,
    "friendship": 140,
    "catchRate": 150,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 36,
    "internalId": 36,
    "name": "Clefable",
    "internalKey": "SPECIES_CLEFABLE",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "speed": 60,
      "spAttack": 85,
      "spDefense": 90
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 129,
    "friendship": 140,
    "catchRate": 25,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 37,
    "internalId": 37,
    "name": "Vulpix",
    "internalKey": "SPECIES_VULPIX",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "speed": 65,
      "spAttack": 50,
      "spDefense": 65
    },
    "genderRatio": 191,
    "growthRate": "medium_fast",
    "expYield": 63,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Flash Fire",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 38,
    "internalId": 38,
    "name": "Ninetales",
    "internalKey": "SPECIES_NINETALES",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "speed": 100,
      "spAttack": 81,
      "spDefense": 100
    },
    "genderRatio": 191,
    "growthRate": "medium_fast",
    "expYield": 178,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Flash Fire",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 39,
    "internalId": 39,
    "name": "Jigglypuff",
    "internalKey": "SPECIES_JIGGLYPUFF",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "speed": 20,
      "spAttack": 45,
      "spDefense": 25
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 76,
    "friendship": 70,
    "catchRate": 170,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 40,
    "internalId": 40,
    "name": "Wigglytuff",
    "internalKey": "SPECIES_WIGGLYTUFF",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "speed": 45,
      "spAttack": 75,
      "spDefense": 50
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 109,
    "friendship": 70,
    "catchRate": 50,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 41,
    "internalId": 41,
    "name": "Zubat",
    "internalKey": "SPECIES_ZUBAT",
    "generation": 1,
    "types": [
      "Poison",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "speed": 55,
      "spAttack": 30,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 54,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 42,
    "internalId": 42,
    "name": "Golbat",
    "internalKey": "SPECIES_GOLBAT",
    "generation": 1,
    "types": [
      "Poison",
      "Flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "speed": 90,
      "spAttack": 65,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 171,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 43,
    "internalId": 43,
    "name": "Oddish",
    "internalKey": "SPECIES_ODDISH",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "speed": 30,
      "spAttack": 75,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 78,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 44,
    "internalId": 44,
    "name": "Gloom",
    "internalKey": "SPECIES_GLOOM",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "speed": 40,
      "spAttack": 85,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 132,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 45,
    "internalId": 45,
    "name": "Vileplume",
    "internalKey": "SPECIES_VILEPLUME",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "speed": 50,
      "spAttack": 100,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 184,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 46,
    "internalId": 46,
    "name": "Paras",
    "internalKey": "SPECIES_PARAS",
    "generation": 1,
    "types": [
      "Bug",
      "Grass"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "speed": 25,
      "spAttack": 45,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 70,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Effect Spore",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 47,
    "internalId": 47,
    "name": "Parasect",
    "internalKey": "SPECIES_PARASECT",
    "generation": 1,
    "types": [
      "Bug",
      "Grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "speed": 30,
      "spAttack": 60,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 128,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Effect Spore",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 48,
    "internalId": 48,
    "name": "Venonat",
    "internalKey": "SPECIES_VENONAT",
    "generation": 1,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "speed": 45,
      "spAttack": 40,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 75,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Compound Eyes",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 49,
    "internalId": 49,
    "name": "Venomoth",
    "internalKey": "SPECIES_VENOMOTH",
    "generation": 1,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "speed": 90,
      "spAttack": 90,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 138,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Shield Dust",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 50,
    "internalId": 50,
    "name": "Diglett",
    "internalKey": "SPECIES_DIGLETT",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "speed": 95,
      "spAttack": 35,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 81,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Sand Veil",
      "Arena Trap"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 51,
    "internalId": 51,
    "name": "Dugtrio",
    "internalKey": "SPECIES_DUGTRIO",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 80,
      "defense": 50,
      "speed": 120,
      "spAttack": 50,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 153,
    "friendship": 70,
    "catchRate": 50,
    "abilities": [
      "Sand Veil",
      "Arena Trap"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 52,
    "internalId": 52,
    "name": "Meowth",
    "internalKey": "SPECIES_MEOWTH",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "speed": 90,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 69,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Pickup",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 53,
    "internalId": 53,
    "name": "Persian",
    "internalKey": "SPECIES_PERSIAN",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "speed": 115,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 148,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Limber",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 54,
    "internalId": 54,
    "name": "Psyduck",
    "internalKey": "SPECIES_PSYDUCK",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "speed": 55,
      "spAttack": 65,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 80,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Damp",
      "Cloud Nine"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 55,
    "internalId": 55,
    "name": "Golduck",
    "internalKey": "SPECIES_GOLDUCK",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "speed": 85,
      "spAttack": 95,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 174,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Damp",
      "Cloud Nine"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 56,
    "internalId": 56,
    "name": "Mankey",
    "internalKey": "SPECIES_MANKEY",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "speed": 70,
      "spAttack": 35,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Vital Spirit",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 57,
    "internalId": 57,
    "name": "Primeape",
    "internalKey": "SPECIES_PRIMEAPE",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "speed": 95,
      "spAttack": 60,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 149,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Vital Spirit",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 58,
    "internalId": 58,
    "name": "Growlithe",
    "internalKey": "SPECIES_GROWLITHE",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "speed": 60,
      "spAttack": 70,
      "spDefense": 50
    },
    "genderRatio": 63,
    "growthRate": "slow",
    "expYield": 91,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Intimidate",
      "Flash Fire"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 59,
    "internalId": 59,
    "name": "Arcanine",
    "internalKey": "SPECIES_ARCANINE",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "speed": 95,
      "spAttack": 100,
      "spDefense": 80
    },
    "genderRatio": 63,
    "growthRate": "slow",
    "expYield": 213,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Intimidate",
      "Flash Fire"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 60,
    "internalId": 60,
    "name": "Poliwag",
    "internalKey": "SPECIES_POLIWAG",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "speed": 90,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 77,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Water Absorb",
      "Damp"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 61,
    "internalId": 61,
    "name": "Poliwhirl",
    "internalKey": "SPECIES_POLIWHIRL",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "speed": 90,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 131,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Water Absorb",
      "Damp"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 62,
    "internalId": 62,
    "name": "Poliwrath",
    "internalKey": "SPECIES_POLIWRATH",
    "generation": 1,
    "types": [
      "Water",
      "Fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 95,
      "speed": 70,
      "spAttack": 70,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 185,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Water Absorb",
      "Damp"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 63,
    "internalId": 63,
    "name": "Abra",
    "internalKey": "SPECIES_ABRA",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "speed": 90,
      "spAttack": 105,
      "spDefense": 55
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 73,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Synchronize",
      "Inner Focus"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 64,
    "internalId": 64,
    "name": "Kadabra",
    "internalKey": "SPECIES_KADABRA",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "speed": 105,
      "spAttack": 120,
      "spDefense": 70
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 145,
    "friendship": 70,
    "catchRate": 100,
    "abilities": [
      "Synchronize",
      "Inner Focus"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 65,
    "internalId": 65,
    "name": "Alakazam",
    "internalKey": "SPECIES_ALAKAZAM",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "speed": 120,
      "spAttack": 135,
      "spDefense": 85
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 186,
    "friendship": 70,
    "catchRate": 50,
    "abilities": [
      "Synchronize",
      "Inner Focus"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 66,
    "internalId": 66,
    "name": "Machop",
    "internalKey": "SPECIES_MACHOP",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "speed": 35,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 88,
    "friendship": 70,
    "catchRate": 180,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 67,
    "internalId": 67,
    "name": "Machoke",
    "internalKey": "SPECIES_MACHOKE",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "speed": 45,
      "spAttack": 50,
      "spDefense": 60
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 146,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 68,
    "internalId": 68,
    "name": "Machamp",
    "internalKey": "SPECIES_MACHAMP",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "speed": 55,
      "spAttack": 65,
      "spDefense": 85
    },
    "genderRatio": 63,
    "growthRate": "medium_slow",
    "expYield": 193,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 69,
    "internalId": 69,
    "name": "Bellsprout",
    "internalKey": "SPECIES_BELLSPROUT",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "speed": 40,
      "spAttack": 70,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 84,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 70,
    "internalId": 70,
    "name": "Weepinbell",
    "internalKey": "SPECIES_WEEPINBELL",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "speed": 55,
      "spAttack": 85,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 151,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 71,
    "internalId": 71,
    "name": "Victreebel",
    "internalKey": "SPECIES_VICTREEBEL",
    "generation": 1,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "speed": 70,
      "spAttack": 100,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 191,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 72,
    "internalId": 72,
    "name": "Tentacool",
    "internalKey": "SPECIES_TENTACOOL",
    "generation": 1,
    "types": [
      "Water",
      "Poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "speed": 70,
      "spAttack": 50,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 105,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Clear Body",
      "Liquid Ooze"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 73,
    "internalId": 73,
    "name": "Tentacruel",
    "internalKey": "SPECIES_TENTACRUEL",
    "generation": 1,
    "types": [
      "Water",
      "Poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "speed": 100,
      "spAttack": 80,
      "spDefense": 120
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 205,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Clear Body",
      "Liquid Ooze"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 74,
    "internalId": 74,
    "name": "Geodude",
    "internalKey": "SPECIES_GEODUDE",
    "generation": 1,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "speed": 20,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 86,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 75,
    "internalId": 75,
    "name": "Graveler",
    "internalKey": "SPECIES_GRAVELER",
    "generation": 1,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "speed": 35,
      "spAttack": 45,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 134,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 76,
    "internalId": 76,
    "name": "Golem",
    "internalKey": "SPECIES_GOLEM",
    "generation": 1,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 110,
      "defense": 130,
      "speed": 45,
      "spAttack": 55,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 177,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 77,
    "internalId": 77,
    "name": "Ponyta",
    "internalKey": "SPECIES_PONYTA",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "speed": 90,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 152,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Run Away",
      "Flash Fire"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 78,
    "internalId": 78,
    "name": "Rapidash",
    "internalKey": "SPECIES_RAPIDASH",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "speed": 105,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 192,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Run Away",
      "Flash Fire"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 79,
    "internalId": 79,
    "name": "Slowpoke",
    "internalKey": "SPECIES_SLOWPOKE",
    "generation": 1,
    "types": [
      "Water",
      "Psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "speed": 15,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 99,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 80,
    "internalId": 80,
    "name": "Slowbro",
    "internalKey": "SPECIES_SLOWBRO",
    "generation": 1,
    "types": [
      "Water",
      "Psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "speed": 30,
      "spAttack": 100,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 164,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 81,
    "internalId": 81,
    "name": "Magnemite",
    "internalKey": "SPECIES_MAGNEMITE",
    "generation": 1,
    "types": [
      "Electric",
      "Steel"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "speed": 45,
      "spAttack": 95,
      "spDefense": 55
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 89,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 82,
    "internalId": 82,
    "name": "Magneton",
    "internalKey": "SPECIES_MAGNETON",
    "generation": 1,
    "types": [
      "Electric",
      "Steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "speed": 70,
      "spAttack": 120,
      "spDefense": 70
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 161,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 83,
    "internalId": 83,
    "name": "Farfetchd",
    "internalKey": "SPECIES_FARFETCHD",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 65,
      "defense": 55,
      "speed": 60,
      "spAttack": 58,
      "spDefense": 62
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 94,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Keen Eye",
      "Inner Focus"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 84,
    "internalId": 84,
    "name": "Doduo",
    "internalKey": "SPECIES_DODUO",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "speed": 75,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 96,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Run Away",
      "Early Bird"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 85,
    "internalId": 85,
    "name": "Dodrio",
    "internalKey": "SPECIES_DODRIO",
    "generation": 1,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "speed": 100,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 158,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Run Away",
      "Early Bird"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 86,
    "internalId": 86,
    "name": "Seel",
    "internalKey": "SPECIES_SEEL",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "speed": 45,
      "spAttack": 45,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 100,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 87,
    "internalId": 87,
    "name": "Dewgong",
    "internalKey": "SPECIES_DEWGONG",
    "generation": 1,
    "types": [
      "Water",
      "Ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "speed": 70,
      "spAttack": 70,
      "spDefense": 95
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 176,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 88,
    "internalId": 88,
    "name": "Grimer",
    "internalKey": "SPECIES_GRIMER",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "speed": 25,
      "spAttack": 40,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 90,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Stench",
      "Sticky Hold"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 89,
    "internalId": 89,
    "name": "Muk",
    "internalKey": "SPECIES_MUK",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "speed": 50,
      "spAttack": 65,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 157,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Stench",
      "Sticky Hold"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 90,
    "internalId": 90,
    "name": "Shellder",
    "internalKey": "SPECIES_SHELLDER",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "speed": 40,
      "spAttack": 45,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 97,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Shell Armor",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 91,
    "internalId": 91,
    "name": "Cloyster",
    "internalKey": "SPECIES_CLOYSTER",
    "generation": 1,
    "types": [
      "Water",
      "Ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "speed": 70,
      "spAttack": 85,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 203,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Shell Armor",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 92,
    "internalId": 92,
    "name": "Gastly",
    "internalKey": "SPECIES_GASTLY",
    "generation": 1,
    "types": [
      "Ghost",
      "Poison"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "speed": 80,
      "spAttack": 100,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 95,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 93,
    "internalId": 93,
    "name": "Haunter",
    "internalKey": "SPECIES_HAUNTER",
    "generation": 1,
    "types": [
      "Ghost",
      "Poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "speed": 95,
      "spAttack": 115,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 126,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 94,
    "internalId": 94,
    "name": "Gengar",
    "internalKey": "SPECIES_GENGAR",
    "generation": 1,
    "types": [
      "Ghost",
      "Poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "speed": 110,
      "spAttack": 130,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 190,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 95,
    "internalId": 95,
    "name": "Onix",
    "internalKey": "SPECIES_ONIX",
    "generation": 1,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "speed": 70,
      "spAttack": 30,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 108,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 96,
    "internalId": 96,
    "name": "Drowzee",
    "internalKey": "SPECIES_DROWZEE",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "speed": 42,
      "spAttack": 43,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 102,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Insomnia",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 97,
    "internalId": 97,
    "name": "Hypno",
    "internalKey": "SPECIES_HYPNO",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "speed": 67,
      "spAttack": 73,
      "spDefense": 115
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 165,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Insomnia",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 98,
    "internalId": 98,
    "name": "Krabby",
    "internalKey": "SPECIES_KRABBY",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "speed": 50,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 115,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 99,
    "internalId": 99,
    "name": "Kingler",
    "internalKey": "SPECIES_KINGLER",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "speed": 75,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 206,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 100,
    "internalId": 100,
    "name": "Voltorb",
    "internalKey": "SPECIES_VOLTORB",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "speed": 100,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 103,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Soundproof",
      "Static"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 101,
    "internalId": 101,
    "name": "Electrode",
    "internalKey": "SPECIES_ELECTRODE",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "speed": 140,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 150,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Soundproof",
      "Static"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 102,
    "internalId": 102,
    "name": "Exeggcute",
    "internalKey": "SPECIES_EXEGGCUTE",
    "generation": 1,
    "types": [
      "Grass",
      "Psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "speed": 40,
      "spAttack": 60,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 98,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 103,
    "internalId": 103,
    "name": "Exeggutor",
    "internalKey": "SPECIES_EXEGGUTOR",
    "generation": 1,
    "types": [
      "Grass",
      "Psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "speed": 55,
      "spAttack": 125,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 212,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 104,
    "internalId": 104,
    "name": "Cubone",
    "internalKey": "SPECIES_CUBONE",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "speed": 35,
      "spAttack": 40,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 87,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Rock Head",
      "Lightning Rod"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 105,
    "internalId": 105,
    "name": "Marowak",
    "internalKey": "SPECIES_MAROWAK",
    "generation": 1,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "speed": 45,
      "spAttack": 50,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 124,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Rock Head",
      "Lightning Rod"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 106,
    "internalId": 106,
    "name": "Hitmonlee",
    "internalKey": "SPECIES_HITMONLEE",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "speed": 87,
      "spAttack": 35,
      "spDefense": 110
    },
    "genderRatio": 0,
    "growthRate": "medium_fast",
    "expYield": 139,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Limber",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 107,
    "internalId": 107,
    "name": "Hitmonchan",
    "internalKey": "SPECIES_HITMONCHAN",
    "generation": 1,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "speed": 76,
      "spAttack": 35,
      "spDefense": 110
    },
    "genderRatio": 0,
    "growthRate": "medium_fast",
    "expYield": 140,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 108,
    "internalId": 108,
    "name": "Lickitung",
    "internalKey": "SPECIES_LICKITUNG",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "speed": 30,
      "spAttack": 60,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 127,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Own Tempo",
      "Oblivious"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 109,
    "internalId": 109,
    "name": "Koffing",
    "internalKey": "SPECIES_KOFFING",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "speed": 35,
      "spAttack": 60,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 114,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 110,
    "internalId": 110,
    "name": "Weezing",
    "internalKey": "SPECIES_WEEZING",
    "generation": 1,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "speed": 60,
      "spAttack": 85,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 173,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 111,
    "internalId": 111,
    "name": "Rhyhorn",
    "internalKey": "SPECIES_RHYHORN",
    "generation": 1,
    "types": [
      "Ground",
      "Rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "speed": 25,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 135,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Lightning Rod",
      "Rock Head"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 112,
    "internalId": 112,
    "name": "Rhydon",
    "internalKey": "SPECIES_RHYDON",
    "generation": 1,
    "types": [
      "Ground",
      "Rock"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "speed": 40,
      "spAttack": 45,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 204,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Lightning Rod",
      "Rock Head"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 113,
    "internalId": 113,
    "name": "Chansey",
    "internalKey": "SPECIES_CHANSEY",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "speed": 50,
      "spAttack": 35,
      "spDefense": 105
    },
    "genderRatio": 254,
    "growthRate": "fast",
    "expYield": 255,
    "friendship": 140,
    "catchRate": 30,
    "abilities": [
      "Natural Cure",
      "Serene Grace"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 114,
    "internalId": 114,
    "name": "Tangela",
    "internalKey": "SPECIES_TANGELA",
    "generation": 1,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "speed": 60,
      "spAttack": 100,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 166,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 115,
    "internalId": 115,
    "name": "Kangaskhan",
    "internalKey": "SPECIES_KANGASKHAN",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "speed": 90,
      "spAttack": 40,
      "spDefense": 80
    },
    "genderRatio": 254,
    "growthRate": "medium_fast",
    "expYield": 175,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Early Bird",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 116,
    "internalId": 116,
    "name": "Horsea",
    "internalKey": "SPECIES_HORSEA",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "speed": 60,
      "spAttack": 70,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 83,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 117,
    "internalId": 117,
    "name": "Seadra",
    "internalKey": "SPECIES_SEADRA",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "speed": 85,
      "spAttack": 95,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 155,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Poison Point",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 118,
    "internalId": 118,
    "name": "Goldeen",
    "internalKey": "SPECIES_GOLDEEN",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "speed": 63,
      "spAttack": 35,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 111,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Swift Swim",
      "Water Veil"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 119,
    "internalId": 119,
    "name": "Seaking",
    "internalKey": "SPECIES_SEAKING",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "speed": 68,
      "spAttack": 65,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 170,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Swift Swim",
      "Water Veil"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 120,
    "internalId": 120,
    "name": "Staryu",
    "internalKey": "SPECIES_STARYU",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "speed": 85,
      "spAttack": 70,
      "spDefense": 55
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 106,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Illuminate",
      "Natural Cure"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 121,
    "internalId": 121,
    "name": "Starmie",
    "internalKey": "SPECIES_STARMIE",
    "generation": 1,
    "types": [
      "Water",
      "Psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "speed": 115,
      "spAttack": 100,
      "spDefense": 85
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 207,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Illuminate",
      "Natural Cure"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 122,
    "internalId": 122,
    "name": "Mr. Mime",
    "internalKey": "SPECIES_MR_MIME",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "speed": 90,
      "spAttack": 100,
      "spDefense": 120
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 136,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Soundproof",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 123,
    "internalId": 123,
    "name": "Scyther",
    "internalKey": "SPECIES_SCYTHER",
    "generation": 1,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "speed": 105,
      "spAttack": 55,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 187,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swarm",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 124,
    "internalId": 124,
    "name": "Jynx",
    "internalKey": "SPECIES_JYNX",
    "generation": 1,
    "types": [
      "Ice",
      "Psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "speed": 95,
      "spAttack": 115,
      "spDefense": 95
    },
    "genderRatio": 254,
    "growthRate": "medium_fast",
    "expYield": 137,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 125,
    "internalId": 125,
    "name": "Electabuzz",
    "internalKey": "SPECIES_ELECTABUZZ",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "speed": 105,
      "spAttack": 95,
      "spDefense": 85
    },
    "genderRatio": 63,
    "growthRate": "medium_fast",
    "expYield": 156,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 126,
    "internalId": 126,
    "name": "Magmar",
    "internalKey": "SPECIES_MAGMAR",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "speed": 93,
      "spAttack": 100,
      "spDefense": 85
    },
    "genderRatio": 63,
    "growthRate": "medium_fast",
    "expYield": 167,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Flame Body",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 127,
    "internalId": 127,
    "name": "Pinsir",
    "internalKey": "SPECIES_PINSIR",
    "generation": 1,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "speed": 85,
      "spAttack": 55,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 200,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Hyper Cutter",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 128,
    "internalId": 128,
    "name": "Tauros",
    "internalKey": "SPECIES_TAUROS",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "speed": 110,
      "spAttack": 40,
      "spDefense": 70
    },
    "genderRatio": 0,
    "growthRate": "slow",
    "expYield": 211,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 129,
    "internalId": 129,
    "name": "Magikarp",
    "internalKey": "SPECIES_MAGIKARP",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "speed": 80,
      "spAttack": 15,
      "spDefense": 20
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 20,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 130,
    "internalId": 130,
    "name": "Gyarados",
    "internalKey": "SPECIES_GYARADOS",
    "generation": 1,
    "types": [
      "Water",
      "Flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "speed": 81,
      "spAttack": 60,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 214,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 131,
    "internalId": 131,
    "name": "Lapras",
    "internalKey": "SPECIES_LAPRAS",
    "generation": 1,
    "types": [
      "Water",
      "Ice"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "speed": 60,
      "spAttack": 85,
      "spDefense": 95
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 219,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Water Absorb",
      "Shell Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 132,
    "internalId": 132,
    "name": "Ditto",
    "internalKey": "SPECIES_DITTO",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "speed": 48,
      "spAttack": 48,
      "spDefense": 48
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 61,
    "friendship": 70,
    "catchRate": 35,
    "abilities": [
      "Limber",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 133,
    "internalId": 133,
    "name": "Eevee",
    "internalKey": "SPECIES_EEVEE",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "speed": 55,
      "spAttack": 45,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 92,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Run Away",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 134,
    "internalId": 134,
    "name": "Vaporeon",
    "internalKey": "SPECIES_VAPOREON",
    "generation": 1,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "speed": 65,
      "spAttack": 110,
      "spDefense": 95
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 196,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Water Absorb",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 135,
    "internalId": 135,
    "name": "Jolteon",
    "internalKey": "SPECIES_JOLTEON",
    "generation": 1,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "speed": 130,
      "spAttack": 110,
      "spDefense": 95
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 197,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Volt Absorb",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 136,
    "internalId": 136,
    "name": "Flareon",
    "internalKey": "SPECIES_FLAREON",
    "generation": 1,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "speed": 65,
      "spAttack": 95,
      "spDefense": 110
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 198,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Flash Fire",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 137,
    "internalId": 137,
    "name": "Porygon",
    "internalKey": "SPECIES_PORYGON",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "speed": 40,
      "spAttack": 85,
      "spDefense": 75
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 130,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Trace",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 138,
    "internalId": 138,
    "name": "Omanyte",
    "internalKey": "SPECIES_OMANYTE",
    "generation": 1,
    "types": [
      "Rock",
      "Water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "speed": 35,
      "spAttack": 90,
      "spDefense": 55
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 120,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      "Shell Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 139,
    "internalId": 139,
    "name": "Omastar",
    "internalKey": "SPECIES_OMASTAR",
    "generation": 1,
    "types": [
      "Rock",
      "Water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "speed": 55,
      "spAttack": 115,
      "spDefense": 70
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 199,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      "Shell Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 140,
    "internalId": 140,
    "name": "Kabuto",
    "internalKey": "SPECIES_KABUTO",
    "generation": 1,
    "types": [
      "Rock",
      "Water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "speed": 55,
      "spAttack": 55,
      "spDefense": 45
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 119,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      "Battle Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 141,
    "internalId": 141,
    "name": "Kabutops",
    "internalKey": "SPECIES_KABUTOPS",
    "generation": 1,
    "types": [
      "Rock",
      "Water"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "speed": 80,
      "spAttack": 65,
      "spDefense": 70
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 201,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      "Battle Armor"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 142,
    "internalId": 142,
    "name": "Aerodactyl",
    "internalKey": "SPECIES_AERODACTYL",
    "generation": 1,
    "types": [
      "Rock",
      "Flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "speed": 130,
      "spAttack": 60,
      "spDefense": 75
    },
    "genderRatio": 31,
    "growthRate": "slow",
    "expYield": 202,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Rock Head",
      "Pressure"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 143,
    "internalId": 143,
    "name": "Snorlax",
    "internalKey": "SPECIES_SNORLAX",
    "generation": 1,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "speed": 30,
      "spAttack": 65,
      "spDefense": 110
    },
    "genderRatio": 31,
    "growthRate": "slow",
    "expYield": 154,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Immunity",
      "Thick Fat"
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 144,
    "internalId": 144,
    "name": "Articuno",
    "internalKey": "SPECIES_ARTICUNO",
    "generation": 1,
    "types": [
      "Ice",
      "Flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "speed": 85,
      "spAttack": 95,
      "spDefense": 125
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 215,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 145,
    "internalId": 145,
    "name": "Zapdos",
    "internalKey": "SPECIES_ZAPDOS",
    "generation": 1,
    "types": [
      "Electric",
      "Flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "speed": 100,
      "spAttack": 125,
      "spDefense": 90
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 216,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 146,
    "internalId": 146,
    "name": "Moltres",
    "internalKey": "SPECIES_MOLTRES",
    "generation": 1,
    "types": [
      "Fire",
      "Flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "speed": 90,
      "spAttack": 125,
      "spDefense": 85
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 217,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 147,
    "internalId": 147,
    "name": "Dratini",
    "internalKey": "SPECIES_DRATINI",
    "generation": 1,
    "types": [
      "Dragon",
      null
    ],
    "baseStats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "speed": 50,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 67,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 148,
    "internalId": 148,
    "name": "Dragonair",
    "internalKey": "SPECIES_DRAGONAIR",
    "generation": 1,
    "types": [
      "Dragon",
      null
    ],
    "baseStats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "speed": 70,
      "spAttack": 70,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 144,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 149,
    "internalId": 149,
    "name": "Dragonite",
    "internalKey": "SPECIES_DRAGONITE",
    "generation": 1,
    "types": [
      "Dragon",
      "Flying"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "speed": 80,
      "spAttack": 100,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 218,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 150,
    "internalId": 150,
    "name": "Mewtwo",
    "internalKey": "SPECIES_MEWTWO",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "speed": 130,
      "spAttack": 154,
      "spDefense": 90
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 220,
    "friendship": 0,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "kanto_native",
    "obtainabilityNote": "Native to Kanto / FireRed campaign"
  },
  {
    "nationalDex": 151,
    "internalId": 151,
    "name": "Mew",
    "internalKey": "SPECIES_MEW",
    "generation": 1,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "speed": 100,
      "spAttack": 100,
      "spDefense": 100
    },
    "genderRatio": 255,
    "growthRate": "medium_slow",
    "expYield": 64,
    "friendship": 100,
    "catchRate": 45,
    "abilities": [
      "Synchronize",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Mythical event distribution only (unobtainable in normal wild FireRed)"
  },
  {
    "nationalDex": 152,
    "internalId": 152,
    "name": "Chikorita",
    "internalKey": "SPECIES_CHIKORITA",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "speed": 45,
      "spAttack": 49,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 64,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 153,
    "internalId": 153,
    "name": "Bayleef",
    "internalKey": "SPECIES_BAYLEEF",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "speed": 60,
      "spAttack": 63,
      "spDefense": 80
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 141,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 154,
    "internalId": 154,
    "name": "Meganium",
    "internalKey": "SPECIES_MEGANIUM",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "speed": 80,
      "spAttack": 83,
      "spDefense": 100
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 208,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 155,
    "internalId": 155,
    "name": "Cyndaquil",
    "internalKey": "SPECIES_CYNDAQUIL",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "speed": 65,
      "spAttack": 60,
      "spDefense": 50
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 156,
    "internalId": 156,
    "name": "Quilava",
    "internalKey": "SPECIES_QUILAVA",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "speed": 80,
      "spAttack": 80,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 142,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 157,
    "internalId": 157,
    "name": "Typhlosion",
    "internalKey": "SPECIES_TYPHLOSION",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "speed": 100,
      "spAttack": 109,
      "spDefense": 85
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 209,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 158,
    "internalId": 158,
    "name": "Totodile",
    "internalKey": "SPECIES_TOTODILE",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "speed": 43,
      "spAttack": 44,
      "spDefense": 48
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 66,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 159,
    "internalId": 159,
    "name": "Croconaw",
    "internalKey": "SPECIES_CROCONAW",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "speed": 58,
      "spAttack": 59,
      "spDefense": 63
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 143,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 160,
    "internalId": 160,
    "name": "Feraligatr",
    "internalKey": "SPECIES_FERALIGATR",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "speed": 78,
      "spAttack": 79,
      "spDefense": 83
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 210,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Johto starter; requires trade or Emerald post-game completion"
  },
  {
    "nationalDex": 161,
    "internalId": 161,
    "name": "Sentret",
    "internalKey": "SPECIES_SENTRET",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "speed": 20,
      "spAttack": 35,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 57,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Run Away",
      "Keen Eye"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 162,
    "internalId": 162,
    "name": "Furret",
    "internalKey": "SPECIES_FURRET",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "speed": 90,
      "spAttack": 45,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 116,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Run Away",
      "Keen Eye"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 163,
    "internalId": 163,
    "name": "Hoothoot",
    "internalKey": "SPECIES_HOOTHOOT",
    "generation": 2,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "speed": 50,
      "spAttack": 36,
      "spDefense": 56
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 58,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Insomnia",
      "Keen Eye"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 164,
    "internalId": 164,
    "name": "Noctowl",
    "internalKey": "SPECIES_NOCTOWL",
    "generation": 2,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "speed": 70,
      "spAttack": 76,
      "spDefense": 96
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 162,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Insomnia",
      "Keen Eye"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 165,
    "internalId": 165,
    "name": "Ledyba",
    "internalKey": "SPECIES_LEDYBA",
    "generation": 2,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "speed": 55,
      "spAttack": 40,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 54,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Swarm",
      "Early Bird"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 166,
    "internalId": 166,
    "name": "Ledian",
    "internalKey": "SPECIES_LEDIAN",
    "generation": 2,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "speed": 85,
      "spAttack": 55,
      "spDefense": 110
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 134,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Swarm",
      "Early Bird"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 167,
    "internalId": 167,
    "name": "Spinarak",
    "internalKey": "SPECIES_SPINARAK",
    "generation": 2,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "speed": 30,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 54,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Swarm",
      "Insomnia"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 168,
    "internalId": 168,
    "name": "Ariados",
    "internalKey": "SPECIES_ARIADOS",
    "generation": 2,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "speed": 40,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 134,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Swarm",
      "Insomnia"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 169,
    "internalId": 169,
    "name": "Crobat",
    "internalKey": "SPECIES_CROBAT",
    "generation": 2,
    "types": [
      "Poison",
      "Flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "speed": 130,
      "spAttack": 70,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 204,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 170,
    "internalId": 170,
    "name": "Chinchou",
    "internalKey": "SPECIES_CHINCHOU",
    "generation": 2,
    "types": [
      "Water",
      "Electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "speed": 67,
      "spAttack": 56,
      "spDefense": 56
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 90,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Volt Absorb",
      "Illuminate"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 171,
    "internalId": 171,
    "name": "Lanturn",
    "internalKey": "SPECIES_LANTURN",
    "generation": 2,
    "types": [
      "Water",
      "Electric"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "speed": 67,
      "spAttack": 76,
      "spDefense": 76
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 156,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Volt Absorb",
      "Illuminate"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 172,
    "internalId": 172,
    "name": "Pichu",
    "internalKey": "SPECIES_PICHU",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "speed": 60,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 42,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 173,
    "internalId": 173,
    "name": "Cleffa",
    "internalKey": "SPECIES_CLEFFA",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "speed": 15,
      "spAttack": 45,
      "spDefense": 55
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 37,
    "friendship": 140,
    "catchRate": 150,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 174,
    "internalId": 174,
    "name": "Igglybuff",
    "internalKey": "SPECIES_IGGLYBUFF",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "speed": 15,
      "spAttack": 40,
      "spDefense": 20
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 39,
    "friendship": 70,
    "catchRate": 170,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 175,
    "internalId": 175,
    "name": "Togepi",
    "internalKey": "SPECIES_TOGEPI",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "speed": 20,
      "spAttack": 40,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "fast",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Hustle",
      "Serene Grace"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 176,
    "internalId": 176,
    "name": "Togetic",
    "internalKey": "SPECIES_TOGETIC",
    "generation": 2,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "speed": 40,
      "spAttack": 80,
      "spDefense": 105
    },
    "genderRatio": 31,
    "growthRate": "fast",
    "expYield": 114,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Hustle",
      "Serene Grace"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 177,
    "internalId": 177,
    "name": "Natu",
    "internalKey": "SPECIES_NATU",
    "generation": 2,
    "types": [
      "Psychic",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "speed": 70,
      "spAttack": 70,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 73,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Synchronize",
      "Early Bird"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 178,
    "internalId": 178,
    "name": "Xatu",
    "internalKey": "SPECIES_XATU",
    "generation": 2,
    "types": [
      "Psychic",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "speed": 95,
      "spAttack": 95,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 171,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Synchronize",
      "Early Bird"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 179,
    "internalId": 179,
    "name": "Mareep",
    "internalKey": "SPECIES_MAREEP",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "speed": 35,
      "spAttack": 65,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 59,
    "friendship": 70,
    "catchRate": 235,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 180,
    "internalId": 180,
    "name": "Flaaffy",
    "internalKey": "SPECIES_FLAAFFY",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "speed": 45,
      "spAttack": 80,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 117,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 181,
    "internalId": 181,
    "name": "Ampharos",
    "internalKey": "SPECIES_AMPHAROS",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "speed": 55,
      "spAttack": 115,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 194,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 182,
    "internalId": 182,
    "name": "Bellossom",
    "internalKey": "SPECIES_BELLOSSOM",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "speed": 50,
      "spAttack": 90,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 184,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 183,
    "internalId": 183,
    "name": "Marill",
    "internalKey": "SPECIES_MARILL",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "speed": 40,
      "spAttack": 20,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 58,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Thick Fat",
      "Huge Power"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 184,
    "internalId": 184,
    "name": "Azumarill",
    "internalKey": "SPECIES_AZUMARILL",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "speed": 50,
      "spAttack": 50,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 153,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Thick Fat",
      "Huge Power"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 185,
    "internalId": 185,
    "name": "Sudowoodo",
    "internalKey": "SPECIES_SUDOWOODO",
    "generation": 2,
    "types": [
      "Rock",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "speed": 30,
      "spAttack": 30,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 135,
    "friendship": 70,
    "catchRate": 65,
    "abilities": [
      "Sturdy",
      "Rock Head"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 186,
    "internalId": 186,
    "name": "Politoed",
    "internalKey": "SPECIES_POLITOED",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "speed": 70,
      "spAttack": 90,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 185,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Water Absorb",
      "Damp"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 187,
    "internalId": 187,
    "name": "Hoppip",
    "internalKey": "SPECIES_HOPPIP",
    "generation": 2,
    "types": [
      "Grass",
      "Flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "speed": 50,
      "spAttack": 35,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 188,
    "internalId": 188,
    "name": "Skiploom",
    "internalKey": "SPECIES_SKIPLOOM",
    "generation": 2,
    "types": [
      "Grass",
      "Flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "speed": 80,
      "spAttack": 45,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 136,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 189,
    "internalId": 189,
    "name": "Jumpluff",
    "internalKey": "SPECIES_JUMPLUFF",
    "generation": 2,
    "types": [
      "Grass",
      "Flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "speed": 110,
      "spAttack": 55,
      "spDefense": 85
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 176,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 190,
    "internalId": 190,
    "name": "Aipom",
    "internalKey": "SPECIES_AIPOM",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "speed": 85,
      "spAttack": 40,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 94,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Run Away",
      "Pickup"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 191,
    "internalId": 191,
    "name": "Sunkern",
    "internalKey": "SPECIES_SUNKERN",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "speed": 30,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 52,
    "friendship": 70,
    "catchRate": 235,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 192,
    "internalId": 192,
    "name": "Sunflora",
    "internalKey": "SPECIES_SUNFLORA",
    "generation": 2,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "speed": 30,
      "spAttack": 105,
      "spDefense": 85
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 146,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 193,
    "internalId": 193,
    "name": "Yanma",
    "internalKey": "SPECIES_YANMA",
    "generation": 2,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "speed": 95,
      "spAttack": 75,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 147,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Speed Boost",
      "Compound Eyes"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 194,
    "internalId": 194,
    "name": "Wooper",
    "internalKey": "SPECIES_WOOPER",
    "generation": 2,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "speed": 15,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 52,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 195,
    "internalId": 195,
    "name": "Quagsire",
    "internalKey": "SPECIES_QUAGSIRE",
    "generation": 2,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "speed": 35,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 137,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 196,
    "internalId": 196,
    "name": "Espeon",
    "internalKey": "SPECIES_ESPEON",
    "generation": 2,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "speed": 110,
      "spAttack": 130,
      "spDefense": 95
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 197,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Synchronize",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 197,
    "internalId": 197,
    "name": "Umbreon",
    "internalKey": "SPECIES_UMBREON",
    "generation": 2,
    "types": [
      "Dark",
      null
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "speed": 65,
      "spAttack": 60,
      "spDefense": 130
    },
    "genderRatio": 31,
    "growthRate": "medium_fast",
    "expYield": 197,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Synchronize",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 198,
    "internalId": 198,
    "name": "Murkrow",
    "internalKey": "SPECIES_MURKROW",
    "generation": 2,
    "types": [
      "Dark",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "speed": 91,
      "spAttack": 85,
      "spDefense": 42
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 107,
    "friendship": 35,
    "catchRate": 30,
    "abilities": [
      "Insomnia",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 199,
    "internalId": 199,
    "name": "Slowking",
    "internalKey": "SPECIES_SLOWKING",
    "generation": 2,
    "types": [
      "Water",
      "Psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "speed": 30,
      "spAttack": 100,
      "spDefense": 110
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 164,
    "friendship": 70,
    "catchRate": 70,
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 200,
    "internalId": 200,
    "name": "Misdreavus",
    "internalKey": "SPECIES_MISDREAVUS",
    "generation": 2,
    "types": [
      "Ghost",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "speed": 85,
      "spAttack": 85,
      "spDefense": 85
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 147,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 201,
    "internalId": 201,
    "name": "Unown",
    "internalKey": "SPECIES_UNOWN",
    "generation": 2,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "speed": 48,
      "spAttack": 72,
      "spDefense": 48
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 61,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 202,
    "internalId": 202,
    "name": "Wobbuffet",
    "internalKey": "SPECIES_WOBBUFFET",
    "generation": 2,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "speed": 33,
      "spAttack": 33,
      "spDefense": 58
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 177,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Shadow Tag",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 203,
    "internalId": 203,
    "name": "Girafarig",
    "internalKey": "SPECIES_GIRAFARIG",
    "generation": 2,
    "types": [
      "Normal",
      "Psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "speed": 85,
      "spAttack": 90,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 149,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Inner Focus",
      "Early Bird"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 204,
    "internalId": 204,
    "name": "Pineco",
    "internalKey": "SPECIES_PINECO",
    "generation": 2,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "speed": 15,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 60,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Sturdy",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 205,
    "internalId": 205,
    "name": "Forretress",
    "internalKey": "SPECIES_FORRETRESS",
    "generation": 2,
    "types": [
      "Bug",
      "Steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "speed": 40,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 118,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Sturdy",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 206,
    "internalId": 206,
    "name": "Dunsparce",
    "internalKey": "SPECIES_DUNSPARCE",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "speed": 45,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 75,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Serene Grace",
      "Run Away"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 207,
    "internalId": 207,
    "name": "Gligar",
    "internalKey": "SPECIES_GLIGAR",
    "generation": 2,
    "types": [
      "Ground",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "speed": 85,
      "spAttack": 35,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 108,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Hyper Cutter",
      "Sand Veil"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 208,
    "internalId": 208,
    "name": "Steelix",
    "internalKey": "SPECIES_STEELIX",
    "generation": 2,
    "types": [
      "Steel",
      "Ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "speed": 30,
      "spAttack": 55,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 196,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 209,
    "internalId": 209,
    "name": "Snubbull",
    "internalKey": "SPECIES_SNUBBULL",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "speed": 30,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 63,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Intimidate",
      "Run Away"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 210,
    "internalId": 210,
    "name": "Granbull",
    "internalKey": "SPECIES_GRANBULL",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "speed": 45,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 178,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 211,
    "internalId": 211,
    "name": "Qwilfish",
    "internalKey": "SPECIES_QWILFISH",
    "generation": 2,
    "types": [
      "Water",
      "Poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 75,
      "speed": 85,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 100,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Poison Point",
      "Swift Swim"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 212,
    "internalId": 212,
    "name": "Scizor",
    "internalKey": "SPECIES_SCIZOR",
    "generation": 2,
    "types": [
      "Bug",
      "Steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "speed": 65,
      "spAttack": 55,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 200,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Swarm",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 213,
    "internalId": 213,
    "name": "Shuckle",
    "internalKey": "SPECIES_SHUCKLE",
    "generation": 2,
    "types": [
      "Bug",
      "Rock"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "speed": 5,
      "spAttack": 10,
      "spDefense": 230
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 80,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Sturdy",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 214,
    "internalId": 214,
    "name": "Heracross",
    "internalKey": "SPECIES_HERACROSS",
    "generation": 2,
    "types": [
      "Bug",
      "Fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "speed": 85,
      "spAttack": 40,
      "spDefense": 95
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 200,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swarm",
      "Guts"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 215,
    "internalId": 215,
    "name": "Sneasel",
    "internalKey": "SPECIES_SNEASEL",
    "generation": 2,
    "types": [
      "Dark",
      "Ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "speed": 115,
      "spAttack": 35,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 132,
    "friendship": 35,
    "catchRate": 60,
    "abilities": [
      "Inner Focus",
      "Keen Eye"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 216,
    "internalId": 216,
    "name": "Teddiursa",
    "internalKey": "SPECIES_TEDDIURSA",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "speed": 40,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 124,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Pickup",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 217,
    "internalId": 217,
    "name": "Ursaring",
    "internalKey": "SPECIES_URSARING",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "speed": 55,
      "spAttack": 75,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 189,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 218,
    "internalId": 218,
    "name": "Slugma",
    "internalKey": "SPECIES_SLUGMA",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "speed": 20,
      "spAttack": 70,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 78,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Magma Armor",
      "Flame Body"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 219,
    "internalId": 219,
    "name": "Magcargo",
    "internalKey": "SPECIES_MAGCARGO",
    "generation": 2,
    "types": [
      "Fire",
      "Rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 120,
      "speed": 30,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 154,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Magma Armor",
      "Flame Body"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 220,
    "internalId": 220,
    "name": "Swinub",
    "internalKey": "SPECIES_SWINUB",
    "generation": 2,
    "types": [
      "Ice",
      "Ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "speed": 50,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 78,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 221,
    "internalId": 221,
    "name": "Piloswine",
    "internalKey": "SPECIES_PILOSWINE",
    "generation": 2,
    "types": [
      "Ice",
      "Ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 160,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 222,
    "internalId": 222,
    "name": "Corsola",
    "internalKey": "SPECIES_CORSOLA",
    "generation": 2,
    "types": [
      "Water",
      "Rock"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 85,
      "speed": 35,
      "spAttack": 65,
      "spDefense": 85
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 113,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Hustle",
      "Natural Cure"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 223,
    "internalId": 223,
    "name": "Remoraid",
    "internalKey": "SPECIES_REMORAID",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "speed": 65,
      "spAttack": 65,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 78,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Hustle",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 224,
    "internalId": 224,
    "name": "Octillery",
    "internalKey": "SPECIES_OCTILLERY",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "speed": 45,
      "spAttack": 105,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 164,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Suction Cups",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 225,
    "internalId": 225,
    "name": "Delibird",
    "internalKey": "SPECIES_DELIBIRD",
    "generation": 2,
    "types": [
      "Ice",
      "Flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "speed": 75,
      "spAttack": 65,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 183,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Vital Spirit",
      "Hustle"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 226,
    "internalId": 226,
    "name": "Mantine",
    "internalKey": "SPECIES_MANTINE",
    "generation": 2,
    "types": [
      "Water",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 40,
      "defense": 70,
      "speed": 70,
      "spAttack": 80,
      "spDefense": 140
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 168,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Swift Swim",
      "Water Absorb"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 227,
    "internalId": 227,
    "name": "Skarmory",
    "internalKey": "SPECIES_SKARMORY",
    "generation": 2,
    "types": [
      "Steel",
      "Flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "speed": 70,
      "spAttack": 40,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 168,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Keen Eye",
      "Sturdy"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 228,
    "internalId": 228,
    "name": "Houndour",
    "internalKey": "SPECIES_HOUNDOUR",
    "generation": 2,
    "types": [
      "Dark",
      "Fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "speed": 65,
      "spAttack": 80,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 114,
    "friendship": 35,
    "catchRate": 120,
    "abilities": [
      "Early Bird",
      "Flash Fire"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 229,
    "internalId": 229,
    "name": "Houndoom",
    "internalKey": "SPECIES_HOUNDOOM",
    "generation": 2,
    "types": [
      "Dark",
      "Fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "speed": 95,
      "spAttack": 110,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 204,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Early Bird",
      "Flash Fire"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 230,
    "internalId": 230,
    "name": "Kingdra",
    "internalKey": "SPECIES_KINGDRA",
    "generation": 2,
    "types": [
      "Water",
      "Dragon"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "speed": 85,
      "spAttack": 95,
      "spDefense": 95
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 207,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 231,
    "internalId": 231,
    "name": "Phanpy",
    "internalKey": "SPECIES_PHANPY",
    "generation": 2,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "speed": 40,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 124,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Pickup",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 232,
    "internalId": 232,
    "name": "Donphan",
    "internalKey": "SPECIES_DONPHAN",
    "generation": 2,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 189,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Sturdy",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 233,
    "internalId": 233,
    "name": "Porygon2",
    "internalKey": "SPECIES_PORYGON2",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "speed": 60,
      "spAttack": 105,
      "spDefense": 95
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 180,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Trace",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 234,
    "internalId": 234,
    "name": "Stantler",
    "internalKey": "SPECIES_STANTLER",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "speed": 85,
      "spAttack": 85,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 165,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 235,
    "internalId": 235,
    "name": "Smeargle",
    "internalKey": "SPECIES_SMEARGLE",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "speed": 75,
      "spAttack": 20,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 106,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Own Tempo",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 236,
    "internalId": 236,
    "name": "Tyrogue",
    "internalKey": "SPECIES_TYROGUE",
    "generation": 2,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "speed": 35,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 0,
    "growthRate": "medium_fast",
    "expYield": 91,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 237,
    "internalId": 237,
    "name": "Hitmontop",
    "internalKey": "SPECIES_HITMONTOP",
    "generation": 2,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "speed": 70,
      "spAttack": 35,
      "spDefense": 110
    },
    "genderRatio": 0,
    "growthRate": "medium_fast",
    "expYield": 138,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 238,
    "internalId": 238,
    "name": "Smoochum",
    "internalKey": "SPECIES_SMOOCHUM",
    "generation": 2,
    "types": [
      "Ice",
      "Psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "speed": 65,
      "spAttack": 85,
      "spDefense": 65
    },
    "genderRatio": 254,
    "growthRate": "medium_fast",
    "expYield": 87,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 239,
    "internalId": 239,
    "name": "Elekid",
    "internalKey": "SPECIES_ELEKID",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "speed": 95,
      "spAttack": 65,
      "spDefense": 55
    },
    "genderRatio": 63,
    "growthRate": "medium_fast",
    "expYield": 106,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Static",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 240,
    "internalId": 240,
    "name": "Magby",
    "internalKey": "SPECIES_MAGBY",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "speed": 83,
      "spAttack": 70,
      "spDefense": 55
    },
    "genderRatio": 63,
    "growthRate": "medium_fast",
    "expYield": 117,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Flame Body",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 241,
    "internalId": 241,
    "name": "Miltank",
    "internalKey": "SPECIES_MILTANK",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "speed": 100,
      "spAttack": 40,
      "spDefense": 70
    },
    "genderRatio": 254,
    "growthRate": "slow",
    "expYield": 200,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 242,
    "internalId": 242,
    "name": "Blissey",
    "internalKey": "SPECIES_BLISSEY",
    "generation": 2,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "speed": 55,
      "spAttack": 75,
      "spDefense": 135
    },
    "genderRatio": 254,
    "growthRate": "fast",
    "expYield": 255,
    "friendship": 140,
    "catchRate": 30,
    "abilities": [
      "Natural Cure",
      "Serene Grace"
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 243,
    "internalId": 243,
    "name": "Raikou",
    "internalKey": "SPECIES_RAIKOU",
    "generation": 2,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "speed": 115,
      "spAttack": 115,
      "spDefense": 100
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 216,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 244,
    "internalId": 244,
    "name": "Entei",
    "internalKey": "SPECIES_ENTEI",
    "generation": 2,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "speed": 100,
      "spAttack": 90,
      "spDefense": 75
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 217,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 245,
    "internalId": 245,
    "name": "Suicune",
    "internalKey": "SPECIES_SUICUNE",
    "generation": 2,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "speed": 85,
      "spAttack": 90,
      "spDefense": 115
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 215,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 246,
    "internalId": 246,
    "name": "Larvitar",
    "internalKey": "SPECIES_LARVITAR",
    "generation": 2,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "speed": 41,
      "spAttack": 45,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 67,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 247,
    "internalId": 247,
    "name": "Pupitar",
    "internalKey": "SPECIES_PUPITAR",
    "generation": 2,
    "types": [
      "Rock",
      "Ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "speed": 51,
      "spAttack": 65,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 144,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 248,
    "internalId": 248,
    "name": "Tyranitar",
    "internalKey": "SPECIES_TYRANITAR",
    "generation": 2,
    "types": [
      "Rock",
      "Dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "speed": 61,
      "spAttack": 95,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 218,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Sand Stream",
      null
    ],
    "obtainability": "johto_sevii",
    "obtainabilityNote": "Available in Sevii Islands / Post-game or via National Dex evolution"
  },
  {
    "nationalDex": 249,
    "internalId": 249,
    "name": "Lugia",
    "internalKey": "SPECIES_LUGIA",
    "generation": 2,
    "types": [
      "Psychic",
      "Flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "speed": 110,
      "spAttack": 90,
      "spDefense": 154
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 220,
    "friendship": 0,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Navel Rock event via Mystic Ticket"
  },
  {
    "nationalDex": 250,
    "internalId": 250,
    "name": "Ho-Oh",
    "internalKey": "SPECIES_HO_OH",
    "generation": 2,
    "types": [
      "Fire",
      "Flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "speed": 90,
      "spAttack": 110,
      "spDefense": 154
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 220,
    "friendship": 0,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Navel Rock event via Mystic Ticket"
  },
  {
    "nationalDex": 251,
    "internalId": 251,
    "name": "Celebi",
    "internalKey": "SPECIES_CELEBI",
    "generation": 2,
    "types": [
      "Psychic",
      "Grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "speed": 100,
      "spAttack": 100,
      "spDefense": 100
    },
    "genderRatio": 255,
    "growthRate": "medium_slow",
    "expYield": 64,
    "friendship": 100,
    "catchRate": 45,
    "abilities": [
      "Natural Cure",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Mythical event distribution only (unobtainable in normal wild FireRed)"
  },
  {
    "nationalDex": 252,
    "internalId": 277,
    "name": "Treecko",
    "internalKey": "SPECIES_TREECKO",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "speed": 70,
      "spAttack": 65,
      "spDefense": 55
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 253,
    "internalId": 278,
    "name": "Grovyle",
    "internalKey": "SPECIES_GROVYLE",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "speed": 95,
      "spAttack": 85,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 141,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 254,
    "internalId": 279,
    "name": "Sceptile",
    "internalKey": "SPECIES_SCEPTILE",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "speed": 120,
      "spAttack": 105,
      "spDefense": 85
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 208,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Overgrow",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 255,
    "internalId": 280,
    "name": "Torchic",
    "internalKey": "SPECIES_TORCHIC",
    "generation": 3,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "speed": 45,
      "spAttack": 70,
      "spDefense": 50
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 256,
    "internalId": 281,
    "name": "Combusken",
    "internalKey": "SPECIES_COMBUSKEN",
    "generation": 3,
    "types": [
      "Fire",
      "Fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "speed": 55,
      "spAttack": 85,
      "spDefense": 60
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 142,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 257,
    "internalId": 282,
    "name": "Blaziken",
    "internalKey": "SPECIES_BLAZIKEN",
    "generation": 3,
    "types": [
      "Fire",
      "Fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "speed": 80,
      "spAttack": 110,
      "spDefense": 70
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 209,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Blaze",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 258,
    "internalId": 283,
    "name": "Mudkip",
    "internalKey": "SPECIES_MUDKIP",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "speed": 40,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 259,
    "internalId": 284,
    "name": "Marshtomp",
    "internalKey": "SPECIES_MARSHTOMP",
    "generation": 3,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 70
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 143,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 260,
    "internalId": 285,
    "name": "Swampert",
    "internalKey": "SPECIES_SWAMPERT",
    "generation": 3,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "speed": 60,
      "spAttack": 85,
      "spDefense": 90
    },
    "genderRatio": 31,
    "growthRate": "medium_slow",
    "expYield": 210,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Torrent",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 261,
    "internalId": 286,
    "name": "Poochyena",
    "internalKey": "SPECIES_POOCHYENA",
    "generation": 3,
    "types": [
      "Dark",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "speed": 35,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 55,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Run Away",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 262,
    "internalId": 287,
    "name": "Mightyena",
    "internalKey": "SPECIES_MIGHTYENA",
    "generation": 3,
    "types": [
      "Dark",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "speed": 70,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 128,
    "friendship": 70,
    "catchRate": 127,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 263,
    "internalId": 288,
    "name": "Zigzagoon",
    "internalKey": "SPECIES_ZIGZAGOON",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "speed": 60,
      "spAttack": 30,
      "spDefense": 41
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 60,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Pickup",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 264,
    "internalId": 289,
    "name": "Linoone",
    "internalKey": "SPECIES_LINOONE",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "speed": 100,
      "spAttack": 50,
      "spDefense": 61
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 128,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Pickup",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 265,
    "internalId": 290,
    "name": "Wurmple",
    "internalKey": "SPECIES_WURMPLE",
    "generation": 3,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "speed": 20,
      "spAttack": 20,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 54,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Shield Dust",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 266,
    "internalId": 291,
    "name": "Silcoon",
    "internalKey": "SPECIES_SILCOON",
    "generation": 3,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "speed": 15,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 71,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 267,
    "internalId": 292,
    "name": "Beautifly",
    "internalKey": "SPECIES_BEAUTIFLY",
    "generation": 3,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "speed": 65,
      "spAttack": 90,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 161,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swarm",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 268,
    "internalId": 293,
    "name": "Cascoon",
    "internalKey": "SPECIES_CASCOON",
    "generation": 3,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "speed": 15,
      "spAttack": 25,
      "spDefense": 25
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 72,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 269,
    "internalId": 294,
    "name": "Dustox",
    "internalKey": "SPECIES_DUSTOX",
    "generation": 3,
    "types": [
      "Bug",
      "Poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "speed": 65,
      "spAttack": 50,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 160,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Shield Dust",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 270,
    "internalId": 295,
    "name": "Lotad",
    "internalKey": "SPECIES_LOTAD",
    "generation": 3,
    "types": [
      "Water",
      "Grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "speed": 30,
      "spAttack": 40,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Swift Swim",
      "Rain Dish"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 271,
    "internalId": 296,
    "name": "Lombre",
    "internalKey": "SPECIES_LOMBRE",
    "generation": 3,
    "types": [
      "Water",
      "Grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 141,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Swift Swim",
      "Rain Dish"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 272,
    "internalId": 297,
    "name": "Ludicolo",
    "internalKey": "SPECIES_LUDICOLO",
    "generation": 3,
    "types": [
      "Water",
      "Grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "speed": 70,
      "spAttack": 90,
      "spDefense": 100
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 181,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Swift Swim",
      "Rain Dish"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 273,
    "internalId": 298,
    "name": "Seedot",
    "internalKey": "SPECIES_SEEDOT",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "speed": 30,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 274,
    "internalId": 299,
    "name": "Nuzleaf",
    "internalKey": "SPECIES_NUZLEAF",
    "generation": 3,
    "types": [
      "Grass",
      "Dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "speed": 60,
      "spAttack": 60,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 141,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 275,
    "internalId": 300,
    "name": "Shiftry",
    "internalKey": "SPECIES_SHIFTRY",
    "generation": 3,
    "types": [
      "Grass",
      "Dark"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "speed": 80,
      "spAttack": 90,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 181,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 276,
    "internalId": 304,
    "name": "Taillow",
    "internalKey": "SPECIES_TAILLOW",
    "generation": 3,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "speed": 85,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 59,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 277,
    "internalId": 305,
    "name": "Swellow",
    "internalKey": "SPECIES_SWELLOW",
    "generation": 3,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "speed": 125,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 162,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Guts",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 278,
    "internalId": 309,
    "name": "Wingull",
    "internalKey": "SPECIES_WINGULL",
    "generation": 3,
    "types": [
      "Water",
      "Flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "speed": 85,
      "spAttack": 55,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 64,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 279,
    "internalId": 310,
    "name": "Pelipper",
    "internalKey": "SPECIES_PELIPPER",
    "generation": 3,
    "types": [
      "Water",
      "Flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "speed": 65,
      "spAttack": 85,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 164,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 280,
    "internalId": 392,
    "name": "Ralts",
    "internalKey": "SPECIES_RALTS",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "speed": 40,
      "spAttack": 45,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 70,
    "friendship": 35,
    "catchRate": 235,
    "abilities": [
      "Synchronize",
      "Trace"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 281,
    "internalId": 393,
    "name": "Kirlia",
    "internalKey": "SPECIES_KIRLIA",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "speed": 50,
      "spAttack": 65,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 140,
    "friendship": 35,
    "catchRate": 120,
    "abilities": [
      "Synchronize",
      "Trace"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 282,
    "internalId": 394,
    "name": "Gardevoir",
    "internalKey": "SPECIES_GARDEVOIR",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "speed": 80,
      "spAttack": 125,
      "spDefense": 115
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 208,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Synchronize",
      "Trace"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 283,
    "internalId": 311,
    "name": "Surskit",
    "internalKey": "SPECIES_SURSKIT",
    "generation": 3,
    "types": [
      "Bug",
      "Water"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "speed": 65,
      "spAttack": 50,
      "spDefense": 52
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 63,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 284,
    "internalId": 312,
    "name": "Masquerain",
    "internalKey": "SPECIES_MASQUERAIN",
    "generation": 3,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "speed": 60,
      "spAttack": 80,
      "spDefense": 82
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 128,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 285,
    "internalId": 306,
    "name": "Shroomish",
    "internalKey": "SPECIES_SHROOMISH",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "speed": 35,
      "spAttack": 40,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Effect Spore",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 286,
    "internalId": 307,
    "name": "Breloom",
    "internalKey": "SPECIES_BRELOOM",
    "generation": 3,
    "types": [
      "Grass",
      "Fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "speed": 70,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 165,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Effect Spore",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 287,
    "internalId": 364,
    "name": "Slakoth",
    "internalKey": "SPECIES_SLAKOTH",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "speed": 30,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 83,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Truant",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 288,
    "internalId": 365,
    "name": "Vigoroth",
    "internalKey": "SPECIES_VIGOROTH",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "speed": 90,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 126,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Vital Spirit",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 289,
    "internalId": 366,
    "name": "Slaking",
    "internalKey": "SPECIES_SLAKING",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "speed": 100,
      "spAttack": 95,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 210,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Truant",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 290,
    "internalId": 301,
    "name": "Nincada",
    "internalKey": "SPECIES_NINCADA",
    "generation": 3,
    "types": [
      "Bug",
      "Ground"
    ],
    "baseStats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "speed": 40,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Compound Eyes",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 291,
    "internalId": 302,
    "name": "Ninjask",
    "internalKey": "SPECIES_NINJASK",
    "generation": 3,
    "types": [
      "Bug",
      "Flying"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "speed": 160,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 155,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Speed Boost",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 292,
    "internalId": 303,
    "name": "Shedinja",
    "internalKey": "SPECIES_SHEDINJA",
    "generation": 3,
    "types": [
      "Bug",
      "Ghost"
    ],
    "baseStats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "speed": 40,
      "spAttack": 30,
      "spDefense": 30
    },
    "genderRatio": 255,
    "growthRate": "erratic",
    "expYield": 95,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Wonder Guard",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 293,
    "internalId": 370,
    "name": "Whismur",
    "internalKey": "SPECIES_WHISMUR",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "speed": 28,
      "spAttack": 51,
      "spDefense": 23
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 68,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Soundproof",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 294,
    "internalId": 371,
    "name": "Loudred",
    "internalKey": "SPECIES_LOUDRED",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "speed": 48,
      "spAttack": 71,
      "spDefense": 43
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 126,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Soundproof",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 295,
    "internalId": 372,
    "name": "Exploud",
    "internalKey": "SPECIES_EXPLOUD",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "speed": 68,
      "spAttack": 91,
      "spDefense": 63
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 184,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Soundproof",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 296,
    "internalId": 335,
    "name": "Makuhita",
    "internalKey": "SPECIES_MAKUHITA",
    "generation": 3,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "speed": 25,
      "spAttack": 20,
      "spDefense": 30
    },
    "genderRatio": 63,
    "growthRate": "fluctuating",
    "expYield": 87,
    "friendship": 70,
    "catchRate": 180,
    "abilities": [
      "Thick Fat",
      "Guts"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 297,
    "internalId": 336,
    "name": "Hariyama",
    "internalKey": "SPECIES_HARIYAMA",
    "generation": 3,
    "types": [
      "Fighting",
      null
    ],
    "baseStats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "speed": 50,
      "spAttack": 40,
      "spDefense": 60
    },
    "genderRatio": 63,
    "growthRate": "fluctuating",
    "expYield": 184,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Thick Fat",
      "Guts"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 298,
    "internalId": 350,
    "name": "Azurill",
    "internalKey": "SPECIES_AZURILL",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "speed": 20,
      "spAttack": 20,
      "spDefense": 40
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 33,
    "friendship": 70,
    "catchRate": 150,
    "abilities": [
      "Thick Fat",
      "Huge Power"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 299,
    "internalId": 320,
    "name": "Nosepass",
    "internalKey": "SPECIES_NOSEPASS",
    "generation": 3,
    "types": [
      "Rock",
      null
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "speed": 30,
      "spAttack": 45,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 108,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Sturdy",
      "Magnet Pull"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 300,
    "internalId": 315,
    "name": "Skitty",
    "internalKey": "SPECIES_SKITTY",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "speed": 50,
      "spAttack": 35,
      "spDefense": 35
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 65,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 301,
    "internalId": 316,
    "name": "Delcatty",
    "internalKey": "SPECIES_DELCATTY",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "speed": 70,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 138,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Cute Charm",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 302,
    "internalId": 322,
    "name": "Sableye",
    "internalKey": "SPECIES_SABLEYE",
    "generation": 3,
    "types": [
      "Dark",
      "Ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "speed": 50,
      "spAttack": 65,
      "spDefense": 65
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 98,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Keen Eye",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 303,
    "internalId": 355,
    "name": "Mawile",
    "internalKey": "SPECIES_MAWILE",
    "generation": 3,
    "types": [
      "Steel",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "speed": 50,
      "spAttack": 55,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 98,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Hyper Cutter",
      "Intimidate"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 304,
    "internalId": 382,
    "name": "Aron",
    "internalKey": "SPECIES_ARON",
    "generation": 3,
    "types": [
      "Steel",
      "Rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "speed": 30,
      "spAttack": 40,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 96,
    "friendship": 35,
    "catchRate": 180,
    "abilities": [
      "Sturdy",
      "Rock Head"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 305,
    "internalId": 383,
    "name": "Lairon",
    "internalKey": "SPECIES_LAIRON",
    "generation": 3,
    "types": [
      "Steel",
      "Rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "speed": 40,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 152,
    "friendship": 35,
    "catchRate": 90,
    "abilities": [
      "Sturdy",
      "Rock Head"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 306,
    "internalId": 384,
    "name": "Aggron",
    "internalKey": "SPECIES_AGGRON",
    "generation": 3,
    "types": [
      "Steel",
      "Rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 205,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Sturdy",
      "Rock Head"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 307,
    "internalId": 356,
    "name": "Meditite",
    "internalKey": "SPECIES_MEDITITE",
    "generation": 3,
    "types": [
      "Fighting",
      "Psychic"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "speed": 60,
      "spAttack": 40,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 91,
    "friendship": 70,
    "catchRate": 180,
    "abilities": [
      "Pure Power",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 308,
    "internalId": 357,
    "name": "Medicham",
    "internalKey": "SPECIES_MEDICHAM",
    "generation": 3,
    "types": [
      "Fighting",
      "Psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "speed": 80,
      "spAttack": 60,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 153,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Pure Power",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 309,
    "internalId": 337,
    "name": "Electrike",
    "internalKey": "SPECIES_ELECTRIKE",
    "generation": 3,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "speed": 65,
      "spAttack": 65,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 104,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Static",
      "Lightning Rod"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 310,
    "internalId": 338,
    "name": "Manectric",
    "internalKey": "SPECIES_MANECTRIC",
    "generation": 3,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "speed": 105,
      "spAttack": 105,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 168,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Static",
      "Lightning Rod"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 311,
    "internalId": 353,
    "name": "Plusle",
    "internalKey": "SPECIES_PLUSLE",
    "generation": 3,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "speed": 95,
      "spAttack": 85,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 120,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Plus",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 312,
    "internalId": 354,
    "name": "Minun",
    "internalKey": "SPECIES_MINUN",
    "generation": 3,
    "types": [
      "Electric",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "speed": 95,
      "spAttack": 75,
      "spDefense": 85
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 120,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Minus",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 313,
    "internalId": 386,
    "name": "Volbeat",
    "internalKey": "SPECIES_VOLBEAT",
    "generation": 3,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 73,
      "defense": 55,
      "speed": 85,
      "spAttack": 47,
      "spDefense": 75
    },
    "genderRatio": 0,
    "growthRate": "erratic",
    "expYield": 146,
    "friendship": 70,
    "catchRate": 150,
    "abilities": [
      "Illuminate",
      "Swarm"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 314,
    "internalId": 387,
    "name": "Illumise",
    "internalKey": "SPECIES_ILLUMISE",
    "generation": 3,
    "types": [
      "Bug",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 47,
      "defense": 55,
      "speed": 85,
      "spAttack": 73,
      "spDefense": 75
    },
    "genderRatio": 254,
    "growthRate": "fluctuating",
    "expYield": 146,
    "friendship": 70,
    "catchRate": 150,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 315,
    "internalId": 363,
    "name": "Roselia",
    "internalKey": "SPECIES_ROSELIA",
    "generation": 3,
    "types": [
      "Grass",
      "Poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "speed": 65,
      "spAttack": 100,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 152,
    "friendship": 70,
    "catchRate": 150,
    "abilities": [
      "Natural Cure",
      "Poison Point"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 316,
    "internalId": 367,
    "name": "Gulpin",
    "internalKey": "SPECIES_GULPIN",
    "generation": 3,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "speed": 40,
      "spAttack": 43,
      "spDefense": 53
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 75,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Liquid Ooze",
      "Sticky Hold"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 317,
    "internalId": 368,
    "name": "Swalot",
    "internalKey": "SPECIES_SWALOT",
    "generation": 3,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "speed": 55,
      "spAttack": 73,
      "spDefense": 83
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 168,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Liquid Ooze",
      "Sticky Hold"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 318,
    "internalId": 330,
    "name": "Carvanha",
    "internalKey": "SPECIES_CARVANHA",
    "generation": 3,
    "types": [
      "Water",
      "Dark"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "speed": 65,
      "spAttack": 65,
      "spDefense": 20
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 88,
    "friendship": 35,
    "catchRate": 225,
    "abilities": [
      "Rough Skin",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 319,
    "internalId": 331,
    "name": "Sharpedo",
    "internalKey": "SPECIES_SHARPEDO",
    "generation": 3,
    "types": [
      "Water",
      "Dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "speed": 95,
      "spAttack": 95,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 175,
    "friendship": 35,
    "catchRate": 60,
    "abilities": [
      "Rough Skin",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 320,
    "internalId": 313,
    "name": "Wailmer",
    "internalKey": "SPECIES_WAILMER",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "speed": 60,
      "spAttack": 70,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 137,
    "friendship": 70,
    "catchRate": 125,
    "abilities": [
      "Water Veil",
      "Oblivious"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 321,
    "internalId": 314,
    "name": "Wailord",
    "internalKey": "SPECIES_WAILORD",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "speed": 60,
      "spAttack": 90,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 206,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Water Veil",
      "Oblivious"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 322,
    "internalId": 339,
    "name": "Numel",
    "internalKey": "SPECIES_NUMEL",
    "generation": 3,
    "types": [
      "Fire",
      "Ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "speed": 35,
      "spAttack": 65,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 88,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 323,
    "internalId": 340,
    "name": "Camerupt",
    "internalKey": "SPECIES_CAMERUPT",
    "generation": 3,
    "types": [
      "Fire",
      "Ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "speed": 40,
      "spAttack": 105,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 175,
    "friendship": 70,
    "catchRate": 150,
    "abilities": [
      "Magma Armor",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 324,
    "internalId": 321,
    "name": "Torkoal",
    "internalKey": "SPECIES_TORKOAL",
    "generation": 3,
    "types": [
      "Fire",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "speed": 20,
      "spAttack": 85,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 161,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "White Smoke",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 325,
    "internalId": 351,
    "name": "Spoink",
    "internalKey": "SPECIES_SPOINK",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "speed": 60,
      "spAttack": 70,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 89,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Thick Fat",
      "Own Tempo"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 326,
    "internalId": 352,
    "name": "Grumpig",
    "internalKey": "SPECIES_GRUMPIG",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "speed": 80,
      "spAttack": 90,
      "spDefense": 110
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 164,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Thick Fat",
      "Own Tempo"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 327,
    "internalId": 308,
    "name": "Spinda",
    "internalKey": "SPECIES_SPINDA",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "speed": 60,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 85,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Own Tempo",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 328,
    "internalId": 332,
    "name": "Trapinch",
    "internalKey": "SPECIES_TRAPINCH",
    "generation": 3,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "speed": 10,
      "spAttack": 45,
      "spDefense": 45
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 73,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Hyper Cutter",
      "Arena Trap"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 329,
    "internalId": 333,
    "name": "Vibrava",
    "internalKey": "SPECIES_VIBRAVA",
    "generation": 3,
    "types": [
      "Ground",
      "Dragon"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "speed": 70,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 126,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 330,
    "internalId": 334,
    "name": "Flygon",
    "internalKey": "SPECIES_FLYGON",
    "generation": 3,
    "types": [
      "Ground",
      "Dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "speed": 100,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 197,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 331,
    "internalId": 344,
    "name": "Cacnea",
    "internalKey": "SPECIES_CACNEA",
    "generation": 3,
    "types": [
      "Grass",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "speed": 35,
      "spAttack": 85,
      "spDefense": 40
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 97,
    "friendship": 35,
    "catchRate": 190,
    "abilities": [
      "Sand Veil",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 332,
    "internalId": 345,
    "name": "Cacturne",
    "internalKey": "SPECIES_CACTURNE",
    "generation": 3,
    "types": [
      "Grass",
      "Dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "speed": 55,
      "spAttack": 115,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 177,
    "friendship": 35,
    "catchRate": 60,
    "abilities": [
      "Sand Veil",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 333,
    "internalId": 358,
    "name": "Swablu",
    "internalKey": "SPECIES_SWABLU",
    "generation": 3,
    "types": [
      "Normal",
      "Flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "speed": 50,
      "spAttack": 40,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Natural Cure",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 334,
    "internalId": 359,
    "name": "Altaria",
    "internalKey": "SPECIES_ALTARIA",
    "generation": 3,
    "types": [
      "Dragon",
      "Flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "speed": 80,
      "spAttack": 70,
      "spDefense": 105
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 188,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Natural Cure",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 335,
    "internalId": 380,
    "name": "Zangoose",
    "internalKey": "SPECIES_ZANGOOSE",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "speed": 90,
      "spAttack": 60,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 165,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Immunity",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 336,
    "internalId": 379,
    "name": "Seviper",
    "internalKey": "SPECIES_SEVIPER",
    "generation": 3,
    "types": [
      "Poison",
      null
    ],
    "baseStats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "speed": 65,
      "spAttack": 100,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 165,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Shed Skin",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 337,
    "internalId": 348,
    "name": "Lunatone",
    "internalKey": "SPECIES_LUNATONE",
    "generation": 3,
    "types": [
      "Rock",
      "Psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 65,
      "speed": 70,
      "spAttack": 95,
      "spDefense": 85
    },
    "genderRatio": 255,
    "growthRate": "fast",
    "expYield": 150,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 338,
    "internalId": 349,
    "name": "Solrock",
    "internalKey": "SPECIES_SOLROCK",
    "generation": 3,
    "types": [
      "Rock",
      "Psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 85,
      "speed": 70,
      "spAttack": 55,
      "spDefense": 65
    },
    "genderRatio": 255,
    "growthRate": "fast",
    "expYield": 150,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 339,
    "internalId": 323,
    "name": "Barboach",
    "internalKey": "SPECIES_BARBOACH",
    "generation": 3,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "speed": 60,
      "spAttack": 46,
      "spDefense": 41
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 92,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 340,
    "internalId": 324,
    "name": "Whiscash",
    "internalKey": "SPECIES_WHISCASH",
    "generation": 3,
    "types": [
      "Water",
      "Ground"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "speed": 60,
      "spAttack": 76,
      "spDefense": 71
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 158,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Oblivious",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 341,
    "internalId": 326,
    "name": "Corphish",
    "internalKey": "SPECIES_CORPHISH",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "speed": 35,
      "spAttack": 50,
      "spDefense": 35
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 111,
    "friendship": 70,
    "catchRate": 205,
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 342,
    "internalId": 327,
    "name": "Crawdaunt",
    "internalKey": "SPECIES_CRAWDAUNT",
    "generation": 3,
    "types": [
      "Water",
      "Dark"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "speed": 55,
      "spAttack": 90,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "fluctuating",
    "expYield": 161,
    "friendship": 70,
    "catchRate": 155,
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 343,
    "internalId": 318,
    "name": "Baltoy",
    "internalKey": "SPECIES_BALTOY",
    "generation": 3,
    "types": [
      "Ground",
      "Psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "speed": 55,
      "spAttack": 40,
      "spDefense": 70
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 58,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 344,
    "internalId": 319,
    "name": "Claydol",
    "internalKey": "SPECIES_CLAYDOL",
    "generation": 3,
    "types": [
      "Ground",
      "Psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "speed": 75,
      "spAttack": 70,
      "spDefense": 120
    },
    "genderRatio": 255,
    "growthRate": "medium_fast",
    "expYield": 189,
    "friendship": 70,
    "catchRate": 90,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 345,
    "internalId": 388,
    "name": "Lileep",
    "internalKey": "SPECIES_LILEEP",
    "generation": 3,
    "types": [
      "Rock",
      "Grass"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "speed": 23,
      "spAttack": 61,
      "spDefense": 87
    },
    "genderRatio": 31,
    "growthRate": "erratic",
    "expYield": 121,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Suction Cups",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 346,
    "internalId": 389,
    "name": "Cradily",
    "internalKey": "SPECIES_CRADILY",
    "generation": 3,
    "types": [
      "Rock",
      "Grass"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "speed": 43,
      "spAttack": 81,
      "spDefense": 107
    },
    "genderRatio": 31,
    "growthRate": "erratic",
    "expYield": 201,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Suction Cups",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 347,
    "internalId": 390,
    "name": "Anorith",
    "internalKey": "SPECIES_ANORITH",
    "generation": 3,
    "types": [
      "Rock",
      "Bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "speed": 75,
      "spAttack": 40,
      "spDefense": 50
    },
    "genderRatio": 31,
    "growthRate": "erratic",
    "expYield": 119,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Battle Armor",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 348,
    "internalId": 391,
    "name": "Armaldo",
    "internalKey": "SPECIES_ARMALDO",
    "generation": 3,
    "types": [
      "Rock",
      "Bug"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "speed": 45,
      "spAttack": 70,
      "spDefense": 80
    },
    "genderRatio": 31,
    "growthRate": "erratic",
    "expYield": 200,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Battle Armor",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 349,
    "internalId": 328,
    "name": "Feebas",
    "internalKey": "SPECIES_FEEBAS",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "speed": 80,
      "spAttack": 10,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 61,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 350,
    "internalId": 329,
    "name": "Milotic",
    "internalKey": "SPECIES_MILOTIC",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "speed": 81,
      "spAttack": 100,
      "spDefense": 125
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 213,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Marvel Scale",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 351,
    "internalId": 385,
    "name": "Castform",
    "internalKey": "SPECIES_CASTFORM",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "speed": 70,
      "spAttack": 70,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 145,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Forecast",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 352,
    "internalId": 317,
    "name": "Kecleon",
    "internalKey": "SPECIES_KECLEON",
    "generation": 3,
    "types": [
      "Normal",
      null
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "speed": 40,
      "spAttack": 60,
      "spDefense": 120
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 132,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Color Change",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 353,
    "internalId": 377,
    "name": "Shuppet",
    "internalKey": "SPECIES_SHUPPET",
    "generation": 3,
    "types": [
      "Ghost",
      null
    ],
    "baseStats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "speed": 45,
      "spAttack": 63,
      "spDefense": 33
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 97,
    "friendship": 35,
    "catchRate": 225,
    "abilities": [
      "Insomnia",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 354,
    "internalId": 378,
    "name": "Banette",
    "internalKey": "SPECIES_BANETTE",
    "generation": 3,
    "types": [
      "Ghost",
      null
    ],
    "baseStats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "speed": 65,
      "spAttack": 83,
      "spDefense": 63
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 179,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Insomnia",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 355,
    "internalId": 361,
    "name": "Duskull",
    "internalKey": "SPECIES_DUSKULL",
    "generation": 3,
    "types": [
      "Ghost",
      null
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "speed": 25,
      "spAttack": 30,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 97,
    "friendship": 35,
    "catchRate": 190,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 356,
    "internalId": 362,
    "name": "Dusclops",
    "internalKey": "SPECIES_DUSCLOPS",
    "generation": 3,
    "types": [
      "Ghost",
      null
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "speed": 25,
      "spAttack": 60,
      "spDefense": 130
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 179,
    "friendship": 35,
    "catchRate": 90,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 357,
    "internalId": 369,
    "name": "Tropius",
    "internalKey": "SPECIES_TROPIUS",
    "generation": 3,
    "types": [
      "Grass",
      "Flying"
    ],
    "baseStats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "speed": 51,
      "spAttack": 72,
      "spDefense": 87
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 169,
    "friendship": 70,
    "catchRate": 200,
    "abilities": [
      "Chlorophyll",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 358,
    "internalId": 411,
    "name": "Chimecho",
    "internalKey": "SPECIES_CHIMECHO",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 50,
      "defense": 70,
      "speed": 65,
      "spAttack": 95,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "fast",
    "expYield": 147,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 359,
    "internalId": 376,
    "name": "Absol",
    "internalKey": "SPECIES_ABSOL",
    "generation": 3,
    "types": [
      "Dark",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "speed": 75,
      "spAttack": 75,
      "spDefense": 60
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 174,
    "friendship": 35,
    "catchRate": 30,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 360,
    "internalId": 360,
    "name": "Wynaut",
    "internalKey": "SPECIES_WYNAUT",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "speed": 23,
      "spAttack": 23,
      "spDefense": 48
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 44,
    "friendship": 70,
    "catchRate": 125,
    "abilities": [
      "Shadow Tag",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 361,
    "internalId": 346,
    "name": "Snorunt",
    "internalKey": "SPECIES_SNORUNT",
    "generation": 3,
    "types": [
      "Ice",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "speed": 50,
      "spAttack": 50,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 74,
    "friendship": 70,
    "catchRate": 190,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 362,
    "internalId": 347,
    "name": "Glalie",
    "internalKey": "SPECIES_GLALIE",
    "generation": 3,
    "types": [
      "Ice",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "speed": 80,
      "spAttack": 80,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "medium_fast",
    "expYield": 187,
    "friendship": 70,
    "catchRate": 75,
    "abilities": [
      "Inner Focus",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 363,
    "internalId": 341,
    "name": "Spheal",
    "internalKey": "SPECIES_SPHEAL",
    "generation": 3,
    "types": [
      "Ice",
      "Water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "speed": 25,
      "spAttack": 55,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 75,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 364,
    "internalId": 342,
    "name": "Sealeo",
    "internalKey": "SPECIES_SEALEO",
    "generation": 3,
    "types": [
      "Ice",
      "Water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "speed": 45,
      "spAttack": 75,
      "spDefense": 70
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 128,
    "friendship": 70,
    "catchRate": 120,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 365,
    "internalId": 343,
    "name": "Walrein",
    "internalKey": "SPECIES_WALREIN",
    "generation": 3,
    "types": [
      "Ice",
      "Water"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "speed": 65,
      "spAttack": 95,
      "spDefense": 90
    },
    "genderRatio": 127,
    "growthRate": "medium_slow",
    "expYield": 192,
    "friendship": 70,
    "catchRate": 45,
    "abilities": [
      "Thick Fat",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 366,
    "internalId": 373,
    "name": "Clamperl",
    "internalKey": "SPECIES_CLAMPERL",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "speed": 32,
      "spAttack": 74,
      "spDefense": 55
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 142,
    "friendship": 70,
    "catchRate": 255,
    "abilities": [
      "Shell Armor",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 367,
    "internalId": 374,
    "name": "Huntail",
    "internalKey": "SPECIES_HUNTAIL",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "speed": 52,
      "spAttack": 94,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 178,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 368,
    "internalId": 375,
    "name": "Gorebyss",
    "internalKey": "SPECIES_GOREBYSS",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "speed": 52,
      "spAttack": 114,
      "spDefense": 75
    },
    "genderRatio": 127,
    "growthRate": "erratic",
    "expYield": 178,
    "friendship": 70,
    "catchRate": 60,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 369,
    "internalId": 381,
    "name": "Relicanth",
    "internalKey": "SPECIES_RELICANTH",
    "generation": 3,
    "types": [
      "Water",
      "Rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "speed": 55,
      "spAttack": 45,
      "spDefense": 65
    },
    "genderRatio": 31,
    "growthRate": "slow",
    "expYield": 198,
    "friendship": 70,
    "catchRate": 25,
    "abilities": [
      "Swift Swim",
      "Rock Head"
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 370,
    "internalId": 325,
    "name": "Luvdisc",
    "internalKey": "SPECIES_LUVDISC",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "speed": 97,
      "spAttack": 40,
      "spDefense": 65
    },
    "genderRatio": 191,
    "growthRate": "fast",
    "expYield": 110,
    "friendship": 70,
    "catchRate": 225,
    "abilities": [
      "Swift Swim",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 371,
    "internalId": 395,
    "name": "Bagon",
    "internalKey": "SPECIES_BAGON",
    "generation": 3,
    "types": [
      "Dragon",
      null
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "speed": 50,
      "spAttack": 40,
      "spDefense": 30
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 89,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Rock Head",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 372,
    "internalId": 396,
    "name": "Shelgon",
    "internalKey": "SPECIES_SHELGON",
    "generation": 3,
    "types": [
      "Dragon",
      null
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "speed": 50,
      "spAttack": 60,
      "spDefense": 50
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 144,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Rock Head",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 373,
    "internalId": 397,
    "name": "Salamence",
    "internalKey": "SPECIES_SALAMENCE",
    "generation": 3,
    "types": [
      "Dragon",
      "Flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "speed": 100,
      "spAttack": 110,
      "spDefense": 80
    },
    "genderRatio": 127,
    "growthRate": "slow",
    "expYield": 218,
    "friendship": 35,
    "catchRate": 45,
    "abilities": [
      "Intimidate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 374,
    "internalId": 398,
    "name": "Beldum",
    "internalKey": "SPECIES_BELDUM",
    "generation": 3,
    "types": [
      "Steel",
      "Psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "speed": 30,
      "spAttack": 35,
      "spDefense": 60
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 103,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 375,
    "internalId": 399,
    "name": "Metang",
    "internalKey": "SPECIES_METANG",
    "generation": 3,
    "types": [
      "Steel",
      "Psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "speed": 50,
      "spAttack": 55,
      "spDefense": 80
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 153,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 376,
    "internalId": 400,
    "name": "Metagross",
    "internalKey": "SPECIES_METAGROSS",
    "generation": 3,
    "types": [
      "Steel",
      "Psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "speed": 70,
      "spAttack": 95,
      "spDefense": 90
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 210,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 377,
    "internalId": 401,
    "name": "Regirock",
    "internalKey": "SPECIES_REGIROCK",
    "generation": 3,
    "types": [
      "Rock",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "speed": 50,
      "spAttack": 50,
      "spDefense": 100
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 217,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 378,
    "internalId": 402,
    "name": "Regice",
    "internalKey": "SPECIES_REGICE",
    "generation": 3,
    "types": [
      "Ice",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "speed": 50,
      "spAttack": 100,
      "spDefense": 200
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 216,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 379,
    "internalId": 403,
    "name": "Registeel",
    "internalKey": "SPECIES_REGISTEEL",
    "generation": 3,
    "types": [
      "Steel",
      null
    ],
    "baseStats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "speed": 50,
      "spAttack": 75,
      "spDefense": 150
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 215,
    "friendship": 35,
    "catchRate": 3,
    "abilities": [
      "Clear Body",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 380,
    "internalId": 407,
    "name": "Latias",
    "internalKey": "SPECIES_LATIAS",
    "generation": 3,
    "types": [
      "Dragon",
      "Psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "speed": 110,
      "spAttack": 110,
      "spDefense": 130
    },
    "genderRatio": 254,
    "growthRate": "slow",
    "expYield": 211,
    "friendship": 90,
    "catchRate": 3,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 381,
    "internalId": 408,
    "name": "Latios",
    "internalKey": "SPECIES_LATIOS",
    "generation": 3,
    "types": [
      "Dragon",
      "Psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "speed": 110,
      "spAttack": 130,
      "spDefense": 110
    },
    "genderRatio": 0,
    "growthRate": "slow",
    "expYield": 211,
    "friendship": 90,
    "catchRate": 3,
    "abilities": [
      "Levitate",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn native; unobtainable in wild FireRed (requires trade from Ruby/Sapphire/Emerald)"
  },
  {
    "nationalDex": 382,
    "internalId": 404,
    "name": "Kyogre",
    "internalKey": "SPECIES_KYOGRE",
    "generation": 3,
    "types": [
      "Water",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "speed": 90,
      "spAttack": 150,
      "spDefense": 140
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 218,
    "friendship": 0,
    "catchRate": 5,
    "abilities": [
      "Drizzle",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn Legendary; requires trade from Ruby/Sapphire/Emerald"
  },
  {
    "nationalDex": 383,
    "internalId": 405,
    "name": "Groudon",
    "internalKey": "SPECIES_GROUDON",
    "generation": 3,
    "types": [
      "Ground",
      null
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "speed": 90,
      "spAttack": 100,
      "spDefense": 90
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 218,
    "friendship": 0,
    "catchRate": 5,
    "abilities": [
      "Drought",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn Legendary; requires trade from Ruby/Sapphire/Emerald"
  },
  {
    "nationalDex": 384,
    "internalId": 406,
    "name": "Rayquaza",
    "internalKey": "SPECIES_RAYQUAZA",
    "generation": 3,
    "types": [
      "Dragon",
      "Flying"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "speed": 95,
      "spAttack": 150,
      "spDefense": 90
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 220,
    "friendship": 0,
    "catchRate": 3,
    "abilities": [
      "Air Lock",
      null
    ],
    "obtainability": "trade_hoenn",
    "obtainabilityNote": "Hoenn Legendary; requires trade from Ruby/Sapphire/Emerald"
  },
  {
    "nationalDex": 385,
    "internalId": 409,
    "name": "Jirachi",
    "internalKey": "SPECIES_JIRACHI",
    "generation": 3,
    "types": [
      "Steel",
      "Psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "speed": 100,
      "spAttack": 100,
      "spDefense": 100
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 215,
    "friendship": 100,
    "catchRate": 3,
    "abilities": [
      "Serene Grace",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Mythical distribution (Colosseum Bonus Disc / Event)"
  },
  {
    "nationalDex": 386,
    "internalId": 410,
    "name": "Deoxys",
    "internalKey": "SPECIES_DEOXYS",
    "generation": 3,
    "types": [
      "Psychic",
      null
    ],
    "baseStats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "speed": 150,
      "spAttack": 150,
      "spDefense": 50
    },
    "genderRatio": 255,
    "growthRate": "slow",
    "expYield": 215,
    "friendship": 0,
    "catchRate": 3,
    "abilities": [
      "Pressure",
      null
    ],
    "obtainability": "event_mythical",
    "obtainabilityNote": "Birth Island event via Aurora Ticket"
  }
];

// Fast lookup maps
export const SPECIES_BY_INTERNAL_ID = new Map<number, SpeciesData>();
export const SPECIES_BY_NATIONAL_DEX = new Map<number, SpeciesData>();
export const SPECIES_BY_NAME = new Map<string, SpeciesData>();

for (const sp of SPECIES_REGISTRY) {
  SPECIES_BY_INTERNAL_ID.set(sp.internalId, sp);
  SPECIES_BY_NATIONAL_DEX.set(sp.nationalDex, sp);
  SPECIES_BY_NAME.set(sp.name.toLowerCase(), sp);
}

export function getSpeciesByInternalId(internalId: number): SpeciesData | undefined {
  return SPECIES_BY_INTERNAL_ID.get(internalId);
}

export function getSpeciesByNationalDex(nationalDex: number): SpeciesData | undefined {
  return SPECIES_BY_NATIONAL_DEX.get(nationalDex);
}

export function internalIdToNationalDex(internalId: number): number | undefined {
  return SPECIES_BY_INTERNAL_ID.get(internalId)?.nationalDex;
}

export function nationalDexToInternalId(nationalDex: number): number | undefined {
  return SPECIES_BY_NATIONAL_DEX.get(nationalDex)?.internalId;
}

export function isSpeciesSupported(internalId: number): boolean {
  return SPECIES_BY_INTERNAL_ID.has(internalId);
}
