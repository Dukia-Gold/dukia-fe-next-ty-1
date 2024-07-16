import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
  clearUser: () => set({ user: null }), // Implement clearUser method
}));
