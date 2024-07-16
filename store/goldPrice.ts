import { create } from "zustand";

export const goldStore = create((set) => ({
  goldDollars: null,
  gold1g: null,
  gold10g: null,
  gold1oz: null,
  updateGold: (updates: any) => set((state: any) => ({
    ...state,
    ...updates,
  })),
}));