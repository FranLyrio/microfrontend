import create from 'zustand'

export type CountStore = {
  value: number;
  inc: () => void;
  dec: () => void;
}

export const countStore = create<CountStore>((set, get) => ({
  value: 0,
  inc: () => set({ value: get().value + 1 }),
  dec: () => set({ value: get().value - 1 }),
}));