import { fullProductsStore } from "@/store/fullProducts";
import { useEffect } from "react";

const useFetchProducts = () => {
  const updateFullProducts = fullProductsStore(
    (state: any) => state.updateFullProducts
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/price/products"
      );
      const products = await response.json();
      updateFullProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return fetchProducts;
};

export default useFetchProducts;
