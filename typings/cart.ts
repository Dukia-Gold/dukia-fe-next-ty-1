export interface CartItem {
  sn: number;
  id: string;
  price: number;
  usd_price: number;
  quantity: number;
  line_price: number;
}

export interface Cart {
  cart: CartItem[];
  delivery_option: string;
}
