# Pokémon Generation III Data Format Specification & Reverse Engineering Evidence

## 1. Provenance and Scope
- **Target Games:** Pokémon FireRed, LeafGreen, Emerald, Ruby, Sapphire.
- **Primary Source Code Reference:** `pret/pokefirered` (`include/pokemon.h`, `src/pokemon.c`, `include/constants/pokemon.h`, `charmap.txt`).
- **Verification Status:** Matched against decompiled C structures, mathematical formulas, and byte arrays.

---

## 2. Pokémon Data Structures

In Generation III, a Pokémon record exists in two binary representations:
1. **Box Pokémon (`struct BoxPokemon`):** 80 bytes. Used for all PC box storage.
2. **Party Pokémon (`struct Pokemon`):** 100 bytes. Used for the 6 Pokémon in the active player party. Contains the 80-byte `BoxPokemon` plus 20 bytes of battle/overworld runtime stats.

### 2.1 The 80-Byte Box Pokémon Record Layout
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x00   | 4    | Personality (PID)   | uint32_t little-endian; determines nature, gender, etc|
| 0x04   | 4    | OT ID               | Low 16 bits = Trainer ID (TID), High 16 = Secret (SID)|
| 0x08   | 10   | Nickname            | Gen 3 character encoding, 10 bytes, 0xFF-padded       |
| 0x12   | 1    | Language            | Language code (0x02 = English, etc.)                  |
| 0x13   | 1    | Sanitization Flags  | Bit 0: Bad Egg, Bit 1: Has Species, Bit 2: Is Egg     |
| 0x14   | 7    | OT Name             | Gen 3 character encoding, 7 bytes, 0xFF-padded        |
| 0x1B   | 1    | Markings            | Circle, Triangle, Square, Heart (4-bit bitmask)       |
| 0x1C   | 2    | Checksum            | 16-bit sum of all 24 halfwords of decrypted substructs|
| 0x1E   | 2    | Unknown / Unused    | 0x0000 padding                                        |
| 0x20   | 48   | Secure Substructures| 4 substructures of 12 bytes each, encrypted with key  |
+--------+------+---------------------+-------------------------------------------------------+
```

### 2.2 The 20-Byte Party Extension (Offsets 0x50 to 0x63)
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x50   | 4    | Status Condition    | Bitfield: Sleep (0-7), Poison (8), Burn (16), etc.    |
| 0x54   | 1    | Level               | Current level (1 to 100)                              |
| 0x55   | 1    | Mail ID             | Mail index (-1 or 0xFF if none)                       |
| 0x56   | 2    | Current HP          | uint16_t                                              |
| 0x58   | 2    | Max HP              | uint16_t                                              |
| 0x5A   | 2    | Attack              | uint16_t                                              |
| 0x5C   | 2    | Defense             | uint16_t                                              |
| 0x5E   | 2    | Speed               | uint16_t                                              |
| 0x60   | 2    | Sp. Attack          | uint16_t                                              |
| 0x62   | 2    | Sp. Defense         | uint16_t                                              |
+--------+------+---------------------+-------------------------------------------------------+
```

---

## 3. Substructures & Encryption Mechanics

### 3.1 The 4 Substructures (12 Bytes Each)

#### Substructure 0: Growth (Type 0 / G)
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x00   | 2    | Species ID          | uint16_t (1 to 386)                                   |
| 0x02   | 2    | Held Item ID        | uint16_t (0 for none)                                 |
| 0x04   | 4    | Experience Points   | uint32_t                                              |
| 0x08   | 1    | PP Up Bonuses       | 2 bits per move slot (bits 0-1 for move 1, etc.)      |
| 0x09   | 1    | Friendship          | 0 to 255                                              |
| 0x0A   | 2    | Filler / Unused     | 0x0000                                                |
+--------+------+---------------------+-------------------------------------------------------+
```

#### Substructure 1: Attacks (Type 1 / A)
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x00   | 2    | Move 1 ID           | uint16_t                                              |
| 0x02   | 2    | Move 2 ID           | uint16_t                                              |
| 0x04   | 2    | Move 3 ID           | uint16_t                                              |
| 0x06   | 2    | Move 4 ID           | uint16_t                                              |
| 0x08   | 1    | Move 1 Current PP   | uint8_t                                               |
| 0x09   | 1    | Move 2 Current PP   | uint8_t                                               |
| 0x0A   | 1    | Move 3 Current PP   | uint8_t                                               |
| 0x0B   | 1    | Move 4 Current PP   | uint8_t                                               |
+--------+------+---------------------+-------------------------------------------------------+
```

#### Substructure 2: EVs & Condition (Type 2 / E)
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x00   | 1    | HP EV               | 0 to 255                                              |
| 0x01   | 1    | Attack EV           | 0 to 255                                              |
| 0x02   | 1    | Defense EV          | 0 to 255                                              |
| 0x03   | 1    | Speed EV            | 0 to 255                                              |
| 0x04   | 1    | Sp. Attack EV       | 0 to 255                                              |
| 0x05   | 1    | Sp. Defense EV      | 0 to 255                                              |
| 0x06   | 1    | Coolness            | Contest stat (0 to 255)                               |
| 0x07   | 1    | Beauty              | Contest stat (0 to 255)                               |
| 0x08   | 1    | Cuteness            | Contest stat (0 to 255)                               |
| 0x09   | 1    | Smartness           | Contest stat (0 to 255)                               |
| 0x0A   | 1    | Toughness           | Contest stat (0 to 255)                               |
| 0x0B   | 1    | Sheen / Feel        | 0 to 255                                              |
+--------+------+---------------------+-------------------------------------------------------+
```

#### Substructure 3: Miscellaneous (Type 3 / M)
```
+--------+------+---------------------+-------------------------------------------------------+
| Offset | Size | Field Name          | Description                                           |
+--------+------+---------------------+-------------------------------------------------------+
| 0x00   | 1    | Pokérus Status      | Remaining days (low nibble), strain (high nibble)     |
| 0x01   | 1    | Met Location        | Location index where met                              |
| 0x02   | 2    | Origins / Pokeball  | Bits 0-6: Met Level (7 bits)                          |
|        |      |                     | Bits 7-10: Game of Origin (4 bits: 3=FR, 4=LG, etc.)  |
|        |      |                     | Bits 11-14: Ball Caught In (4 bits: 1=Master, 4=Poké) |
|        |      |                     | Bit 15: OT Gender (0 = Male, 1 = Female)              |
| 0x04   | 4    | IVs, Egg & Ability  | Bits 0-4: HP IV (5 bits, 0-31)                        |
|        |      |                     | Bits 5-9: Attack IV (5 bits, 0-31)                    |
|        |      |                     | Bits 10-14: Defense IV (5 bits, 0-31)                 |
|        |      |                     | Bits 15-19: Speed IV (5 bits, 0-31)                   |
|        |      |                     | Bits 20-24: Sp. Attack IV (5 bits, 0-31)              |
|        |      |                     | Bits 25-29: Sp. Defense IV (5 bits, 0-31)             |
|        |      |                     | Bit 30: Is Egg (1 = Egg, 0 = Hatched)                 |
|        |      |                     | Bit 31: Ability Index (0 = Ability 1, 1 = Ability 2)  |
| 0x08   | 4    | Ribbons & Obedience | Contest & special ribbons + obedience flag            |
+--------+------+---------------------+-------------------------------------------------------+
```

---

### 3.2 Substructure Ordering (Permutations 0 to 23)
The physical order in which G, A, E, M appear inside the 48-byte secure area (`0x20` to `0x4F`) is determined by:
`orderIndex = personality % 24`

```
 0: GAEM    6: AGEM   12: EGAM   18: MGAE
 1: GAME    7: AGME   13: EGMA   19: MGEA
 2: GEAM    8: AEGM   14: EAGM   20: MAGE
 3: GEMA    9: AEMG   15: EAMG   21: MAEG
 4: GMAE   10: AMGE   16: EMGA   22: MEGA
 5: GMEA   11: AMEG   17: EMAG   23: MEAG
```

### 3.3 Encryption and Decryption
Encryption key is a 32-bit integer:
`encryptionKey = personality ^ otId`

The 48-byte secure data consists of twelve 32-bit words (`raw[0..11]`):
- **Decryption:** For each word `i` from 0 to 11: `raw[i] ^= encryptionKey`.
- **Encryption:** For each word `i` from 0 to 11: `raw[i] ^= encryptionKey`.
Because XOR is an involution, the operation is symmetric.

### 3.4 Checksum Calculation
The 16-bit checksum stored at `0x1C` is calculated **after decryption**:
Sum all twenty-four 16-bit halfwords of the decrypted substructures:
```c
checksum = 0;
for (int i = 0; i < 24; i++) {
    checksum += decryptedHalfwords[i];
}
checksum &= 0xFFFF;
```

---

## 4. Personality-Dependent Mathematical Relations

The 32-bit `personality` (PID) governs multiple interdependent traits:

### 4.1 Nature
`nature = personality % 25`
Values 0 to 24 correspond to Hardy, Lonely, Brave, ..., Quirky.

### 4.2 Ability Selection
`abilityNum = (ivWord >>> 31) & 1`
When generating natural Pokémon: `abilityNum = personality & 1`.
If `abilityNum === 0`, species ability 1 applies; if `abilityNum === 1`, species ability 2 applies.

### 4.3 Gender
Determined by the lowest byte of personality (`p = personality & 0xFF`) evaluated against the species gender ratio:
- Genderless (`0xFF`): Always genderless.
- Female-only (`0xFE`): Always female.
- Male-only (`0x00`): Always male.
- Ratio-based:
  - If `(personality & 0xFF) < species.genderRatio`, the Pokémon is **Female**.
  - Otherwise, it is **Male**.

Ratios:
- 1 Female : 7 Male (12.5% F) -> threshold = 31 (`0x1F`)
- 1 Female : 3 Male (25% F)   -> threshold = 63 (`0x3F`)
- 1 Female : 1 Male (50% F)   -> threshold = 127 (`0x7F`)
- 3 Female : 1 Male (75% F)   -> threshold = 191 (`0xBF`)

### 4.4 Shiny Calculation
```c
TID = otId & 0xFFFF;
SID = (otId >>> 16) & 0xFFFF;
PID_HI = (personality >>> 16) & 0xFFFF;
PID_LO = personality & 0xFFFF;

shinyValue = TID ^ SID ^ PID_HI ^ PID_LO;
isShiny = shinyValue < 8;
```

### 4.5 Personality Solver
To create or edit a Pokémon with specific Nature, Gender, Ability, and Shiny status without corrupting OT ID:
We construct a solver that generates candidate PIDs satisfying:
1. `PID % 25 == desiredNature`
2. Gender test passes for `PID & 0xFF` against the species threshold.
3. `(PID & 1) == desiredAbilityNum` (for natural legality).
4. `(TID ^ SID ^ (PID >>> 16) ^ (PID & 0xFFFF)) < 8` (if shiny requested), or `>= 8` (if non-shiny requested).
