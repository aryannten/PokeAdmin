// Pure scratch-built Generation III Item Registry
export type ItemPocket = 'items' | 'key_items' | 'poke_balls' | 'tm_case' | 'berries';

export interface ItemData {
  id: number;
  key: string;
  name: string;
  pocket: ItemPocket;
}

export const ITEMS_REGISTRY: ItemData[] = [
  {
    "id": 1,
    "key": "ITEM_MASTER_BALL",
    "name": "Master Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 2,
    "key": "ITEM_ULTRA_BALL",
    "name": "Ultra Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 3,
    "key": "ITEM_GREAT_BALL",
    "name": "Great Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 4,
    "key": "ITEM_POKE_BALL",
    "name": "Poke Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 5,
    "key": "ITEM_SAFARI_BALL",
    "name": "Safari Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 6,
    "key": "ITEM_NET_BALL",
    "name": "Net Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 7,
    "key": "ITEM_DIVE_BALL",
    "name": "Dive Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 8,
    "key": "ITEM_NEST_BALL",
    "name": "Nest Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 9,
    "key": "ITEM_REPEAT_BALL",
    "name": "Repeat Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 10,
    "key": "ITEM_TIMER_BALL",
    "name": "Timer Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 11,
    "key": "ITEM_LUXURY_BALL",
    "name": "Luxury Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 12,
    "key": "ITEM_PREMIER_BALL",
    "name": "Premier Ball",
    "pocket": "poke_balls"
  },
  {
    "id": 13,
    "key": "ITEM_POTION",
    "name": "Potion",
    "pocket": "items"
  },
  {
    "id": 14,
    "key": "ITEM_ANTIDOTE",
    "name": "Antidote",
    "pocket": "items"
  },
  {
    "id": 15,
    "key": "ITEM_BURN_HEAL",
    "name": "Burn Heal",
    "pocket": "items"
  },
  {
    "id": 16,
    "key": "ITEM_ICE_HEAL",
    "name": "Ice Heal",
    "pocket": "items"
  },
  {
    "id": 17,
    "key": "ITEM_AWAKENING",
    "name": "Awakening",
    "pocket": "items"
  },
  {
    "id": 18,
    "key": "ITEM_PARALYZE_HEAL",
    "name": "Paralyze Heal",
    "pocket": "items"
  },
  {
    "id": 19,
    "key": "ITEM_FULL_RESTORE",
    "name": "Full Restore",
    "pocket": "items"
  },
  {
    "id": 20,
    "key": "ITEM_MAX_POTION",
    "name": "Max Potion",
    "pocket": "items"
  },
  {
    "id": 21,
    "key": "ITEM_HYPER_POTION",
    "name": "Hyper Potion",
    "pocket": "items"
  },
  {
    "id": 22,
    "key": "ITEM_SUPER_POTION",
    "name": "Super Potion",
    "pocket": "items"
  },
  {
    "id": 23,
    "key": "ITEM_FULL_HEAL",
    "name": "Full Heal",
    "pocket": "items"
  },
  {
    "id": 24,
    "key": "ITEM_REVIVE",
    "name": "Revive",
    "pocket": "items"
  },
  {
    "id": 25,
    "key": "ITEM_MAX_REVIVE",
    "name": "Max Revive",
    "pocket": "items"
  },
  {
    "id": 26,
    "key": "ITEM_FRESH_WATER",
    "name": "Fresh Water",
    "pocket": "items"
  },
  {
    "id": 27,
    "key": "ITEM_SODA_POP",
    "name": "Soda Pop",
    "pocket": "items"
  },
  {
    "id": 28,
    "key": "ITEM_LEMONADE",
    "name": "Lemonade",
    "pocket": "items"
  },
  {
    "id": 29,
    "key": "ITEM_MOOMOO_MILK",
    "name": "Moomoo Milk",
    "pocket": "items"
  },
  {
    "id": 30,
    "key": "ITEM_ENERGY_POWDER",
    "name": "Energy Powder",
    "pocket": "items"
  },
  {
    "id": 31,
    "key": "ITEM_ENERGY_ROOT",
    "name": "Energy Root",
    "pocket": "items"
  },
  {
    "id": 32,
    "key": "ITEM_HEAL_POWDER",
    "name": "Heal Powder",
    "pocket": "items"
  },
  {
    "id": 33,
    "key": "ITEM_REVIVAL_HERB",
    "name": "Revival Herb",
    "pocket": "items"
  },
  {
    "id": 34,
    "key": "ITEM_ETHER",
    "name": "Ether",
    "pocket": "items"
  },
  {
    "id": 35,
    "key": "ITEM_MAX_ETHER",
    "name": "Max Ether",
    "pocket": "items"
  },
  {
    "id": 36,
    "key": "ITEM_ELIXIR",
    "name": "Elixir",
    "pocket": "items"
  },
  {
    "id": 37,
    "key": "ITEM_MAX_ELIXIR",
    "name": "Max Elixir",
    "pocket": "items"
  },
  {
    "id": 38,
    "key": "ITEM_LAVA_COOKIE",
    "name": "Lava Cookie",
    "pocket": "items"
  },
  {
    "id": 39,
    "key": "ITEM_BLUE_FLUTE",
    "name": "Blue Flute",
    "pocket": "key_items"
  },
  {
    "id": 40,
    "key": "ITEM_YELLOW_FLUTE",
    "name": "Yellow Flute",
    "pocket": "key_items"
  },
  {
    "id": 41,
    "key": "ITEM_RED_FLUTE",
    "name": "Red Flute",
    "pocket": "key_items"
  },
  {
    "id": 42,
    "key": "ITEM_BLACK_FLUTE",
    "name": "Black Flute",
    "pocket": "key_items"
  },
  {
    "id": 43,
    "key": "ITEM_WHITE_FLUTE",
    "name": "White Flute",
    "pocket": "key_items"
  },
  {
    "id": 44,
    "key": "ITEM_BERRY_JUICE",
    "name": "Berry Juice",
    "pocket": "items"
  },
  {
    "id": 45,
    "key": "ITEM_SACRED_ASH",
    "name": "Sacred Ash",
    "pocket": "items"
  },
  {
    "id": 46,
    "key": "ITEM_SHOAL_SALT",
    "name": "Shoal Salt",
    "pocket": "items"
  },
  {
    "id": 47,
    "key": "ITEM_SHOAL_SHELL",
    "name": "Shoal Shell",
    "pocket": "items"
  },
  {
    "id": 48,
    "key": "ITEM_RED_SHARD",
    "name": "Red Shard",
    "pocket": "items"
  },
  {
    "id": 49,
    "key": "ITEM_BLUE_SHARD",
    "name": "Blue Shard",
    "pocket": "items"
  },
  {
    "id": 50,
    "key": "ITEM_YELLOW_SHARD",
    "name": "Yellow Shard",
    "pocket": "items"
  },
  {
    "id": 51,
    "key": "ITEM_GREEN_SHARD",
    "name": "Green Shard",
    "pocket": "items"
  },
  {
    "id": 52,
    "key": "ITEM_034",
    "name": "034",
    "pocket": "items"
  },
  {
    "id": 53,
    "key": "ITEM_035",
    "name": "035",
    "pocket": "items"
  },
  {
    "id": 54,
    "key": "ITEM_036",
    "name": "036",
    "pocket": "items"
  },
  {
    "id": 55,
    "key": "ITEM_037",
    "name": "037",
    "pocket": "items"
  },
  {
    "id": 56,
    "key": "ITEM_038",
    "name": "038",
    "pocket": "items"
  },
  {
    "id": 57,
    "key": "ITEM_039",
    "name": "039",
    "pocket": "items"
  },
  {
    "id": 58,
    "key": "ITEM_03A",
    "name": "03a",
    "pocket": "items"
  },
  {
    "id": 59,
    "key": "ITEM_03B",
    "name": "03b",
    "pocket": "items"
  },
  {
    "id": 60,
    "key": "ITEM_03C",
    "name": "03c",
    "pocket": "items"
  },
  {
    "id": 61,
    "key": "ITEM_03D",
    "name": "03d",
    "pocket": "items"
  },
  {
    "id": 62,
    "key": "ITEM_03E",
    "name": "03e",
    "pocket": "items"
  },
  {
    "id": 63,
    "key": "ITEM_HP_UP",
    "name": "Hp Up",
    "pocket": "items"
  },
  {
    "id": 64,
    "key": "ITEM_PROTEIN",
    "name": "Protein",
    "pocket": "items"
  },
  {
    "id": 65,
    "key": "ITEM_IRON",
    "name": "Iron",
    "pocket": "items"
  },
  {
    "id": 66,
    "key": "ITEM_CARBOS",
    "name": "Carbos",
    "pocket": "items"
  },
  {
    "id": 67,
    "key": "ITEM_CALCIUM",
    "name": "Calcium",
    "pocket": "items"
  },
  {
    "id": 68,
    "key": "ITEM_RARE_CANDY",
    "name": "Rare Candy",
    "pocket": "items"
  },
  {
    "id": 69,
    "key": "ITEM_PP_UP",
    "name": "Pp Up",
    "pocket": "items"
  },
  {
    "id": 70,
    "key": "ITEM_ZINC",
    "name": "Zinc",
    "pocket": "items"
  },
  {
    "id": 71,
    "key": "ITEM_PP_MAX",
    "name": "Pp Max",
    "pocket": "items"
  },
  {
    "id": 72,
    "key": "ITEM_048",
    "name": "048",
    "pocket": "items"
  },
  {
    "id": 73,
    "key": "ITEM_GUARD_SPEC",
    "name": "Guard Spec",
    "pocket": "items"
  },
  {
    "id": 74,
    "key": "ITEM_DIRE_HIT",
    "name": "Dire Hit",
    "pocket": "items"
  },
  {
    "id": 75,
    "key": "ITEM_X_ATTACK",
    "name": "X Attack",
    "pocket": "items"
  },
  {
    "id": 76,
    "key": "ITEM_X_DEFEND",
    "name": "X Defend",
    "pocket": "items"
  },
  {
    "id": 77,
    "key": "ITEM_X_SPEED",
    "name": "X Speed",
    "pocket": "items"
  },
  {
    "id": 78,
    "key": "ITEM_X_ACCURACY",
    "name": "X Accuracy",
    "pocket": "items"
  },
  {
    "id": 79,
    "key": "ITEM_X_SPECIAL",
    "name": "X Special",
    "pocket": "items"
  },
  {
    "id": 80,
    "key": "ITEM_POKE_DOLL",
    "name": "Poke Doll",
    "pocket": "items"
  },
  {
    "id": 81,
    "key": "ITEM_FLUFFY_TAIL",
    "name": "Fluffy Tail",
    "pocket": "items"
  },
  {
    "id": 82,
    "key": "ITEM_052",
    "name": "052",
    "pocket": "items"
  },
  {
    "id": 83,
    "key": "ITEM_SUPER_REPEL",
    "name": "Super Repel",
    "pocket": "items"
  },
  {
    "id": 84,
    "key": "ITEM_MAX_REPEL",
    "name": "Max Repel",
    "pocket": "items"
  },
  {
    "id": 85,
    "key": "ITEM_ESCAPE_ROPE",
    "name": "Escape Rope",
    "pocket": "items"
  },
  {
    "id": 86,
    "key": "ITEM_REPEL",
    "name": "Repel",
    "pocket": "items"
  },
  {
    "id": 87,
    "key": "ITEM_057",
    "name": "057",
    "pocket": "items"
  },
  {
    "id": 88,
    "key": "ITEM_058",
    "name": "058",
    "pocket": "items"
  },
  {
    "id": 89,
    "key": "ITEM_059",
    "name": "059",
    "pocket": "items"
  },
  {
    "id": 90,
    "key": "ITEM_05A",
    "name": "05a",
    "pocket": "items"
  },
  {
    "id": 91,
    "key": "ITEM_05B",
    "name": "05b",
    "pocket": "items"
  },
  {
    "id": 92,
    "key": "ITEM_05C",
    "name": "05c",
    "pocket": "items"
  },
  {
    "id": 93,
    "key": "ITEM_SUN_STONE",
    "name": "Sun Stone",
    "pocket": "items"
  },
  {
    "id": 94,
    "key": "ITEM_MOON_STONE",
    "name": "Moon Stone",
    "pocket": "items"
  },
  {
    "id": 95,
    "key": "ITEM_FIRE_STONE",
    "name": "Fire Stone",
    "pocket": "items"
  },
  {
    "id": 96,
    "key": "ITEM_THUNDER_STONE",
    "name": "Thunder Stone",
    "pocket": "items"
  },
  {
    "id": 97,
    "key": "ITEM_WATER_STONE",
    "name": "Water Stone",
    "pocket": "items"
  },
  {
    "id": 98,
    "key": "ITEM_LEAF_STONE",
    "name": "Leaf Stone",
    "pocket": "items"
  },
  {
    "id": 99,
    "key": "ITEM_063",
    "name": "063",
    "pocket": "items"
  },
  {
    "id": 100,
    "key": "ITEM_064",
    "name": "064",
    "pocket": "items"
  },
  {
    "id": 101,
    "key": "ITEM_065",
    "name": "065",
    "pocket": "items"
  },
  {
    "id": 102,
    "key": "ITEM_066",
    "name": "066",
    "pocket": "items"
  },
  {
    "id": 103,
    "key": "ITEM_TINY_MUSHROOM",
    "name": "Tiny Mushroom",
    "pocket": "items"
  },
  {
    "id": 104,
    "key": "ITEM_BIG_MUSHROOM",
    "name": "Big Mushroom",
    "pocket": "items"
  },
  {
    "id": 105,
    "key": "ITEM_069",
    "name": "069",
    "pocket": "items"
  },
  {
    "id": 106,
    "key": "ITEM_PEARL",
    "name": "Pearl",
    "pocket": "items"
  },
  {
    "id": 107,
    "key": "ITEM_BIG_PEARL",
    "name": "Big Pearl",
    "pocket": "items"
  },
  {
    "id": 108,
    "key": "ITEM_STARDUST",
    "name": "Stardust",
    "pocket": "items"
  },
  {
    "id": 109,
    "key": "ITEM_STAR_PIECE",
    "name": "Star Piece",
    "pocket": "items"
  },
  {
    "id": 110,
    "key": "ITEM_NUGGET",
    "name": "Nugget",
    "pocket": "items"
  },
  {
    "id": 111,
    "key": "ITEM_HEART_SCALE",
    "name": "Heart Scale",
    "pocket": "items"
  },
  {
    "id": 112,
    "key": "ITEM_070",
    "name": "070",
    "pocket": "items"
  },
  {
    "id": 113,
    "key": "ITEM_071",
    "name": "071",
    "pocket": "items"
  },
  {
    "id": 114,
    "key": "ITEM_072",
    "name": "072",
    "pocket": "items"
  },
  {
    "id": 115,
    "key": "ITEM_073",
    "name": "073",
    "pocket": "items"
  },
  {
    "id": 116,
    "key": "ITEM_074",
    "name": "074",
    "pocket": "items"
  },
  {
    "id": 117,
    "key": "ITEM_075",
    "name": "075",
    "pocket": "items"
  },
  {
    "id": 118,
    "key": "ITEM_076",
    "name": "076",
    "pocket": "items"
  },
  {
    "id": 119,
    "key": "ITEM_077",
    "name": "077",
    "pocket": "items"
  },
  {
    "id": 120,
    "key": "ITEM_078",
    "name": "078",
    "pocket": "items"
  },
  {
    "id": 121,
    "key": "ITEM_ORANGE_MAIL",
    "name": "Orange Mail",
    "pocket": "items"
  },
  {
    "id": 122,
    "key": "ITEM_HARBOR_MAIL",
    "name": "Harbor Mail",
    "pocket": "items"
  },
  {
    "id": 123,
    "key": "ITEM_GLITTER_MAIL",
    "name": "Glitter Mail",
    "pocket": "items"
  },
  {
    "id": 124,
    "key": "ITEM_MECH_MAIL",
    "name": "Mech Mail",
    "pocket": "items"
  },
  {
    "id": 125,
    "key": "ITEM_WOOD_MAIL",
    "name": "Wood Mail",
    "pocket": "items"
  },
  {
    "id": 126,
    "key": "ITEM_WAVE_MAIL",
    "name": "Wave Mail",
    "pocket": "items"
  },
  {
    "id": 127,
    "key": "ITEM_BEAD_MAIL",
    "name": "Bead Mail",
    "pocket": "items"
  },
  {
    "id": 128,
    "key": "ITEM_SHADOW_MAIL",
    "name": "Shadow Mail",
    "pocket": "items"
  },
  {
    "id": 129,
    "key": "ITEM_TROPIC_MAIL",
    "name": "Tropic Mail",
    "pocket": "items"
  },
  {
    "id": 130,
    "key": "ITEM_DREAM_MAIL",
    "name": "Dream Mail",
    "pocket": "items"
  },
  {
    "id": 131,
    "key": "ITEM_FAB_MAIL",
    "name": "Fab Mail",
    "pocket": "items"
  },
  {
    "id": 132,
    "key": "ITEM_RETRO_MAIL",
    "name": "Retro Mail",
    "pocket": "items"
  },
  {
    "id": 133,
    "key": "ITEM_CHERI_BERRY",
    "name": "Cheri Berry",
    "pocket": "berries"
  },
  {
    "id": 134,
    "key": "ITEM_CHESTO_BERRY",
    "name": "Chesto Berry",
    "pocket": "berries"
  },
  {
    "id": 135,
    "key": "ITEM_PECHA_BERRY",
    "name": "Pecha Berry",
    "pocket": "berries"
  },
  {
    "id": 136,
    "key": "ITEM_RAWST_BERRY",
    "name": "Rawst Berry",
    "pocket": "berries"
  },
  {
    "id": 137,
    "key": "ITEM_ASPEAR_BERRY",
    "name": "Aspear Berry",
    "pocket": "berries"
  },
  {
    "id": 138,
    "key": "ITEM_LEPPA_BERRY",
    "name": "Leppa Berry",
    "pocket": "berries"
  },
  {
    "id": 139,
    "key": "ITEM_ORAN_BERRY",
    "name": "Oran Berry",
    "pocket": "berries"
  },
  {
    "id": 140,
    "key": "ITEM_PERSIM_BERRY",
    "name": "Persim Berry",
    "pocket": "berries"
  },
  {
    "id": 141,
    "key": "ITEM_LUM_BERRY",
    "name": "Lum Berry",
    "pocket": "berries"
  },
  {
    "id": 142,
    "key": "ITEM_SITRUS_BERRY",
    "name": "Sitrus Berry",
    "pocket": "berries"
  },
  {
    "id": 143,
    "key": "ITEM_FIGY_BERRY",
    "name": "Figy Berry",
    "pocket": "berries"
  },
  {
    "id": 144,
    "key": "ITEM_WIKI_BERRY",
    "name": "Wiki Berry",
    "pocket": "berries"
  },
  {
    "id": 145,
    "key": "ITEM_MAGO_BERRY",
    "name": "Mago Berry",
    "pocket": "berries"
  },
  {
    "id": 146,
    "key": "ITEM_AGUAV_BERRY",
    "name": "Aguav Berry",
    "pocket": "berries"
  },
  {
    "id": 147,
    "key": "ITEM_IAPAPA_BERRY",
    "name": "Iapapa Berry",
    "pocket": "berries"
  },
  {
    "id": 148,
    "key": "ITEM_RAZZ_BERRY",
    "name": "Razz Berry",
    "pocket": "berries"
  },
  {
    "id": 149,
    "key": "ITEM_BLUK_BERRY",
    "name": "Bluk Berry",
    "pocket": "berries"
  },
  {
    "id": 150,
    "key": "ITEM_NANAB_BERRY",
    "name": "Nanab Berry",
    "pocket": "berries"
  },
  {
    "id": 151,
    "key": "ITEM_WEPEAR_BERRY",
    "name": "Wepear Berry",
    "pocket": "berries"
  },
  {
    "id": 152,
    "key": "ITEM_PINAP_BERRY",
    "name": "Pinap Berry",
    "pocket": "berries"
  },
  {
    "id": 153,
    "key": "ITEM_POMEG_BERRY",
    "name": "Pomeg Berry",
    "pocket": "berries"
  },
  {
    "id": 154,
    "key": "ITEM_KELPSY_BERRY",
    "name": "Kelpsy Berry",
    "pocket": "berries"
  },
  {
    "id": 155,
    "key": "ITEM_QUALOT_BERRY",
    "name": "Qualot Berry",
    "pocket": "berries"
  },
  {
    "id": 156,
    "key": "ITEM_HONDEW_BERRY",
    "name": "Hondew Berry",
    "pocket": "berries"
  },
  {
    "id": 157,
    "key": "ITEM_GREPA_BERRY",
    "name": "Grepa Berry",
    "pocket": "berries"
  },
  {
    "id": 158,
    "key": "ITEM_TAMATO_BERRY",
    "name": "Tamato Berry",
    "pocket": "berries"
  },
  {
    "id": 159,
    "key": "ITEM_CORNN_BERRY",
    "name": "Cornn Berry",
    "pocket": "berries"
  },
  {
    "id": 160,
    "key": "ITEM_MAGOST_BERRY",
    "name": "Magost Berry",
    "pocket": "berries"
  },
  {
    "id": 161,
    "key": "ITEM_RABUTA_BERRY",
    "name": "Rabuta Berry",
    "pocket": "berries"
  },
  {
    "id": 162,
    "key": "ITEM_NOMEL_BERRY",
    "name": "Nomel Berry",
    "pocket": "berries"
  },
  {
    "id": 163,
    "key": "ITEM_SPELON_BERRY",
    "name": "Spelon Berry",
    "pocket": "berries"
  },
  {
    "id": 164,
    "key": "ITEM_PAMTRE_BERRY",
    "name": "Pamtre Berry",
    "pocket": "berries"
  },
  {
    "id": 165,
    "key": "ITEM_WATMEL_BERRY",
    "name": "Watmel Berry",
    "pocket": "berries"
  },
  {
    "id": 166,
    "key": "ITEM_DURIN_BERRY",
    "name": "Durin Berry",
    "pocket": "berries"
  },
  {
    "id": 167,
    "key": "ITEM_BELUE_BERRY",
    "name": "Belue Berry",
    "pocket": "berries"
  },
  {
    "id": 168,
    "key": "ITEM_LIECHI_BERRY",
    "name": "Liechi Berry",
    "pocket": "berries"
  },
  {
    "id": 169,
    "key": "ITEM_GANLON_BERRY",
    "name": "Ganlon Berry",
    "pocket": "berries"
  },
  {
    "id": 170,
    "key": "ITEM_SALAC_BERRY",
    "name": "Salac Berry",
    "pocket": "berries"
  },
  {
    "id": 171,
    "key": "ITEM_PETAYA_BERRY",
    "name": "Petaya Berry",
    "pocket": "berries"
  },
  {
    "id": 172,
    "key": "ITEM_APICOT_BERRY",
    "name": "Apicot Berry",
    "pocket": "berries"
  },
  {
    "id": 173,
    "key": "ITEM_LANSAT_BERRY",
    "name": "Lansat Berry",
    "pocket": "berries"
  },
  {
    "id": 174,
    "key": "ITEM_STARF_BERRY",
    "name": "Starf Berry",
    "pocket": "berries"
  },
  {
    "id": 175,
    "key": "ITEM_ENIGMA_BERRY",
    "name": "Enigma Berry",
    "pocket": "berries"
  },
  {
    "id": 176,
    "key": "ITEM_UNUSED_BERRY_1",
    "name": "Unused Berry 1",
    "pocket": "items"
  },
  {
    "id": 177,
    "key": "ITEM_UNUSED_BERRY_2",
    "name": "Unused Berry 2",
    "pocket": "items"
  },
  {
    "id": 178,
    "key": "ITEM_UNUSED_BERRY_3",
    "name": "Unused Berry 3",
    "pocket": "items"
  },
  {
    "id": 179,
    "key": "ITEM_BRIGHT_POWDER",
    "name": "Bright Powder",
    "pocket": "items"
  },
  {
    "id": 180,
    "key": "ITEM_WHITE_HERB",
    "name": "White Herb",
    "pocket": "items"
  },
  {
    "id": 181,
    "key": "ITEM_MACHO_BRACE",
    "name": "Macho Brace",
    "pocket": "items"
  },
  {
    "id": 182,
    "key": "ITEM_EXP_SHARE",
    "name": "Exp Share",
    "pocket": "items"
  },
  {
    "id": 183,
    "key": "ITEM_QUICK_CLAW",
    "name": "Quick Claw",
    "pocket": "items"
  },
  {
    "id": 184,
    "key": "ITEM_SOOTHE_BELL",
    "name": "Soothe Bell",
    "pocket": "items"
  },
  {
    "id": 185,
    "key": "ITEM_MENTAL_HERB",
    "name": "Mental Herb",
    "pocket": "items"
  },
  {
    "id": 186,
    "key": "ITEM_CHOICE_BAND",
    "name": "Choice Band",
    "pocket": "items"
  },
  {
    "id": 187,
    "key": "ITEM_KINGS_ROCK",
    "name": "Kings Rock",
    "pocket": "items"
  },
  {
    "id": 188,
    "key": "ITEM_SILVER_POWDER",
    "name": "Silver Powder",
    "pocket": "items"
  },
  {
    "id": 189,
    "key": "ITEM_AMULET_COIN",
    "name": "Amulet Coin",
    "pocket": "items"
  },
  {
    "id": 190,
    "key": "ITEM_CLEANSE_TAG",
    "name": "Cleanse Tag",
    "pocket": "items"
  },
  {
    "id": 191,
    "key": "ITEM_SOUL_DEW",
    "name": "Soul Dew",
    "pocket": "items"
  },
  {
    "id": 192,
    "key": "ITEM_DEEP_SEA_TOOTH",
    "name": "Deep Sea Tooth",
    "pocket": "items"
  },
  {
    "id": 193,
    "key": "ITEM_DEEP_SEA_SCALE",
    "name": "Deep Sea Scale",
    "pocket": "items"
  },
  {
    "id": 194,
    "key": "ITEM_SMOKE_BALL",
    "name": "Smoke Ball",
    "pocket": "items"
  },
  {
    "id": 195,
    "key": "ITEM_EVERSTONE",
    "name": "Everstone",
    "pocket": "items"
  },
  {
    "id": 196,
    "key": "ITEM_FOCUS_BAND",
    "name": "Focus Band",
    "pocket": "items"
  },
  {
    "id": 197,
    "key": "ITEM_LUCKY_EGG",
    "name": "Lucky Egg",
    "pocket": "items"
  },
  {
    "id": 198,
    "key": "ITEM_SCOPE_LENS",
    "name": "Scope Lens",
    "pocket": "key_items"
  },
  {
    "id": 199,
    "key": "ITEM_METAL_COAT",
    "name": "Metal Coat",
    "pocket": "items"
  },
  {
    "id": 200,
    "key": "ITEM_LEFTOVERS",
    "name": "Leftovers",
    "pocket": "items"
  },
  {
    "id": 201,
    "key": "ITEM_DRAGON_SCALE",
    "name": "Dragon Scale",
    "pocket": "items"
  },
  {
    "id": 202,
    "key": "ITEM_LIGHT_BALL",
    "name": "Light Ball",
    "pocket": "items"
  },
  {
    "id": 203,
    "key": "ITEM_SOFT_SAND",
    "name": "Soft Sand",
    "pocket": "items"
  },
  {
    "id": 204,
    "key": "ITEM_HARD_STONE",
    "name": "Hard Stone",
    "pocket": "items"
  },
  {
    "id": 205,
    "key": "ITEM_MIRACLE_SEED",
    "name": "Miracle Seed",
    "pocket": "items"
  },
  {
    "id": 206,
    "key": "ITEM_BLACK_GLASSES",
    "name": "Black Glasses",
    "pocket": "items"
  },
  {
    "id": 207,
    "key": "ITEM_BLACK_BELT",
    "name": "Black Belt",
    "pocket": "items"
  },
  {
    "id": 208,
    "key": "ITEM_MAGNET",
    "name": "Magnet",
    "pocket": "items"
  },
  {
    "id": 209,
    "key": "ITEM_MYSTIC_WATER",
    "name": "Mystic Water",
    "pocket": "items"
  },
  {
    "id": 210,
    "key": "ITEM_SHARP_BEAK",
    "name": "Sharp Beak",
    "pocket": "items"
  },
  {
    "id": 211,
    "key": "ITEM_POISON_BARB",
    "name": "Poison Barb",
    "pocket": "items"
  },
  {
    "id": 212,
    "key": "ITEM_NEVER_MELT_ICE",
    "name": "Never Melt Ice",
    "pocket": "items"
  },
  {
    "id": 213,
    "key": "ITEM_SPELL_TAG",
    "name": "Spell Tag",
    "pocket": "items"
  },
  {
    "id": 214,
    "key": "ITEM_TWISTED_SPOON",
    "name": "Twisted Spoon",
    "pocket": "items"
  },
  {
    "id": 215,
    "key": "ITEM_CHARCOAL",
    "name": "Charcoal",
    "pocket": "items"
  },
  {
    "id": 216,
    "key": "ITEM_DRAGON_FANG",
    "name": "Dragon Fang",
    "pocket": "items"
  },
  {
    "id": 217,
    "key": "ITEM_SILK_SCARF",
    "name": "Silk Scarf",
    "pocket": "items"
  },
  {
    "id": 218,
    "key": "ITEM_UP_GRADE",
    "name": "Up Grade",
    "pocket": "items"
  },
  {
    "id": 219,
    "key": "ITEM_SHELL_BELL",
    "name": "Shell Bell",
    "pocket": "items"
  },
  {
    "id": 220,
    "key": "ITEM_SEA_INCENSE",
    "name": "Sea Incense",
    "pocket": "items"
  },
  {
    "id": 221,
    "key": "ITEM_LAX_INCENSE",
    "name": "Lax Incense",
    "pocket": "items"
  },
  {
    "id": 222,
    "key": "ITEM_LUCKY_PUNCH",
    "name": "Lucky Punch",
    "pocket": "items"
  },
  {
    "id": 223,
    "key": "ITEM_METAL_POWDER",
    "name": "Metal Powder",
    "pocket": "items"
  },
  {
    "id": 224,
    "key": "ITEM_THICK_CLUB",
    "name": "Thick Club",
    "pocket": "items"
  },
  {
    "id": 225,
    "key": "ITEM_STICK",
    "name": "Stick",
    "pocket": "items"
  },
  {
    "id": 226,
    "key": "ITEM_0E2",
    "name": "0e2",
    "pocket": "items"
  },
  {
    "id": 227,
    "key": "ITEM_0E3",
    "name": "0e3",
    "pocket": "items"
  },
  {
    "id": 228,
    "key": "ITEM_0E4",
    "name": "0e4",
    "pocket": "items"
  },
  {
    "id": 229,
    "key": "ITEM_0E5",
    "name": "0e5",
    "pocket": "items"
  },
  {
    "id": 230,
    "key": "ITEM_0E6",
    "name": "0e6",
    "pocket": "items"
  },
  {
    "id": 231,
    "key": "ITEM_0E7",
    "name": "0e7",
    "pocket": "items"
  },
  {
    "id": 232,
    "key": "ITEM_0E8",
    "name": "0e8",
    "pocket": "items"
  },
  {
    "id": 233,
    "key": "ITEM_0E9",
    "name": "0e9",
    "pocket": "items"
  },
  {
    "id": 234,
    "key": "ITEM_0EA",
    "name": "0ea",
    "pocket": "items"
  },
  {
    "id": 235,
    "key": "ITEM_0EB",
    "name": "0eb",
    "pocket": "items"
  },
  {
    "id": 236,
    "key": "ITEM_0EC",
    "name": "0ec",
    "pocket": "items"
  },
  {
    "id": 237,
    "key": "ITEM_0ED",
    "name": "0ed",
    "pocket": "items"
  },
  {
    "id": 238,
    "key": "ITEM_0EE",
    "name": "0ee",
    "pocket": "items"
  },
  {
    "id": 239,
    "key": "ITEM_0EF",
    "name": "0ef",
    "pocket": "items"
  },
  {
    "id": 240,
    "key": "ITEM_0F0",
    "name": "0f0",
    "pocket": "items"
  },
  {
    "id": 241,
    "key": "ITEM_0F1",
    "name": "0f1",
    "pocket": "items"
  },
  {
    "id": 242,
    "key": "ITEM_0F2",
    "name": "0f2",
    "pocket": "items"
  },
  {
    "id": 243,
    "key": "ITEM_0F3",
    "name": "0f3",
    "pocket": "items"
  },
  {
    "id": 244,
    "key": "ITEM_0F4",
    "name": "0f4",
    "pocket": "items"
  },
  {
    "id": 245,
    "key": "ITEM_0F5",
    "name": "0f5",
    "pocket": "items"
  },
  {
    "id": 246,
    "key": "ITEM_0F6",
    "name": "0f6",
    "pocket": "items"
  },
  {
    "id": 247,
    "key": "ITEM_0F7",
    "name": "0f7",
    "pocket": "items"
  },
  {
    "id": 248,
    "key": "ITEM_0F8",
    "name": "0f8",
    "pocket": "items"
  },
  {
    "id": 249,
    "key": "ITEM_0F9",
    "name": "0f9",
    "pocket": "items"
  },
  {
    "id": 250,
    "key": "ITEM_0FA",
    "name": "0fa",
    "pocket": "items"
  },
  {
    "id": 251,
    "key": "ITEM_0FB",
    "name": "0fb",
    "pocket": "items"
  },
  {
    "id": 252,
    "key": "ITEM_0FC",
    "name": "0fc",
    "pocket": "items"
  },
  {
    "id": 253,
    "key": "ITEM_0FD",
    "name": "0fd",
    "pocket": "items"
  },
  {
    "id": 254,
    "key": "ITEM_RED_SCARF",
    "name": "Red Scarf",
    "pocket": "items"
  },
  {
    "id": 255,
    "key": "ITEM_BLUE_SCARF",
    "name": "Blue Scarf",
    "pocket": "items"
  },
  {
    "id": 256,
    "key": "ITEM_PINK_SCARF",
    "name": "Pink Scarf",
    "pocket": "items"
  },
  {
    "id": 257,
    "key": "ITEM_GREEN_SCARF",
    "name": "Green Scarf",
    "pocket": "items"
  },
  {
    "id": 258,
    "key": "ITEM_YELLOW_SCARF",
    "name": "Yellow Scarf",
    "pocket": "items"
  },
  {
    "id": 259,
    "key": "ITEM_MACH_BIKE",
    "name": "Mach Bike",
    "pocket": "items"
  },
  {
    "id": 260,
    "key": "ITEM_COIN_CASE",
    "name": "Coin Case",
    "pocket": "key_items"
  },
  {
    "id": 261,
    "key": "ITEM_ITEMFINDER",
    "name": "Itemfinder",
    "pocket": "items"
  },
  {
    "id": 262,
    "key": "ITEM_OLD_ROD",
    "name": "Old Rod",
    "pocket": "key_items"
  },
  {
    "id": 263,
    "key": "ITEM_GOOD_ROD",
    "name": "Good Rod",
    "pocket": "key_items"
  },
  {
    "id": 264,
    "key": "ITEM_SUPER_ROD",
    "name": "Super Rod",
    "pocket": "key_items"
  },
  {
    "id": 265,
    "key": "ITEM_SS_TICKET",
    "name": "Ss Ticket",
    "pocket": "key_items"
  },
  {
    "id": 266,
    "key": "ITEM_CONTEST_PASS",
    "name": "Contest Pass",
    "pocket": "key_items"
  },
  {
    "id": 267,
    "key": "ITEM_10B",
    "name": "10b",
    "pocket": "items"
  },
  {
    "id": 268,
    "key": "ITEM_WAILMER_PAIL",
    "name": "Wailmer Pail",
    "pocket": "items"
  },
  {
    "id": 269,
    "key": "ITEM_DEVON_GOODS",
    "name": "Devon Goods",
    "pocket": "items"
  },
  {
    "id": 270,
    "key": "ITEM_SOOT_SACK",
    "name": "Soot Sack",
    "pocket": "items"
  },
  {
    "id": 271,
    "key": "ITEM_BASEMENT_KEY",
    "name": "Basement Key",
    "pocket": "key_items"
  },
  {
    "id": 272,
    "key": "ITEM_ACRO_BIKE",
    "name": "Acro Bike",
    "pocket": "items"
  },
  {
    "id": 273,
    "key": "ITEM_POKEBLOCK_CASE",
    "name": "Pokeblock Case",
    "pocket": "key_items"
  },
  {
    "id": 274,
    "key": "ITEM_LETTER",
    "name": "Letter",
    "pocket": "key_items"
  },
  {
    "id": 275,
    "key": "ITEM_EON_TICKET",
    "name": "Eon Ticket",
    "pocket": "key_items"
  },
  {
    "id": 276,
    "key": "ITEM_RED_ORB",
    "name": "Red Orb",
    "pocket": "items"
  },
  {
    "id": 277,
    "key": "ITEM_BLUE_ORB",
    "name": "Blue Orb",
    "pocket": "items"
  },
  {
    "id": 278,
    "key": "ITEM_SCANNER",
    "name": "Scanner",
    "pocket": "items"
  },
  {
    "id": 279,
    "key": "ITEM_GO_GOGGLES",
    "name": "Go Goggles",
    "pocket": "items"
  },
  {
    "id": 280,
    "key": "ITEM_METEORITE",
    "name": "Meteorite",
    "pocket": "items"
  },
  {
    "id": 281,
    "key": "ITEM_ROOM_1_KEY",
    "name": "Room 1 Key",
    "pocket": "key_items"
  },
  {
    "id": 282,
    "key": "ITEM_ROOM_2_KEY",
    "name": "Room 2 Key",
    "pocket": "key_items"
  },
  {
    "id": 283,
    "key": "ITEM_ROOM_4_KEY",
    "name": "Room 4 Key",
    "pocket": "key_items"
  },
  {
    "id": 284,
    "key": "ITEM_ROOM_6_KEY",
    "name": "Room 6 Key",
    "pocket": "key_items"
  },
  {
    "id": 285,
    "key": "ITEM_STORAGE_KEY",
    "name": "Storage Key",
    "pocket": "key_items"
  },
  {
    "id": 286,
    "key": "ITEM_ROOT_FOSSIL",
    "name": "Root Fossil",
    "pocket": "key_items"
  },
  {
    "id": 287,
    "key": "ITEM_CLAW_FOSSIL",
    "name": "Claw Fossil",
    "pocket": "key_items"
  },
  {
    "id": 288,
    "key": "ITEM_DEVON_SCOPE",
    "name": "Devon Scope",
    "pocket": "key_items"
  },
  {
    "id": 289,
    "key": "ITEM_TM01",
    "name": "Tm01",
    "pocket": "tm_case"
  },
  {
    "id": 290,
    "key": "ITEM_TM02",
    "name": "Tm02",
    "pocket": "tm_case"
  },
  {
    "id": 291,
    "key": "ITEM_TM03",
    "name": "Tm03",
    "pocket": "tm_case"
  },
  {
    "id": 292,
    "key": "ITEM_TM04",
    "name": "Tm04",
    "pocket": "tm_case"
  },
  {
    "id": 293,
    "key": "ITEM_TM05",
    "name": "Tm05",
    "pocket": "tm_case"
  },
  {
    "id": 294,
    "key": "ITEM_TM06",
    "name": "Tm06",
    "pocket": "tm_case"
  },
  {
    "id": 295,
    "key": "ITEM_TM07",
    "name": "Tm07",
    "pocket": "tm_case"
  },
  {
    "id": 296,
    "key": "ITEM_TM08",
    "name": "Tm08",
    "pocket": "tm_case"
  },
  {
    "id": 297,
    "key": "ITEM_TM09",
    "name": "Tm09",
    "pocket": "tm_case"
  },
  {
    "id": 298,
    "key": "ITEM_TM10",
    "name": "Tm10",
    "pocket": "tm_case"
  },
  {
    "id": 299,
    "key": "ITEM_TM11",
    "name": "Tm11",
    "pocket": "tm_case"
  },
  {
    "id": 300,
    "key": "ITEM_TM12",
    "name": "Tm12",
    "pocket": "tm_case"
  },
  {
    "id": 301,
    "key": "ITEM_TM13",
    "name": "Tm13",
    "pocket": "tm_case"
  },
  {
    "id": 302,
    "key": "ITEM_TM14",
    "name": "Tm14",
    "pocket": "tm_case"
  },
  {
    "id": 303,
    "key": "ITEM_TM15",
    "name": "Tm15",
    "pocket": "tm_case"
  },
  {
    "id": 304,
    "key": "ITEM_TM16",
    "name": "Tm16",
    "pocket": "tm_case"
  },
  {
    "id": 305,
    "key": "ITEM_TM17",
    "name": "Tm17",
    "pocket": "tm_case"
  },
  {
    "id": 306,
    "key": "ITEM_TM18",
    "name": "Tm18",
    "pocket": "tm_case"
  },
  {
    "id": 307,
    "key": "ITEM_TM19",
    "name": "Tm19",
    "pocket": "tm_case"
  },
  {
    "id": 308,
    "key": "ITEM_TM20",
    "name": "Tm20",
    "pocket": "tm_case"
  },
  {
    "id": 309,
    "key": "ITEM_TM21",
    "name": "Tm21",
    "pocket": "tm_case"
  },
  {
    "id": 310,
    "key": "ITEM_TM22",
    "name": "Tm22",
    "pocket": "tm_case"
  },
  {
    "id": 311,
    "key": "ITEM_TM23",
    "name": "Tm23",
    "pocket": "tm_case"
  },
  {
    "id": 312,
    "key": "ITEM_TM24",
    "name": "Tm24",
    "pocket": "tm_case"
  },
  {
    "id": 313,
    "key": "ITEM_TM25",
    "name": "Tm25",
    "pocket": "tm_case"
  },
  {
    "id": 314,
    "key": "ITEM_TM26",
    "name": "Tm26",
    "pocket": "tm_case"
  },
  {
    "id": 315,
    "key": "ITEM_TM27",
    "name": "Tm27",
    "pocket": "tm_case"
  },
  {
    "id": 316,
    "key": "ITEM_TM28",
    "name": "Tm28",
    "pocket": "tm_case"
  },
  {
    "id": 317,
    "key": "ITEM_TM29",
    "name": "Tm29",
    "pocket": "tm_case"
  },
  {
    "id": 318,
    "key": "ITEM_TM30",
    "name": "Tm30",
    "pocket": "tm_case"
  },
  {
    "id": 319,
    "key": "ITEM_TM31",
    "name": "Tm31",
    "pocket": "tm_case"
  },
  {
    "id": 320,
    "key": "ITEM_TM32",
    "name": "Tm32",
    "pocket": "tm_case"
  },
  {
    "id": 321,
    "key": "ITEM_TM33",
    "name": "Tm33",
    "pocket": "tm_case"
  },
  {
    "id": 322,
    "key": "ITEM_TM34",
    "name": "Tm34",
    "pocket": "tm_case"
  },
  {
    "id": 323,
    "key": "ITEM_TM35",
    "name": "Tm35",
    "pocket": "tm_case"
  },
  {
    "id": 324,
    "key": "ITEM_TM36",
    "name": "Tm36",
    "pocket": "tm_case"
  },
  {
    "id": 325,
    "key": "ITEM_TM37",
    "name": "Tm37",
    "pocket": "tm_case"
  },
  {
    "id": 326,
    "key": "ITEM_TM38",
    "name": "Tm38",
    "pocket": "tm_case"
  },
  {
    "id": 327,
    "key": "ITEM_TM39",
    "name": "Tm39",
    "pocket": "tm_case"
  },
  {
    "id": 328,
    "key": "ITEM_TM40",
    "name": "Tm40",
    "pocket": "tm_case"
  },
  {
    "id": 329,
    "key": "ITEM_TM41",
    "name": "Tm41",
    "pocket": "tm_case"
  },
  {
    "id": 330,
    "key": "ITEM_TM42",
    "name": "Tm42",
    "pocket": "tm_case"
  },
  {
    "id": 331,
    "key": "ITEM_TM43",
    "name": "Tm43",
    "pocket": "tm_case"
  },
  {
    "id": 332,
    "key": "ITEM_TM44",
    "name": "Tm44",
    "pocket": "tm_case"
  },
  {
    "id": 333,
    "key": "ITEM_TM45",
    "name": "Tm45",
    "pocket": "tm_case"
  },
  {
    "id": 334,
    "key": "ITEM_TM46",
    "name": "Tm46",
    "pocket": "tm_case"
  },
  {
    "id": 335,
    "key": "ITEM_TM47",
    "name": "Tm47",
    "pocket": "tm_case"
  },
  {
    "id": 336,
    "key": "ITEM_TM48",
    "name": "Tm48",
    "pocket": "tm_case"
  },
  {
    "id": 337,
    "key": "ITEM_TM49",
    "name": "Tm49",
    "pocket": "tm_case"
  },
  {
    "id": 338,
    "key": "ITEM_TM50",
    "name": "Tm50",
    "pocket": "tm_case"
  },
  {
    "id": 339,
    "key": "ITEM_HM01",
    "name": "Hm01",
    "pocket": "tm_case"
  },
  {
    "id": 340,
    "key": "ITEM_HM02",
    "name": "Hm02",
    "pocket": "tm_case"
  },
  {
    "id": 341,
    "key": "ITEM_HM03",
    "name": "Hm03",
    "pocket": "tm_case"
  },
  {
    "id": 342,
    "key": "ITEM_HM04",
    "name": "Hm04",
    "pocket": "tm_case"
  },
  {
    "id": 343,
    "key": "ITEM_HM05",
    "name": "Hm05",
    "pocket": "tm_case"
  },
  {
    "id": 344,
    "key": "ITEM_HM06",
    "name": "Hm06",
    "pocket": "tm_case"
  },
  {
    "id": 345,
    "key": "ITEM_HM07",
    "name": "Hm07",
    "pocket": "tm_case"
  },
  {
    "id": 346,
    "key": "ITEM_HM08",
    "name": "Hm08",
    "pocket": "tm_case"
  },
  {
    "id": 347,
    "key": "ITEM_15B",
    "name": "15b",
    "pocket": "items"
  },
  {
    "id": 348,
    "key": "ITEM_15C",
    "name": "15c",
    "pocket": "items"
  },
  {
    "id": 349,
    "key": "ITEM_OAKS_PARCEL",
    "name": "Oaks Parcel",
    "pocket": "items"
  },
  {
    "id": 350,
    "key": "ITEM_POKE_FLUTE",
    "name": "Poke Flute",
    "pocket": "key_items"
  },
  {
    "id": 351,
    "key": "ITEM_SECRET_KEY",
    "name": "Secret Key",
    "pocket": "key_items"
  },
  {
    "id": 352,
    "key": "ITEM_BIKE_VOUCHER",
    "name": "Bike Voucher",
    "pocket": "key_items"
  },
  {
    "id": 353,
    "key": "ITEM_GOLD_TEETH",
    "name": "Gold Teeth",
    "pocket": "items"
  },
  {
    "id": 354,
    "key": "ITEM_OLD_AMBER",
    "name": "Old Amber",
    "pocket": "items"
  },
  {
    "id": 355,
    "key": "ITEM_CARD_KEY",
    "name": "Card Key",
    "pocket": "key_items"
  },
  {
    "id": 356,
    "key": "ITEM_LIFT_KEY",
    "name": "Lift Key",
    "pocket": "key_items"
  },
  {
    "id": 357,
    "key": "ITEM_HELIX_FOSSIL",
    "name": "Helix Fossil",
    "pocket": "key_items"
  },
  {
    "id": 358,
    "key": "ITEM_DOME_FOSSIL",
    "name": "Dome Fossil",
    "pocket": "key_items"
  },
  {
    "id": 359,
    "key": "ITEM_SILPH_SCOPE",
    "name": "Silph Scope",
    "pocket": "key_items"
  },
  {
    "id": 360,
    "key": "ITEM_BICYCLE",
    "name": "Bicycle",
    "pocket": "key_items"
  },
  {
    "id": 361,
    "key": "ITEM_TOWN_MAP",
    "name": "Town Map",
    "pocket": "key_items"
  },
  {
    "id": 362,
    "key": "ITEM_VS_SEEKER",
    "name": "Vs Seeker",
    "pocket": "items"
  },
  {
    "id": 363,
    "key": "ITEM_FAME_CHECKER",
    "name": "Fame Checker",
    "pocket": "items"
  },
  {
    "id": 364,
    "key": "ITEM_TM_CASE",
    "name": "Tm Case",
    "pocket": "key_items"
  },
  {
    "id": 365,
    "key": "ITEM_BERRY_POUCH",
    "name": "Berry Pouch",
    "pocket": "key_items"
  },
  {
    "id": 366,
    "key": "ITEM_TEACHY_TV",
    "name": "Teachy Tv",
    "pocket": "key_items"
  },
  {
    "id": 367,
    "key": "ITEM_TRI_PASS",
    "name": "Tri Pass",
    "pocket": "key_items"
  },
  {
    "id": 368,
    "key": "ITEM_RAINBOW_PASS",
    "name": "Rainbow Pass",
    "pocket": "key_items"
  },
  {
    "id": 369,
    "key": "ITEM_TEA",
    "name": "Tea",
    "pocket": "key_items"
  },
  {
    "id": 370,
    "key": "ITEM_MYSTIC_TICKET",
    "name": "Mystic Ticket",
    "pocket": "key_items"
  },
  {
    "id": 371,
    "key": "ITEM_AURORA_TICKET",
    "name": "Aurora Ticket",
    "pocket": "key_items"
  },
  {
    "id": 372,
    "key": "ITEM_POWDER_JAR",
    "name": "Powder Jar",
    "pocket": "items"
  },
  {
    "id": 373,
    "key": "ITEM_RUBY",
    "name": "Ruby",
    "pocket": "key_items"
  },
  {
    "id": 374,
    "key": "ITEM_SAPPHIRE",
    "name": "Sapphire",
    "pocket": "key_items"
  }
];

export const ITEMS_BY_ID = new Map<number, ItemData>();
for (const item of ITEMS_REGISTRY) {
  ITEMS_BY_ID.set(item.id, item);
}

export function getItemById(id: number): ItemData | undefined {
  return ITEMS_BY_ID.get(id);
}

// FireRed Pocket Capacity Limits
export const BAG_POCKET_CAPACITIES: Record<ItemPocket, number> = {
  items: 42,
  key_items: 30,
  poke_balls: 13,
  tm_case: 58,
  berries: 43
};
