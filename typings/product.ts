// Define the product interface
export interface ProductPrice {
  id: string;
  ask_price: number;
  bid_price: number;
}

// Define the Zustand store
export interface ProductStore {
  products: ProductPrice[];
  setProducts: (products: ProductPrice[]) => void;
  getProductById: (id: string) => ProductPrice | undefined;
}

export interface Product {
  id: string;
  type: string;
  name: string;
  weight: number;
  bid: number;
  ask: number;
  margin_bid: string;
  margin_ask: string;
  ask2: Number | null;
  bid2: Number | null;
  margin_ask2: string | null;
  margin_bid2: string | null;
  oz_size: number;
  oz_size2: number | null;
  size: string;
  origin: string;
  fine_weight: string;
  gross_weight: string;
  fineness: string;
  grade: string;
  thickness: string | null;
  diameter: string | null;
  manufacturer: string;
  keywords: string;
  description: string;
  thumbnail_url: string;
  thumbnail_url2: string;
  sn: number;
  price: string;
  price_currency: string;
  meta_data: null;
  created_at: string;
  updated_at: string;
  delivery_information: null;
  storage_information: null;
  certificates: string;
  ask_price: number;
  ask_formattedPrice: string;
  bid_price_usd: number;
  ask_price_usd: number;
  bid_price: number;
  bid_formattedPrice: string;
  xru: number;
}
