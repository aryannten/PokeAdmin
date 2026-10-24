import React, { useState, useMemo } from 'react';
import {
  Wand2,
  Search,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { SPECIES_REGISTRY, SpeciesData, getSpeciesByInternalId } from '../data/species.ts';
import { NATURES_REGISTRY } from '../data/natures.ts';
import { ITEMS_REGISTRY } from '../data/items.ts';
import { WorkingSaveState } from '../engine/save/types.ts';
import { createPokemon } from '../engine/pokemon-creator.ts';
import { placePokemon, PlacementResult } from '../engine/placement/placement-service.ts';

interface PokemonCreatorProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
  onNavigateToParty?: () => void;
  onNavigateToPC?: () => void;
}

export const PokemonCreator: React.FC<PokemonCreatorProps> = ({
  state,
  onStateChange,
  onNavigateToParty,
  onNavigateToPC,
}) => {
  // Generation & Search Filters
  const [genFilter, setGenFilter] = useState<'all' | 1 | 2 | 3>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<number>(1); // Bulbasaur default

  // Pokémon Attributes
  const [level, setLevel] = useState(50);
  const [nickname, setNickname] = useState('');
  const [natureId, setNatureId] = useState(3); // Adamant
  const [isShinyMon, setIsShinyMon] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | 'genderless'>('male');
  const [abilityNum, setAbilityNum] = useState(0);
  const [heldItem, setHeldItem] = useState(0);

  // Moves
  const [moves] = useState<[number, number, number, number]>([1, 0, 0, 0]); // Pound default

  // IVs
  const [ivPreset, setIvPreset] = useState<'perfect' | 'random' | 'standard'>('perfect');
  const [ivs, setIvs] = useState({
    hp: 31,
    attack: 31,
    defense: 31,
    speed: 31,
    spAttack: 31,
    spDefense: 31,
  });

  // Placement feedback
  const [placementNotice, setPlacementNotice] = useState<PlacementResult | null>(null);

  const selectedSpecies = getSpeciesByInternalId(selectedSpeciesId) ?? SPECIES_REGISTRY[0];

  // Filtered Species
  const filteredSpecies = useMemo(() => {
    return SPECIES_REGISTRY.filter((sp) => {
      if (genFilter !== 'all' && sp.generation !== genFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = sp.name.toLowerCase().includes(q);
        const matchNat = sp.nationalDex.toString().includes(q);
        const matchType = sp.types.some((t) => t && t.toLowerCase().includes(q));
        if (!matchName && !matchNat && !matchType) return false;
      }
      return true;
    });
  }, [genFilter, searchQuery]);

  const handleSelectSpecies = (sp: SpeciesData) => {
    setSelectedSpeciesId(sp.internalId);
    setNickname('');
    // Auto-adjust gender based on ratio
    if (sp.genderRatio === 255) {
      setGender('genderless');
    } else if (sp.genderRatio === 254) {
      setGender('female');
    } else if (sp.genderRatio === 0) {
      setGender('male');
    } else {
      setGender('male');
    }
    setAbilityNum(0);
  };

  const handleCreateAndPlace = () => {
    try {
      const mon = createPokemon({
        speciesInternalId: selectedSpecies.internalId,
        level,
        nickname: nickname.trim() || undefined,
        natureId,
        gender,
        isShiny: isShinyMon,
        abilityIndex: abilityNum,
        heldItemId: heldItem,
        moves,
        ivs,
        trainer: state.trainer,
      });

      const { newState, result } = placePokemon(state, mon);
      setPlacementNotice(result);

      if (result.success) {
        onStateChange(
          newState,
          `Created & placed ${mon.speciesName} (${result.destination === 'party' ? `Party slot ${(result.partySlot ?? 0) + 1}` : `Box ${(result.boxIndex ?? 0) + 1}, slot ${(result.boxSlot ?? 0) + 1}`})`
        );
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setPlacementNotice({
        success: false,
        message: `Creation failed: ${msg}`,
      });
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Pokémon Creator Studio</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              Nat. #001–#386 Supported
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Generate legally structured Generation III Pokémon records across all 3 generations with automatic Party/PC placement.
          </p>
        </div>

        {/* Storage Capacity Overview */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 rounded-xl bg-[#111322] border border-[#23263b] flex items-center gap-3">
            <div className="text-xs">
              <span className="text-slate-400">Party: </span>
              <span className={`font-mono font-semibold ${state.party.length >= 6 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {state.party.length}/6
              </span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <div className="text-xs">
              <span className="text-slate-400">PC Storage: </span>
              <span className="font-mono font-semibold text-purple-300">
                {state.storage.boxes.reduce((acc, b) => acc + b.pokemon.filter(Boolean).length, 0)}/420
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Placement Result Banner */}
      {placementNotice && (
        <div
          className={`p-4 rounded-xl border flex items-center justify-between shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 ${
            placementNotice.success
              ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200'
              : 'bg-rose-950/40 border-rose-700/60 text-rose-200'
          }`}
        >
          <div className="flex items-center gap-3">
            {placementNotice.success ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            )}
            <span className="text-sm font-medium">{placementNotice.message}</span>
          </div>
          <div className="flex items-center gap-2">
            {placementNotice.success && placementNotice.destination === 'party' && onNavigateToParty && (
              <button
                onClick={onNavigateToParty}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/50 text-emerald-100 flex items-center gap-1.5 transition"
              >
                <span>View Party</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {placementNotice.success && placementNotice.destination === 'pc' && onNavigateToPC && (
              <button
                onClick={onNavigateToPC}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 text-purple-100 flex items-center gap-1.5 transition"
              >
                <span>View PC Box</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => setPlacementNotice(null)}
              className="text-xs text-slate-400 hover:text-slate-200 p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Studio Grid: Left Catalog, Right Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Species Catalog & Filters (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#0f111d] border border-[#23263a] rounded-2xl p-5 space-y-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#23263a] pb-4">
              <button
                onClick={() => setGenFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  genFilter === 'all'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-[#161826] text-slate-400 hover:text-slate-200'
                }`}
              >
                All Supported (#001–#386)
              </button>
              <button
                onClick={() => setGenFilter(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  genFilter === 1
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-[#161826] text-slate-400 hover:text-slate-200'
                }`}
              >
                Gen I: Kanto Native (#001–#151)
              </button>
              <button
                onClick={() => setGenFilter(2)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  genFilter === 2
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-[#161826] text-slate-400 hover:text-slate-200'
                }`}
              >
                Gen II: Johto & Sevii (#152–#251)
              </button>
              <button
                onClick={() => setGenFilter(3)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  genFilter === 3
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-[#161826] text-slate-400 hover:text-slate-200'
                }`}
              >
                Gen III: Hoenn & Mythical (#252–#386)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
              <input
                type="text"
                placeholder="Search species by name, National Dex #, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
              />
              <span className="absolute right-3.5 top-2.5 text-xs text-slate-500 font-mono">
                {filteredSpecies.length} matches
              </span>
            </div>

            {/* Species Grid */}
            <div className="max-h-[500px] overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2.5 pr-1">
              {filteredSpecies.map((sp) => {
                const isSelected = sp.internalId === selectedSpecies.internalId;
                return (
                  <button
                    key={sp.internalId}
                    onClick={() => handleSelectSpecies(sp)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-purple-900/30 border-purple-500 shadow-md shadow-purple-950/40 ring-1 ring-purple-500'
                        : 'bg-[#141624] border-[#222538] hover:border-[#383c58] hover:bg-[#1a1d2e]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500">
                          #{sp.nationalDex.toString().padStart(3, '0')}
                        </span>
                        <span
                          className={`text-[9px] uppercase font-bold px-1.5 py-0.2 rounded border ${
                            sp.generation === 1
                              ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/40'
                              : sp.generation === 2
                              ? 'bg-blue-950/50 text-blue-300 border-blue-800/40'
                              : 'bg-amber-950/50 text-amber-300 border-amber-800/40'
                          }`}
                        >
                          Gen {sp.generation}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-slate-200 mt-1 truncate group-hover:text-white">
                        {sp.name}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mt-2">
                      {sp.types.filter(Boolean).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e2133] text-slate-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Configuration & Generator (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0f111d] border border-[#23263a] rounded-2xl p-6 space-y-5">
            {/* Selected Species Card Preview */}
            <div className="bg-[#141624] border border-[#23263b] rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">{selectedSpecies.name}</span>
                  <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
                    Nat. #{selectedSpecies.nationalDex.toString().padStart(3, '0')}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">
                  Internal Game ID: <span className="text-purple-300">{selectedSpecies.internalId}</span> · Base EXP: {selectedSpecies.expYield}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  {selectedSpecies.types.filter(Boolean).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-purple-950/80 text-purple-200 border border-purple-800/60 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-mono capitalize">
                  {selectedSpecies.growthRate.replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* In-Game Obtainability & Engine Legal Notice */}
            <div
              className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                selectedSpecies.obtainability === 'kanto_native'
                  ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300'
                  : selectedSpecies.obtainability === 'johto_sevii'
                  ? 'bg-blue-950/30 border-blue-800/40 text-blue-300'
                  : selectedSpecies.obtainability === 'trade_hoenn'
                  ? 'bg-amber-950/30 border-amber-800/40 text-amber-300'
                  : 'bg-purple-950/30 border-purple-800/40 text-purple-300'
              }`}
            >
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <div className="font-semibold">
                  {selectedSpecies.obtainability === 'kanto_native'
                    ? 'Kanto Native / FireRed Wild'
                    : selectedSpecies.obtainability === 'johto_sevii'
                    ? 'Sevii Post-Game / National Dex Evolution'
                    : selectedSpecies.obtainability === 'trade_hoenn'
                    ? 'Hoenn Native (Requires RSE Trade)'
                    : 'Mythical / Distribution Event'}
                </div>
                <p className="opacity-90 leading-relaxed text-[11px]">
                  {selectedSpecies.obtainabilityNote}
                </p>
                {selectedSpecies.obtainability === 'trade_hoenn' && (
                  <div className="text-[10px] font-mono opacity-80 pt-0.5">
                    Data validity: 100% genuine Gen III BoxMon record. Uses internal ID {selectedSpecies.internalId} (offset from National #{selectedSpecies.nationalDex}).
                  </div>
                )}
              </div>
            </div>

            {/* Level & Shiny */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Level ({level})
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={level}
                  onChange={(e) => setLevel(Math.max(1, Math.min(100, Number(e.target.value))))}
                  className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 font-mono focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Shiny Status
                </label>
                <button
                  type="button"
                  onClick={() => setIsShinyMon(!isShinyMon)}
                  className={`w-full py-2 px-3 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition ${
                    isShinyMon
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm'
                      : 'bg-[#161826] border-[#2a2d42] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${isShinyMon ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
                  <span>{isShinyMon ? 'Shiny Star' : 'Standard'}</span>
                </button>
              </div>
            </div>

            {/* Nickname */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                Custom Nickname (Optional, Max 10)
              </label>
              <input
                type="text"
                maxLength={10}
                placeholder={selectedSpecies.name.toUpperCase()}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 font-mono uppercase focus:outline-none focus:border-purple-500 placeholder:text-slate-600"
              />
            </div>

            {/* Nature & Gender */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Nature
                </label>
                <select
                  value={natureId}
                  onChange={(e) => setNatureId(Number(e.target.value))}
                  className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  {NATURES_REGISTRY.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Gender
                </label>
                <select
                  value={gender}
                  disabled={selectedSpecies.genderRatio === 255 || selectedSpecies.genderRatio === 254 || selectedSpecies.genderRatio === 0}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'genderless')}
                  className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 disabled:opacity-50 focus:outline-none focus:border-purple-500"
                >
                  <option value="male">Male (♂)</option>
                  <option value="female">Female (♀)</option>
                  <option value="genderless">Genderless</option>
                </select>
              </div>
            </div>

            {/* Ability & Held Item */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Ability
                </label>
                <select
                  value={abilityNum}
                  onChange={(e) => setAbilityNum(Number(e.target.value))}
                  className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value={0}>1: {selectedSpecies.abilities[0] || 'Standard'}</option>
                  {selectedSpecies.abilities[1] && (
                    <option value={1}>2: {selectedSpecies.abilities[1]}</option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                  Held Item
                </label>
                <select
                  value={heldItem}
                  onChange={(e) => setHeldItem(Number(e.target.value))}
                  className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value={0}>None (0)</option>
                  {ITEMS_REGISTRY.slice(0, 80).map((it) => (
                    <option key={it.id} value={it.id}>
                      {it.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* IV Preset */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Individual Values (IVs)
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIvPreset('perfect');
                      setIvs({ hp: 31, attack: 31, defense: 31, speed: 31, spAttack: 31, spDefense: 31 });
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded font-mono transition ${
                      ivPreset === 'perfect' ? 'bg-purple-600 text-white' : 'bg-[#181a29] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All 31
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIvPreset('standard');
                      setIvs({ hp: 15, attack: 15, defense: 15, speed: 15, spAttack: 15, spDefense: 15 });
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded font-mono transition ${
                      ivPreset === 'standard' ? 'bg-purple-600 text-white' : 'bg-[#181a29] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Mid 15
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIvPreset('random');
                      setIvs({
                        hp: Math.floor(Math.random() * 32),
                        attack: Math.floor(Math.random() * 32),
                        defense: Math.floor(Math.random() * 32),
                        speed: Math.floor(Math.random() * 32),
                        spAttack: Math.floor(Math.random() * 32),
                        spDefense: Math.floor(Math.random() * 32),
                      });
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded font-mono transition ${
                      ivPreset === 'random' ? 'bg-purple-600 text-white' : 'bg-[#181a29] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Random
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {(['hp', 'attack', 'defense', 'speed', 'spAttack', 'spDefense'] as const).map((stat) => (
                  <div key={stat} className="bg-[#141624] border border-[#24273d] p-1.5 rounded-lg text-center">
                    <div className="text-[9px] uppercase text-slate-500 font-semibold">{stat.slice(0, 3)}</div>
                    <input
                      type="number"
                      min={0}
                      max={31}
                      value={ivs[stat]}
                      onChange={(e) => {
                        const val = Math.max(0, Math.min(31, Number(e.target.value) || 0));
                        setIvs((prev) => ({ ...prev, [stat]: val }));
                      }}
                      className="w-full bg-transparent text-center text-xs font-mono font-bold text-slate-200 focus:outline-none focus:text-purple-300 mt-0.5"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Create & Auto-Place Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCreateAndPlace}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-950/60 transition flex items-center justify-center gap-2"
              >
                <Wand2 className="w-4 h-4" />
                <span>Create & Auto-Place Pokémon</span>
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                Places into Party (if &lt;6) or automatically cascades to the first available PC Box slot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
