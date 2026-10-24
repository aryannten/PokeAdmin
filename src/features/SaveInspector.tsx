import React, { useState } from 'react';
import {
  Binary,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { WorkingSaveState } from '../engine/save/types.ts';
import { HexViewer } from '../components/HexViewer.tsx';
import { FIRERED_SECTION_SIZES } from '../engine/save/sector.ts';

interface SaveInspectorProps {
  state: WorkingSaveState;
}

const SECTION_NAMES: Record<number, string> = {
  0: 'Trainer Profile & Pokédex (SaveBlock2)',
  1: 'Party Pokémon & Items (SaveBlock1 #1)',
  2: 'Game State & Events (SaveBlock1 #2)',
  3: 'Misc Game Variables (SaveBlock1 #3)',
  4: 'Rival & Hall of Fame (SaveBlock1 #4)',
  5: 'PC Storage: Boxes 1–2',
  6: 'PC Storage: Boxes 3–4',
  7: 'PC Storage: Boxes 5–6',
  8: 'PC Storage: Boxes 7–8',
  9: 'PC Storage: Boxes 9–10',
  10: 'PC Storage: Boxes 11–12',
  11: 'PC Storage: Boxes 13–14',
  12: 'PC Storage: Box Names & Wallpapers',
  13: 'Hall of Fame Records',
};

export const SaveInspector: React.FC<SaveInspectorProps> = ({ state }) => {
  const diag = state.diagnostics;
  const activeSlot = diag.activeSlotIndex ?? 0;
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<0 | 1>(activeSlot);
  const [inspectSectorOffset, setInspectSectorOffset] = useState<number>(0);

  const slot = diag.slots[selectedSlotIndex];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Save File Inspector & Diagnostics</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              32 Physical Sectors · Dual 14-Sector Slots
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Low-level binary forensics: checksum validation, sector signatures (0x08012025), and wear-leveling rotation.
          </p>
        </div>

        {/* Slot Selector */}
        <div className="flex items-center gap-2 bg-[#0f111d] p-1.5 rounded-xl border border-[#23263b]">
          <button
            onClick={() => setSelectedSlotIndex(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition ${
              selectedSlotIndex === 0
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Slot 1 (Sectors 0–13)</span>
            {activeSlot === 0 && (
              <span className="text-[10px] bg-purple-950 px-1 py-0.2 rounded border border-purple-400 text-purple-200">
                ACTIVE
              </span>
            )}
          </button>
          <button
            onClick={() => setSelectedSlotIndex(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition ${
              selectedSlotIndex === 1
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Slot 2 (Sectors 14–27)</span>
            {activeSlot === 1 && (
              <span className="text-[10px] bg-purple-950 px-1 py-0.2 rounded border border-purple-400 text-purple-200">
                ACTIVE
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Diagnostics Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-4 shadow-xl">
          <div className="text-xs text-slate-400 uppercase font-semibold">Game Profile</div>
          <div className="text-base font-bold text-white mt-1">{diag.gameProfile}</div>
          <div className="text-[11px] font-mono text-slate-500 mt-0.5">Code: {diag.gameCode}</div>
        </div>

        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-4 shadow-xl">
          <div className="text-xs text-slate-400 uppercase font-semibold">Save File Size</div>
          <div className="text-base font-bold text-white mt-1">131,072 Bytes</div>
          <div className="text-[11px] font-mono text-emerald-400 mt-0.5">128 KiB Flash (Standard)</div>
        </div>

        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-4 shadow-xl">
          <div className="text-xs text-slate-400 uppercase font-semibold">Slot {selectedSlotIndex + 1} Counter</div>
          <div className="text-base font-bold font-mono text-purple-300 mt-1">{slot.saveCounter}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {selectedSlotIndex === activeSlot ? 'Most recent save' : 'Backup rotation slot'}
          </div>
        </div>

        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-4 shadow-xl">
          <div className="text-xs text-slate-400 uppercase font-semibold">Integrity State</div>
          <div className="text-base font-bold mt-1 flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{slot.isValid ? 'Valid & Editable' : 'Corrupt'}</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {slot.invalidChecksumSectionIds.length === 0 ? 'All 14 Checksums Match' : 'Checksum Mismatch'}
          </div>
        </div>
      </div>

      {/* 14-Sector Forensic Table */}
      <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-[#23263b] pb-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            <span>Slot {selectedSlotIndex + 1} Sector Architecture</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            Footer offset: 4080 (0x0FF0) · Checksum Size: Variable
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#23263b] text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-2.5 px-3">Physical Sector</th>
                <th className="py-2.5 px-3">Section ID</th>
                <th className="py-2.5 px-3">Section Name</th>
                <th className="py-2.5 px-3">Input Size</th>
                <th className="py-2.5 px-3">Stored Checksum</th>
                <th className="py-2.5 px-3">Expected</th>
                <th className="py-2.5 px-3">Signature</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Inspect Hex</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2133]">
              {slot.sectors.map((sec) => (
                <tr key={sec.physicalIndex} className="hover:bg-[#141624] transition">
                  <td className="py-2.5 px-3 font-bold text-slate-300">
                    Sector {sec.physicalIndex}
                  </td>
                  <td className="py-2.5 px-3 text-purple-300">
                    ID {sec.sectionId}
                  </td>
                  <td className="py-2.5 px-3 text-slate-200 font-sans font-medium">
                    {SECTION_NAMES[sec.sectionId] || `Unknown Section #${sec.sectionId}`}
                  </td>
                  <td className="py-2.5 px-3 text-slate-400">
                    {FIRERED_SECTION_SIZES[sec.sectionId] || 3968} B
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-300">
                    0x{sec.checksum.toString(16).padStart(4, '0').toUpperCase()}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-400">
                    0x{sec.expectedChecksum.toString(16).padStart(4, '0').toUpperCase()}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-300">
                    0x{sec.signature.toString(16).padStart(8, '0').toUpperCase()}
                  </td>
                  <td className="py-2.5 px-3">
                    {sec.isValidChecksum ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        ✓ Valid
                      </span>
                    ) : (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        ✕ Error
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setInspectSectorOffset(sec.offset)}
                      className="px-2 py-1 rounded bg-[#1c1f30] hover:bg-purple-900/40 text-purple-300 text-[11px] font-semibold transition"
                    >
                      Jump to Hex
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hex Viewer */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Binary className="w-5 h-5 text-purple-400" />
          <span>Raw Save File Hex Disassembler</span>
        </h2>
        <HexViewer
          bytes={state.workingBytes}
          title={`Raw Save Memory (Inspecting offset: 0x${inspectSectorOffset.toString(16).toUpperCase()})`}
        />
      </div>
    </div>
  );
};
