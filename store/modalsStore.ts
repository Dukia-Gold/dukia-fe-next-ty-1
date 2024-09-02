import { create } from "zustand";

const useModalsStore = create((set) => ({
  login: false,

  withdrawal: false,
  confirmWithdrawal: false,
  successfulWithdrawal: false,

  deposit: false,
  successfulDeposit: false,
  depositResponse: "",

  sell: false,
  sellProductId: "",

  statementOfAccount: false,

  resetPassword: false,

  confirmModal: false,

  transactionCode: false,
  trade: "",
  payload: {},
  token: "",
  message: "",
  attemptsLeft: "",
  updateModals: (updates: any) =>
    set((state: any) => ({
      ...state,
      ...updates,
    })),
}));

export default useModalsStore;
