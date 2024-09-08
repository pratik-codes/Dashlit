import { create } from 'zustand';
import { Bear, BearState } from './types/bear';

export const useStore = create<BearState>((set) => ({
  bears: [],
  addBear: (bear: Bear) => set((state) => ({ 
    bears: [...state.bears, bear] 
  })),
  removeBear: (id: string) => set((state) => ({ 
    bears: state.bears.filter(bear => bear.id !== id) 
  })),
  updateBear: (id: string, updates: Partial<Bear>) => set((state) => ({
    bears: state.bears.map(bear => 
      bear.id === id ? { ...bear, ...updates } : bear
    )
  })),
}));