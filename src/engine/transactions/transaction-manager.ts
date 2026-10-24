// Pure scratch-built Transaction & History Manager with Undo/Redo & Save Diff

import { WorkingSaveState } from '../save/types.ts';

export interface DiffEntry {
  category: 'trainer' | 'party' | 'pc' | 'inventory' | 'pokedex';
  title: string;
  field: string;
  originalValue: string;
  workingValue: string;
}

export interface SaveDiffSummary {
  hasChanges: boolean;
  totalChanges: number;
  entries: DiffEntry[];
}

export class TransactionManager {
  private history: WorkingSaveState[] = [];
  private future: WorkingSaveState[] = [];
  private snapshots: Map<string, WorkingSaveState> = new Map();
  private maxHistory: number;

  constructor(initialState: WorkingSaveState, maxHistory = 50) {
    this.history.push(initialState);
    this.maxHistory = maxHistory;
  }

  get current(): WorkingSaveState {
    return this.history[this.history.length - 1];
  }

  get canUndo(): boolean {
    return this.history.length > 1;
  }

  get canRedo(): boolean {
    return this.future.length > 0;
  }

  get historyCount(): number {
    return this.history.length;
  }

  /**
   * Applies an atomic mutation. If the mutator throws an error, the state is untouched.
   */
  apply(mutator: (current: WorkingSaveState) => WorkingSaveState): WorkingSaveState {
    const currentState = this.current;
    try {
      const nextState = mutator(currentState);
      this.history.push({ ...nextState, isDirty: true });
      if (this.history.length > this.maxHistory) {
        this.history.shift();
      }
      this.future = []; // Clear redo stack on new action
      return this.current;
    } catch (err) {
      // Guaranteed rollback: no state changes pushed to history
      throw err;
    }
  }

  undo(): boolean {
    if (!this.canUndo) return false;
    const item = this.history.pop()!;
    this.future.push(item);
    return true;
  }

  redo(): boolean {
    if (!this.canRedo) return false;
    const item = this.future.pop()!;
    this.history.push(item);
    return true;
  }

  saveSnapshot(name: string): void {
    this.snapshots.set(name, this.current);
  }

  restoreSnapshot(name: string): boolean {
    const snap = this.snapshots.get(name);
    if (!snap) return false;
    this.history.push(snap);
    this.future = [];
    return true;
  }

  listSnapshots(): string[] {
    return Array.from(this.snapshots.keys());
  }

  /**
   * Generates a semantic domain difference summary comparing original vs working state.
   */
  generateDiff(): SaveDiffSummary {
    const entries: DiffEntry[] = [];
    const orig = this.history[0];
    const curr = this.current;

    // 1. Trainer Diffs
    if (orig.trainer.name !== curr.trainer.name) {
      entries.push({
        category: 'trainer',
        title: 'Trainer Name',
        field: 'name',
        originalValue: orig.trainer.name,
        workingValue: curr.trainer.name,
      });
    }
    if (orig.trainer.money !== curr.trainer.money) {
      entries.push({
        category: 'trainer',
        title: 'Money',
        field: 'money',
        originalValue: `₽${orig.trainer.money.toLocaleString()}`,
        workingValue: `₽${curr.trainer.money.toLocaleString()}`,
      });
    }
    if (orig.trainer.coins !== curr.trainer.coins) {
      entries.push({
        category: 'trainer',
        title: 'Coins',
        field: 'coins',
        originalValue: orig.trainer.coins.toString(),
        workingValue: curr.trainer.coins.toString(),
      });
    }
    if (orig.trainer.gender !== curr.trainer.gender) {
      entries.push({
        category: 'trainer',
        title: 'Gender',
        field: 'gender',
        originalValue: orig.trainer.gender,
        workingValue: curr.trainer.gender,
      });
    }

    // Badges diff
    const badgeNames = ['Boulder', 'Cascade', 'Thunder', 'Rainbow', 'Soul', 'Marsh', 'Volcano', 'Earth'];
    for (let b = 0; b < 8; b++) {
      if (orig.trainer.badges[b] !== curr.trainer.badges[b]) {
        entries.push({
          category: 'trainer',
          title: `${badgeNames[b]} Badge`,
          field: `badge_${b}`,
          originalValue: orig.trainer.badges[b] ? 'Owned' : 'Not owned',
          workingValue: curr.trainer.badges[b] ? 'Owned' : 'Not owned',
        });
      }
    }

    // 2. Party Diffs
    if (orig.party.length !== curr.party.length) {
      entries.push({
        category: 'party',
        title: 'Party Count',
        field: 'partyCount',
        originalValue: `${orig.party.length} Pokémon`,
        workingValue: `${curr.party.length} Pokémon`,
      });
    }
    const maxParty = Math.max(orig.party.length, curr.party.length);
    for (let i = 0; i < maxParty; i++) {
      const pOrig = orig.party[i];
      const pCurr = curr.party[i];
      if (!pOrig && pCurr) {
        entries.push({
          category: 'party',
          title: `Party Slot ${i + 1}`,
          field: `slot_${i}`,
          originalValue: 'Empty',
          workingValue: `Added: ${pCurr.nickname} (Lv. ${pCurr.level} ${pCurr.speciesName})`,
        });
      } else if (pOrig && !pCurr) {
        entries.push({
          category: 'party',
          title: `Party Slot ${i + 1}`,
          field: `slot_${i}`,
          originalValue: `${pOrig.nickname} (Lv. ${pOrig.level})`,
          workingValue: 'Removed',
        });
      } else if (pOrig && pCurr) {
        if (pOrig.personality !== pCurr.personality || pOrig.substructs.growth.species !== pCurr.substructs.growth.species) {
          entries.push({
            category: 'party',
            title: `Party Slot ${i + 1}`,
            field: `slot_${i}`,
            originalValue: `${pOrig.nickname} (Lv. ${pOrig.level} ${pOrig.speciesName})`,
            workingValue: `${pCurr.nickname} (Lv. ${pCurr.level} ${pCurr.speciesName})`,
          });
        }
      }
    }

    // 3. Pokédex Diffs
    if (orig.pokedex.seenCount !== curr.pokedex.seenCount) {
      entries.push({
        category: 'pokedex',
        title: 'Pokédex Seen Count',
        field: 'seenCount',
        originalValue: orig.pokedex.seenCount.toString(),
        workingValue: curr.pokedex.seenCount.toString(),
      });
    }
    if (orig.pokedex.caughtCount !== curr.pokedex.caughtCount) {
      entries.push({
        category: 'pokedex',
        title: 'Pokédex Caught Count',
        field: 'caughtCount',
        originalValue: orig.pokedex.caughtCount.toString(),
        workingValue: curr.pokedex.caughtCount.toString(),
      });
    }

    return {
      hasChanges: entries.length > 0,
      totalChanges: entries.length,
      entries,
    };
  }
}
