import { create } from "zustand";

export const transactionStore = create((set) => ({
  transactions: [],
  updateTransactions: (newTransactions: any) =>
    set((state: any) => ({
      transactions: { ...state.transactions, ...newTransactions },
    })),
}));
