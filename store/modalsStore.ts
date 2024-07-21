import { create } from "zustand";

const useModalsStore = create((set) => ({
  withdrawal: false,
  confirmWithdrawal: false,
  successfulWithdrawal: false,
  deposit: false,
  successfulDeposit: false,
  depositResponse: "",
  updateModals: (updates: any) => set((state: any) => ({
    ...state,
    ...updates,
  })),
}));

export default useModalsStore;
