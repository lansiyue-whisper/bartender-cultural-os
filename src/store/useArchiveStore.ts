import { create } from 'zustand';

type BuilderState = {
  base: string;
  acid: string;
  sweet: string;
  aroma: string;
  texture: string;
};

type ArchiveState = {
  ambientMode: boolean;
  selectedUniverseNodeId: string | null;
  selectedKnowledgeNodeId: string | null;
  builder: BuilderState;
  setAmbientMode: (value: boolean) => void;
  setSelectedUniverseNodeId: (id: string | null) => void;
  setSelectedKnowledgeNodeId: (id: string | null) => void;
  setBuilderValue: (key: keyof BuilderState, value: string) => void;
};

export const useArchiveStore = create<ArchiveState>((set) => ({
  ambientMode: false,
  selectedUniverseNodeId: 'negroni',
  selectedKnowledgeNodeId: 'negroni',
  builder: {
    base: 'Gin',
    acid: 'Yuzu',
    sweet: 'Honey',
    aroma: 'Shiso',
    texture: 'Carbonated',
  },
  setAmbientMode: (value) => set({ ambientMode: value }),
  setSelectedUniverseNodeId: (id) => set({ selectedUniverseNodeId: id, selectedKnowledgeNodeId: id }),
  setSelectedKnowledgeNodeId: (id) => set({ selectedKnowledgeNodeId: id, selectedUniverseNodeId: id }),
  setBuilderValue: (key, value) =>
    set((state) => ({
      builder: {
        ...state.builder,
        [key]: value,
      },
    })),
}));
