# Pokémon FireRed Save Format Specification & Reverse Engineering Evidence

## 1. Provenance and Scope
- **Target Game:** Pokémon FireRed (US/EU Version 1.0 & 1.1)
- **Primary Source Code Reference:** `pret/pokefirered` decompilation project (`include/save.h`, `src/save.c`, `include/global.h`, `src/load_save.c`, `src/item.c`)
- **Secondary Community References:** Bulbapedia Save Data Structure (Generation III), Project Pokémon GBA Save Management.
- **Verification Status:** Verified against official matched decompilation source code and binary struct definitions.

---

## 2. Flash Memory and Save Architecture

### 2.1 File Size & Layout
Generation III Game Boy Advance cartridges utilize 128 KiB (131,072 bytes = `0x20000` bytes) of Flash-RAM (SRAM/FLASH).
The 128 KiB memory space is organized into **32 physical sectors** of 4,096 bytes (`0x1000` bytes) each.

```
+-------------------------------------------------------------------------+
| Sector Range | Physical Offsets  | Purpose                              |
+-------------------------------------------------------------------------+
| Sectors 0-13 | 0x00000 - 0x0DFFF | Save Slot 1 (Primary or Backup)      |
| Sectors 14-27| 0x0E000 - 0x1BFFF | Save Slot 2 (Primary or Backup)      |
| Sectors 28-29| 0x1C000 - 0x1DFFF | Hall of Fame Records                 |
| Sectors 30-31| 0x1E000 - 0x1FFFF | Trainer Tower / Mystery Event Buffer |
+-------------------------------------------------------------------------+
```

### 2.2 Dual-Slot Wear-Leveling and Redundancy
- The game alternates between **Save Slot 1** and **Save Slot 2** on every save.
- Each slot consists of **14 distinct sections** (Section IDs 0 through 13).
- **Physical Rotation:** Game Freak dynamically rotates the physical placement of sections within each 14-sector slot to distribute flash write wear. Therefore, Sector ID does NOT equal the physical index in flash. Every sector must be identified by reading its footer metadata.
- **Slot Selection Rule:**
  - Both slots are scanned.
  - A slot is considered valid if all 14 required sections (IDs 0–13) have valid signatures (`0x08012025`) and pass checksum validation.
  - The slot with the **highest 32-bit save counter** (`saveIndex`) is the active primary save.
  - Counter wrap-around (`0xFFFFFFFF` -> `0x00000000`) is handled by modular arithmetic comparison.
  - If the newest slot has corrupt sections, the engine falls back safely to the older backup slot.

---

## 3. Sector Physical Structure & Footer

Each 4,096-byte sector is composed of:
1. **Data Payload:** 3,968 bytes (`0x000` to `0xF7F`).
2. **Footer Metadata:** 128 bytes (`0xF80` to `0xFFF`), of which 12 bytes at the very end are used:

```
+-------------------------------------------------------------------------+
| Offset | Size (Bytes) | Field Name     | Description                    |
+-------------------------------------------------------------------------+
| 0x000  | 3968 (0xF80) | Data Payload   | Chunk data for SaveBlocks      |
| 0xF80  | 116          | Reserved       | Unused padding / zeroed bytes  |
| 0x0FF4 | 2            | Section ID     | 0 to 13 (Little-Endian uint16) |
| 0x0FF6 | 2            | Checksum       | Computed 16-bit word sum       |
| 0x0FF8 | 4            | Signature      | Magic: 0x08012025 (LE)         |
| 0x0FFC | 4            | Save Counter   | Incrementing uint32_t counter  |
+-------------------------------------------------------------------------+
```

---

## 4. The 14 Section Layout and Checksum Lengths

When assembled, the 14 sections reconstruct three main game structures:
1. `SaveBlock2` (3,876 bytes = `0x0F24`): Trainer profile, Pokedex, play time, options, security/encryption key.
2. `SaveBlock1` (15,720 bytes = `0x3D68`): Coordinates, party Pokemon, money, coins, item bag pockets, event flags, game stats.
3. `PokemonStorage` (33,744 bytes = `0x83D0`): 14 PC boxes with 30 Pokemon each, box names, wallpapers.

### 4.1 Section Chunks and Specific Checksum Lengths
In Pokémon FireRed, the checksum calculation routine `CalculateChecksum(data, size)` does **not** always hash all 3,968 bytes. It hashes exactly `sSaveSlotLayout[id].size` bytes!

```
+----+----------------------+---------+-------------+----------------------+
| ID | Destination Struct   | Chunk # | Offset      | Checksum Size (Bytes)|
+----+----------------------+---------+-------------+----------------------+
| 0  | struct SaveBlock2    | 0       | 0x0000      | 3,876 (0x0F24)       |
| 1  | struct SaveBlock1    | 0       | 0x0000      | 3,968 (0x0F80)       |
| 2  | struct SaveBlock1    | 1       | 0x0F80      | 3,968 (0x0F80)       |
| 3  | struct SaveBlock1    | 2       | 0x1F00      | 3,968 (0x0F80)       |
| 4  | struct SaveBlock1    | 3       | 0x2E80      | 3,816 (0x0EE8)       |
| 5  | struct PokemonStorage| 0       | 0x0000      | 3,968 (0x0F80)       |
| 6  | struct PokemonStorage| 1       | 0x0F80      | 3,968 (0x0F80)       |
| 7  | struct PokemonStorage| 2       | 0x1F00      | 3,968 (0x0F80)       |
| 8  | struct PokemonStorage| 3       | 0x2E80      | 3,968 (0x0F80)       |
| 9  | struct PokemonStorage| 4       | 0x3E00      | 3,968 (0x0F80)       |
| 10 | struct PokemonStorage| 5       | 0x4D80      | 3,968 (0x0F80)       |
| 11 | struct PokemonStorage| 6       | 0x5D00      | 3,968 (0x0F80)       |
| 12 | struct PokemonStorage| 7       | 0x6C80      | 3,968 (0x0F80)       |
| 13 | struct PokemonStorage| 8       | 0x7C00      | 2,000 (0x07D0)       |
+----+----------------------+---------+-------------+----------------------+
```

### 4.2 Sector Checksum Algorithm
Directly from `src/save.c`:
```c
static u16 CalculateChecksum(void *data, u16 size)
{
    u16 i;
    u32 checksum = 0;

    for (i = 0; i < (size / 4); i++)
    {
        checksum += *(u32 *)data;
        data += 4;
    }

    return ((checksum >> 16) + checksum);
}
```
**TypeScript implementation rule:**
Read `size / 4` 32-bit unsigned integers (little-endian), add them into an unsigned 32-bit accumulator, and return `((checksum >>> 16) + (checksum & 0xFFFF)) & 0xFFFF`.

---

## 5. Security & Encryption Key Mechanics

In Pokémon FireRed and LeafGreen, Game Freak introduced a dynamic 32-bit `encryptionKey` located at offset `0x0F20` in `SaveBlock2` (Section 0):

```
SaveBlock2 + 0x0F20: uint32_t encryptionKey;
```

### 5.1 Encrypted SaveBlock1 Fields:
1. **Money (uint32_t at SaveBlock1 + 0x0290):**
   `rawMoney = actualMoney ^ encryptionKey`
   `actualMoney = rawMoney ^ encryptionKey`
2. **Coins (uint16_t at SaveBlock1 + 0x0294):**
   `rawCoins = actualCoins ^ (encryptionKey & 0xFFFF)`
   `actualCoins = rawCoins ^ (encryptionKey & 0xFFFF)`
3. **Bag Item Quantities (SaveBlock1 item pockets):**
   Every item slot in the 5 bag pockets stores quantity XOR'd with the lower 16 bits of the key:
   `rawQuantity = actualQuantity ^ (encryptionKey & 0xFFFF)`
   `actualQuantity = rawQuantity ^ (encryptionKey & 0xFFFF)`
   *(Note: PC Items at SaveBlock1 + 0x0298 are NOT encrypted with encryptionKey).*

---

## 6. Safe Write & Serialization Policy

When modifying save files:
1. Work exclusively in memory on a cloned buffer.
2. Inactive Slot Preservation: Only update the designated target slot. In a pure editor workflow, we update the primary slot or alternate to the next slot with incremented `saveIndex` (`lastSaveCounter + 1`).
3. For modified sections:
   - Re-encrypt affected fields (money, coins, bag items) using the section's `encryptionKey`.
   - Compute the new sector checksum over its designated payload length.
   - Update `0x0FF4` (Section ID), `0x0FF6` (Checksum), `0x0FF8` (`0x08012025`), `0x0FFC` (Save Counter).
4. Preserve all unmapped bytes and reserved padding unchanged.
