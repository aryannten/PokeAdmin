import React from 'react';
import {
  Binary,
  Shield,
  Key,
  BookOpen,
} from 'lucide-react';

export const GameSpecsHelp: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Game Specifications & Reverse Engineering Guide</h1>
          <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
            Gen III Engine Reference
          </span>
        </div>
        <p className="text-sm text-slate-400 mt-1">
          Technical specifications for Pokémon FireRed GBA save structures, byte encoding, and emulator hardware compatibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Flash Memory Layout */}
        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Binary className="w-5 h-5 text-purple-400" />
            <span>128 KiB Flash Memory & Wear-Leveling</span>
          </h2>
          <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
            <p>
              Pokémon FireRed uses a <strong>1 Mbit (128 KiB / 131,072 bytes)</strong> Macronix or Sanyo flash memory chip. The save is partitioned into 32 physical sectors of 4,096 bytes each.
            </p>
            <div className="bg-[#141624] p-3.5 rounded-xl border border-[#24273c] space-y-2 font-mono text-[11px]">
              <div>• <strong>Slot 1:</strong> Physical Sectors 0 to 13 (Offset 0x00000 – 0x0DFFF)</div>
              <div>• <strong>Slot 2:</strong> Physical Sectors 14 to 27 (Offset 0x0E000 – 0x1BFFF)</div>
              <div>• <strong>Hall of Fame:</strong> Physical Sectors 28 to 31 (Offset 0x1C000 – 0x1FFFF)</div>
            </div>
            <p>
              On every in-game save, the engine increments a 32-bit counter in the sector footers and alternates writing between Slot 1 and Slot 2. The emulator or hardware console boots from the slot with the <strong>highest valid save counter</strong>.
            </p>
          </div>
        </div>

        {/* Sector Checksums */}
        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span>Sector Checksum & Footers</span>
          </h2>
          <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
            <p>
              Each 4,096-byte sector ends with a 16-byte metadata footer at offset <strong>0x0FF0</strong>:
            </p>
            <div className="bg-[#141624] p-3.5 rounded-xl border border-[#24273c] space-y-1.5 font-mono text-[11px]">
              <div>• <code>0x0FF4</code> (2B): Section ID (0 to 13)</div>
              <div>• <code>0x0FF6</code> (2B): Stored Checksum (16-bit folded sum)</div>
              <div>• <code>0x0FF8</code> (4B): Game Signature (<code>0x08012025</code>)</div>
              <div>• <code>0x0FFC</code> (4B): 32-bit Save Counter</div>
            </div>
            <p>
              <strong>Critical Checksum Rule:</strong> Checksums are not computed over 3,968 bytes for every section! In FireRed, Section 0 is 3,876 bytes, Section 4 is 3,816 bytes, and Section 13 is 2,000 bytes. PokéAdmin validates all footers with genuine byte-exact bounds.
            </p>
          </div>
        </div>

        {/* Species Mappings */}
        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>National Pokédex #001–#386 vs Internal IDs</span>
          </h2>
          <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
            <p>
              Pokémon FireRed natively supports all 386 Pokémon from Generations I, II, and III. However, <strong>National Dex numbers do not match internal game IDs:</strong>
            </p>
            <div className="bg-[#141624] p-3.5 rounded-xl border border-[#24273c] space-y-2 font-mono text-[11px]">
              <div>• <strong>#001–#251:</strong> Bulbasaur to Celebi match IDs 1 to 251.</div>
              <div>• <strong>252–276:</strong> Reserved for old Unown forms (B–Z).</div>
              <div>• <strong>#252 Treecko:</strong> Internal ID <strong>277</strong> (offset by 25).</div>
              <div>• <strong>#386 Deoxys:</strong> Internal ID <strong>410</strong>.</div>
              <div>• <strong>#358 Chimecho:</strong> Added late at internal ID <strong>411</strong>.</div>
            </div>
            <p>
              PokéAdmin maintains verified bidirectional lookup tables between display names, National Dex numbers, and game-internal constants.
            </p>
          </div>
        </div>

        {/* FireRed Security Encryption */}
        <div className="bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Key className="w-5 h-5 text-purple-400" />
            <span>Security Encryption Keys</span>
          </h2>
          <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
            <p>
              Unlike Ruby and Sapphire, FireRed and LeafGreen introduced security key encryption located at <strong>SaveBlock2 offset 0x0F20</strong>.
            </p>
            <div className="bg-[#141624] p-3.5 rounded-xl border border-[#24273c] space-y-2 font-mono text-[11px]">
              <div>• <strong>Trainer Money:</strong> <code>rawMoney = actualMoney ^ encryptionKey</code></div>
              <div>• <strong>Casino Coins:</strong> <code>rawCoins = actualCoins ^ (encryptionKey & 0xFFFF)</code></div>
              <div>• <strong>Bag Quantities:</strong> <code>rawQty = actualQty ^ (encryptionKey & 0xFFFF)</code></div>
              <div>• <strong>PC Box Items:</strong> Not encrypted (plain 16-bit values).</div>
            </div>
            <p>
              PokéAdmin automatically manages this security key, ensuring imported saves remain 100% playable on My Boy! Android and mGBA without corrupting currency or inventory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
