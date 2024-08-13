import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      user: null,
      updateUser: (newUser: any) =>
        set((state: any) => ({
          user: { ...state.user, ...newUser },
        })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);

export const userAssetsStore = create(
  persist(
    (set) => ({
      userAssets: null,
      updateUserAssets: (newUserAssets: any) =>
        set((state: any) => ({
          userAssets: { ...state.userAssets, ...newUserAssets },
        })),
      clearUserAssets: () => set({ userAssets: null }),
    }),
    {
      name: "userAssets-storage",
    }
  )
);
