import { create } from "zustand";

export const transactionStore = create((set) => ({
  transactions: null,
  updateTransactions: (newTransactions: any) =>
    set((state: any) => ({
      transactions: { ...state.transactions, ...newTransactions },
    })),
  clearTransactions: () => set({ transactions: null }), // Implement clearUser method
}));
