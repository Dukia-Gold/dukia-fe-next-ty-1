import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
  clearUser: () => set({ user: null }),
}));

export const userAssetsStore = create((set) => ({
  userAssets: null,
  updateUserAssets: (newUserAssets: any) =>
    set((state: any) => ({
      userAssets: { ...state.userAssets, ...newUserAssets },
    })),
  clearUserAssets: () => set({ user: null }),
}));
