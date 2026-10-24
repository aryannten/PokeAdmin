// Pure scratch-built Generation III Move Registry
// Sourced from pret/pokefirered (moves.h & battle_moves.h)

export interface MoveData {
  id: number;
  key: string;
  name: string;
  type: string;
  power: number;
  accuracy: number;
  pp: number;
}

export const MOVES_REGISTRY: MoveData[] = [
  {
    "id": 1,
    "key": "MOVE_POUND",
    "name": "Pound",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 2,
    "key": "MOVE_KARATE_CHOP",
    "name": "Karate Chop",
    "type": "Fighting",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 3,
    "key": "MOVE_DOUBLE_SLAP",
    "name": "Double Slap",
    "type": "Normal",
    "power": 15,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 4,
    "key": "MOVE_COMET_PUNCH",
    "name": "Comet Punch",
    "type": "Normal",
    "power": 18,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 5,
    "key": "MOVE_MEGA_PUNCH",
    "name": "Mega Punch",
    "type": "Normal",
    "power": 80,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 6,
    "key": "MOVE_PAY_DAY",
    "name": "Pay Day",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 7,
    "key": "MOVE_FIRE_PUNCH",
    "name": "Fire Punch",
    "type": "Fire",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 8,
    "key": "MOVE_ICE_PUNCH",
    "name": "Ice Punch",
    "type": "Ice",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 9,
    "key": "MOVE_THUNDER_PUNCH",
    "name": "Thunder Punch",
    "type": "Electric",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 10,
    "key": "MOVE_SCRATCH",
    "name": "Scratch",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 11,
    "key": "MOVE_VICE_GRIP",
    "name": "Vice Grip",
    "type": "Normal",
    "power": 55,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 12,
    "key": "MOVE_GUILLOTINE",
    "name": "Guillotine",
    "type": "Normal",
    "power": 1,
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 13,
    "key": "MOVE_RAZOR_WIND",
    "name": "Razor Wind",
    "type": "Normal",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 14,
    "key": "MOVE_SWORDS_DANCE",
    "name": "Swords Dance",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 15,
    "key": "MOVE_CUT",
    "name": "Cut",
    "type": "Normal",
    "power": 50,
    "accuracy": 95,
    "pp": 30
  },
  {
    "id": 16,
    "key": "MOVE_GUST",
    "name": "Gust",
    "type": "Flying",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 17,
    "key": "MOVE_WING_ATTACK",
    "name": "Wing Attack",
    "type": "Flying",
    "power": 60,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 18,
    "key": "MOVE_WHIRLWIND",
    "name": "Whirlwind",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 19,
    "key": "MOVE_FLY",
    "name": "Fly",
    "type": "Flying",
    "power": 70,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 20,
    "key": "MOVE_BIND",
    "name": "Bind",
    "type": "Normal",
    "power": 15,
    "accuracy": 75,
    "pp": 20
  },
  {
    "id": 21,
    "key": "MOVE_SLAM",
    "name": "Slam",
    "type": "Normal",
    "power": 80,
    "accuracy": 75,
    "pp": 20
  },
  {
    "id": 22,
    "key": "MOVE_VINE_WHIP",
    "name": "Vine Whip",
    "type": "Grass",
    "power": 35,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 23,
    "key": "MOVE_STOMP",
    "name": "Stomp",
    "type": "Normal",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 24,
    "key": "MOVE_DOUBLE_KICK",
    "name": "Double Kick",
    "type": "Fighting",
    "power": 30,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 25,
    "key": "MOVE_MEGA_KICK",
    "name": "Mega Kick",
    "type": "Normal",
    "power": 120,
    "accuracy": 75,
    "pp": 5
  },
  {
    "id": 26,
    "key": "MOVE_JUMP_KICK",
    "name": "Jump Kick",
    "type": "Fighting",
    "power": 70,
    "accuracy": 95,
    "pp": 25
  },
  {
    "id": 27,
    "key": "MOVE_ROLLING_KICK",
    "name": "Rolling Kick",
    "type": "Fighting",
    "power": 60,
    "accuracy": 85,
    "pp": 15
  },
  {
    "id": 28,
    "key": "MOVE_SAND_ATTACK",
    "name": "Sand Attack",
    "type": "Ground",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 29,
    "key": "MOVE_HEADBUTT",
    "name": "Headbutt",
    "type": "Normal",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 30,
    "key": "MOVE_HORN_ATTACK",
    "name": "Horn Attack",
    "type": "Normal",
    "power": 65,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 31,
    "key": "MOVE_FURY_ATTACK",
    "name": "Fury Attack",
    "type": "Normal",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 32,
    "key": "MOVE_HORN_DRILL",
    "name": "Horn Drill",
    "type": "Normal",
    "power": 1,
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 33,
    "key": "MOVE_TACKLE",
    "name": "Tackle",
    "type": "Normal",
    "power": 35,
    "accuracy": 95,
    "pp": 35
  },
  {
    "id": 34,
    "key": "MOVE_BODY_SLAM",
    "name": "Body Slam",
    "type": "Normal",
    "power": 85,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 35,
    "key": "MOVE_WRAP",
    "name": "Wrap",
    "type": "Normal",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 36,
    "key": "MOVE_TAKE_DOWN",
    "name": "Take Down",
    "type": "Normal",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 37,
    "key": "MOVE_THRASH",
    "name": "Thrash",
    "type": "Normal",
    "power": 90,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 38,
    "key": "MOVE_DOUBLE_EDGE",
    "name": "Double Edge",
    "type": "Normal",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 39,
    "key": "MOVE_TAIL_WHIP",
    "name": "Tail Whip",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 40,
    "key": "MOVE_POISON_STING",
    "name": "Poison Sting",
    "type": "Poison",
    "power": 15,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 41,
    "key": "MOVE_TWINEEDLE",
    "name": "Twineedle",
    "type": "Bug",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 42,
    "key": "MOVE_PIN_MISSILE",
    "name": "Pin Missile",
    "type": "Bug",
    "power": 14,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 43,
    "key": "MOVE_LEER",
    "name": "Leer",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 44,
    "key": "MOVE_BITE",
    "name": "Bite",
    "type": "Dark",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 45,
    "key": "MOVE_GROWL",
    "name": "Growl",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 46,
    "key": "MOVE_ROAR",
    "name": "Roar",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 47,
    "key": "MOVE_SING",
    "name": "Sing",
    "type": "Normal",
    "power": 0,
    "accuracy": 55,
    "pp": 15
  },
  {
    "id": 48,
    "key": "MOVE_SUPERSONIC",
    "name": "Supersonic",
    "type": "Normal",
    "power": 0,
    "accuracy": 55,
    "pp": 20
  },
  {
    "id": 49,
    "key": "MOVE_SONIC_BOOM",
    "name": "Sonic Boom",
    "type": "Normal",
    "power": 1,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 50,
    "key": "MOVE_DISABLE",
    "name": "Disable",
    "type": "Normal",
    "power": 0,
    "accuracy": 55,
    "pp": 20
  },
  {
    "id": 51,
    "key": "MOVE_ACID",
    "name": "Acid",
    "type": "Poison",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 52,
    "key": "MOVE_EMBER",
    "name": "Ember",
    "type": "Fire",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 53,
    "key": "MOVE_FLAMETHROWER",
    "name": "Flamethrower",
    "type": "Fire",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 54,
    "key": "MOVE_MIST",
    "name": "Mist",
    "type": "Ice",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 55,
    "key": "MOVE_WATER_GUN",
    "name": "Water Gun",
    "type": "Water",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 56,
    "key": "MOVE_HYDRO_PUMP",
    "name": "Hydro Pump",
    "type": "Water",
    "power": 120,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 57,
    "key": "MOVE_SURF",
    "name": "Surf",
    "type": "Water",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 58,
    "key": "MOVE_ICE_BEAM",
    "name": "Ice Beam",
    "type": "Ice",
    "power": 95,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 59,
    "key": "MOVE_BLIZZARD",
    "name": "Blizzard",
    "type": "Ice",
    "power": 120,
    "accuracy": 70,
    "pp": 5
  },
  {
    "id": 60,
    "key": "MOVE_PSYBEAM",
    "name": "Psybeam",
    "type": "Psychic",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 61,
    "key": "MOVE_BUBBLE_BEAM",
    "name": "Bubble Beam",
    "type": "Water",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 62,
    "key": "MOVE_AURORA_BEAM",
    "name": "Aurora Beam",
    "type": "Ice",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 63,
    "key": "MOVE_HYPER_BEAM",
    "name": "Hyper Beam",
    "type": "Normal",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 64,
    "key": "MOVE_PECK",
    "name": "Peck",
    "type": "Flying",
    "power": 35,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 65,
    "key": "MOVE_DRILL_PECK",
    "name": "Drill Peck",
    "type": "Flying",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 66,
    "key": "MOVE_SUBMISSION",
    "name": "Submission",
    "type": "Fighting",
    "power": 80,
    "accuracy": 80,
    "pp": 25
  },
  {
    "id": 67,
    "key": "MOVE_LOW_KICK",
    "name": "Low Kick",
    "type": "Fighting",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 68,
    "key": "MOVE_COUNTER",
    "name": "Counter",
    "type": "Fighting",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 69,
    "key": "MOVE_SEISMIC_TOSS",
    "name": "Seismic Toss",
    "type": "Fighting",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 70,
    "key": "MOVE_STRENGTH",
    "name": "Strength",
    "type": "Normal",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 71,
    "key": "MOVE_ABSORB",
    "name": "Absorb",
    "type": "Grass",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 72,
    "key": "MOVE_MEGA_DRAIN",
    "name": "Mega Drain",
    "type": "Grass",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 73,
    "key": "MOVE_LEECH_SEED",
    "name": "Leech Seed",
    "type": "Grass",
    "power": 0,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 74,
    "key": "MOVE_GROWTH",
    "name": "Growth",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 75,
    "key": "MOVE_RAZOR_LEAF",
    "name": "Razor Leaf",
    "type": "Grass",
    "power": 55,
    "accuracy": 95,
    "pp": 25
  },
  {
    "id": 76,
    "key": "MOVE_SOLAR_BEAM",
    "name": "Solar Beam",
    "type": "Grass",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 77,
    "key": "MOVE_POISON_POWDER",
    "name": "Poison Powder",
    "type": "Poison",
    "power": 0,
    "accuracy": 75,
    "pp": 35
  },
  {
    "id": 78,
    "key": "MOVE_STUN_SPORE",
    "name": "Stun Spore",
    "type": "Grass",
    "power": 0,
    "accuracy": 75,
    "pp": 30
  },
  {
    "id": 79,
    "key": "MOVE_SLEEP_POWDER",
    "name": "Sleep Powder",
    "type": "Grass",
    "power": 0,
    "accuracy": 75,
    "pp": 15
  },
  {
    "id": 80,
    "key": "MOVE_PETAL_DANCE",
    "name": "Petal Dance",
    "type": "Grass",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 81,
    "key": "MOVE_STRING_SHOT",
    "name": "String Shot",
    "type": "Bug",
    "power": 0,
    "accuracy": 95,
    "pp": 40
  },
  {
    "id": 82,
    "key": "MOVE_DRAGON_RAGE",
    "name": "Dragon Rage",
    "type": "Dragon",
    "power": 1,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 83,
    "key": "MOVE_FIRE_SPIN",
    "name": "Fire Spin",
    "type": "Fire",
    "power": 15,
    "accuracy": 70,
    "pp": 15
  },
  {
    "id": 84,
    "key": "MOVE_THUNDER_SHOCK",
    "name": "Thunder Shock",
    "type": "Electric",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 85,
    "key": "MOVE_THUNDERBOLT",
    "name": "Thunderbolt",
    "type": "Electric",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 86,
    "key": "MOVE_THUNDER_WAVE",
    "name": "Thunder Wave",
    "type": "Electric",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 87,
    "key": "MOVE_THUNDER",
    "name": "Thunder",
    "type": "Electric",
    "power": 120,
    "accuracy": 70,
    "pp": 10
  },
  {
    "id": 88,
    "key": "MOVE_ROCK_THROW",
    "name": "Rock Throw",
    "type": "Rock",
    "power": 50,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 89,
    "key": "MOVE_EARTHQUAKE",
    "name": "Earthquake",
    "type": "Ground",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 90,
    "key": "MOVE_FISSURE",
    "name": "Fissure",
    "type": "Ground",
    "power": 1,
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 91,
    "key": "MOVE_DIG",
    "name": "Dig",
    "type": "Ground",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 92,
    "key": "MOVE_TOXIC",
    "name": "Toxic",
    "type": "Poison",
    "power": 0,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 93,
    "key": "MOVE_CONFUSION",
    "name": "Confusion",
    "type": "Psychic",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 94,
    "key": "MOVE_PSYCHIC",
    "name": "Psychic",
    "type": "Psychic",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 95,
    "key": "MOVE_HYPNOSIS",
    "name": "Hypnosis",
    "type": "Psychic",
    "power": 0,
    "accuracy": 60,
    "pp": 20
  },
  {
    "id": 96,
    "key": "MOVE_MEDITATE",
    "name": "Meditate",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 97,
    "key": "MOVE_AGILITY",
    "name": "Agility",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 98,
    "key": "MOVE_QUICK_ATTACK",
    "name": "Quick Attack",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 99,
    "key": "MOVE_RAGE",
    "name": "Rage",
    "type": "Normal",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 100,
    "key": "MOVE_TELEPORT",
    "name": "Teleport",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 101,
    "key": "MOVE_NIGHT_SHADE",
    "name": "Night Shade",
    "type": "Ghost",
    "power": 1,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 102,
    "key": "MOVE_MIMIC",
    "name": "Mimic",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 103,
    "key": "MOVE_SCREECH",
    "name": "Screech",
    "type": "Normal",
    "power": 0,
    "accuracy": 85,
    "pp": 40
  },
  {
    "id": 104,
    "key": "MOVE_DOUBLE_TEAM",
    "name": "Double Team",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 15
  },
  {
    "id": 105,
    "key": "MOVE_RECOVER",
    "name": "Recover",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 106,
    "key": "MOVE_HARDEN",
    "name": "Harden",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 107,
    "key": "MOVE_MINIMIZE",
    "name": "Minimize",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 108,
    "key": "MOVE_SMOKESCREEN",
    "name": "Smokescreen",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 109,
    "key": "MOVE_CONFUSE_RAY",
    "name": "Confuse Ray",
    "type": "Ghost",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 110,
    "key": "MOVE_WITHDRAW",
    "name": "Withdraw",
    "type": "Water",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 111,
    "key": "MOVE_DEFENSE_CURL",
    "name": "Defense Curl",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 112,
    "key": "MOVE_BARRIER",
    "name": "Barrier",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 113,
    "key": "MOVE_LIGHT_SCREEN",
    "name": "Light Screen",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 114,
    "key": "MOVE_HAZE",
    "name": "Haze",
    "type": "Ice",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 115,
    "key": "MOVE_REFLECT",
    "name": "Reflect",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 116,
    "key": "MOVE_FOCUS_ENERGY",
    "name": "Focus Energy",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 117,
    "key": "MOVE_BIDE",
    "name": "Bide",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 118,
    "key": "MOVE_METRONOME",
    "name": "Metronome",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 119,
    "key": "MOVE_MIRROR_MOVE",
    "name": "Mirror Move",
    "type": "Flying",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 120,
    "key": "MOVE_SELF_DESTRUCT",
    "name": "Self Destruct",
    "type": "Normal",
    "power": 200,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 121,
    "key": "MOVE_EGG_BOMB",
    "name": "Egg Bomb",
    "type": "Normal",
    "power": 100,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 122,
    "key": "MOVE_LICK",
    "name": "Lick",
    "type": "Ghost",
    "power": 20,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 123,
    "key": "MOVE_SMOG",
    "name": "Smog",
    "type": "Poison",
    "power": 20,
    "accuracy": 70,
    "pp": 20
  },
  {
    "id": 124,
    "key": "MOVE_SLUDGE",
    "name": "Sludge",
    "type": "Poison",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 125,
    "key": "MOVE_BONE_CLUB",
    "name": "Bone Club",
    "type": "Ground",
    "power": 65,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 126,
    "key": "MOVE_FIRE_BLAST",
    "name": "Fire Blast",
    "type": "Fire",
    "power": 120,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 127,
    "key": "MOVE_WATERFALL",
    "name": "Waterfall",
    "type": "Water",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 128,
    "key": "MOVE_CLAMP",
    "name": "Clamp",
    "type": "Water",
    "power": 35,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 129,
    "key": "MOVE_SWIFT",
    "name": "Swift",
    "type": "Normal",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 130,
    "key": "MOVE_SKULL_BASH",
    "name": "Skull Bash",
    "type": "Normal",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 131,
    "key": "MOVE_SPIKE_CANNON",
    "name": "Spike Cannon",
    "type": "Normal",
    "power": 20,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 132,
    "key": "MOVE_CONSTRICT",
    "name": "Constrict",
    "type": "Normal",
    "power": 10,
    "accuracy": 100,
    "pp": 35
  },
  {
    "id": 133,
    "key": "MOVE_AMNESIA",
    "name": "Amnesia",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 134,
    "key": "MOVE_KINESIS",
    "name": "Kinesis",
    "type": "Psychic",
    "power": 0,
    "accuracy": 80,
    "pp": 15
  },
  {
    "id": 135,
    "key": "MOVE_SOFT_BOILED",
    "name": "Soft Boiled",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 136,
    "key": "MOVE_HI_JUMP_KICK",
    "name": "Hi Jump Kick",
    "type": "Fighting",
    "power": 85,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 137,
    "key": "MOVE_GLARE",
    "name": "Glare",
    "type": "Normal",
    "power": 0,
    "accuracy": 75,
    "pp": 30
  },
  {
    "id": 138,
    "key": "MOVE_DREAM_EATER",
    "name": "Dream Eater",
    "type": "Psychic",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 139,
    "key": "MOVE_POISON_GAS",
    "name": "Poison Gas",
    "type": "Poison",
    "power": 0,
    "accuracy": 55,
    "pp": 40
  },
  {
    "id": 140,
    "key": "MOVE_BARRAGE",
    "name": "Barrage",
    "type": "Normal",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "id": 141,
    "key": "MOVE_LEECH_LIFE",
    "name": "Leech Life",
    "type": "Bug",
    "power": 20,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 142,
    "key": "MOVE_LOVELY_KISS",
    "name": "Lovely Kiss",
    "type": "Normal",
    "power": 0,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 143,
    "key": "MOVE_SKY_ATTACK",
    "name": "Sky Attack",
    "type": "Flying",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 144,
    "key": "MOVE_TRANSFORM",
    "name": "Transform",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 145,
    "key": "MOVE_BUBBLE",
    "name": "Bubble",
    "type": "Water",
    "power": 20,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 146,
    "key": "MOVE_DIZZY_PUNCH",
    "name": "Dizzy Punch",
    "type": "Normal",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 147,
    "key": "MOVE_SPORE",
    "name": "Spore",
    "type": "Grass",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 148,
    "key": "MOVE_FLASH",
    "name": "Flash",
    "type": "Normal",
    "power": 0,
    "accuracy": 70,
    "pp": 20
  },
  {
    "id": 149,
    "key": "MOVE_PSYWAVE",
    "name": "Psywave",
    "type": "Psychic",
    "power": 1,
    "accuracy": 80,
    "pp": 15
  },
  {
    "id": 150,
    "key": "MOVE_SPLASH",
    "name": "Splash",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 151,
    "key": "MOVE_ACID_ARMOR",
    "name": "Acid Armor",
    "type": "Poison",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 152,
    "key": "MOVE_CRABHAMMER",
    "name": "Crabhammer",
    "type": "Water",
    "power": 90,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 153,
    "key": "MOVE_EXPLOSION",
    "name": "Explosion",
    "type": "Normal",
    "power": 250,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 154,
    "key": "MOVE_FURY_SWIPES",
    "name": "Fury Swipes",
    "type": "Normal",
    "power": 18,
    "accuracy": 80,
    "pp": 15
  },
  {
    "id": 155,
    "key": "MOVE_BONEMERANG",
    "name": "Bonemerang",
    "type": "Ground",
    "power": 50,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 156,
    "key": "MOVE_REST",
    "name": "Rest",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 157,
    "key": "MOVE_ROCK_SLIDE",
    "name": "Rock Slide",
    "type": "Rock",
    "power": 75,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 158,
    "key": "MOVE_HYPER_FANG",
    "name": "Hyper Fang",
    "type": "Normal",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 159,
    "key": "MOVE_SHARPEN",
    "name": "Sharpen",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 160,
    "key": "MOVE_CONVERSION",
    "name": "Conversion",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 30
  },
  {
    "id": 161,
    "key": "MOVE_TRI_ATTACK",
    "name": "Tri Attack",
    "type": "Normal",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 162,
    "key": "MOVE_SUPER_FANG",
    "name": "Super Fang",
    "type": "Normal",
    "power": 1,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 163,
    "key": "MOVE_SLASH",
    "name": "Slash",
    "type": "Normal",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 164,
    "key": "MOVE_SUBSTITUTE",
    "name": "Substitute",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 165,
    "key": "MOVE_STRUGGLE",
    "name": "Struggle",
    "type": "Normal",
    "power": 50,
    "accuracy": 100,
    "pp": 1
  },
  {
    "id": 166,
    "key": "MOVE_SKETCH",
    "name": "Sketch",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 1
  },
  {
    "id": 167,
    "key": "MOVE_TRIPLE_KICK",
    "name": "Triple Kick",
    "type": "Fighting",
    "power": 10,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 168,
    "key": "MOVE_THIEF",
    "name": "Thief",
    "type": "Dark",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 169,
    "key": "MOVE_SPIDER_WEB",
    "name": "Spider Web",
    "type": "Bug",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 170,
    "key": "MOVE_MIND_READER",
    "name": "Mind Reader",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 171,
    "key": "MOVE_NIGHTMARE",
    "name": "Nightmare",
    "type": "Ghost",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 172,
    "key": "MOVE_FLAME_WHEEL",
    "name": "Flame Wheel",
    "type": "Fire",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 173,
    "key": "MOVE_SNORE",
    "name": "Snore",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 174,
    "key": "MOVE_CURSE",
    "name": "Curse",
    "type": "Mystery",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 175,
    "key": "MOVE_FLAIL",
    "name": "Flail",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 176,
    "key": "MOVE_CONVERSION_2",
    "name": "Conversion 2",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 177,
    "key": "MOVE_AEROBLAST",
    "name": "Aeroblast",
    "type": "Flying",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 178,
    "key": "MOVE_COTTON_SPORE",
    "name": "Cotton Spore",
    "type": "Grass",
    "power": 0,
    "accuracy": 85,
    "pp": 40
  },
  {
    "id": 179,
    "key": "MOVE_REVERSAL",
    "name": "Reversal",
    "type": "Fighting",
    "power": 1,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 180,
    "key": "MOVE_SPITE",
    "name": "Spite",
    "type": "Ghost",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 181,
    "key": "MOVE_POWDER_SNOW",
    "name": "Powder Snow",
    "type": "Ice",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 182,
    "key": "MOVE_PROTECT",
    "name": "Protect",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 183,
    "key": "MOVE_MACH_PUNCH",
    "name": "Mach Punch",
    "type": "Fighting",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 184,
    "key": "MOVE_SCARY_FACE",
    "name": "Scary Face",
    "type": "Normal",
    "power": 0,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 185,
    "key": "MOVE_FAINT_ATTACK",
    "name": "Faint Attack",
    "type": "Dark",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 186,
    "key": "MOVE_SWEET_KISS",
    "name": "Sweet Kiss",
    "type": "Normal",
    "power": 0,
    "accuracy": 75,
    "pp": 10
  },
  {
    "id": 187,
    "key": "MOVE_BELLY_DRUM",
    "name": "Belly Drum",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 188,
    "key": "MOVE_SLUDGE_BOMB",
    "name": "Sludge Bomb",
    "type": "Poison",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 189,
    "key": "MOVE_MUD_SLAP",
    "name": "Mud Slap",
    "type": "Ground",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 190,
    "key": "MOVE_OCTAZOOKA",
    "name": "Octazooka",
    "type": "Water",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 191,
    "key": "MOVE_SPIKES",
    "name": "Spikes",
    "type": "Ground",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 192,
    "key": "MOVE_ZAP_CANNON",
    "name": "Zap Cannon",
    "type": "Electric",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "id": 193,
    "key": "MOVE_FORESIGHT",
    "name": "Foresight",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 194,
    "key": "MOVE_DESTINY_BOND",
    "name": "Destiny Bond",
    "type": "Ghost",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 195,
    "key": "MOVE_PERISH_SONG",
    "name": "Perish Song",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 196,
    "key": "MOVE_ICY_WIND",
    "name": "Icy Wind",
    "type": "Ice",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 197,
    "key": "MOVE_DETECT",
    "name": "Detect",
    "type": "Fighting",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 198,
    "key": "MOVE_BONE_RUSH",
    "name": "Bone Rush",
    "type": "Ground",
    "power": 25,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 199,
    "key": "MOVE_LOCK_ON",
    "name": "Lock On",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 200,
    "key": "MOVE_OUTRAGE",
    "name": "Outrage",
    "type": "Dragon",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 201,
    "key": "MOVE_SANDSTORM",
    "name": "Sandstorm",
    "type": "Rock",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 202,
    "key": "MOVE_GIGA_DRAIN",
    "name": "Giga Drain",
    "type": "Grass",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 203,
    "key": "MOVE_ENDURE",
    "name": "Endure",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 204,
    "key": "MOVE_CHARM",
    "name": "Charm",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 205,
    "key": "MOVE_ROLLOUT",
    "name": "Rollout",
    "type": "Rock",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 206,
    "key": "MOVE_FALSE_SWIPE",
    "name": "False Swipe",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 207,
    "key": "MOVE_SWAGGER",
    "name": "Swagger",
    "type": "Normal",
    "power": 0,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 208,
    "key": "MOVE_MILK_DRINK",
    "name": "Milk Drink",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 209,
    "key": "MOVE_SPARK",
    "name": "Spark",
    "type": "Electric",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 210,
    "key": "MOVE_FURY_CUTTER",
    "name": "Fury Cutter",
    "type": "Bug",
    "power": 10,
    "accuracy": 95,
    "pp": 20
  },
  {
    "id": 211,
    "key": "MOVE_STEEL_WING",
    "name": "Steel Wing",
    "type": "Steel",
    "power": 70,
    "accuracy": 90,
    "pp": 25
  },
  {
    "id": 212,
    "key": "MOVE_MEAN_LOOK",
    "name": "Mean Look",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 213,
    "key": "MOVE_ATTRACT",
    "name": "Attract",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 214,
    "key": "MOVE_SLEEP_TALK",
    "name": "Sleep Talk",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 215,
    "key": "MOVE_HEAL_BELL",
    "name": "Heal Bell",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 216,
    "key": "MOVE_RETURN",
    "name": "Return",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 217,
    "key": "MOVE_PRESENT",
    "name": "Present",
    "type": "Normal",
    "power": 1,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 218,
    "key": "MOVE_FRUSTRATION",
    "name": "Frustration",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 219,
    "key": "MOVE_SAFEGUARD",
    "name": "Safeguard",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 25
  },
  {
    "id": 220,
    "key": "MOVE_PAIN_SPLIT",
    "name": "Pain Split",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 221,
    "key": "MOVE_SACRED_FIRE",
    "name": "Sacred Fire",
    "type": "Fire",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "id": 222,
    "key": "MOVE_MAGNITUDE",
    "name": "Magnitude",
    "type": "Ground",
    "power": 1,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 223,
    "key": "MOVE_DYNAMIC_PUNCH",
    "name": "Dynamic Punch",
    "type": "Fighting",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "id": 224,
    "key": "MOVE_MEGAHORN",
    "name": "Megahorn",
    "type": "Bug",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 225,
    "key": "MOVE_DRAGON_BREATH",
    "name": "Dragon Breath",
    "type": "Dragon",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 226,
    "key": "MOVE_BATON_PASS",
    "name": "Baton Pass",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 227,
    "key": "MOVE_ENCORE",
    "name": "Encore",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 228,
    "key": "MOVE_PURSUIT",
    "name": "Pursuit",
    "type": "Dark",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 229,
    "key": "MOVE_RAPID_SPIN",
    "name": "Rapid Spin",
    "type": "Normal",
    "power": 20,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 230,
    "key": "MOVE_SWEET_SCENT",
    "name": "Sweet Scent",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 231,
    "key": "MOVE_IRON_TAIL",
    "name": "Iron Tail",
    "type": "Steel",
    "power": 100,
    "accuracy": 75,
    "pp": 15
  },
  {
    "id": 232,
    "key": "MOVE_METAL_CLAW",
    "name": "Metal Claw",
    "type": "Steel",
    "power": 50,
    "accuracy": 95,
    "pp": 35
  },
  {
    "id": 233,
    "key": "MOVE_VITAL_THROW",
    "name": "Vital Throw",
    "type": "Fighting",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 234,
    "key": "MOVE_MORNING_SUN",
    "name": "Morning Sun",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 235,
    "key": "MOVE_SYNTHESIS",
    "name": "Synthesis",
    "type": "Grass",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 236,
    "key": "MOVE_MOONLIGHT",
    "name": "Moonlight",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 237,
    "key": "MOVE_HIDDEN_POWER",
    "name": "Hidden Power",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 238,
    "key": "MOVE_CROSS_CHOP",
    "name": "Cross Chop",
    "type": "Fighting",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "id": 239,
    "key": "MOVE_TWISTER",
    "name": "Twister",
    "type": "Dragon",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 240,
    "key": "MOVE_RAIN_DANCE",
    "name": "Rain Dance",
    "type": "Water",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 241,
    "key": "MOVE_SUNNY_DAY",
    "name": "Sunny Day",
    "type": "Fire",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 242,
    "key": "MOVE_CRUNCH",
    "name": "Crunch",
    "type": "Dark",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 243,
    "key": "MOVE_MIRROR_COAT",
    "name": "Mirror Coat",
    "type": "Psychic",
    "power": 1,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 244,
    "key": "MOVE_PSYCH_UP",
    "name": "Psych Up",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 245,
    "key": "MOVE_EXTREME_SPEED",
    "name": "Extreme Speed",
    "type": "Normal",
    "power": 80,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 246,
    "key": "MOVE_ANCIENT_POWER",
    "name": "Ancient Power",
    "type": "Rock",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 247,
    "key": "MOVE_SHADOW_BALL",
    "name": "Shadow Ball",
    "type": "Ghost",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 248,
    "key": "MOVE_FUTURE_SIGHT",
    "name": "Future Sight",
    "type": "Psychic",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 249,
    "key": "MOVE_ROCK_SMASH",
    "name": "Rock Smash",
    "type": "Fighting",
    "power": 20,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 250,
    "key": "MOVE_WHIRLPOOL",
    "name": "Whirlpool",
    "type": "Water",
    "power": 15,
    "accuracy": 70,
    "pp": 15
  },
  {
    "id": 251,
    "key": "MOVE_BEAT_UP",
    "name": "Beat Up",
    "type": "Dark",
    "power": 10,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 252,
    "key": "MOVE_FAKE_OUT",
    "name": "Fake Out",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 253,
    "key": "MOVE_UPROAR",
    "name": "Uproar",
    "type": "Normal",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 254,
    "key": "MOVE_STOCKPILE",
    "name": "Stockpile",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 255,
    "key": "MOVE_SPIT_UP",
    "name": "Spit Up",
    "type": "Normal",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 256,
    "key": "MOVE_SWALLOW",
    "name": "Swallow",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 257,
    "key": "MOVE_HEAT_WAVE",
    "name": "Heat Wave",
    "type": "Fire",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 258,
    "key": "MOVE_HAIL",
    "name": "Hail",
    "type": "Ice",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "id": 259,
    "key": "MOVE_TORMENT",
    "name": "Torment",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 260,
    "key": "MOVE_FLATTER",
    "name": "Flatter",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 261,
    "key": "MOVE_WILL_O_WISP",
    "name": "Will O Wisp",
    "type": "Fire",
    "power": 0,
    "accuracy": 75,
    "pp": 15
  },
  {
    "id": 262,
    "key": "MOVE_MEMENTO",
    "name": "Memento",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 263,
    "key": "MOVE_FACADE",
    "name": "Facade",
    "type": "Normal",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 264,
    "key": "MOVE_FOCUS_PUNCH",
    "name": "Focus Punch",
    "type": "Fighting",
    "power": 150,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 265,
    "key": "MOVE_SMELLING_SALT",
    "name": "Smelling Salt",
    "type": "Normal",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 266,
    "key": "MOVE_FOLLOW_ME",
    "name": "Follow Me",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 267,
    "key": "MOVE_NATURE_POWER",
    "name": "Nature Power",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 268,
    "key": "MOVE_CHARGE",
    "name": "Charge",
    "type": "Electric",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 269,
    "key": "MOVE_TAUNT",
    "name": "Taunt",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 270,
    "key": "MOVE_HELPING_HAND",
    "name": "Helping Hand",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 271,
    "key": "MOVE_TRICK",
    "name": "Trick",
    "type": "Psychic",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 272,
    "key": "MOVE_ROLE_PLAY",
    "name": "Role Play",
    "type": "Psychic",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 273,
    "key": "MOVE_WISH",
    "name": "Wish",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 274,
    "key": "MOVE_ASSIST",
    "name": "Assist",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 275,
    "key": "MOVE_INGRAIN",
    "name": "Ingrain",
    "type": "Grass",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 276,
    "key": "MOVE_SUPERPOWER",
    "name": "Superpower",
    "type": "Fighting",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 277,
    "key": "MOVE_MAGIC_COAT",
    "name": "Magic Coat",
    "type": "Psychic",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 278,
    "key": "MOVE_RECYCLE",
    "name": "Recycle",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 279,
    "key": "MOVE_REVENGE",
    "name": "Revenge",
    "type": "Fighting",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 280,
    "key": "MOVE_BRICK_BREAK",
    "name": "Brick Break",
    "type": "Fighting",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 281,
    "key": "MOVE_YAWN",
    "name": "Yawn",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 282,
    "key": "MOVE_KNOCK_OFF",
    "name": "Knock Off",
    "type": "Dark",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 283,
    "key": "MOVE_ENDEAVOR",
    "name": "Endeavor",
    "type": "Normal",
    "power": 1,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 284,
    "key": "MOVE_ERUPTION",
    "name": "Eruption",
    "type": "Fire",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 285,
    "key": "MOVE_SKILL_SWAP",
    "name": "Skill Swap",
    "type": "Psychic",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 286,
    "key": "MOVE_IMPRISON",
    "name": "Imprison",
    "type": "Psychic",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 287,
    "key": "MOVE_REFRESH",
    "name": "Refresh",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 288,
    "key": "MOVE_GRUDGE",
    "name": "Grudge",
    "type": "Ghost",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 289,
    "key": "MOVE_SNATCH",
    "name": "Snatch",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 290,
    "key": "MOVE_SECRET_POWER",
    "name": "Secret Power",
    "type": "Normal",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 291,
    "key": "MOVE_DIVE",
    "name": "Dive",
    "type": "Water",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 292,
    "key": "MOVE_ARM_THRUST",
    "name": "Arm Thrust",
    "type": "Fighting",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 293,
    "key": "MOVE_CAMOUFLAGE",
    "name": "Camouflage",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 294,
    "key": "MOVE_TAIL_GLOW",
    "name": "Tail Glow",
    "type": "Bug",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 295,
    "key": "MOVE_LUSTER_PURGE",
    "name": "Luster Purge",
    "type": "Psychic",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 296,
    "key": "MOVE_MIST_BALL",
    "name": "Mist Ball",
    "type": "Psychic",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 297,
    "key": "MOVE_FEATHER_DANCE",
    "name": "Feather Dance",
    "type": "Flying",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 298,
    "key": "MOVE_TEETER_DANCE",
    "name": "Teeter Dance",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 299,
    "key": "MOVE_BLAZE_KICK",
    "name": "Blaze Kick",
    "type": "Fire",
    "power": 85,
    "accuracy": 90,
    "pp": 10
  },
  {
    "id": 300,
    "key": "MOVE_MUD_SPORT",
    "name": "Mud Sport",
    "type": "Ground",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 301,
    "key": "MOVE_ICE_BALL",
    "name": "Ice Ball",
    "type": "Ice",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "id": 302,
    "key": "MOVE_NEEDLE_ARM",
    "name": "Needle Arm",
    "type": "Grass",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 303,
    "key": "MOVE_SLACK_OFF",
    "name": "Slack Off",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 304,
    "key": "MOVE_HYPER_VOICE",
    "name": "Hyper Voice",
    "type": "Normal",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 305,
    "key": "MOVE_POISON_FANG",
    "name": "Poison Fang",
    "type": "Poison",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 306,
    "key": "MOVE_CRUSH_CLAW",
    "name": "Crush Claw",
    "type": "Normal",
    "power": 75,
    "accuracy": 95,
    "pp": 10
  },
  {
    "id": 307,
    "key": "MOVE_BLAST_BURN",
    "name": "Blast Burn",
    "type": "Fire",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 308,
    "key": "MOVE_HYDRO_CANNON",
    "name": "Hydro Cannon",
    "type": "Water",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 309,
    "key": "MOVE_METEOR_MASH",
    "name": "Meteor Mash",
    "type": "Steel",
    "power": 100,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 310,
    "key": "MOVE_ASTONISH",
    "name": "Astonish",
    "type": "Ghost",
    "power": 30,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 311,
    "key": "MOVE_WEATHER_BALL",
    "name": "Weather Ball",
    "type": "Normal",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "id": 312,
    "key": "MOVE_AROMATHERAPY",
    "name": "Aromatherapy",
    "type": "Grass",
    "power": 0,
    "accuracy": 0,
    "pp": 5
  },
  {
    "id": 313,
    "key": "MOVE_FAKE_TEARS",
    "name": "Fake Tears",
    "type": "Dark",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 314,
    "key": "MOVE_AIR_CUTTER",
    "name": "Air Cutter",
    "type": "Flying",
    "power": 55,
    "accuracy": 95,
    "pp": 25
  },
  {
    "id": 315,
    "key": "MOVE_OVERHEAT",
    "name": "Overheat",
    "type": "Fire",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 316,
    "key": "MOVE_ODOR_SLEUTH",
    "name": "Odor Sleuth",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 317,
    "key": "MOVE_ROCK_TOMB",
    "name": "Rock Tomb",
    "type": "Rock",
    "power": 50,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 318,
    "key": "MOVE_SILVER_WIND",
    "name": "Silver Wind",
    "type": "Bug",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 319,
    "key": "MOVE_METAL_SOUND",
    "name": "Metal Sound",
    "type": "Steel",
    "power": 0,
    "accuracy": 85,
    "pp": 40
  },
  {
    "id": 320,
    "key": "MOVE_GRASS_WHISTLE",
    "name": "Grass Whistle",
    "type": "Grass",
    "power": 0,
    "accuracy": 55,
    "pp": 15
  },
  {
    "id": 321,
    "key": "MOVE_TICKLE",
    "name": "Tickle",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 322,
    "key": "MOVE_COSMIC_POWER",
    "name": "Cosmic Power",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 323,
    "key": "MOVE_WATER_SPOUT",
    "name": "Water Spout",
    "type": "Water",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 324,
    "key": "MOVE_SIGNAL_BEAM",
    "name": "Signal Beam",
    "type": "Bug",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 325,
    "key": "MOVE_SHADOW_PUNCH",
    "name": "Shadow Punch",
    "type": "Ghost",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 326,
    "key": "MOVE_EXTRASENSORY",
    "name": "Extrasensory",
    "type": "Psychic",
    "power": 80,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 327,
    "key": "MOVE_SKY_UPPERCUT",
    "name": "Sky Uppercut",
    "type": "Fighting",
    "power": 85,
    "accuracy": 90,
    "pp": 15
  },
  {
    "id": 328,
    "key": "MOVE_SAND_TOMB",
    "name": "Sand Tomb",
    "type": "Ground",
    "power": 15,
    "accuracy": 70,
    "pp": 15
  },
  {
    "id": 329,
    "key": "MOVE_SHEER_COLD",
    "name": "Sheer Cold",
    "type": "Ice",
    "power": 1,
    "accuracy": 30,
    "pp": 5
  },
  {
    "id": 330,
    "key": "MOVE_MUDDY_WATER",
    "name": "Muddy Water",
    "type": "Water",
    "power": 95,
    "accuracy": 85,
    "pp": 10
  },
  {
    "id": 331,
    "key": "MOVE_BULLET_SEED",
    "name": "Bullet Seed",
    "type": "Grass",
    "power": 10,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 332,
    "key": "MOVE_AERIAL_ACE",
    "name": "Aerial Ace",
    "type": "Flying",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 333,
    "key": "MOVE_ICICLE_SPEAR",
    "name": "Icicle Spear",
    "type": "Ice",
    "power": 10,
    "accuracy": 100,
    "pp": 30
  },
  {
    "id": 334,
    "key": "MOVE_IRON_DEFENSE",
    "name": "Iron Defense",
    "type": "Steel",
    "power": 0,
    "accuracy": 0,
    "pp": 15
  },
  {
    "id": 335,
    "key": "MOVE_BLOCK",
    "name": "Block",
    "type": "Normal",
    "power": 0,
    "accuracy": 100,
    "pp": 5
  },
  {
    "id": 336,
    "key": "MOVE_HOWL",
    "name": "Howl",
    "type": "Normal",
    "power": 0,
    "accuracy": 0,
    "pp": 40
  },
  {
    "id": 337,
    "key": "MOVE_DRAGON_CLAW",
    "name": "Dragon Claw",
    "type": "Dragon",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 338,
    "key": "MOVE_FRENZY_PLANT",
    "name": "Frenzy Plant",
    "type": "Grass",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "id": 339,
    "key": "MOVE_BULK_UP",
    "name": "Bulk Up",
    "type": "Fighting",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 340,
    "key": "MOVE_BOUNCE",
    "name": "Bounce",
    "type": "Flying",
    "power": 85,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 341,
    "key": "MOVE_MUD_SHOT",
    "name": "Mud Shot",
    "type": "Ground",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "id": 342,
    "key": "MOVE_POISON_TAIL",
    "name": "Poison Tail",
    "type": "Poison",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "id": 343,
    "key": "MOVE_COVET",
    "name": "Covet",
    "type": "Normal",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "id": 344,
    "key": "MOVE_VOLT_TACKLE",
    "name": "Volt Tackle",
    "type": "Electric",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 345,
    "key": "MOVE_MAGICAL_LEAF",
    "name": "Magical Leaf",
    "type": "Grass",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 346,
    "key": "MOVE_WATER_SPORT",
    "name": "Water Sport",
    "type": "Water",
    "power": 0,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 347,
    "key": "MOVE_CALM_MIND",
    "name": "Calm Mind",
    "type": "Psychic",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 348,
    "key": "MOVE_LEAF_BLADE",
    "name": "Leaf Blade",
    "type": "Grass",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "id": 349,
    "key": "MOVE_DRAGON_DANCE",
    "name": "Dragon Dance",
    "type": "Dragon",
    "power": 0,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 350,
    "key": "MOVE_ROCK_BLAST",
    "name": "Rock Blast",
    "type": "Rock",
    "power": 25,
    "accuracy": 80,
    "pp": 10
  },
  {
    "id": 351,
    "key": "MOVE_SHOCK_WAVE",
    "name": "Shock Wave",
    "type": "Electric",
    "power": 60,
    "accuracy": 0,
    "pp": 20
  },
  {
    "id": 352,
    "key": "MOVE_WATER_PULSE",
    "name": "Water Pulse",
    "type": "Water",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "id": 353,
    "key": "MOVE_DOOM_DESIRE",
    "name": "Doom Desire",
    "type": "Steel",
    "power": 120,
    "accuracy": 85,
    "pp": 5
  },
  {
    "id": 354,
    "key": "MOVE_PSYCHO_BOOST",
    "name": "Psycho Boost",
    "type": "Psychic",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  }
];

export const MOVES_BY_ID = new Map<number, MoveData>();
for (const m of MOVES_REGISTRY) {
  MOVES_BY_ID.set(m.id, m);
}

export function getMoveById(id: number): MoveData | undefined {
  return MOVES_BY_ID.get(id);
}
