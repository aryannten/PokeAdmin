// Pure scratch-built Automatic Party & PC Placement Service
// Replicates official Pokémon storage placement logic with transactional safety

import { DecodedPokemon, WorkingSaveState } from '../save/types.ts';

export interface PlacementResult {
  success: boolean;
  destination?: 'party' | 'pc';
  partySlot?: number; // 0 to 5 (human 1 to 6)
  boxIndex?: number;  // 0 to 13 (human 1 to 14)
  boxSlot?: number;   // 0 to 29 (human 1 to 30)
  boxName?: string;
  message: string;
}

/**
 * Searches for the next available slot across Party and PC Storage.
 * Search Order:
 * 1. Party (slots 0..5): if party.length < 6, places in party.
 * 2. Currently selected PC Box: searches slots 0..29.
 * 3. Other PC Boxes (0..13) sequentially starting from (currentBox + 1) % 14.
 * 4. If all 14 boxes are completely full (420 Pokémon): fails safely without modifying state.
 */
export function placePokemon(
  state: WorkingSaveState,
  pokemon: DecodedPokemon
): { newState: WorkingSaveState; result: PlacementResult } {
  // Defensive deep-clone of state for guaranteed transactional safety
  const partyCopy = state.party.map((p) => ({ ...p }));
  const boxesCopy = state.storage.boxes.map((b) => ({
    ...b,
    pokemon: [...b.pokemon],
  }));

  // 1. Try Party Placement (Party limit = 6)
  if (partyCopy.length < 6) {
    const slot = partyCopy.length;
    const placedPokemon: DecodedPokemon = {
      ...pokemon,
      source: 'party',
      partyIndex: slot,
      boxIndex: undefined,
      slotIndex: undefined,
    };
    partyCopy.push(placedPokemon);

    const newState: WorkingSaveState = {
      ...state,
      party: partyCopy,
      isDirty: true,
    };

    return {
      newState,
      result: {
        success: true,
        destination: 'party',
        partySlot: slot,
        message: `Added to Party slot ${slot + 1}`,
      },
    };
  }

  // 2. Party is full (6/6). Search PC storage.
  const currentBox = state.storage.currentBox;
  const boxSearchOrder: number[] = [currentBox];

  for (let i = 0; i < 14; i++) {
    const b = (currentBox + i) % 14;
    if (b !== currentBox) {
      boxSearchOrder.push(b);
    }
  }

  for (const bIdx of boxSearchOrder) {
    const box = boxesCopy[bIdx];
    if (!box) continue;

    for (let sIdx = 0; sIdx < 30; sIdx++) {
      if (box.pokemon[sIdx] === null || box.pokemon[sIdx] === undefined) {
        // Found empty PC slot!
        const placedPokemon: DecodedPokemon = {
          ...pokemon,
          source: 'pc',
          partyIndex: undefined,
          boxIndex: bIdx,
          slotIndex: sIdx,
        };
        box.pokemon[sIdx] = placedPokemon;

        const newState: WorkingSaveState = {
          ...state,
          storage: {
            ...state.storage,
            boxes: boxesCopy,
          },
          isDirty: true,
        };

        const boxName = box.name || `Box ${bIdx + 1}`;
        return {
          newState,
          result: {
            success: true,
            destination: 'pc',
            boxIndex: bIdx,
            boxSlot: sIdx,
            boxName,
            message: `Stored in ${boxName}, slot ${sIdx + 1}`,
          },
        };
      }
    }
  }

  // 3. Storage completely full! Guaranteed rollback: state is unchanged.
  return {
    newState: state,
    result: {
      success: false,
      destination: 'pc',
      message: 'Cannot place Pokémon: Party is full and all 14 PC Boxes are completely occupied (420/420).',
    },
  };
}
