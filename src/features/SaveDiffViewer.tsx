import React, { useState } from 'react';
import {
  GitCompare,
  RotateCcw,
  RotateCw,
  Download,
  Camera,
  FileCheck,
} from 'lucide-react';
import { TransactionManager } from '../engine/transactions/transaction-manager.ts';

interface SaveDiffViewerProps {
  txManager: TransactionManager;
  onUndo: () => void;
  onRedo: () => void;
  onExport: () => void;
}

export const SaveDiffViewer: React.FC<SaveDiffViewerProps> = ({
  txManager,
  onUndo,
  onRedo,
  onExport,
}) => {
  const [snapshotName, setSnapshotName] = useState('');
  const [snapshotMsg, setSnapshotMsg] = useState('');

  const diff = txManager.generateDiff();
  const snapshots = txManager.listSnapshots();

  const handleTakeSnapshot = () => {
    if (!snapshotName.trim()) return;
    txManager.saveSnapshot(snapshotName.trim());
    setSnapshotMsg(`Snapshot "${snapshotName.trim()}" saved.`);
    setSnapshotName('');
    setTimeout(() => setSnapshotMsg(''), 3000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Save Revision History & Diff</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              {diff.totalChanges} Semantic Differences
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Audit field-level mutations made during your session against original byte structures before exporting.
          </p>
        </div>

        {/* Global Toolbar */}
        <div className="flex items-center gap-2">
          <button
            onClick={onUndo}
            disabled={!txManager.canUndo}
            className="px-3.5 py-2 rounded-xl bg-[#141624] border border-[#262940] hover:bg-[#1e2238] disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-4 h-4 text-purple-400" />
            <span>Undo</span>
          </button>
          <button
            onClick={onRedo}
            disabled={!txManager.canRedo}
            className="px-3.5 py-2 rounded-xl bg-[#141624] border border-[#262940] hover:bg-[#1e2238] disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <RotateCw className="w-4 h-4 text-purple-400" />
            <span>Redo</span>
          </button>
          <button
            onClick={onExport}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-950/50 flex items-center gap-1.5 transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Modified .SAV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Domain Diff Table (8 cols) */}
        <div className="lg:col-span-8 bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#23263b] pb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-purple-400" />
              <span>Pending File Changes</span>
            </h2>
            <span className="text-xs font-mono text-purple-300">
              {diff.hasChanges ? `${diff.totalChanges} fields modified` : 'No modifications'}
            </span>
          </div>

          {!diff.hasChanges ? (
            <div className="p-12 text-center text-slate-500 space-y-2">
              <FileCheck className="w-10 h-10 mx-auto opacity-40 text-emerald-400" />
              <div className="font-semibold text-slate-300">Save state is identical to imported file.</div>
              <div className="text-xs">Any changes made in the Pokémon Lab, Bag, or Trainer card will be logged here.</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {diff.entries.map((entry, idx) => (
                <div
                  key={idx}
                  className="bg-[#141624] border border-[#24273c] p-3.5 rounded-xl space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white tracking-wide">{entry.title}</span>
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {entry.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                    <div className="bg-[#1b1e30] p-2 rounded-lg text-rose-300 border border-rose-950/50">
                      <span className="text-[10px] text-slate-500 uppercase block font-sans">Original:</span>
                      <span className="line-through">{entry.originalValue}</span>
                    </div>
                    <div className="bg-[#1b1e30] p-2 rounded-lg text-emerald-300 border border-emerald-950/50">
                      <span className="text-[10px] text-slate-500 uppercase block font-sans">Modified:</span>
                      <span>{entry.workingValue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Snapshots & Export Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Snapshots Box */}
          <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Camera className="w-5 h-5 text-purple-400" />
              <span>Session Snapshots</span>
            </h2>
            <p className="text-xs text-slate-400">
              Save named checkpoints in memory to compare or revert experimental edits.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Checkpoint name..."
                value={snapshotName}
                onChange={(e) => setSnapshotName(e.target.value)}
                className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleTakeSnapshot}
                disabled={!snapshotName.trim()}
                className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white text-xs font-semibold whitespace-nowrap transition"
              >
                Save
              </button>
            </div>

            {snapshotMsg && (
              <div className="text-xs text-emerald-400 font-medium">{snapshotMsg}</div>
            )}

            <div className="space-y-1.5 pt-2">
              {snapshots.length === 0 ? (
                <div className="text-xs text-slate-500 italic">No checkpoints saved yet.</div>
              ) : (
                snapshots.map((snap) => (
                  <div
                    key={snap}
                    className="p-2 rounded-lg bg-[#141624] border border-[#222538] flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-slate-200">{snap}</span>
                    <button
                      onClick={() => txManager.restoreSnapshot(snap)}
                      className="text-purple-400 hover:text-purple-300 font-mono text-[11px]"
                    >
                      Restore
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Export Safety Details */}
          <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-3 shadow-xl">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Safe Serialization Guarantee</span>
            </h3>
            <ul className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Active save slot counter auto-increments for seamless emulator detection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>All 14 sector footers recalculated using official variable input byte sizes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Inactive save slot preserved unchanged for crash-recovery fallback.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
