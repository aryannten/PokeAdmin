import React, { useState, useMemo } from 'react';

interface HexViewerProps {
  bytes: Uint8Array;
  bytesPerRow?: number;
  highlightRange?: [number, number];
  title?: string;
}

export const HexViewer: React.FC<HexViewerProps> = ({
  bytes,
  bytesPerRow = 16,
  title = 'Hex Inspector',
}) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 32;
  const pageSize = rowsPerPage * bytesPerRow;
  const totalPages = Math.ceil(bytes.length / pageSize) || 1;

  const currentSlice = useMemo(() => {
    const start = page * pageSize;
    return bytes.subarray(start, Math.min(start + pageSize, bytes.length));
  }, [bytes, page, pageSize]);

  const rows = useMemo(() => {
    const result: { offset: number; hex: string[]; ascii: string }[] = [];
    const baseOffset = page * pageSize;

    for (let r = 0; r < currentSlice.length; r += bytesPerRow) {
      const slice = currentSlice.subarray(r, Math.min(r + bytesPerRow, currentSlice.length));
      const hex: string[] = [];
      let ascii = '';

      for (let i = 0; i < bytesPerRow; i++) {
        if (i < slice.length) {
          const b = slice[i];
          hex.push(b.toString(16).padStart(2, '0').toUpperCase());
          // Printable ASCII 32 to 126
          ascii += b >= 32 && b <= 126 ? String.fromCharCode(b) : '.';
        } else {
          hex.push('  ');
          ascii += ' ';
        }
      }

      result.push({
        offset: baseOffset + r,
        hex,
        ascii,
      });
    }

    return result;
  }, [currentSlice, page, pageSize, bytesPerRow]);

  return (
    <div className="bg-[#0b0c13] border border-[#202234] rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      <div className="px-4 py-2.5 bg-[#10121d] border-b border-[#202234] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-200">{title}</span>
          <span className="text-[11px] text-slate-400">Total: {bytes.length.toLocaleString()} bytes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-[11px]">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-2 py-0.5 rounded bg-[#181a27] border border-[#26283d] text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#202334]"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="px-2 py-0.5 rounded bg-[#181a27] border border-[#26283d] text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#202334]"
          >
            Next
          </button>
        </div>
      </div>

      <div className="p-3 overflow-x-auto max-h-[480px] overflow-y-auto select-text">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-slate-400 text-left border-b border-[#1b1c2b]">
              <th className="pb-1 w-24">Offset</th>
              <th className="pb-1">
                <div className="grid grid-cols-16 gap-1 w-[420px]">
                  {Array.from({ length: 16 }, (_, i) => (
                    <span key={i} className="text-center font-normal">
                      {i.toString(16).toUpperCase()}
                    </span>
                  ))}
                </div>
              </th>
              <th className="pb-1 pl-4">Decoded Text</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.offset} className="hover:bg-[#151724] transition-colors">
                <td className="text-purple-400 font-semibold py-0.5">
                  0x{row.offset.toString(16).padStart(6, '0').toUpperCase()}
                </td>
                <td className="py-0.5">
                  <div className="grid grid-cols-16 gap-1 w-[420px]">
                    {row.hex.map((h, i) => (
                      <span
                        key={i}
                        className={`text-center ${
                          h === '00' ? 'text-slate-600' : h === 'FF' ? 'text-amber-400/80' : 'text-slate-200'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="pl-4 text-emerald-300/80 tracking-widest py-0.5">{row.ascii}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
