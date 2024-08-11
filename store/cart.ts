import { CartItem } from "@/typings/cart";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "sn">) => void;
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
      addToCart: (item: Omit<CartItem, "sn" | "line_price">) => {
        if (!item || !item.id) {
          console.error("Invalid item passed to addToCart:", item);
          return;
        }

        set((state: CartState) => {
          const existingItem = state.cart.find(
            (i: CartItem) => i.id === item.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((i: CartItem) =>
                i.id === item.id
                  ? {
                      ...i,
                      quantity: i.quantity + item.quantity,
                      line_price: i.line_price + item.price * item.quantity,
                    }
                  : i
              ),
            };
          } else {
            const sn = state.cart.length + 1;
            const newItem: CartItem = {
              ...item,
              sn,
              line_price: item.price * item.quantity,
            };
            return { cart: [...state.cart, newItem] };
          }
        });
      },
      removeFromCart: (id: string) =>
        set((state: CartState) => ({
          cart: state.cart.filter((item: CartItem) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // name of the key in local storage
    }
  )
);
