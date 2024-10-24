import { create } from "zustand";

const useModalsStore = create((set) => ({
  login: false,
  register: false,

  withdrawal: false,
  confirmWithdrawal: false,
  successfulWithdrawal: false,

  deposit: false,
  successfulDeposit: false,
  depositResponse: "",

  sell: false,
  sellProductId: "",

  gifting: false,

  statementOfAccount: false,

  resetPassword: false,

  confirmModal: false,

  setTransactionCode: false,
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
