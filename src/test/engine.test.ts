import { describe, it, expect } from 'vitest';
import {
  getSpeciesByNationalDex,
  getSpeciesByInternalId,
  nationalDexToInternalId,
  internalIdToNationalDex,
  isSpeciesSupported,
} from '../data/species.ts';
import { solvePersonality, getNatureFromPersonality, getGenderFromPersonality, isShiny } from '../engine/personality.ts';
import { detectSaveFile } from '../engine/save/save-detector.ts';
import { parseSaveFile } from '../engine/save/save-parser.ts';
import { serializeSaveFile } from '../engine/save/save-serializer.ts';
import { placePokemon } from '../engine/placement/placement-service.ts';
import { createPokemon } from '../engine/pokemon-creator.ts';
import { createSyntheticSaveFile } from './synthetic-save.ts';
import { decodeGen3String, encodeGen3String } from '../data/charset.ts';

describe('Species Registry & Internal ID Mapping', () => {
  it('correctly maps Bulbasaur (National #001 -> Internal ID 1)', () => {
    const sp = getSpeciesByNationalDex(1);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Bulbasaur');
    expect(sp?.internalId).toBe(1);
    expect(sp?.generation).toBe(1);
    expect(sp?.types).toEqual(['Grass', 'Poison']);
    expect(sp?.abilities[0]).toBe('Overgrow');
    expect(sp?.growthRate).toBe('medium_slow');
    expect(sp?.genderRatio).toBe(31); // 12.5% female
    expect(sp?.baseStats).toEqual({
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      spAttack: 65,
      spDefense: 65,
    });
    expect(sp?.obtainability).toBe('kanto_native');
    expect(nationalDexToInternalId(1)).toBe(1);
    expect(internalIdToNationalDex(1)).toBe(1);
  });

  it('correctly maps Mew (National #151 -> Internal ID 151)', () => {
    const sp = getSpeciesByNationalDex(151);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Mew');
    expect(sp?.internalId).toBe(151);
    expect(sp?.generation).toBe(1);
    expect(sp?.types).toEqual(['Psychic', null]);
    expect(sp?.abilities[0]).toBe('Synchronize');
    expect(sp?.genderRatio).toBe(255); // Genderless
    expect(sp?.growthRate).toBe('medium_slow');
    expect(sp?.obtainability).toBe('event_mythical');
    expect(sp?.obtainabilityNote).toContain('unobtainable in normal wild FireRed');
  });

  it('correctly maps Chikorita (National #152 -> Internal ID 152)', () => {
    const sp = getSpeciesByNationalDex(152);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Chikorita');
    expect(sp?.internalId).toBe(152);
    expect(sp?.generation).toBe(2);
    expect(sp?.types).toEqual(['Grass', null]);
    expect(sp?.abilities[0]).toBe('Overgrow');
    expect(sp?.obtainability).toBe('trade_hoenn');
    expect(sp?.obtainabilityNote).toContain('Johto starter; requires trade');
  });

  it('correctly maps Celebi (National #251 -> Internal ID 251)', () => {
    const sp = getSpeciesByNationalDex(251);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Celebi');
    expect(sp?.internalId).toBe(251);
    expect(sp?.generation).toBe(2);
    expect(sp?.types).toEqual(['Psychic', 'Grass']);
    expect(sp?.abilities[0]).toBe('Natural Cure');
    expect(sp?.genderRatio).toBe(255); // Genderless
    expect(sp?.obtainability).toBe('event_mythical');
    expect(sp?.obtainabilityNote).toContain('unobtainable in normal wild FireRed');
  });

  it('VERIFIED CRITICAL: Treecko (National #252 -> Internal ID 277, NOT 252)', () => {
    // In Generation III, IDs 252..276 are reserved for OLD_UNOWN forms!
    // Treecko is National #252, but internal ID is 277!
    const sp = getSpeciesByNationalDex(252);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Treecko');
    expect(sp?.internalId).toBe(277);
    expect(sp?.internalId).not.toBe(252);
    expect(sp?.generation).toBe(3);
    expect(sp?.types).toEqual(['Grass', null]);
    expect(sp?.abilities[0]).toBe('Overgrow');
    expect(sp?.obtainability).toBe('trade_hoenn');
    expect(sp?.obtainabilityNote).toContain('requires trade from Ruby/Sapphire/Emerald');

    const byInternal = getSpeciesByInternalId(277);
    expect(byInternal?.name).toBe('Treecko');
    expect(byInternal?.nationalDex).toBe(252);
  });

  it('VERIFIED CRITICAL: Chimecho (National #358 -> Internal ID 411)', () => {
    // Chimecho was added late after Deoxys in Gen 3 development
    const sp = getSpeciesByNationalDex(358);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Chimecho');
    expect(sp?.internalId).toBe(411);
    expect(sp?.types).toEqual(['Psychic', null]);
    expect(sp?.abilities[0]).toBe('Levitate');
    expect(sp?.growthRate).toBe('fast');
  });

  it('VERIFIED CRITICAL: Deoxys (National #386 -> Internal ID 410)', () => {
    const sp = getSpeciesByNationalDex(386);
    expect(sp).toBeDefined();
    expect(sp?.name).toBe('Deoxys');
    expect(sp?.internalId).toBe(410);
    expect(sp?.generation).toBe(3);
    expect(sp?.types).toEqual(['Psychic', null]);
    expect(sp?.abilities[0]).toBe('Pressure');
    expect(sp?.genderRatio).toBe(255); // Genderless
    expect(sp?.growthRate).toBe('slow');
    expect(sp?.obtainability).toBe('event_mythical');
    expect(sp?.obtainabilityNote).toContain('Birth Island');
  });

  it('correctly identifies unsupported species identifiers beyond supported range', () => {
    expect(isSpeciesSupported(0)).toBe(false);       // SPECIES_NONE
    expect(isSpeciesSupported(252)).toBe(false);     // OLD_UNOWN_B
    expect(isSpeciesSupported(276)).toBe(false);     // OLD_UNOWN_Z
    expect(isSpeciesSupported(412)).toBe(false);     // SPECIES_EGG
    expect(isSpeciesSupported(413)).toBe(false);     // SPECIES_UNOWN_B
    expect(isSpeciesSupported(493)).toBe(false);     // Arceus (Gen IV, invalid in Gen III)
    expect(getSpeciesByNationalDex(387)).toBeUndefined(); // Turtwig (Gen IV)
  });
});

describe('Gen 3 Encoding & In-Game Compatibility for Target Species', () => {
  const dummyTrainer = {
    name: 'ASH',
    gender: 'male' as const,
    trainerId: 12345,
    secretId: 54321,
    fullOtId: 12345 | (54321 << 16),
    hours: 10,
    minutes: 0,
    seconds: 0,
    frames: 0,
    money: 10000,
    coins: 100,
    badges: [true, false, false, false, false, false, false, false] as [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    encryptionKey: 0x12345678,
    rawSaveBlock2Bytes: new Uint8Array(3876),
  };

  it('creates and encodes Bulbasaur (#001, Internal 1) with valid checksum and stats', () => {
    const mon = createPokemon({
      speciesInternalId: 1,
      level: 15,
      natureId: 3, // Adamant
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(1);
    expect(mon.nationalDex).toBe(1);
    expect(mon.generation).toBe(1);
    expect(mon.isChecksumValid).toBe(true);
    expect(mon.calculatedStats.hp).toBeGreaterThan(0);
  });

  it('creates and encodes Mew (#151, Internal 151) as genderless mythical with valid checksum', () => {
    const mon = createPokemon({
      speciesInternalId: 151,
      level: 30,
      natureId: 0, // Hardy
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(151);
    expect(mon.nationalDex).toBe(151);
    expect(mon.gender).toBe('genderless');
    expect(mon.isChecksumValid).toBe(true);
  });

  it('creates and encodes Chikorita (#152, Internal 152) with valid checksum', () => {
    const mon = createPokemon({
      speciesInternalId: 152,
      level: 5,
      natureId: 1, // Lonely
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(152);
    expect(mon.nationalDex).toBe(152);
    expect(mon.generation).toBe(2);
    expect(mon.isChecksumValid).toBe(true);
  });

  it('creates and encodes Celebi (#251, Internal 251) as genderless mythical with valid checksum', () => {
    const mon = createPokemon({
      speciesInternalId: 251,
      level: 50,
      natureId: 15, // Modest
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(251);
    expect(mon.nationalDex).toBe(251);
    expect(mon.gender).toBe('genderless');
    expect(mon.isChecksumValid).toBe(true);
  });

  it('creates and encodes Treecko (#252, Internal 277) verifying internal ID is 277', () => {
    const mon = createPokemon({
      speciesInternalId: 277,
      level: 5,
      natureId: 10, // Timid
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(277);
    expect(mon.substructs.growth.species).not.toBe(252);
    expect(mon.nationalDex).toBe(252);
    expect(mon.generation).toBe(3);
    expect(mon.isChecksumValid).toBe(true);
  });

  it('creates and encodes Deoxys (#386, Internal 410) verifying internal ID is 410', () => {
    const mon = createPokemon({
      speciesInternalId: 410,
      level: 70,
      natureId: 3, // Adamant
      trainer: dummyTrainer,
    });
    expect(mon.substructs.growth.species).toBe(410);
    expect(mon.substructs.growth.species).not.toBe(386);
    expect(mon.nationalDex).toBe(386);
    expect(mon.generation).toBe(3);
    expect(mon.gender).toBe('genderless');
    expect(mon.isChecksumValid).toBe(true);
  });

  it('rejects unsupported species identifiers at creation boundary', () => {
    expect(() => createPokemon({ speciesInternalId: 0, level: 5, natureId: 0, trainer: dummyTrainer }))
      .toThrow('Unsupported species internal ID: 0');
    expect(() => createPokemon({ speciesInternalId: 252, level: 5, natureId: 0, trainer: dummyTrainer }))
      .toThrow('Unsupported species internal ID: 252');
    expect(() => createPokemon({ speciesInternalId: 412, level: 5, natureId: 0, trainer: dummyTrainer }))
      .toThrow('Unsupported species internal ID: 412');
    expect(() => createPokemon({ speciesInternalId: 493, level: 5, natureId: 0, trainer: dummyTrainer }))
      .toThrow('Unsupported species internal ID: 493');
  });
});

describe('Gen 3 Character Encoding Engine', () => {
  it('correctly encodes and decodes strings using Game Freak Gen 3 charset', () => {
    const encoded = encodeGen3String('ASH', 7);
    expect(encoded[0]).toBe(0xBB); // 'A' (187)
    expect(encoded[1]).toBe(0xCD); // 'S' (205)
    expect(encoded[2]).toBe(0xC2); // 'H' (194)
    expect(encoded[3]).toBe(0xFF); // EOS (255)

    const decoded = decodeGen3String(encoded);
    expect(decoded).toBe('ASH');
  });
});

describe('Personality Solver & Interdependent Calculations', () => {
  it('solves PID for Adamant, Male, Shiny, Ability 0', () => {
    const otId = 12345 | (54321 << 16);
    const pid = solvePersonality({
      desiredNature: 3, // Adamant
      desiredGender: 'male',
      genderRatio: 127, // 50% ratio
      desiredAbilityNum: 0,
      desiredShiny: true,
      otId,
    });

    expect(getNatureFromPersonality(pid)).toBe(3);
    expect(getGenderFromPersonality(pid, 127)).toBe('male');
    expect(pid & 1).toBe(0);
    expect(isShiny(pid, otId)).toBe(true);
  });

  it('solves PID for Modest, Female, Non-Shiny, Ability 1', () => {
    const otId = 12345 | (54321 << 16);
    const pid = solvePersonality({
      desiredNature: 15, // Modest
      desiredGender: 'female',
      genderRatio: 127, // 50% ratio
      desiredAbilityNum: 1,
      desiredShiny: false,
      otId,
    });

    expect(getNatureFromPersonality(pid)).toBe(15);
    expect(getGenderFromPersonality(pid, 127)).toBe('female');
    expect(pid & 1).toBe(1);
    expect(isShiny(pid, otId)).toBe(false);
  });
});

describe('Save Detector, Parser & Serializer Round-Trip', () => {
  it('detects a valid synthetic 128KB FireRed save file and selects Slot 1', () => {
    const raw = createSyntheticSaveFile(5);
    const diag = detectSaveFile(raw);

    expect(diag.is128KB).toBe(true);
    expect(diag.canEdit).toBe(true);
    expect(diag.activeSlotIndex).toBe(0); // Slot 1 has counter 5, Slot 2 has 4
    expect(diag.slots[0].isValid).toBe(true);
    expect(diag.slots[1].isValid).toBe(true);
    expect(diag.slots[0].missingSectionIds.length).toBe(0);
    expect(diag.slots[0].invalidChecksumSectionIds.length).toBe(0);
  });

  it('correctly parses Trainer info, Party, and PC Storage', () => {
    const raw = createSyntheticSaveFile(1);
    const diag = detectSaveFile(raw);
    const state = parseSaveFile(raw, diag);

    expect(state.trainer.name).toBe('RED');
    expect(state.trainer.gender).toBe('male');
    expect(state.trainer.money).toBe(50000);
    expect(state.trainer.coins).toBe(250);
    expect(state.trainer.hours).toBe(25);
    expect(state.trainer.minutes).toBe(42);

    // Badges (Boulder, Cascade, Thunder)
    expect(state.trainer.badges[0]).toBe(true);
    expect(state.trainer.badges[1]).toBe(true);
    expect(state.trainer.badges[2]).toBe(true);
    expect(state.trainer.badges[3]).toBe(false);

    // Party: 2 Pokémon
    expect(state.party.length).toBe(2);
    expect(state.party[0].nickname).toBe('BULBASAUR');
    expect(state.party[0].nationalDex).toBe(1);
    expect(state.party[0].level).toBe(15);
    expect(state.party[0].isChecksumValid).toBe(true);

    expect(state.party[1].nickname).toBe('PIKACHU');
    expect(state.party[1].nationalDex).toBe(25);
    expect(state.party[1].level).toBe(20);

    // PC Storage Box 1, Slot 1: Charizard
    const charizard = state.storage.boxes[0].pokemon[0];
    expect(charizard).toBeDefined();
    expect(charizard?.nickname).toBe('CHARIZARD');
    expect(charizard?.nationalDex).toBe(6);
    expect(charizard?.isChecksumValid).toBe(true);

    // Inventory
    expect(state.inventory.items.length).toBeGreaterThan(0);
    expect(state.inventory.items[0].id).toBe(13); // Potion
    expect(state.inventory.items[0].quantity).toBe(10);
  });

  it('performs lossless serialization and validates round-trip integrity', () => {
    const raw = createSyntheticSaveFile(10);
    const diag = detectSaveFile(raw);
    const state = parseSaveFile(raw, diag);

    // Modify money & add badge
    state.trainer.money = 999999;
    state.trainer.badges[3] = true; // Rainbow badge

    // Serialize
    const modifiedBytes = serializeSaveFile(state);
    expect(modifiedBytes.length).toBe(131072);

    // Re-detect and re-parse
    const reDiag = detectSaveFile(modifiedBytes);
    expect(reDiag.canEdit).toBe(true);
    expect(reDiag.activeSlotIndex).toBe(0);
    expect(reDiag.slots[0].saveCounter).toBe(11); // Incremented from 10 to 11

    const reState = parseSaveFile(modifiedBytes, reDiag);
    expect(reState.trainer.money).toBe(999999);
    expect(reState.trainer.badges[3]).toBe(true);
    expect(reState.party.length).toBe(2);
    expect(reState.party[0].nickname).toBe('BULBASAUR');
  });
});

describe('Automatic Party & PC Storage Placement Service', () => {
  it('places new Pokémon in Party slot 3 when party has 2 Pokémon', () => {
    const raw = createSyntheticSaveFile(1);
    const diag = detectSaveFile(raw);
    const state = parseSaveFile(raw, diag);

    expect(state.party.length).toBe(2);

    const newMon = createPokemon({
      speciesInternalId: 277, // Treecko!
      level: 5,
      natureId: 3, // Adamant
      trainer: state.trainer,
    });

    const { newState, result } = placePokemon(state, newMon);

    expect(result.success).toBe(true);
    expect(result.destination).toBe('party');
    expect(result.partySlot).toBe(2); // 3rd party slot (0-indexed: 2)
    expect(result.message).toBe('Added to Party slot 3');
    expect(newState.party.length).toBe(3);
    expect(newState.party[2].nationalDex).toBe(252);
    expect(newState.party[2].speciesName).toBe('Treecko');
  });

  it('automatically searches PC when Party is full (6 Pokémon) and places in current box', () => {
    const raw = createSyntheticSaveFile(1);
    const diag = detectSaveFile(raw);
    let state = parseSaveFile(raw, diag);

    // Fill party to 6 Pokémon
    while (state.party.length < 6) {
      const mon = createPokemon({
        speciesInternalId: 1,
        level: 5,
        natureId: 0,
        trainer: state.trainer,
      });
      state = placePokemon(state, mon).newState;
    }
    expect(state.party.length).toBe(6);

    // Now place 7th Pokémon (Deoxys, internal ID 410)
    const deoxys = createPokemon({
      speciesInternalId: 410,
      level: 30,
      natureId: 10, // Timid
      trainer: state.trainer,
    });

    const { newState, result } = placePokemon(state, deoxys);

    expect(result.success).toBe(true);
    expect(result.destination).toBe('pc');
    expect(result.boxIndex).toBe(0);
    expect(result.boxSlot).toBe(1); // Slot 0 has Charizard, so slot 1!
    expect(result.message).toContain('Stored in BOX 1, slot 2');

    // Storage slot 1 in Box 0 now contains Deoxys
    const storedMon = newState.storage.boxes[0].pokemon[1];
    expect(storedMon).toBeDefined();
    expect(storedMon?.nationalDex).toBe(386);
    expect(storedMon?.speciesName).toBe('Deoxys');
  });

  it('guarantees complete rollback when storage is completely full (420 PC + 6 Party)', () => {
    const raw = createSyntheticSaveFile(1);
    const diag = detectSaveFile(raw);
    let state = parseSaveFile(raw, diag);

    // Fill party (6)
    while (state.party.length < 6) {
      state.party.push(createPokemon({ speciesInternalId: 1, level: 5, natureId: 0, trainer: state.trainer }));
    }

    // Artificially fill all 14 boxes completely (14 * 30 = 420)
    for (let b = 0; b < 14; b++) {
      for (let s = 0; s < 30; s++) {
        state.storage.boxes[b].pokemon[s] = createPokemon({ speciesInternalId: 1, level: 5, natureId: 0, trainer: state.trainer });
      }
    }

    // Attempt to place an extra Pokémon
    const extraMon = createPokemon({
      speciesInternalId: 151, // Mew
      level: 10,
      natureId: 0,
      trainer: state.trainer,
    });

    const { newState, result } = placePokemon(state, extraMon);
    expect(result.success).toBe(false);
    expect(result.message).toContain('Party is full and all 14 PC Boxes are completely occupied');

    // Rollback guaranteed: state references are identical and no overwrite occurred
    expect(newState).toBe(state);
  });
});

describe('Verified Fixes & Engine Integrity', () => {
  const dummyTrainer = {
    name: 'ASH',
    gender: 'male' as const,
    trainerId: 12345,
    secretId: 54321,
    fullOtId: (12345 | (54321 << 16)) >>> 0,
    hours: 10,
    minutes: 0,
    seconds: 0,
    frames: 0,
    money: 10000,
    coins: 100,
    badges: [true, false, false, false, false, false, false, false] as [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    encryptionKey: 0x12345678,
    rawSaveBlock2Bytes: new Uint8Array(3876),
  };

  it('correctly calculates 1 HP for Shedinja (Internal ID 303) and standard HP for Beautifly (Internal ID 292)', () => {
    const shedinja = createPokemon({
      speciesInternalId: 303, // Shedinja
      level: 50,
      natureId: 0,
      trainer: dummyTrainer,
    });
    expect(shedinja.calculatedStats.hp).toBe(1);

    const beautifly = createPokemon({
      speciesInternalId: 292, // Beautifly
      level: 50,
      natureId: 0,
      trainer: dummyTrainer,
    });
    expect(beautifly.calculatedStats.hp).toBeGreaterThan(100);
  });

  it('assigns genuine move PP and metGame = 4 on creation', () => {
    // Moves: Fire Blast (126, PP: 5), Flamethrower (53, PP: 15), SolarBeam (76, PP: 10), Earthquake (89, PP: 10)
    const charizard = createPokemon({
      speciesInternalId: 6,
      level: 50,
      natureId: 0,
      moves: [126, 53, 76, 89],
      trainer: dummyTrainer,
    });
    expect(charizard.substructs.attacks.pp).toEqual([5, 15, 10, 10]);
    expect(charizard.substructs.misc.metGame).toBe(4); // FireRed
  });

  it('preserves SaveBlock1 Mail and activates National Dex magic 0xDA when national entries exist', () => {
    const raw = createSyntheticSaveFile(1);
    const diag = detectSaveFile(raw);
    const state = parseSaveFile(raw, diag);

    // Put sentinel bytes in SaveBlock1 Mail area (0x05F8 in SaveBlock1)
    // Section 1 is SaveBlock1 chunk 0 (starts at sector 1, phys offset 4096)
    const mailOffset = 4096 + 0x05F8;
    state.workingBytes[mailOffset] = 0x42;
    state.workingBytes[mailOffset + 1] = 0x99;

    // Mark Treecko (Dex #252) as caught
    state.pokedex.caught[252] = true;

    const modified = serializeSaveFile(state);

    // Verify SaveBlock1 mail area is PRESERVED (not overwritten by seen flags)
    expect(modified[mailOffset]).toBe(0x42);
    expect(modified[mailOffset + 1]).toBe(0x99);

    // Verify Section 0 (SaveBlock2) has National Pokédex magic 0xDA at offset 0x01A
    expect(modified[0x01A]).toBe(0xDA);
    expect(modified[0x019]).toBe(0x01); // DEX_MODE_NATIONAL
  });
});

