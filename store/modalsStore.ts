import { create } from "zustand";

const useModalsStore = create((set) => ({
  login: false,
  
  withdrawal: false,
  confirmWithdrawal: false,
  successfulWithdrawal: false,

  deposit: false,
  successfulDeposit: false,
  depositResponse: "",

  resetPassword: false,
  updateModals: (updates: any) => set((state: any) => ({
    ...state,
    ...updates,
  })),
}));

export default useModalsStore;
