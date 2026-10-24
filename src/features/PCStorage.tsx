import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  Edit3,
  Trash2,
  Shield,
} from 'lucide-react';
import { DecodedPokemon, WorkingSaveState } from '../engine/save/types.ts';
import { PokemonEditorModal } from './PokemonEditorModal.tsx';

interface PCStorageProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
  onNavigateToParty?: () => void;
  onNavigateToCreator?: () => void;
}

const WALLPAPERS = [
  'Forest', 'City', 'Desert', 'Savanna', 'Crag', 'Volcano', 'Snow', 'Cave',
  'Beach', 'Seafloor', 'River', 'Sky', 'Stars', 'Poké Center', 'Tiles', 'Simple'
];

export const PCStorage: React.FC<PCStorageProps> = ({
  state,
  onStateChange,
  onNavigateToParty,
  onNavigateToCreator: _onNavigateToCreator,
}) => {
  const [activeBoxIndex, setActiveBoxIndex] = useState<number>(state.storage.currentBox);
  const [editingSlot, setEditingSlot] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentBox = state.storage.boxes[activeBoxIndex];
  const occupiedCount = currentBox.pokemon.filter(Boolean).length;

  const totalOccupied = state.storage.boxes.reduce(
    (acc, b) => acc + b.pokemon.filter(Boolean).length,
    0
  );

  const handleUpdateBoxName = (newName: string) => {
    const newBoxes = [...state.storage.boxes];
    newBoxes[activeBoxIndex] = {
      ...newBoxes[activeBoxIndex],
      name: newName.slice(0, 8),
    };
    onStateChange(
      {
        ...state,
        storage: { ...state.storage, boxes: newBoxes },
      },
      `Renamed Box ${activeBoxIndex + 1} to "${newName}"`
    );
  };

  const handleUpdateWallpaper = (wallpaperId: number) => {
    const newBoxes = [...state.storage.boxes];
    newBoxes[activeBoxIndex] = {
      ...newBoxes[activeBoxIndex],
      wallpaper: wallpaperId,
    };
    onStateChange(
      {
        ...state,
        storage: { ...state.storage, boxes: newBoxes },
      },
      `Changed wallpaper for Box ${activeBoxIndex + 1}`
    );
  };

  const handleUpdatePokemon = (updated: DecodedPokemon, slotIndex: number) => {
    const newBoxes = [...state.storage.boxes];
    const newPokemonList = [...newBoxes[activeBoxIndex].pokemon];
    newPokemonList[slotIndex] = updated;
    newBoxes[activeBoxIndex] = {
      ...newBoxes[activeBoxIndex],
      pokemon: newPokemonList,
    };

    onStateChange(
      {
        ...state,
        storage: { ...state.storage, boxes: newBoxes },
      },
      `Updated BOX ${activeBoxIndex + 1}, slot ${slotIndex + 1}: ${updated.nickname}`
    );
    setEditingSlot(null);
  };

  const handleWithdrawToParty = (slotIndex: number) => {
    const mon = currentBox.pokemon[slotIndex];
    if (!mon) return;

    if (state.party.length >= 6) {
      alert('Your party is already full (6 Pokémon)! Deposit or release a party member first.');
      return;
    }

    // Remove from PC Box
    const newBoxes = [...state.storage.boxes];
    const newPokemonList = [...newBoxes[activeBoxIndex].pokemon];
    newPokemonList[slotIndex] = null;
    newBoxes[activeBoxIndex] = { ...newBoxes[activeBoxIndex], pokemon: newPokemonList };

    // Add to Party
    const newParty = [...state.party, mon];

    onStateChange(
      {
        ...state,
        party: newParty,
        storage: { ...state.storage, boxes: newBoxes },
      },
      `Withdrew ${mon.nickname} from BOX ${activeBoxIndex + 1} to Party slot ${newParty.length}`
    );
  };

  const handleRelease = (slotIndex: number) => {
    const mon = currentBox.pokemon[slotIndex];
    if (!mon) return;

    if (!window.confirm(`Are you sure you want to release ${mon.nickname} (${mon.speciesName}) from BOX ${activeBoxIndex + 1}?`)) {
      return;
    }

    const newBoxes = [...state.storage.boxes];
    const newPokemonList = [...newBoxes[activeBoxIndex].pokemon];
    newPokemonList[slotIndex] = null;
    newBoxes[activeBoxIndex] = { ...newBoxes[activeBoxIndex], pokemon: newPokemonList };

    onStateChange(
      {
        ...state,
        storage: { ...state.storage, boxes: newBoxes },
      },
      `Released ${mon.nickname} from BOX ${activeBoxIndex + 1}, slot ${slotIndex + 1}`
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">PC Pokémon Storage System</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              {totalOccupied}/420 Total Stored
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Browse all 14 Bill&apos;s PC boxes, manage 80-byte BoxMon structures, rename boxes, and customize wallpapers.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {onNavigateToParty && (
            <button
              onClick={onNavigateToParty}
              className="px-3.5 py-2 rounded-xl bg-[#161828] hover:bg-[#1e2238] border border-[#262940] text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition whitespace-nowrap"
            >
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Party ({state.party.length}/6)</span>
            </button>
          )}

          {/* Global Search across all boxes */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search all 14 boxes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111322] border border-[#23263b] rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Box Carousel & Controller Header */}
      <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveBoxIndex((prev) => (prev > 0 ? prev - 1 : 13))}
            className="p-2 rounded-xl bg-[#161828] border border-[#262940] text-slate-300 hover:text-white hover:bg-[#1e2238] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                maxLength={8}
                value={currentBox.name}
                onChange={(e) => handleUpdateBoxName(e.target.value)}
                className="bg-transparent border-b border-dashed border-purple-500/50 text-lg font-bold text-white focus:outline-none focus:border-purple-400 px-1 py-0.5"
              />
              <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/60 px-2 py-0.5 rounded">
                Box {activeBoxIndex + 1} of 14
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {occupiedCount}/30 Slots Occupied · {30 - occupiedCount} Free
            </div>
          </div>

          <button
            onClick={() => setActiveBoxIndex((prev) => (prev < 13 ? prev + 1 : 0))}
            className="p-2 rounded-xl bg-[#161828] border border-[#262940] text-slate-300 hover:text-white hover:bg-[#1e2238] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Box Wallpaper selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Wallpaper:
          </label>
          <select
            value={currentBox.wallpaper}
            onChange={(e) => handleUpdateWallpaper(Number(e.target.value))}
            className="bg-[#161828] border border-[#262940] rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            {WALLPAPERS.map((wp, idx) => (
              <option key={wp} value={idx}>
                Theme {idx + 1}: {wp}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 30-Slot Box Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3.5">
        {currentBox.pokemon.map((mon, slotIndex) => {
          if (!mon) {
            return (
              <div
                key={slotIndex}
                className="h-32 rounded-xl border border-dashed border-[#202336] bg-[#0c0e17]/50 flex flex-col items-center justify-center p-3 text-slate-600 hover:border-slate-600 hover:bg-[#111322] transition group"
              >
                <span className="text-[10px] font-mono opacity-50 mb-1">Slot {slotIndex + 1}</span>
                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition">
                  Empty Slot
                </span>
              </div>
            );
          }

          const isHighlighted =
            searchQuery.trim().length > 0 &&
            (mon.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
              mon.speciesName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              mon.nationalDex.toString().includes(searchQuery));

          return (
            <div
              key={`${slotIndex}-${mon.personality}`}
              className={`h-36 rounded-xl border p-3 flex flex-col justify-between transition group shadow-md ${
                isHighlighted
                  ? 'bg-purple-950/40 border-purple-500 ring-2 ring-purple-500'
                  : 'bg-[#10121f] border-[#222538] hover:border-[#3a3f60] hover:bg-[#151726]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    #{slotIndex + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    {mon.isShiny && (
                      <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
                    )}
                    <span className="text-[10px] font-mono font-bold text-purple-300">
                      Lv. {mon.level}
                    </span>
                  </div>
                </div>

                <div className="font-bold text-sm text-slate-200 mt-1 truncate group-hover:text-white">
                  {mon.nickname}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {mon.speciesName}
                </div>

                <div className="flex items-center gap-1 mt-1.5">
                  <span
                    className={`text-[9px] font-bold px-1 rounded border ${
                      mon.generation === 1
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                        : mon.generation === 2
                        ? 'bg-blue-950/60 text-blue-300 border-blue-800/40'
                        : 'bg-amber-950/60 text-amber-300 border-amber-800/40'
                    }`}
                  >
                    Gen {mon.generation}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    Nat #{mon.nationalDex.toString().padStart(3, '0')}
                  </span>
                </div>
              </div>

              {/* Action Toolbar on hover */}
              <div className="pt-2 border-t border-[#1d2033] flex items-center justify-between">
                <button
                  onClick={() => handleWithdrawToParty(slotIndex)}
                  title="Withdraw to Party"
                  disabled={state.party.length >= 6}
                  className="p-1 rounded bg-[#181b2c] hover:bg-emerald-950 hover:text-emerald-300 text-slate-400 disabled:opacity-30 transition"
                >
                  <Shield className="w-3 h-3" />
                </button>
                <button
                  onClick={() => handleRelease(slotIndex)}
                  title="Release"
                  className="p-1 rounded bg-[#181b2c] hover:bg-rose-950 hover:text-rose-300 text-slate-400 transition"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setEditingSlot(slotIndex)}
                  className="px-2 py-0.5 rounded bg-purple-600/30 hover:bg-purple-600 text-purple-200 text-[10px] font-semibold transition flex items-center gap-1"
                >
                  <Edit3 className="w-2.5 h-2.5" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editor Modal */}
      {editingSlot !== null && currentBox.pokemon[editingSlot] && (
        <PokemonEditorModal
          pokemon={currentBox.pokemon[editingSlot]!}
          onSave={(updated) => handleUpdatePokemon(updated, editingSlot)}
          onClose={() => setEditingSlot(null)}
        />
      )}
    </div>
  );
};
