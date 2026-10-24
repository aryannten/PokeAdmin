import React from 'react';
import {
  LayoutDashboard,
  Shield,
  Box,
  Wand2,
  Backpack,
  UserCheck,
  BookOpen,
  Binary,
  GitCompare,
  HelpCircle,
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'party'
  | 'pc'
  | 'creator'
  | 'inventory'
  | 'trainer'
  | 'pokedex'
  | 'inspector'
  | 'diff'
  | 'help';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  partyCount: number;
  isDirty: boolean;
  canEdit: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  partyCount,
  isDirty,
  canEdit,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'party', label: 'Pokémon Party', icon: Shield, badge: partyCount > 0 ? `${partyCount}/6` : undefined },
    { id: 'pc', label: 'PC Storage', icon: Box },
    { id: 'creator', label: 'Pokémon Creator', icon: Wand2, highlight: true },
    { id: 'inventory', label: 'Inventory Lab', icon: Backpack },
    { id: 'trainer', label: 'Trainer & Cards', icon: UserCheck },
    { id: 'pokedex', label: 'Pokédex', icon: BookOpen },
    { id: 'inspector', label: 'Save Inspector', icon: Binary },
    { id: 'diff', label: 'History & Diff', icon: GitCompare, badge: isDirty ? 'Unsaved' : undefined },
    { id: 'help', label: 'Game Specs & Help', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-[#0d0e15] border-r border-[#202234] flex flex-col h-screen shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#202234] flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-purple-900/30">
          <Binary className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-wide text-white">PokéAdmin</span>
            <span className="text-[10px] uppercase font-semibold tracking-wider bg-purple-950 text-purple-300 border border-purple-800/60 px-1.5 py-0.5 rounded">
              GBA
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">FireRed Workbench</p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5">
          Workbench Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          const isDisabled = !canEdit && item.id !== 'dashboard' && item.id !== 'help' && item.id !== 'inspector';

          return (
            <button
              key={item.id}
              onClick={() => !isDisabled && onSelectTab(item.id as NavTab)}
              disabled={isDisabled}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-purple-600/15 text-purple-300 border border-purple-500/30 shadow-sm'
                  : isDisabled
                  ? 'text-slate-600 cursor-not-allowed opacity-50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#151722]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-purple-400' : isDisabled ? 'text-slate-600' : 'text-slate-400'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    item.badge === 'Unsaved'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800/50'
                      : 'bg-[#1b1d2a] text-slate-300 border border-[#2b2e44]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Status */}
      <div className="p-3 border-t border-[#202234] bg-[#0a0b10]/60">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Engine Status</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Ready
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">Scratch Pure TypeScript</p>
      </div>
    </aside>
  );
};
