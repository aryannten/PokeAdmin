import React from 'react';
import {
  UserCheck,
  Coins,
  DollarSign,
  Clock,
  Award,
} from 'lucide-react';
import { WorkingSaveState } from '../engine/save/types.ts';

interface TrainerEditorProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
}

const BADGES_META = [
  { name: 'Boulder Badge', leader: 'Brock', city: 'Pewter City', color: 'from-amber-700 to-amber-900' },
  { name: 'Cascade Badge', leader: 'Misty', city: 'Cerulean City', color: 'from-blue-600 to-blue-900' },
  { name: 'Thunder Badge', leader: 'Lt. Surge', city: 'Vermilion City', color: 'from-yellow-500 to-amber-700' },
  { name: 'Rainbow Badge', leader: 'Erika', city: 'Celadon City', color: 'from-emerald-500 to-teal-800' },
  { name: 'Soul Badge', leader: 'Koga', city: 'Fuchsia City', color: 'from-purple-600 to-purple-900' },
  { name: 'Marsh Badge', leader: 'Sabrina', city: 'Saffron City', color: 'from-indigo-500 to-indigo-900' },
  { name: 'Volcano Badge', leader: 'Blaine', city: 'Cinnabar Island', color: 'from-red-600 to-red-950' },
  { name: 'Earth Badge', leader: 'Giovanni', city: 'Viridian City', color: 'from-emerald-800 to-amber-950' },
];

export const TrainerEditor: React.FC<TrainerEditorProps> = ({ state, onStateChange }) => {
  const trainer = state.trainer;

  const handleUpdate = (field: keyof typeof trainer, value: any, desc: string) => {
    const updated = { ...trainer, [field]: value };
    // Recalculate fullOtId if trainerId or secretId changed
    if (field === 'trainerId' || field === 'secretId') {
      updated.fullOtId = (((updated.trainerId & 0xffff) | ((updated.secretId & 0xffff) << 16)) >>> 0);
    }

    onStateChange({ ...state, trainer: updated }, desc);
  };

  const handleToggleBadge = (badgeIndex: number) => {
    const newBadges = [...trainer.badges];
    newBadges[badgeIndex] = !newBadges[badgeIndex];
    handleUpdate('badges', newBadges, `Toggled ${BADGES_META[badgeIndex].name}`);
  };

  const handleUnlockAllBadges = () => {
    handleUpdate(
      'badges',
      [true, true, true, true, true, true, true, true],
      'Unlocked all 8 Kanto Gym Badges'
    );
  };

  const handleMaxMoneyAndCoins = () => {
    const updated = { ...trainer, money: 999999, coins: 9999 };
    onStateChange({ ...state, trainer: updated }, 'Set max money ($999,999) and coins (9,999)');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Trainer & Progression Card</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              SaveBlock2 + SaveBlock1
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Modify player identity, TID/SID personality seed pairs, currency, playtime counters, and Kanto gym badges.
          </p>
        </div>

        {/* Quick Batch Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleMaxMoneyAndCoins}
            className="px-3.5 py-2 rounded-xl bg-[#171a2c] hover:bg-[#20253d] border border-[#2c3150] text-purple-300 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Max Currency</span>
          </button>
          <button
            onClick={handleUnlockAllBadges}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-purple-950/40 transition"
          >
            <Award className="w-4 h-4" />
            <span>Unlock All 8 Badges</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Trainer Identity & Currency (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Identity Box */}
          <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-5 shadow-xl">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-purple-400" />
              <span>Trainer Identity</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Trainer Name (Max 7 chars)
                </label>
                <input
                  type="text"
                  maxLength={7}
                  value={trainer.name}
                  onChange={(e) => handleUpdate('name', e.target.value.toUpperCase(), `Updated name to ${e.target.value.toUpperCase()}`)}
                  className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-white font-mono uppercase focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Player Gender
                </label>
                <select
                  value={trainer.gender}
                  onChange={(e) => handleUpdate('gender', e.target.value, `Changed trainer gender to ${e.target.value}`)}
                  className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="male">Male (Red)</option>
                  <option value="female">Female (Leaf)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Trainer ID (TID)
                </label>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={trainer.trainerId}
                  onChange={(e) => handleUpdate('trainerId', Math.max(0, Math.min(65535, Number(e.target.value))), `Updated TID to ${e.target.value}`)}
                  className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Secret ID (SID)
                </label>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={trainer.secretId}
                  onChange={(e) => handleUpdate('secretId', Math.max(0, Math.min(65535, Number(e.target.value))), `Updated SID to ${e.target.value}`)}
                  className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="bg-[#141624] border border-[#222538] p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Full 32-bit OT ID (Hex):</span>
              <span className="text-purple-300 font-bold">
                0x{trainer.fullOtId.toString(16).padStart(8, '0').toUpperCase()}
              </span>
            </div>
          </div>

          {/* Currency & Playtime */}
          <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-5 shadow-xl">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>Currency & Security XOR Encryption</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Money ($0 – $999,999)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-500 font-mono">$</span>
                  <input
                    type="number"
                    min={0}
                    max={999999}
                    value={trainer.money}
                    onChange={(e) => handleUpdate('money', Math.max(0, Math.min(999999, Number(e.target.value))), `Updated money to $${e.target.value}`)}
                    className="w-full bg-[#141624] border border-[#262940] rounded-xl pl-8 pr-3 py-2 text-sm text-emerald-400 font-mono font-bold focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Casino Coins (0 – 9,999)
                </label>
                <input
                  type="number"
                  min={0}
                  max={9999}
                  value={trainer.coins}
                  onChange={(e) => handleUpdate('coins', Math.max(0, Math.min(9999, Number(e.target.value))), `Updated casino coins to ${e.target.value}`)}
                  className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="border-t border-[#23263b] pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Playtime Counters</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] text-slate-500 uppercase font-mono">Hours</label>
                  <input
                    type="number"
                    min={0}
                    max={999}
                    value={trainer.hours}
                    onChange={(e) => handleUpdate('hours', Math.max(0, Math.min(999, Number(e.target.value))), `Set playtime hours to ${e.target.value}`)}
                    className="w-full bg-[#141624] border border-[#262940] rounded-xl px-2.5 py-1.5 text-xs text-slate-200 font-mono text-center focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 uppercase font-mono">Minutes</label>
                  <input
                    type="number"
                    min={0}
                    max={59}
                    value={trainer.minutes}
                    onChange={(e) => handleUpdate('minutes', Math.max(0, Math.min(59, Number(e.target.value))), `Set playtime minutes to ${e.target.value}`)}
                    className="w-full bg-[#141624] border border-[#262940] rounded-xl px-2.5 py-1.5 text-xs text-slate-200 font-mono text-center focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 uppercase font-mono">Seconds</label>
                  <input
                    type="number"
                    min={0}
                    max={59}
                    value={trainer.seconds}
                    onChange={(e) => handleUpdate('seconds', Math.max(0, Math.min(59, Number(e.target.value))), `Set playtime seconds to ${e.target.value}`)}
                    className="w-full bg-[#141624] border border-[#262940] rounded-xl px-2.5 py-1.5 text-xs text-slate-200 font-mono text-center focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 8 Kanto Badges (6 cols) */}
        <div className="lg:col-span-6 bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#23263b] pb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Kanto Gym Badges</span>
            </h2>
            <span className="text-xs font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
              {trainer.badges.filter(Boolean).length}/8 Badges Acquired
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {BADGES_META.map((badge, idx) => {
              const isUnlocked = trainer.badges[idx];
              return (
                <button
                  key={badge.name}
                  onClick={() => handleToggleBadge(idx)}
                  className={`p-4 rounded-xl border text-left transition flex items-center gap-3.5 group ${
                    isUnlocked
                      ? 'bg-[#151726] border-purple-600/60 shadow-md shadow-purple-950/30'
                      : 'bg-[#10121d] border-[#222538] hover:border-slate-700 opacity-60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs bg-gradient-to-br ${
                      badge.color
                    } text-white shadow-inner ${
                      isUnlocked ? 'ring-2 ring-purple-400' : 'grayscale opacity-50'
                    }`}
                  >
                    #{idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-200 group-hover:text-white">
                      {badge.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {badge.leader} · {badge.city}
                    </div>
                    <div className="text-[10px] font-mono mt-0.5">
                      {isUnlocked ? (
                        <span className="text-emerald-400 font-semibold">● Acquired</span>
                      ) : (
                        <span className="text-slate-500">○ Locked</span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
