import { CartItem } from "@/typings/cart";
import { Product } from "@/typings/product";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  cart: CartItem[];
  updatePrices: (products: any) => void;
  addToCart: (item: Omit<CartItem, "sn" | "line_price">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

type CartStore = StateCreator<
  CartState,
  [],
  [["zustand/persist", Partial<CartState>]]
>;

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],
      updatePrices: (products) => {
        if (!Array.isArray(products)) {
          console.error("Products is not an array or is undefined:", products);
          return;
        }

        set((state) => ({
          cart: state.cart.map((item) => {
            const product = products.find((p: Product) => p.id === item.id);
            if (product) {
              return {
                ...item,
                price: product.ask_price,
                line_price: product.ask_price * (item.quantity ?? 1),
              };
            }
            return item;
          }),
        }));
      },
      addToCart: (item: Partial<CartItem>) => {
        const quantity = item.quantity ?? 1; // Default quantity to 1 if undefined
        const price = item.price ?? 0; // Default price to 0 if undefined

        set((state: CartState) => {
          const existingItem = state.cart.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id
                  ? {
                      ...i,
                      quantity: (i.quantity ?? 0) + quantity,
                      line_price: (i.line_price ?? 0) + price * quantity,
                    }
                  : i
              ),
            };
          } else {
            const sn = state.cart.length + 1;
            const newItem: CartItem = {
              sn,
              id: item.id ?? "",
              price,
              usd_price: item.usd_price ?? 0,
              quantity,
              line_price: price * quantity,
            };
            return { cart: [...state.cart, newItem] };
          }
        });
      },
      removeFromCart: (id: string) =>
        set((state: CartState) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // name of the key in local storage
    }
  )
);
