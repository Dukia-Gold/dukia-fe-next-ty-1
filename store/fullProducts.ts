import { create } from "zustand";

export const fullProductsStore = create((set) => ({
  fullProducts: null,
  updateFullProducts: (newFullProducts: any) =>
    set((state: any) => ({
      fullProducts: { ...state.fullProducts, ...newFullProducts },
    })),
  getProductById: (id: string) => {
    const state: any = fullProductsStore.getState();
    return state.fullProducts.find((product: any) => product.id === id);
  },
  clearFullProducts: () => set({ fullProducts: null }), // Implement clearUser method
}));
