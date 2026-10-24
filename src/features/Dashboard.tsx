import React from 'react';
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Shield,
  Box,
  Wand2,
  Backpack,
  UserCheck,
  BookOpen,
  Binary,
  ArrowRight,
} from 'lucide-react';
import { WorkingSaveState } from '../engine/save/types.ts';
import { NavTab } from '../components/Sidebar.tsx';

interface DashboardProps {
  state: WorkingSaveState | null;
  onOpenFile: () => void;
  onLoadSynthetic: () => void;
  onNavigate: (tab: NavTab) => void;
  onDropFile: (e: React.DragEvent) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  state,
  onOpenFile,
  onLoadSynthetic,
  onNavigate,
  onDropFile,
}) => {
  const diag = state?.diagnostics;
  const activeSlot = diag?.activeSlotIndex ?? null;

  // Compute total boxed Pokémon count
  const boxedCount =
    state?.storage.boxes.reduce(
      (acc, b) => acc + b.pokemon.filter((p) => p !== null).length,
      0
    ) ?? 0;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome & File Dropzone Header */}
      {!state ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDropFile}
          className="border-2 border-dashed border-purple-800/50 bg-[#0e101b]/70 hover:bg-[#121422] transition-colors rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center shadow-inner">
            <Upload className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Open Your Pokémon FireRed Save File</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
              Drag and drop your <code className="text-purple-300 font-mono">.sav</code> file here, or browse your local files.
              Compatible with My Boy!, mGBA, and VBA-M battery saves (128 KiB).
            </p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onOpenFile}
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 shadow-md shadow-purple-950/50 transition"
            >
              Select Save File
            </button>
            <button
              onClick={onLoadSynthetic}
              className="px-5 py-2.5 rounded-xl bg-[#1a1d2e] text-slate-200 border border-[#2d304a] text-sm font-semibold hover:bg-[#22263d] hover:text-white transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Load Synthetic Save</span>
            </button>
          </div>
        </div>
      ) : (
        /* File Active Overview Header */
        <div className="bg-[#0f111d] border border-[#222538] rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">
                  {state.trainer.name}&apos;s FireRed Save
                </h1>
                <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
                  {diag?.gameProfile}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                OT ID: {state.trainer.trainerId} (Secret: {state.trainer.secretId}) · Playtime: {state.trainer.hours}h {state.trainer.minutes}m
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('creator')}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-500 shadow-sm transition flex items-center gap-1.5"
            >
              <Wand2 className="w-4 h-4" />
              <span>Pokémon Creator</span>
            </button>
            <button
              onClick={() => onNavigate('inspector')}
              className="px-4 py-2 rounded-xl bg-[#191b29] text-slate-300 border border-[#282a40] font-semibold text-xs hover:bg-[#212437] transition flex items-center gap-1.5"
            >
              <Binary className="w-4 h-4" />
              <span>Save Inspector</span>
            </button>
          </div>
        </div>
      )}

      {/* Main KPI Grid */}
      {state && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('party')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 hover:bg-[#121422] cursor-pointer transition group"
          >
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Party Pokémon</span>
              <Shield className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white font-mono">{state.party.length}</span>
              <span className="text-xs text-slate-400">/ 6 Slots</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 truncate">
              {state.party.map((p) => p.nickname).join(', ') || 'No Pokémon in party'}
            </p>
          </div>

          <div
            onClick={() => onNavigate('pc')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 hover:bg-[#121422] cursor-pointer transition group"
          >
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">PC Stored Pokémon</span>
              <Box className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white font-mono">{boxedCount}</span>
              <span className="text-xs text-slate-400">/ 420 Capacity</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">14 Boxes available (30 slots each)</p>
          </div>

          <div
            onClick={() => onNavigate('trainer')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 hover:bg-[#121422] cursor-pointer transition group"
          >
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Money & Coins</span>
              <UserCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white font-mono">₽{state.trainer.money.toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">Coins: {state.trainer.coins.toLocaleString()} · Badges: {state.trainer.badges.filter(Boolean).length}/8</p>
          </div>

          <div
            onClick={() => onNavigate('pokedex')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 hover:bg-[#121422] cursor-pointer transition group"
          >
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Pokédex Progress</span>
              <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white font-mono">{state.pokedex.caughtCount}</span>
              <span className="text-xs text-slate-400">/ 386 National</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">Seen: {state.pokedex.seenCount} Pokémon</p>
          </div>
        </div>
      )}

      {/* Save Slot & Sector Integrity Diagnostics */}
      {diag && (
        <div className="bg-[#0e101a] border border-[#1f2234] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Save Slot Health & Verification</h3>
              <p className="text-xs text-slate-400 font-mono">
                Flash 128 KiB memory wear-level diagnostics and sector integrity
              </p>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                diag.canEdit
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                  : 'bg-red-950/60 text-red-300 border-red-800/60'
              }`}
            >
              {diag.canEdit ? 'Integrity Verified' : 'Corrupted / Read Only'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diag.slots.map((slot) => {
              const isActive = slot.slotIndex === activeSlot;
              return (
                <div
                  key={slot.slotIndex}
                  className={`p-4 rounded-xl border ${
                    isActive
                      ? 'bg-purple-950/20 border-purple-600/50'
                      : 'bg-[#121420] border-[#222538]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-200">
                      Save Slot {slot.slotIndex + 1} (Sectors {slot.startSector}–{slot.endSector})
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-mono uppercase bg-purple-600 text-white px-2 py-0.5 rounded font-bold">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-slate-400 font-mono">
                    <div className="flex justify-between">
                      <span>Save Counter:</span>
                      <span className="text-slate-200 font-bold">{slot.saveCounter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className={slot.isValid ? 'text-emerald-400' : 'text-rose-400'}>
                        {slot.isValid ? '14/14 Valid Sectors' : `Missing: ${slot.missingSectionIds.join(', ')}`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {diag.warnings.length > 0 && (
            <div className="mt-4 p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-amber-200 text-xs space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Save File Warnings:</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                {diag.warnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Feature Quick Launch Cards */}
      {state && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => onNavigate('creator')}
            className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/30 to-[#121420] border border-purple-800/40 hover:border-purple-600/60 cursor-pointer transition group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-300">
                <Wand2 className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-300 transition-all" />
            </div>
            <h4 className="text-base font-bold text-white mt-4">Pokémon Creator Studio</h4>
            <p className="text-xs text-slate-400 mt-1">
              Generate any of the 386 National Dex Pokémon with custom Nature, Ability, IVs, EVs, and automatic placement.
            </p>
          </div>

          <div
            onClick={() => onNavigate('inventory')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 cursor-pointer transition group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1a1c2b] flex items-center justify-center text-purple-400">
                <Backpack className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-300 transition-all" />
            </div>
            <h4 className="text-base font-bold text-white mt-4">Inventory Lab</h4>
            <p className="text-xs text-slate-400 mt-1">
              Manage all 5 Bag Pockets: Items, Key Items, Poké Balls, TM Case, and Berry Pouch with encryption support.
            </p>
          </div>

          <div
            onClick={() => onNavigate('diff')}
            className="p-5 rounded-2xl bg-[#0e101a] border border-[#1f2234] hover:border-purple-600/40 cursor-pointer transition group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1a1c2b] flex items-center justify-center text-indigo-400">
                <Binary className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-300 transition-all" />
            </div>
            <h4 className="text-base font-bold text-white mt-4">Save Diff & Snapshots</h4>
            <p className="text-xs text-slate-400 mt-1">
              Inspect semantic diffs, create named snapshots, undo changes, and export a clean binary for My Boy!.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
