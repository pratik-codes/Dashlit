export interface Bear {
    id: string;
    name: string;
    type: string;
  }
  
  export interface BearState {
    bears: Bear[];
    addBear: (bear: Bear) => void;
    removeBear: (id: string) => void;
    updateBear: (id: string, updates: Partial<Bear>) => void;
  }