# Uncertainties, Assumptions, and Verification Status

## 1. Verified Facts (Highest Confidence)
1. **Save File Dimension:** Standard Gen 3 Flash saves are exactly 131,072 bytes (128 KiB).
2. **Sector Structure:** 32 sectors of 4,096 bytes each. 14 sectors per save slot.
3. **Sector Signatures:** Signature `0x08012025` at offset `0x0FF8` of every valid sector.
4. **Sector Identification:** Section ID at `0x0FF4` (uint16), Checksum at `0x0FF6` (uint16), Save Counter at `0x0FFC` (uint32).
5. **Sector-Specific Checksum Input Lengths:**
   - Section 0: 3,876 bytes (`0x0F24`)
   - Section 1, 2, 3: 3,968 bytes (`0x0F80`)
   - Section 4: 3,816 bytes (`0x0EE8`)
   - Section 5–12: 3,968 bytes (`0x0F80`)
   - Section 13: 2,000 bytes (`0x07D0`)
6. **Checksum Calculation:** 32-bit addition of little-endian words, followed by `((sum >> 16) + sum) & 0xFFFF`.
7. **FireRed Encryption Key:** Located at `SaveBlock2 + 0x0F20`. Used to XOR Money, Coins, and all Bag Item quantities.
8. **Box Pokémon:** 80 bytes. 4 substructures (12 bytes each) ordered by `PID % 24`, encrypted by `PID ^ OTID`. Checksum is 16-bit sum of decrypted halfwords.
9. **Party Pokémon:** 100 bytes (80-byte Box Pokémon + 20 bytes party battle data).
10. **Bag Pockets in FireRed:**
    - Items: 42 slots
    - Key Items: 30 slots
    - Poké Balls: 13 slots
    - TM Case: 58 slots
    - Berry Pouch: 43 slots
11. **Badges:** 8 Kanto gym badges stored as bits 0..7 of byte 260 of `SaveBlock1.flags` (offset `0x0FE4` of `SaveBlock1`).
12. **Trainer Profile:** Player name at `SaveBlock2 + 0x000` (7 chars + terminator), Gender at `0x008`, Trainer ID at `0x00A` (uint16 TID, uint16 SID), Playtime at `0x00E` (hours: u16, minutes: u8, seconds: u8, vblanks/frames: u8).

---

## 2. Assumptions Requiring Practical Consideration

### 2.1 Emulator File Sizes (64 KB vs 128 KB)
- Standard GBA emulators (My Boy!, mGBA, VBA-M) configure 128KB Flash (1Mbit) for FireRed.
- Some legacy emulators configured 64KB (512Kbit) saves, containing only Slot 1 (14 sectors) or truncating sectors 16-31.
- **Handling Strategy:**
  - Standard support target: 128 KiB (131,072 bytes).
  - Diagnostic warning if a 64 KiB file is loaded: parse Slot 1 in read-only mode, and warn the user that 128 KiB is standard for Flash 1Mbit in My Boy!.

### 2.2 Sector Rotation on Serialization
- When the game writes to flash, it rotates the physical sector order inside the slot (`gLastWrittenSector`).
- However, the game's loader scans all 14 sectors in the slot, reads each sector's `sectionId` at `0x0FF4`, and places it in memory accordingly.
- **Assumption:** Both rotated ordering and sequential ordering (physical sectors 0..13 matching Section IDs 0..13) are valid as long as each sector's footer metadata is correct. To preserve maximum fidelity, our serializer maintains the existing physical section positions of the file being edited.

### 2.3 Inactive Slot Preservation
- Generation III maintains two save slots. When saving in-game, only one slot is written to, while the other slot retains the state from the previous save.
- **Assumption:** Our serializer will update the active slot (or write the new save to the alternate slot with `saveIndex + 1`) while leaving the other slot intact as a safe fallback. By default, updating the active slot with a new checksum guarantees clean loading in My Boy!.

### 2.4 Unmapped Data Preservation
- Sectors contain extra data: Fame Checker, Quest Log, Record Mixing, Trainer Tower, Daycare, Roamer, etc.
- **Strategy:** All unmapped or unedited bytes within each sector payload are preserved bit-for-bit. We only modify the exact offsets of fields the user edits, re-encrypt only what changed, and recompute the sector checksums.

### 2.5 Generation III Species Coverage & In-Game Encounter Availability
- **Engine Encoding:** The Pokémon FireRed Generation III engine internally recognizes and encodes all 386 National Dex species (#001 to #386) into the 80-byte BoxMon and 100-byte PartyMon records.
- **Internal ID Offsets:** Game-internal species identifiers differ from National Pokédex numbers due to development placeholders (e.g., Old Unown forms at indices 252–276; Treecko at internal ID 277; Deoxys at 410; Chimecho at 411).
- **Format Validity vs Availability:** Any Pokémon created or edited within #001–#386 is valid data format-wise and will load cleanly in My Boy! without corruption. However, Hoenn species (#252–#386) are not catchable in wild FireRed grass without trade from Ruby/Sapphire/Emerald, and mythical Pokémon (Mew, Celebi, Deoxys) require event distributions. The workbench clearly surfaces this distinction via obtainability badges and warnings.
