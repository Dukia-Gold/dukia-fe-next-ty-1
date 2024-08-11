export interface CartItem {
  sn: number;
  id: string | undefined;
  price: number | undefined;
  usd_price: number | undefined;
  quantity: number | undefined;
  line_price: number | undefined;
}

export interface Cart {
  cart: CartItem[];
  delivery_option: string;
}
