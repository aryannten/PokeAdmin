# PokéAdmin Implementation & Verification Status

## 1. Executive Summary & Scope Clarification
This document tracks verified reverse-engineered components, tested engine modules, UI features, and areas requiring live emulator hardware validation.

### Scope Clarification — Pokémon FireRed Generation III Architecture:
- **Save Format & Engine Generation:** Generation III Game Boy Advance.
- **Species Coverage:** All 386 National Pokédex species across Generation I (#001–#151), Generation II (#152–#251), and Generation III (#252–#386) are internally recognized and encoded by the FireRed engine.
- **Data-Format Validity vs In-Game Availability:** PokéAdmin explicitly distinguishes valid save file encoding from in-game obtainability. For example, Hoenn species such as Treecko (#252) use genuine Generation III data structures and internal ID 277, but are flagged in the UI as requiring trade from Ruby/Sapphire/Emerald for normal in-game encounters.
- **Generation IV+ Boundary:** Any species #387+ (such as Turtwig, Arceus) is strictly rejected as unsupported by the Generation III engine.

---

## 2. Species Registry & Gen 3 Mapping Matrix

| National Dex # | Species Name | Internal ID | Generation | Types | Primary Ability | Growth Rate | In-Game Obtainability in FireRed | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#001** | Bulbasaur | **1** | Gen I | Grass / Poison | Overgrow | Medium Slow | Kanto Native (Pallet Town Starter) | **Verified, Encoded & Tested** |
| **#150** | Mewtwo | **150** | Gen I | Psychic | Pressure | Slow | Cerulean Cave (Post-Game) | **Verified, Encoded & Tested** |
| **#151** | Mew | **151** | Gen I | Psychic | Synchronize | Medium Slow | Mythical Distribution / Event Only | **Verified, Encoded & Tested** |
| **#152** | Chikorita | **152** | Gen II | Grass | Overgrow | Medium Slow | Johto Starter (Emerald Trade / Post-Game) | **Verified, Encoded & Tested** |
| **#251** | Celebi | **251** | Gen II | Psychic / Grass | Natural Cure | Medium Slow | Mythical Distribution / Event Only | **Verified, Encoded & Tested** |
| **#252** | Treecko | **277** | Gen III | Grass | Overgrow | Medium Slow | Hoenn Starter (Trade from R/S/E Required) | **Verified, Encoded & Tested** *(Offset by 25 Old Unown)* |
| **#358** | Chimecho | **411** | Gen III | Psychic | Levitate | Fast | Hoenn Native (Trade from R/S/E Required) | **Verified, Encoded & Tested** *(Late addition index 411)* |
| **#386** | Deoxys | **410** | Gen III | Psychic | Pressure | Slow | Birth Island Event (Aurora Ticket) | **Verified, Encoded & Tested** *(Internal index 410)* |
| **252–276** | Old Unown B–Z | 252–276 | Gen II (Old) | Normal | None | Medium Fast | Unused internal development placeholders | **Rejected & Boundary Tested** |
| **#387+** | Gen IV+ Species | N/A | Gen IV+ | N/A | N/A | N/A | Unsupported in Gen III engine | **Rejected & Boundary Tested** |
| **0, 412, 493** | Invalid IDs | N/A | N/A | N/A | N/A | N/A | Boundary error condition | **Rejected & Boundary Tested** |

---

## 3. Engine Module Status

| Subsystem | Components | Implementation Status | Test Coverage |
| :--- | :--- | :--- | :--- |
| **Save Detection** | 128KB/64KB Detection, Wear-level slot selection, 14-sector signature & checksum check | Complete (`src/engine/save/save-detector.ts`) | Automated tests passing (`engine.test.ts`) |
| **Sector Footers** | Checksum calculation with section-specific sizes (`FIRERED_SECTION_SIZES`: 3876, 3968, 3816, 2000), signatures, counter | Complete (`src/engine/save/sector.ts`) | Automated tests passing (`engine.test.ts`) |
| **SaveBlock Parsing** | SaveBlock2 (Trainer, Dex), SaveBlock1 (Party, Money, Coins, Badges, Bag), Storage | Complete (`src/engine/save/save-parser.ts`) | Automated tests passing (`engine.test.ts`) |
| **Serialization** | Lossless round-trip serializer, footer re-writer, auto-increment counter | Complete (`src/engine/save/save-serializer.ts`) | Automated tests passing (`engine.test.ts`) |
| **Personality Solver** | Deterministic algebraic solver for PID = Nature, Gender, Ability, Shiny | Complete (`src/engine/personality.ts`) | Automated tests passing (`engine.test.ts`) |
| **Placement Service** | Auto Party (slots 0..5) -> Active PC Box -> Remaining Boxes -> Guaranteed Rollback | Complete (`src/engine/placement/placement-service.ts`) | Automated tests passing (`engine.test.ts`) |
| **Creation Studio** | 386 National Dex species generator with IV/EV/nature/moves/shiny | Complete (`src/engine/pokemon-creator.ts`) | Automated tests passing (`engine.test.ts`) |
| **Transaction History** | Immutable working copy, atomic operations, undo/redo, domain diff | Complete (`src/engine/transactions/transaction-manager.ts`) | Automated tests passing (`engine.test.ts`) |
| **FireRed Encryption** | Money, Coins, and Bag Item quantities XOR'd with SaveBlock2 encryptionKey | Complete (`src/engine/encryption.ts`) | Automated tests passing (`engine.test.ts`) |
| **Character Encoding** | Gen 3 Game Freak proprietary character mapping (`charmap.txt`) | Complete (`src/data/charset.ts`) | Automated tests passing (`engine.test.ts`) |

---

## 4. UI & Feature Implementation Checklist

- [x] Read-Only Save Inspector & File Upload (Milestone 1)
- [x] Diagnostics & Section table with checksum states
- [x] Pokémon Lab: Active 6-slot Party manager with stats, moves, deposit, duplicate, and release
- [x] PC Storage: 14 PC Boxes browser with 30-slot grid, wallpapers, rename, withdraw, and search across all 386 species
- [x] Pokémon Creator Studio: Search all 386 species with Gen 1/2/3 tabs and in-game obtainability notices
- [x] Pokémon Editor: Attributes, IVs, EVs, Moves, Shiny, Nature, and genuine Gen 3 abilities
- [x] Automatic Party/PC Placement integration with rollback safety
- [x] Inventory Manager: 5 FireRed Bag pockets (Items, Key Items, Balls, TMs, Berries) with capacity meters and encryption handling
- [x] Trainer & Progression Editor: Name, Money, Coins, Badges (8 Kanto gyms), Playtime
- [x] Pokédex Manager: Seen and Caught state toggles for all 386 National Dex species with batch helpers
- [x] Advanced Engineer Mode: Hex viewer, Checksum verifier, Domain Save Diff, Undo/Redo, Export to `.sav`
- [x] Game Specs & Reverse Engineering Guide: Interactive documentation of flash sectors, footers, and PID math
- [x] Desktop-first dark-mode theme with purple developer accents

---

## 5. Verification Matrix: Tested vs Unverified

### Verified & Automated Tests Passing (27/27 Vitest Tests):
1. **Target Species Mapping & Data:**
   - Bulbasaur (#001 -> Internal ID 1, Grass/Poison, Overgrow, Medium Slow, 12.5% F).
   - Mew (#151 -> Internal ID 151, Psychic, Synchronize, Medium Slow, Genderless, Event-only).
   - Chikorita (#152 -> Internal ID 152, Grass, Overgrow, Medium Slow, Johto starter).
   - Celebi (#251 -> Internal ID 251, Psychic/Grass, Natural Cure, Medium Slow, Genderless, Event-only).
   - Treecko (#252 -> Internal ID 277, Grass, Overgrow, Medium Slow, Hoenn trade).
   - Deoxys (#386 -> Internal ID 410, Psychic, Pressure, Slow, Genderless, Birth Island event).
   - Chimecho (#358 -> Internal ID 411, Psychic, Levitate, Fast).
2. **Boundary Validation:**
   - Rejection of species 0 (`SPECIES_NONE`), 252–276 (`OLD_UNOWN_B` to `OLD_UNOWN_Z`), 412 (`SPECIES_EGG`), 413 (`SPECIES_UNOWN_B`), 493 (Gen IV Arceus), and National Dex #387+ (Gen IV).
3. **Record Encoding & Checksum Calculations:**
   - Substructure permutation (PID % 24), XOR encryption, 16-bit halfword checksum generation.
4. **Sector Verification:**
   - Verification of wear-leveling dual-slot selection, sector signatures, and variable input byte sizes.
5. **Placement Service:**
   - Auto Party (<6) -> PC Box cascade -> complete transactional rollback on 426-slot full capacity.
6. **Round-Trip Serialization & Bug Fix Verification:**
   - Byte-exact 131,072 byte export with save counter increment and valid checksum generation.
   - Shedinja (Internal ID 303, Nat #292) verified with exactly 1 HP; Beautifly (Internal ID 292, Nat #267) verified with standard HP > 100.
   - Genuine move PP extraction from `pret/pokefirered` `battle_moves.h` across all 354 moves.
   - SaveBlock1 Mail area (`0x05F8`) verified preserved during serialization.
   - National Pokédex magic byte (`0xDA`) and mode (`0x01`) automatically enabled in SaveBlock2 whenever National entries are present.
   - Fixed `metGame` origin constant to 4 (FireRed).
   - Trainer name string padding fixed to 8 bytes to guarantee `0xFF` termination.
   - IV randomizer and editable inputs added to Pokémon Creator.

### Unverified / Emulator Hardware Scope:
1. **Physical Flash Cartridge Hardware Write Endurance:**
   - Tested in software emulators (My Boy! Android and mGBA desktop); physical GBA flash cart EEPROM/Flash write endurance not physically tested.
2. **GBA Wireless Adapter Live Protocol:**
   - FireRed wireless club communication packets are outside save-file scope.
