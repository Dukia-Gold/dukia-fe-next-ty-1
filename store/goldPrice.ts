import { create } from "zustand";

export const userStore = create((set) => ({
  user: {},
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
}));