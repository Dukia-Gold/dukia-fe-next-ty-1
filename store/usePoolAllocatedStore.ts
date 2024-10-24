import { create } from "zustand";

// Zustand store for managing Pool Allocated state
const usePoolAllocatedStore = create((set) => ({
  gram: "0",
  price: "0",
  timer: 30,

  // update: (partialState) => set(partialState),
  update: (updates: any) =>
    set((state: any) => ({
      ...state,
      ...updates,
    })),
}));

export default usePoolAllocatedStore;
