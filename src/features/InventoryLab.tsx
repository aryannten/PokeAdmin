import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Key,
  Disc,
  Apple,
  Package,
  Layers,
} from 'lucide-react';
import { WorkingSaveState, DecodedItem } from '../engine/save/types.ts';
import { ITEMS_REGISTRY, getItemById, BAG_POCKET_CAPACITIES, ItemPocket } from '../data/items.ts';

interface InventoryLabProps {
  state: WorkingSaveState;
  onStateChange: (newState: WorkingSaveState, description: string) => void;
}

type PocketKey = 'items' | 'keyItems' | 'pokeBalls' | 'tmCase' | 'berries';

const POCKET_TABS: {
  id: PocketKey;
  label: string;
  icon: React.FC<{ className?: string }>;
  capacity: number;
  dataPocket: ItemPocket;
}[] = [
  { id: 'items', label: 'Items Pocket', icon: Package, capacity: BAG_POCKET_CAPACITIES.items, dataPocket: 'items' },
  { id: 'keyItems', label: 'Key Items', icon: Key, capacity: BAG_POCKET_CAPACITIES.key_items, dataPocket: 'key_items' },
  { id: 'pokeBalls', label: 'Poké Balls', icon: Disc, capacity: BAG_POCKET_CAPACITIES.poke_balls, dataPocket: 'poke_balls' },
  { id: 'tmCase', label: 'TM Case', icon: Layers, capacity: BAG_POCKET_CAPACITIES.tm_case, dataPocket: 'tm_case' },
  { id: 'berries', label: 'Berry Pouch', icon: Apple, capacity: BAG_POCKET_CAPACITIES.berries, dataPocket: 'berries' },
];

export const InventoryLab: React.FC<InventoryLabProps> = ({ state, onStateChange }) => {
  const [activePocket, setActivePocket] = useState<PocketKey>('items');
  const [selectedItemIdToAdd, setSelectedItemIdToAdd] = useState<number>(1);
  const [quantityToAdd, setQuantityToAdd] = useState<number>(10);

  const pocketItems = state.inventory[activePocket];
  const activeTabMeta = POCKET_TABS.find((t) => t.id === activePocket)!;
  const isPocketFull = pocketItems.length >= activeTabMeta.capacity;

  const handleUpdateQuantity = (index: number, newQty: number) => {
    const qty = Math.max(1, Math.min(999, Math.floor(newQty)));
    const newItems = [...pocketItems];
    newItems[index] = { ...newItems[index], quantity: qty };

    const newInventory = {
      ...state.inventory,
      [activePocket]: newItems,
    };

    onStateChange(
      { ...state, inventory: newInventory },
      `Updated ${newItems[index].name} quantity to ${qty}`
    );
  };

  const handleRemoveItem = (index: number) => {
    const item = pocketItems[index];
    const newItems = pocketItems.filter((_: DecodedItem, i: number) => i !== index);
    const newInventory = {
      ...state.inventory,
      [activePocket]: newItems,
    };

    onStateChange(
      { ...state, inventory: newInventory },
      `Removed ${item.name} from ${activeTabMeta.label}`
    );
  };

  const handleAddItem = () => {
    if (isPocketFull) {
      alert(`${activeTabMeta.label} is full (${activeTabMeta.capacity} slots maximum)!`);
      return;
    }

    const itemMeta = getItemById(selectedItemIdToAdd);
    if (!itemMeta) return;

    // Check if already in pocket
    const existingIndex = pocketItems.findIndex((it: DecodedItem) => it.id === selectedItemIdToAdd);
    if (existingIndex !== -1 && activePocket !== 'keyItems') {
      // Increase quantity
      const existing = pocketItems[existingIndex];
      handleUpdateQuantity(existingIndex, existing.quantity + quantityToAdd);
      return;
    }

    const newItem: DecodedItem = {
      id: itemMeta.id,
      quantity: activePocket === 'keyItems' ? 1 : Math.max(1, Math.min(999, quantityToAdd)),
      name: itemMeta.name,
      pocket: activeTabMeta.dataPocket,
      slotIndex: pocketItems.length,
    };

    const newInventory = {
      ...state.inventory,
      [activePocket]: [...pocketItems, newItem],
    };

    onStateChange(
      { ...state, inventory: newInventory },
      `Added ${newItem.quantity}x ${newItem.name} to ${activeTabMeta.label}`
    );
  };

  // Filter available items for the current pocket
  const availableItemsForPocket = ITEMS_REGISTRY.filter(
    (it) => it.pocket === activeTabMeta.dataPocket
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Trainer Bag & Inventory Lab</h1>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              FireRed Security Encryption Handled
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Manage all 5 Bag compartments, adjust quantities up to 999, add key items, TMs, and berries.
          </p>
        </div>
      </div>

      {/* Pocket Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {POCKET_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activePocket === tab.id;
          const count = state.inventory[tab.id].length;
          const isFull = count >= tab.capacity;

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActivePocket(tab.id);
                const first = ITEMS_REGISTRY.find((it) => it.pocket === tab.dataPocket);
                if (first) setSelectedItemIdToAdd(first.id);
              }}
              className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                isActive
                  ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-950/30 ring-1 ring-purple-500'
                  : 'bg-[#0f111d] border-[#222538] hover:border-[#333752] hover:bg-[#151726]'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                <span className={`text-xs font-mono font-bold ${isFull ? 'text-amber-400' : 'text-slate-400'}`}>
                  {count}/{tab.capacity}
                </span>
              </div>
              <div className="mt-3">
                <div className="text-sm font-bold text-white truncate">{tab.label}</div>
                <div className="w-full bg-[#1e2133] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isFull ? 'bg-amber-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${Math.min(100, (count / tab.capacity) * 100)}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Add Item Panel & Pocket Items List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Pocket Inventory Table (8 cols) */}
        <div className="lg:col-span-8 bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#23263b] pb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{activeTabMeta.label} Contents</span>
              <span className="text-xs font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                {pocketItems.length} of {activeTabMeta.capacity} slots used
              </span>
            </div>
          </div>

          {pocketItems.length === 0 ? (
            <div className="p-12 text-center text-slate-500 space-y-2">
              <Package className="w-10 h-10 mx-auto opacity-40 text-slate-400" />
              <div className="font-semibold text-slate-400">This pocket is currently empty.</div>
              <div className="text-xs">Use the panel on the right to add items to your {activeTabMeta.label}.</div>
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {pocketItems.map((item: DecodedItem, idx: number) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-[#141624] border border-[#22253a] hover:border-[#353958] transition p-3 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-500 w-6">#{idx + 1}</span>
                    <div>
                      <div className="font-semibold text-sm text-slate-200">{item.name}</div>
                      <div className="text-[11px] font-mono text-slate-500">Item ID {item.id}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {activePocket !== 'keyItems' ? (
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-slate-400 uppercase font-mono">Qty:</label>
                        <input
                          type="number"
                          min={1}
                          max={999}
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(idx, Number(e.target.value))}
                          className="w-20 bg-[#1b1e30] border border-[#2d314d] rounded-lg px-2.5 py-1 text-xs text-white font-mono text-center focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 bg-[#1b1e30] px-2 py-1 rounded">
                        Key Item
                      </span>
                    )}

                    <button
                      onClick={() => handleRemoveItem(idx)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 transition"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Add Item Studio (4 cols) */}
        <div className="lg:col-span-4 bg-[#0f111d] border border-[#23263b] rounded-2xl p-6 space-y-5 shadow-xl">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Add Item to {activeTabMeta.label}</h3>
            <p className="text-xs text-slate-400 mt-1">
              Select any verified Generation III item recognized by Pokémon FireRed.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Select Item
              </label>
              <select
                value={selectedItemIdToAdd}
                onChange={(e) => setSelectedItemIdToAdd(Number(e.target.value))}
                className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {availableItemsForPocket.map((it) => (
                  <option key={it.id} value={it.id}>
                    #{it.id.toString().padStart(3, '0')} - {it.name}
                  </option>
                ))}
              </select>
            </div>

            {activePocket !== 'keyItems' && (
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={999}
                    value={quantityToAdd}
                    onChange={(e) => setQuantityToAdd(Math.max(1, Math.min(999, Number(e.target.value))))}
                    className="w-full bg-[#141624] border border-[#262940] rounded-xl px-3 py-2 text-sm text-slate-200 font-mono focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantityToAdd(99)}
                    className="px-2.5 py-2 rounded-xl bg-[#1b1e30] border border-[#2d314d] text-xs font-mono text-purple-300 hover:bg-[#252942]"
                  >
                    99
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantityToAdd(999)}
                    className="px-2.5 py-2 rounded-xl bg-[#1b1e30] border border-[#2d314d] text-xs font-mono text-purple-300 hover:bg-[#252942]"
                  >
                    999
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleAddItem}
              disabled={isPocketFull}
              className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-purple-950/50 transition flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isPocketFull ? 'Pocket is Full' : 'Add to Inventory'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
