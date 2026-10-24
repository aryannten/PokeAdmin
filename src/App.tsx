import React, { useState, useRef } from 'react';
import { Sidebar, NavTab } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';
import { Dashboard } from './features/Dashboard.tsx';
import { PokemonParty } from './features/PokemonParty.tsx';
import { PCStorage } from './features/PCStorage.tsx';
import { PokemonCreator } from './features/PokemonCreator.tsx';
import { InventoryLab } from './features/InventoryLab.tsx';
import { TrainerEditor } from './features/TrainerEditor.tsx';
import { PokedexManager } from './features/PokedexManager.tsx';
import { SaveInspector } from './features/SaveInspector.tsx';
import { SaveDiffViewer } from './features/SaveDiffViewer.tsx';
import { GameSpecsHelp } from './features/GameSpecsHelp.tsx';

import { WorkingSaveState } from './engine/save/types.ts';
import { detectSaveFile } from './engine/save/save-detector.ts';
import { parseSaveFile } from './engine/save/save-parser.ts';
import { serializeSaveFile } from './engine/save/save-serializer.ts';
import { TransactionManager } from './engine/transactions/transaction-manager.ts';
import { createSyntheticSaveFile } from './test/synthetic-save.ts';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [state, setState] = useState<WorkingSaveState | null>(null);
  const [fileName, setFileName] = useState<string>('No file open');
  const [txManager, setTxManager] = useState<TransactionManager | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadSaveBuffer = (bytes: Uint8Array, name: string) => {
    try {
      const diag = detectSaveFile(bytes);
      const parsed = parseSaveFile(bytes, diag);
      const manager = new TransactionManager(parsed);

      setState(parsed);
      setFileName(name);
      setTxManager(manager);
      setCurrentTab('dashboard');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      alert(`Failed to load save file: ${msg}`);
    }
  };

  const handleOpenFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      if (arrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        loadSaveBuffer(bytes, file.name);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleDropFile = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      if (arrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        loadSaveBuffer(bytes, file.name);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleLoadSynthetic = () => {
    const syntheticBytes = createSyntheticSaveFile(5);
    loadSaveBuffer(syntheticBytes, 'Pokemon_FireRed_Synthetic.sav');
  };

  const handleStateChange = (newState: WorkingSaveState, _description: string) => {
    if (!txManager) {
      setState(newState);
      return;
    }
    const updated = txManager.apply(() => newState);
    setState(updated);
  };

  const handleUndo = () => {
    if (!txManager || !txManager.canUndo) return;
    txManager.undo();
    setState(txManager.current);
  };

  const handleRedo = () => {
    if (!txManager || !txManager.canRedo) return;
    txManager.redo();
    setState(txManager.current);
  };

  const handleExport = () => {
    if (!state) return;
    try {
      const modifiedBytes = serializeSaveFile(state);
      const blob = new Blob([modifiedBytes.buffer as ArrayBuffer], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const baseName = fileName.replace(/\.[^/.]+$/, '');
      a.href = url;
      a.download = `${baseName}_edited.sav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      alert(`Export failed: ${msg}`);
    }
  };

  return (
    <div
      className="flex h-screen bg-[#090a0f] text-slate-100 overflow-hidden font-sans select-none"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropFile}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".sav,.bin"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        partyCount={state?.party.length ?? 0}
        isDirty={state?.isDirty ?? false}
        canEdit={Boolean(state?.diagnostics.canEdit)}
      />

      {/* Main Workbench Layout */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header
          state={state}
          fileName={fileName}
          onOpenFile={handleOpenFileClick}
          onLoadSynthetic={handleLoadSynthetic}
          onExport={handleExport}
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={txManager?.canUndo ?? false}
          canRedo={txManager?.canRedo ?? false}
        />

        {/* Dynamic Feature Content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0b12]">
          {currentTab === 'dashboard' && (
            <Dashboard
              state={state}
              onOpenFile={handleOpenFileClick}
              onLoadSynthetic={handleLoadSynthetic}
              onNavigate={setCurrentTab}
              onDropFile={handleDropFile}
            />
          )}

          {state && currentTab === 'party' && (
            <PokemonParty
              state={state}
              onStateChange={handleStateChange}
              onNavigateToCreator={() => setCurrentTab('creator')}
              onNavigateToPC={() => setCurrentTab('pc')}
            />
          )}

          {state && currentTab === 'pc' && (
            <PCStorage
              state={state}
              onStateChange={handleStateChange}
              onNavigateToParty={() => setCurrentTab('party')}
              onNavigateToCreator={() => setCurrentTab('creator')}
            />
          )}

          {state && currentTab === 'creator' && (
            <PokemonCreator
              state={state}
              onStateChange={handleStateChange}
              onNavigateToParty={() => setCurrentTab('party')}
              onNavigateToPC={() => setCurrentTab('pc')}
            />
          )}

          {state && currentTab === 'inventory' && (
            <InventoryLab state={state} onStateChange={handleStateChange} />
          )}

          {state && currentTab === 'trainer' && (
            <TrainerEditor state={state} onStateChange={handleStateChange} />
          )}

          {state && currentTab === 'pokedex' && (
            <PokedexManager state={state} onStateChange={handleStateChange} />
          )}

          {state && currentTab === 'inspector' && <SaveInspector state={state} />}

          {state && currentTab === 'diff' && txManager && (
            <SaveDiffViewer
              txManager={txManager}
              onUndo={handleUndo}
              onRedo={handleRedo}
              onExport={handleExport}
            />
          )}

          {currentTab === 'help' && <GameSpecsHelp />}
        </main>
      </div>
    </div>
  );
};
