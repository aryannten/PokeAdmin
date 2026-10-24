import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUp,
  ArrowDown,
  Trash2,
  Copy,
  Edit3,
  Box,
  Plus,
  Heart,
} from 'lucide-react';
import { DecodedPokemon, WorkingSaveState } from '../engine/save/types.ts';
import { PokemonEditorModal } from './PokemonEditorModal.tsx';
import { getSpeciesByInternalId } from '../data/species.ts';
import { placePokemon } from '../engine/placement/placement-service.ts';

interface PokemonPartyProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
  onNavigateToCreator?: () => void;
  onNavigateToPC?: () => void;
}

export const PokemonParty: React.FC<PokemonPartyProps> = ({
  state,
  onStateChange,
  onNavigateToCreator,
  onNavigateToPC,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const party = state.party;

  const handleUpdatePokemon = (updated: DecodedPokemon, index: number) => {
    const newParty = [...party];
    newParty[index] = updated;
    const newState: WorkingSaveState = {
      ...state,
      party: newParty,
    };
    onStateChange(newState, `Updated party slot ${index + 1}: ${updated.nickname}`);
    setEditingIndex(null);
  };

  const handleMoveSlot = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= party.length) return;

    const newParty = [...party];
    const temp = newParty[index];
    newParty[index] = newParty[targetIndex];
    newParty[targetIndex] = temp;

    onStateChange(
      { ...state, party: newParty },
      `Swapped party slot ${index + 1} with slot ${targetIndex + 1}`
    );
  };

  const handleRelease = (index: number) => {
    const mon = party[index];
    if (party.length === 1) {
      alert('You cannot release your last Pokémon!');
      return;
    }
    if (!window.confirm(`Are you sure you want to release ${mon.nickname} (${mon.speciesName})?`)) {
      return;
    }

    const newParty = party.filter((_, i) => i !== index);
    onStateChange(
      { ...state, party: newParty },
      `Released ${mon.nickname} from party slot ${index + 1}`
    );
  };

  const handleDepositToPC = (index: number) => {
    const mon = party[index];
    if (party.length === 1) {
      alert('You cannot deposit your last Pokémon!');
      return;
    }

    // Try placing in PC directly by removing from party first
    const newParty = party.filter((_, i) => i !== index);
    const tempState: WorkingSaveState = { ...state, party: newParty };

    const { newState, result } = placePokemon(tempState, mon);
    if (!result.success) {
      alert(`Cannot deposit to PC: ${result.message}`);
      return;
    }

    onStateChange(
      newState,
      `Deposited ${mon.nickname} to BOX ${(result.boxIndex ?? 0) + 1}, slot ${(result.boxSlot ?? 0) + 1}`
    );
  };

  const handleDuplicate = (index: number) => {
    const mon = party[index];
    const clone: DecodedPokemon = JSON.parse(JSON.stringify(mon));
    clone.rawBytes = new Uint8Array(mon.rawBytes);

    const { newState, result } = placePokemon(state, clone);
    if (!result.success) {
      alert(`Cannot duplicate: ${result.message}`);
      return;
    }

    onStateChange(newState, `Duplicated ${mon.nickname}`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Active Pokémon Party</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              {party.length}/6 Slots Occupied
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Manage battle team order, inspect EVs/IVs/moves, edit individual stats, or deposit to PC storage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onNavigateToPC && (
            <button
              onClick={onNavigateToPC}
              className="px-3.5 py-2 rounded-xl bg-[#151726] hover:bg-[#1e2238] border border-[#262a42] text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Box className="w-3.5 h-3.5 text-purple-400" />
              <span>PC Storage</span>
            </button>
          )}
          {party.length < 6 && onNavigateToCreator && (
            <button
              onClick={onNavigateToCreator}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition flex items-center gap-1.5 shadow-md shadow-purple-950/40"
            >
              <Plus className="w-4 h-4" />
              <span>Add Pokémon ({6 - party.length} free)</span>
            </button>
          )}
        </div>
      </div>

      {/* Party Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {party.map((mon, index) => {
          const spData = getSpeciesByInternalId(mon.substructs.growth.species);
          const hpPercent = Math.round(((mon.currentHp ?? 1) / (mon.maxHp ?? 1)) * 100);

          return (
            <div
              key={`${mon.substructs.growth.species}-${index}-${mon.personality}`}
              className="bg-[#0f111d] border border-[#23263b] hover:border-[#383c5c] transition rounded-2xl p-5 flex flex-col justify-between shadow-xl space-y-4"
            >
              {/* Card Header: Slot, Nickname, Level, Shiny */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#23263b]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-950 border border-purple-800 text-purple-300 text-xs font-mono font-bold flex items-center justify-center">
                      #{index + 1}
                    </span>
                    <span className="font-bold text-white text-base tracking-wide">
                      {mon.nickname}
                    </span>
                    {mon.isShiny && (
                      <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold font-mono text-purple-300 bg-[#161826] px-2 py-0.5 rounded-md border border-[#262940]">
                      Lv. {mon.level}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                        mon.generation === 1
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                          : mon.generation === 2
                          ? 'bg-blue-950/60 text-blue-300 border-blue-800/40'
                          : 'bg-amber-950/60 text-amber-300 border-amber-800/40'
                      }`}
                    >
                      Gen {mon.generation}
                    </span>
                  </div>
                </div>

                {/* Species & Type info */}
                <div className="flex items-center justify-between mt-3 text-xs">
                  <div className="text-slate-400 font-medium">
                    {mon.speciesName}{' '}
                    <span className="text-[11px] font-mono text-slate-500">
                      (Nat. #{mon.nationalDex.toString().padStart(3, '0')})
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {spData?.types.filter(Boolean).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#181a2b] text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="text-slate-400 font-bold ml-1">
                      {mon.gender === 'male' ? '♂' : mon.gender === 'female' ? '♀' : '—'}
                    </span>
                  </div>
                </div>

                {/* HP Meter */}
                <div className="mt-3 bg-[#131522] p-2.5 rounded-xl border border-[#202336] space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Heart className="w-3 h-3 text-rose-500" /> HP
                    </span>
                    <span className="text-slate-200">
                      {mon.currentHp} / {mon.maxHp} ({hpPercent}%)
                    </span>
                  </div>
                  <div className="w-full bg-[#1e2133] h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        hpPercent > 50
                          ? 'bg-emerald-500'
                          : hpPercent > 20
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(0, hpPercent))}%` }}
                    />
                  </div>
                </div>

                {/* Nature, Ability & Stats pill */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="bg-[#141624] p-2 rounded-lg border border-[#22253a]">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Nature</div>
                    <div className="font-semibold text-slate-200 truncate">{mon.natureName}</div>
                  </div>
                  <div className="bg-[#141624] p-2 rounded-lg border border-[#22253a]">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Held Item</div>
                    <div className="font-semibold text-slate-200 truncate">
                      {mon.substructs.growth.heldItem > 0
                        ? `Item #${mon.substructs.growth.heldItem}`
                        : 'None'}
                    </div>
                  </div>
                </div>

                {/* Attacks list */}
                <div className="mt-3 space-y-1">
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Known Moves
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {mon.substructs.attacks.moves.map((moveId, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-[#141624] px-2 py-1 rounded border border-[#202336] text-[11px] flex justify-between items-center text-slate-300"
                      >
                        <span className="truncate">
                          {moveId > 0 ? `Move #${moveId}` : '—'}
                        </span>
                        <span className="text-[9px] font-mono text-purple-400">
                          {moveId > 0 ? `${mon.substructs.attacks.pp[mIdx]} PP` : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-3 border-t border-[#23263b] flex items-center justify-between gap-1">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleMoveSlot(index, 'up')}
                    disabled={index === 0}
                    title="Move Slot Up"
                    className="p-1.5 rounded-lg bg-[#151726] border border-[#262a42] text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleMoveSlot(index, 'down')}
                    disabled={index === party.length - 1}
                    title="Move Slot Down"
                    className="p-1.5 rounded-lg bg-[#151726] border border-[#262a42] text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDepositToPC(index)}
                    title="Deposit to PC Storage"
                    className="p-1.5 rounded-lg bg-[#151726] border border-[#262a42] text-purple-400 hover:text-purple-300 hover:bg-purple-950/40 transition"
                  >
                    <Box className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDuplicate(index)}
                    title="Duplicate Pokémon"
                    className="p-1.5 rounded-lg bg-[#151726] border border-[#262a42] text-slate-400 hover:text-slate-200 transition"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleRelease(index)}
                    title="Release Pokémon"
                    className="p-1.5 rounded-lg bg-[#151726] border border-[#262a42] text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => setEditingIndex(index)}
                  className="px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 text-purple-200 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editor Modal */}
      {editingIndex !== null && (
        <PokemonEditorModal
          pokemon={party[editingIndex]}
          onSave={(updated) => handleUpdatePokemon(updated, editingIndex)}
          onClose={() => setEditingIndex(null)}
        />
      )}
    </div>
  );
};
