// Pure scratch-built Save File Domain Interfaces & Types
// Verified against pret/pokefirered definitions

import { UnpackedSubstructs } from '../substructures.ts';
import { CalculatedStats } from '../stats.ts';
import { ItemPocket } from '../../data/items.ts';

export interface SectorHeaderFooter {
  physicalIndex: number;
  offset: number;
  sectionId: number;
  checksum: number;
  expectedChecksum: number;
  signature: number;
  saveCounter: number;
  isValidSignature: boolean;
  isValidChecksum: boolean;
  size: number;
}

export interface SaveSlotMetadata {
  slotIndex: 0 | 1;
  startSector: number;
  endSector: number;
  saveCounter: number;
  isValid: boolean;
  missingSectionIds: number[];
  invalidChecksumSectionIds: number[];
  sectors: SectorHeaderFooter[];
}

export interface SaveFileDiagnostics {
  fileSizeBytes: number;
  is128KB: boolean;
  is64KB: boolean;
  gameProfile: 'Pokemon FireRed' | 'Pokemon LeafGreen' | 'Pokemon Emerald' | 'Unknown';
  gameCode: string;
  activeSlotIndex: 0 | 1 | null;
  slots: [SaveSlotMetadata, SaveSlotMetadata];
  warnings: string[];
  errors: string[];
  canEdit: boolean;
}

export interface DecodedTrainer {
  name: string;
  gender: 'male' | 'female';
  trainerId: number; // Low 16 bits (TID)
  secretId: number;  // High 16 bits (SID)
  fullOtId: number;  // 32-bit combined OT ID
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
  money: number;
  coins: number;
  badges: boolean[]; // Array of 8 boolean flags (Boulder, Cascade, Thunder, Rainbow, Soul, Marsh, Volcano, Earth)
  encryptionKey: number; // FireRed security key at SaveBlock2 + 0x0F20
  rawSaveBlock2Bytes: Uint8Array;
}

export interface DecodedPokemon {
  source: 'party' | 'pc';
  partyIndex?: number; // 0 to 5 if party
  boxIndex?: number;   // 0 to 13 if PC
  slotIndex?: number;  // 0 to 29 if PC
  personality: number;
  otId: number;
  nickname: string;
  language: number;
  isBadEgg: boolean;
  hasSpecies: boolean;
  isEgg: boolean;
  otName: string;
  markings: number;
  checksum: number;
  expectedChecksum: number;
  isChecksumValid: boolean;
  substructs: UnpackedSubstructs;
  // Derived / Calculated Attributes
  nationalDex: number;
  speciesName: string;
  generation: 1 | 2 | 3;
  level: number;
  natureId: number;
  natureName: string;
  gender: 'male' | 'female' | 'genderless';
  isShiny: boolean;
  calculatedStats: CalculatedStats;
  // Party-only fields (present if source === 'party')
  status?: number;
  currentHp?: number;
  maxHp?: number;
  // Raw 80 or 100 bytes for lossless round-tripping
  rawBytes: Uint8Array;
}

export interface DecodedItem {
  id: number;
  name: string;
  quantity: number;
  pocket: ItemPocket;
  slotIndex: number;
}

export interface DecodedInventory {
  items: DecodedItem[];
  keyItems: DecodedItem[];
  pokeBalls: DecodedItem[];
  tmCase: DecodedItem[];
  berries: DecodedItem[];
}

export interface DecodedBox {
  name: string;
  wallpaper: number;
  pokemon: (DecodedPokemon | null)[]; // 30 slots
}

export interface DecodedStorage {
  currentBox: number;
  boxes: DecodedBox[]; // 14 boxes
}

export interface DecodedPokedex {
  seenCount: number;
  caughtCount: number;
  seen: boolean[];   // 1 to 386
  caught: boolean[]; // 1 to 386
}

export interface WorkingSaveState {
  originalBytes: Uint8Array;
  workingBytes: Uint8Array;
  diagnostics: SaveFileDiagnostics;
  trainer: DecodedTrainer;
  party: DecodedPokemon[];
  storage: DecodedStorage;
  inventory: DecodedInventory;
  pokedex: DecodedPokedex;
  isDirty: boolean;
  lastSavedAt?: Date;
}
