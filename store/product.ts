import { ProductStore } from '@/typings/product';
import { create} from 'zustand';

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: ProductStore['products']) => set({ products }),
  getProductById: (id: string) => {
    const state: any = useProductStore.getState();
    return state.products.find((product: ProductStore['products'][number]) => product.id === id);
  }
}));
