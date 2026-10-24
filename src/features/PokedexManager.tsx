import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  Eye,
  Award,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { WorkingSaveState } from '../engine/save/types.ts';
import { SPECIES_REGISTRY } from '../data/species.ts';

interface PokedexManagerProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
}

export const PokedexManager: React.FC<PokedexManagerProps> = ({ state, onStateChange }) => {
  const [genFilter, setGenFilter] = useState<'all' | 1 | 2 | 3>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'caught' | 'seen_only' | 'unseen'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pokedex = state.pokedex;

  const filteredSpecies = useMemo(() => {
    return SPECIES_REGISTRY.filter((sp) => {
      if (genFilter !== 'all' && sp.generation !== genFilter) {
        return false;
      }
      const isCaught = Boolean(pokedex.caught[sp.nationalDex]);
      const isSeen = Boolean(pokedex.seen[sp.nationalDex]);

      if (statusFilter === 'caught' && !isCaught) return false;
      if (statusFilter === 'seen_only' && (!isSeen || isCaught)) return false;
      if (statusFilter === 'unseen' && isSeen) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = sp.name.toLowerCase().includes(q);
        const matchNat = sp.nationalDex.toString().includes(q);
        if (!matchName && !matchNat) return false;
      }
      return true;
    });
  }, [genFilter, statusFilter, searchQuery, pokedex]);

  const handleToggleSeen = (natDex: number) => {
    const newSeen = [...pokedex.seen];
    const newCaught = [...pokedex.caught];
    const currentSeen = Boolean(newSeen[natDex]);

    if (currentSeen) {
      // If unseeing, must also uncaught
      newSeen[natDex] = false;
      newCaught[natDex] = false;
    } else {
      newSeen[natDex] = true;
    }

    const seenCount = newSeen.filter(Boolean).length;
    const caughtCount = newCaught.filter(Boolean).length;

    onStateChange(
      {
        ...state,
        pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount, caughtCount },
      },
      `Toggled seen for National Dex #${natDex}`
    );
  };

  const handleToggleCaught = (natDex: number) => {
    const newSeen = [...pokedex.seen];
    const newCaught = [...pokedex.caught];
    const currentCaught = Boolean(newCaught[natDex]);

    if (currentCaught) {
      newCaught[natDex] = false;
    } else {
      // If caught, it must also be seen
      newCaught[natDex] = true;
      newSeen[natDex] = true;
    }

    const seenCount = newSeen.filter(Boolean).length;
    const caughtCount = newCaught.filter(Boolean).length;

    onStateChange(
      {
        ...state,
        pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount, caughtCount },
      },
      `Toggled caught for National Dex #${natDex}`
    );
  };

  const handleBatchSet = (action: 'all_caught' | 'kanto_caught' | 'filtered_caught' | 'reset') => {
    const newSeen = [...pokedex.seen];
    const newCaught = [...pokedex.caught];

    if (action === 'all_caught') {
      for (let i = 1; i <= 386; i++) {
        newSeen[i] = true;
        newCaught[i] = true;
      }
      onStateChange(
        {
          ...state,
          pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount: 386, caughtCount: 386 },
        },
        'Completed full National Pokédex (All 386 Caught)'
      );
    } else if (action === 'kanto_caught') {
      for (let i = 1; i <= 151; i++) {
        newSeen[i] = true;
        newCaught[i] = true;
      }
      const seenCount = newSeen.filter(Boolean).length;
      const caughtCount = newCaught.filter(Boolean).length;
      onStateChange(
        {
          ...state,
          pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount, caughtCount },
        },
        'Completed Kanto Pokédex (#001–#151 Caught)'
      );
    } else if (action === 'filtered_caught') {
      filteredSpecies.forEach((sp) => {
        newSeen[sp.nationalDex] = true;
        newCaught[sp.nationalDex] = true;
      });
      const seenCount = newSeen.filter(Boolean).length;
      const caughtCount = newCaught.filter(Boolean).length;
      onStateChange(
        {
          ...state,
          pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount, caughtCount },
        },
        `Marked ${filteredSpecies.length} filtered species as Caught`
      );
    } else if (action === 'reset') {
      if (!window.confirm('Reset all Pokédex progress to 0 Seen and 0 Caught?')) return;
      newSeen.fill(false);
      newCaught.fill(false);
      onStateChange(
        {
          ...state,
          pokedex: { ...pokedex, seen: newSeen, caught: newCaught, seenCount: 0, caughtCount: 0 },
        },
        'Reset Pokédex'
      );
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">National Pokédex Manager</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              386 Species Registered
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Toggle Seen and Caught bitmasks across SaveBlock2 and SaveBlock1 for all 3 generations.
          </p>
        </div>

        {/* Global Progress Meters */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-xl bg-[#0f111d] border border-[#23263b] text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-center gap-1">
              <Eye className="w-3 h-3 text-purple-400" /> Seen
            </div>
            <div className="text-base font-bold font-mono text-purple-300 mt-0.5">
              {pokedex.seenCount} <span className="text-xs text-slate-500 font-normal">/ 386</span>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-[#0f111d] border border-[#23263b] text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Caught
            </div>
            <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
              {pokedex.caughtCount} <span className="text-xs text-slate-500 font-normal">/ 386</span>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Actions Toolbar */}
      <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleBatchSet('kanto_caught')}
            className="px-3 py-1.5 rounded-xl bg-[#171a2c] hover:bg-[#20253d] border border-[#2c3150] text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Complete Kanto (#001–#151)</span>
          </button>
          <button
            onClick={() => handleBatchSet('all_caught')}
            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-purple-950/40 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete National Dex (All 386)</span>
          </button>
          <button
            onClick={() => handleBatchSet('filtered_caught')}
            className="px-3 py-1.5 rounded-xl bg-[#171a2c] hover:bg-[#20253d] border border-[#2c3150] text-purple-300 text-xs font-semibold transition"
          >
            Mark Filtered ({filteredSpecies.length}) Caught
          </button>
        </div>

        <button
          onClick={() => handleBatchSet('reset')}
          className="px-3 py-1.5 rounded-xl bg-rose-950/30 hover:bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Gen Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setGenFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              genFilter === 'all'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-[#141624] text-slate-400 hover:text-slate-200'
            }`}
          >
            All (#001–#386)
          </button>
          <button
            onClick={() => setGenFilter(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              genFilter === 1
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-[#141624] text-slate-400 hover:text-slate-200'
            }`}
          >
            Gen I Kanto (#001–#151)
          </button>
          <button
            onClick={() => setGenFilter(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              genFilter === 2
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-[#141624] text-slate-400 hover:text-slate-200'
            }`}
          >
            Gen II Johto (#152–#251)
          </button>
          <button
            onClick={() => setGenFilter(3)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              genFilter === 3
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-[#141624] text-slate-400 hover:text-slate-200'
            }`}
          >
            Gen III Hoenn (#252–#386)
          </button>

          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />

          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              statusFilter === 'all'
                ? 'bg-[#2b2f48] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Status
          </button>
          <button
            onClick={() => setStatusFilter('caught')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              statusFilter === 'caught'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Caught Only
          </button>
          <button
            onClick={() => setStatusFilter('unseen')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              statusFilter === 'unseen'
                ? 'bg-rose-950 text-rose-300 border border-rose-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Unseen Only
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name or #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111322] border border-[#23263b] rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Species Checklist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {filteredSpecies.map((sp) => {
          const isCaught = Boolean(pokedex.caught[sp.nationalDex]);
          const isSeen = Boolean(pokedex.seen[sp.nationalDex]);

          return (
            <div
              key={sp.internalId}
              className={`p-3.5 rounded-xl border transition flex items-center justify-between ${
                isCaught
                  ? 'bg-emerald-950/20 border-emerald-800/40'
                  : isSeen
                  ? 'bg-purple-950/20 border-purple-800/40'
                  : 'bg-[#0f111d] border-[#222538]'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500">
                    #{sp.nationalDex.toString().padStart(3, '0')}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1 rounded border ${
                      sp.generation === 1
                        ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/30'
                        : sp.generation === 2
                        ? 'bg-blue-950/50 text-blue-300 border-blue-800/30'
                        : 'bg-amber-950/50 text-amber-300 border-amber-800/30'
                    }`}
                  >
                    Gen {sp.generation}
                  </span>
                </div>
                <div className="font-bold text-sm text-slate-200 mt-0.5 truncate">
                  {sp.name}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  ID: {sp.internalId}
                </div>
              </div>

              {/* Seen / Caught Toggles */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleToggleSeen(sp.nationalDex)}
                  title="Toggle Seen"
                  className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                    isSeen
                      ? 'bg-purple-600/30 border border-purple-500/60 text-purple-200'
                      : 'bg-[#181a29] border border-[#282b40] text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Seen</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleCaught(sp.nationalDex)}
                  title="Toggle Caught"
                  className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                    isCaught
                      ? 'bg-emerald-600/30 border border-emerald-500/60 text-emerald-200 shadow-sm'
                      : 'bg-[#181a29] border border-[#282b40] text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Caught</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
