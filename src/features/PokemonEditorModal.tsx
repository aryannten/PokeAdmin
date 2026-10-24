import React, { useState } from 'react';
import { X, Sparkles, Check, Info } from 'lucide-react';
import { DecodedPokemon } from '../engine/save/types.ts';
import { SPECIES_REGISTRY, getSpeciesByInternalId } from '../data/species.ts';
import { NATURES_REGISTRY } from '../data/natures.ts';
import { MOVES_REGISTRY, getMoveById } from '../data/moves.ts';
import { ITEMS_REGISTRY } from '../data/items.ts';
import { solvePersonality, getGenderFromPersonality, isShiny } from '../engine/personality.ts';
import { calculateStats, getExpAtLevel } from '../engine/stats.ts';
import { packSubstructures } from '../engine/substructures.ts';
import { calculateBoxMonChecksum } from '../engine/checksum.ts';

interface PokemonEditorModalProps {
  pokemon: DecodedPokemon;
  onSave: (updated: DecodedPokemon) => void;
  onClose: () => void;
}

export const PokemonEditorModal: React.FC<PokemonEditorModalProps> = ({
  pokemon,
  onSave,
  onClose,
}) => {
  const [speciesId, setSpeciesId] = useState(pokemon.substructs.growth.species);
  const [nickname, setNickname] = useState(pokemon.nickname);
  const [level, setLevel] = useState(pokemon.level);
  const [natureId, setNatureId] = useState(pokemon.natureId);
  const [gender, setGender] = useState<'male' | 'female' | 'genderless'>(pokemon.gender);
  const [shiny, setShiny] = useState(pokemon.isShiny);
  const [abilityNum, setAbilityNum] = useState(pokemon.substructs.misc.abilityNum);
  const [heldItem, setHeldItem] = useState(pokemon.substructs.growth.heldItem);
  const [friendship] = useState(pokemon.substructs.growth.friendship);

  // Moves & PP
  const [moves, setMoves] = useState<[number, number, number, number]>([
    ...pokemon.substructs.attacks.moves,
  ]);
  const [pps, setPps] = useState<[number, number, number, number]>([
    ...pokemon.substructs.attacks.pp,
  ]);

  // IVs & EVs
  const [ivs, setIvs] = useState({
    hp: pokemon.substructs.misc.hpIV,
    attack: pokemon.substructs.misc.attackIV,
    defense: pokemon.substructs.misc.defenseIV,
    speed: pokemon.substructs.misc.speedIV,
    spAttack: pokemon.substructs.misc.spAttackIV,
    spDefense: pokemon.substructs.misc.spDefenseIV,
  });

  const [evs, setEvs] = useState({
    hp: pokemon.substructs.evs.hpEV,
    attack: pokemon.substructs.evs.attackEV,
    defense: pokemon.substructs.evs.defenseEV,
    speed: pokemon.substructs.evs.speedEV,
    spAttack: pokemon.substructs.evs.spAttackEV,
    spDefense: pokemon.substructs.evs.spDefenseEV,
  });

  const currentSpecies = getSpeciesByInternalId(speciesId) ?? SPECIES_REGISTRY[0];

  const handleApply = () => {
    // Solve PID satisfying Nature, Gender, Ability, and Shiny
    const newPersonality = solvePersonality({
      desiredNature: natureId,
      desiredGender: gender,
      genderRatio: currentSpecies.genderRatio,
      desiredAbilityNum: abilityNum,
      desiredShiny: shiny,
      otId: pokemon.otId,
    });

    const newGender = getGenderFromPersonality(newPersonality, currentSpecies.genderRatio);
    const newShiny = isShiny(newPersonality, pokemon.otId);
    const newExp = getExpAtLevel(level, currentSpecies.growthRate);

    const newSubstructs = {
      growth: {
        species: currentSpecies.internalId,
        heldItem,
        experience: newExp,
        ppBonuses: pokemon.substructs.growth.ppBonuses,
        friendship,
      },
      attacks: {
        moves,
        pp: pps,
      },
      evs: {
        hpEV: evs.hp,
        attackEV: evs.attack,
        defenseEV: evs.defense,
        speedEV: evs.speed,
        spAttackEV: evs.spAttack,
        spDefenseEV: evs.spDefense,
        cool: pokemon.substructs.evs.cool,
        beauty: pokemon.substructs.evs.beauty,
        cute: pokemon.substructs.evs.cute,
        smart: pokemon.substructs.evs.smart,
        tough: pokemon.substructs.evs.tough,
        sheen: pokemon.substructs.evs.sheen,
      },
      misc: {
        ...pokemon.substructs.misc,
        hpIV: ivs.hp,
        attackIV: ivs.attack,
        defenseIV: ivs.defense,
        speedIV: ivs.speed,
        spAttackIV: ivs.spAttack,
        spDefenseIV: ivs.spDefense,
        abilityNum,
      },
    };

    const calculatedStats = calculateStats(
      currentSpecies.internalId,
      currentSpecies.baseStats,
      ivs,
      evs,
      level,
      natureId
    );

    const packed = packSubstructures(newSubstructs, newPersonality);
    const newChecksum = calculateBoxMonChecksum(packed);

    const updated: DecodedPokemon = {
      ...pokemon,
      personality: newPersonality,
      nickname: nickname.trim().toUpperCase().slice(0, 10),
      nationalDex: currentSpecies.nationalDex,
      speciesName: currentSpecies.name,
      generation: currentSpecies.generation,
      level,
      natureId,
      natureName: NATURES_REGISTRY[natureId]?.name ?? 'Hardy',
      gender: newGender,
      isShiny: newShiny,
      substructs: newSubstructs,
      checksum: newChecksum,
      expectedChecksum: newChecksum,
      isChecksumValid: true,
      calculatedStats,
      currentHp: calculatedStats.hp,
      maxHp: calculatedStats.hp,
    };

    onSave(updated);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f111d] border border-[#23263a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#23263a] flex items-center justify-between bg-[#121422]">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">Edit Pokémon: {currentSpecies.name}</span>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              Nat. #{currentSpecies.nationalDex.toString().padStart(3, '0')} · Internal ID {currentSpecies.internalId}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#1f2234] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Obtainability & Generation Profile Banner */}
          <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
            currentSpecies.obtainability === 'kanto_native'
              ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300'
              : currentSpecies.obtainability === 'johto_sevii'
              ? 'bg-blue-950/30 border-blue-800/40 text-blue-300'
              : currentSpecies.obtainability === 'trade_hoenn'
              ? 'bg-amber-950/30 border-amber-800/40 text-amber-300'
              : 'bg-purple-950/30 border-purple-800/40 text-purple-300'
          }`}>
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-xs space-y-0.5">
              <div className="font-semibold flex items-center gap-2">
                <span>Gen {currentSpecies.generation} ({currentSpecies.generation === 1 ? 'Kanto' : currentSpecies.generation === 2 ? 'Johto' : 'Hoenn'})</span>
                <span>·</span>
                <span>{currentSpecies.types.filter(Boolean).join(' / ')} Type</span>
                <span>·</span>
                <span className="capitalize">{currentSpecies.growthRate.replace('_', ' ')} Growth</span>
              </div>
              <p className="opacity-90 leading-relaxed">
                {currentSpecies.obtainabilityNote}
                {currentSpecies.obtainability === 'trade_hoenn' && (
                  <span className="block mt-1 font-mono text-[11px] text-amber-200">
                    Engine Note: 100% valid Generation III save structure. Internal ID {currentSpecies.internalId} matches FireRed engine specifications.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Row 1: Species, Nickname, Level, Shiny */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Species
              </label>
              <select
                value={speciesId}
                onChange={(e) => {
                  const newId = Number(e.target.value);
                  setSpeciesId(newId);
                  const sp = getSpeciesByInternalId(newId);
                  if (sp) setNickname(sp.name.toUpperCase());
                }}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {SPECIES_REGISTRY.map((sp) => (
                  <option key={sp.internalId} value={sp.internalId}>
                    #{sp.nationalDex.toString().padStart(3, '0')} - {sp.name} (Gen {sp.generation})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Nickname (Max 10)
              </label>
              <input
                type="text"
                maxLength={10}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 uppercase font-mono focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
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
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Shiny Status
              </label>
              <button
                type="button"
                onClick={() => setShiny(!shiny)}
                className={`w-full py-2 px-3 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition ${
                  shiny
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-sm'
                    : 'bg-[#161826] border-[#2a2d42] text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className={`w-4 h-4 ${shiny ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
                <span>{shiny ? 'Shiny Active' : 'Normal Form'}</span>
              </button>
            </div>
          </div>

          {/* Row 2: Nature, Gender, Ability, Held Item */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Nature
              </label>
              <select
                value={natureId}
                onChange={(e) => setNatureId(Number(e.target.value))}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {NATURES_REGISTRY.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}{' '}
                    {n.increasedStat ? `(+${n.increasedStat}, -${n.decreasedStat})` : '(Neutral)'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Gender
              </label>
              <select
                value={gender}
                disabled={currentSpecies.genderRatio === 255 || currentSpecies.genderRatio === 254 || currentSpecies.genderRatio === 0}
                onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'genderless')}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 disabled:opacity-50 focus:outline-none focus:border-purple-500"
              >
                <option value="male">Male (♂)</option>
                <option value="female">Female (♀)</option>
                <option value="genderless">Genderless</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Ability
              </label>
              <select
                value={abilityNum}
                onChange={(e) => setAbilityNum(Number(e.target.value))}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
              >
                <option value={0}>Ability 1: {currentSpecies.abilities[0] || 'Standard'}</option>
                {currentSpecies.abilities[1] && (
                  <option value={1}>Ability 2: {currentSpecies.abilities[1]}</option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Held Item
              </label>
              <select
                value={heldItem}
                onChange={(e) => setHeldItem(Number(e.target.value))}
                className="w-full bg-[#161826] border border-[#2a2d42] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
              >
                <option value={0}>None</option>
                {ITEMS_REGISTRY.filter((it) => it.pocket === 'items' || it.pocket === 'berries').map((it) => (
                  <option key={it.id} value={it.id}>
                    {it.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: IVs & EVs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0a0c14] border border-[#1d2030] p-4 rounded-xl">
            {/* IVs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Individual Values (IVs: 0–31)
                </span>
                <button
                  type="button"
                  onClick={() => setIvs({ hp: 31, attack: 31, defense: 31, speed: 31, spAttack: 31, spDefense: 31 })}
                  className="text-[11px] text-purple-400 hover:text-purple-300 font-mono underline"
                >
                  Max All (31)
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['hp', 'attack', 'defense', 'speed', 'spAttack', 'spDefense'] as const).map((stat) => (
                  <div key={stat}>
                    <label className="text-[10px] font-mono uppercase text-slate-400">{stat}</label>
                    <input
                      type="number"
                      min={0}
                      max={31}
                      value={ivs[stat]}
                      onChange={(e) =>
                        setIvs({ ...ivs, [stat]: Math.max(0, Math.min(31, Number(e.target.value))) })
                      }
                      className="w-full bg-[#141624] border border-[#272a3e] rounded-lg px-2 py-1 text-xs text-slate-200 font-mono"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* EVs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Effort Values (EVs: 0–255)
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Total: {Object.values(evs).reduce((a, b) => a + b, 0)}/510
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['hp', 'attack', 'defense', 'speed', 'spAttack', 'spDefense'] as const).map((stat) => (
                  <div key={stat}>
                    <label className="text-[10px] font-mono uppercase text-slate-400">{stat}</label>
                    <input
                      type="number"
                      min={0}
                      max={255}
                      value={evs[stat]}
                      onChange={(e) =>
                        setEvs({ ...evs, [stat]: Math.max(0, Math.min(255, Number(e.target.value))) })
                      }
                      className="w-full bg-[#141624] border border-[#272a3e] rounded-lg px-2 py-1 text-xs text-slate-200 font-mono"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: Moves */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              Moveset (Slots 1–4)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((slot) => {
                return (
                  <div key={slot} className="flex items-center gap-2 bg-[#121422] border border-[#222538] p-2.5 rounded-xl">
                    <span className="text-xs font-mono font-bold text-slate-400 w-5 text-center">#{slot + 1}</span>
                    <select
                      value={moves[slot]}
                      onChange={(e) => {
                        const newId = Number(e.target.value);
                        const newMoves = [...moves] as [number, number, number, number];
                        newMoves[slot] = newId;
                        setMoves(newMoves);
                        const newPps = [...pps] as [number, number, number, number];
                        newPps[slot] = newId > 0 ? (getMoveById(newId)?.pp ?? 0) : 0;
                        setPps(newPps);
                      }}
                      className="flex-1 bg-[#181a28] border border-[#2d3046] rounded-lg px-2.5 py-1 text-xs text-slate-200"
                    >
                      <option value={0}>None</option>
                      {MOVES_REGISTRY.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name} ({m.type}, PP: {m.pp})
                        </option>
                      ))}
                    </select>
                    {moves[slot] > 0 && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                        PP: {pps[slot]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#23263a] bg-[#121422] flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Checksum & Personality will be automatically recalculated.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[#2a2d42] text-xs font-semibold text-slate-300 hover:bg-[#1a1c2a] transition"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 shadow-md transition flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
