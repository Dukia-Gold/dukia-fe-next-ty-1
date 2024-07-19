import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  loading: false,
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
}));

export default useLoadingStore;
