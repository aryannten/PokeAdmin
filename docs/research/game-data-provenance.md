# Game Data Provenance & Licensing Documentation

## 1. Overview and Principles
PokéAdmin is built as a clean-room, scratch-engineered Pokémon save-file workbench.
In compliance with project requirements:
- No code or binaries are taken from PKHeX, PKHeX.Core, or PKHeX.Everywhere.
- No proprietary ROM files, Nintendo BIOS files, or extracted proprietary game assets are embedded.
- Data tables (species stats, moves, item names/constants, abilities, evolution data, character mappings) are derived from the public, open-source clean-room decompilation project `pret/pokefirered` (MIT License) and Bulbapedia public format documentation.

---

## 2. Dataset Provenance Registry

### 2.1 Species Registry
- **Source:** `pret/pokefirered` (`include/constants/species.h`, `src/data/pokemon/species_info.h`).
- **Coverage:** Generation III National Pokédex IDs 1 to 386 (Bulbasaur to Deoxys).
- **Extracted Fields:**
  - Species ID, National Dex Number, Name.
  - Base stats (HP, Attack, Defense, Speed, Sp. Attack, Sp. Defense).
  - Primary and secondary types.
  - Possible abilities (Ability 1 and Ability 2).
  - Gender ratio threshold byte.
  - Base experience yield, Growth Rate curve.
  - Catch rate, base friendship.
- **Verification Status:** Verified against matched retail disassembly data.

### 2.2 Move Registry
- **Source:** `pret/pokefirered` (`include/constants/moves.h`, `src/data/battle_moves.h`).
- **Coverage:** Move IDs 1 to 354 (Pound to Psycho Boost).
- **Extracted Fields:** Move ID, Name, Type, Power, Accuracy, Base PP, Target, Category.
- **Verification Status:** Verified against decompilation constants.

### 2.3 Item & Bag Pockets Registry
- **Source:** `pret/pokefirered` (`include/constants/items.h`, `src/item.c`).
- **Coverage:** Item IDs 1 to 376.
- **Pockets:**
  1. Items (Capacity: 42)
  2. Key Items (Capacity: 30)
  3. Poké Balls (Capacity: 13)
  4. TM Case (Capacity: 58 - TM01 to TM50, HM01 to HM08)
  5. Berry Pouch (Capacity: 43 - Cheri to Enigma)
- **Verification Status:** Verified against `struct BagPocket gBagPockets[]` in `src/item.c`.

### 2.4 Nature & Growth Rate Tables
- **Source:** Standard Gen 3 mathematical formulas from Bulbapedia and `src/pokemon.c`.
- **Natures:** 25 natures with exact +10% and -10% stat modifiers.
- **Growth Rates:** Medium Fast, Erratic, Fluctuating, Medium Slow, Fast, Slow, calculated with exact integer polynomials.

### 2.5 Character Set & Encoding Table
- **Source:** `pret/pokefirered` (`charmap.txt`).
- **Encoding Scheme:** Custom Generation III Japanese & International charset.
- **Key mappings:**
  - `' ' = 0x00`
  - `'0'..'9' = 0xA1..0xAA`
  - `'A'..'Z' = 0xBB..0xD4`
  - `'a'..'z' = 0xD5..0xEE`
  - `EOS / Terminator = 0xFF`
  - Punctuation, symbols, gender symbols (`♂ = 0xB5`, `♀ = 0xB6`).
- **Verification Status:** 100% matched against `charmap.txt`.
