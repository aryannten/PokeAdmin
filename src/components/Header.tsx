import React from 'react';
import {
  Download,
  FolderOpen,
  RotateCcw,
  RotateCw,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { WorkingSaveState } from '../engine/save/types.ts';

interface HeaderProps {
  state: WorkingSaveState | null;
  fileName: string;
  onOpenFile: () => void;
  onLoadSynthetic: () => void;
  onExport: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  state,
  fileName,
  onOpenFile,
  onLoadSynthetic,
  onExport,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}) => {
  const activeSlot = state?.diagnostics.activeSlotIndex ?? null;
  const isDirty = state?.isDirty ?? false;

  return (
    <header className="h-16 bg-[#0d0e15] border-b border-[#202234] px-6 flex items-center justify-between shrink-0">
      {/* File & Slot Info */}
      <div className="flex items-center gap-4">
        {state ? (
          <>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-200">{fileName}</span>
              {isDirty ? (
                <span className="flex items-center gap-1 text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  <AlertTriangle className="w-3 h-3" /> Unsaved Edits
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Synced
                </span>
              )}
            </div>

            <div className="h-4 w-px bg-[#26283d]" />

            <div className="text-xs font-mono text-slate-400 flex items-center gap-3">
              <span>
                Active Slot:{' '}
                <strong className="text-purple-300 font-semibold">
                  {activeSlot !== null ? `Slot ${activeSlot + 1}` : 'None'}
                </strong>
              </span>
              <span>
                Save Index:{' '}
                <strong className="text-slate-300">
                  {activeSlot !== null ? state.diagnostics.slots[activeSlot].saveCounter : '-'}
                </strong>
              </span>
              <span>
                Profile:{' '}
                <strong className="text-slate-300">{state.diagnostics.gameProfile}</strong>
              </span>
            </div>
          </>
        ) : (
          <span className="text-sm text-slate-400 font-mono">No save file loaded</span>
        )}
      </div>

      {/* Global Action Buttons */}
      <div className="flex items-center gap-3">
        {state && (
          <div className="flex items-center gap-1 border-r border-[#202234] pr-3 mr-1">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              title="Undo last change (Ctrl+Z)"
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition ${
                canUndo
                  ? 'border-[#26283d] text-slate-300 hover:bg-[#181a26] hover:text-white'
                  : 'border-[#1b1c28] text-slate-600 cursor-not-allowed'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              title="Redo change (Ctrl+Y)"
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition ${
                canRedo
                  ? 'border-[#26283d] text-slate-300 hover:bg-[#181a26] hover:text-white'
                  : 'border-[#1b1c28] text-slate-600 cursor-not-allowed'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={onLoadSynthetic}
          title="Load synthetic 128KB FireRed save fixture for instant test"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 hover:bg-indigo-900/50 hover:text-indigo-200 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Load Demo Save</span>
        </button>

        <button
          onClick={onOpenFile}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#181a26] text-slate-200 border border-[#2b2d42] hover:bg-[#202334] hover:text-white transition"
        >
          <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>Open .SAV</span>
        </button>

        {state && (
          <button
            onClick={onExport}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-purple-600 text-white shadow-sm hover:bg-purple-500 active:scale-95 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Modified .SAV</span>
          </button>
        )}
      </div>
    </header>
  );
};
