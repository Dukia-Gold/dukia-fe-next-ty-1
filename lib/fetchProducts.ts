import { fullProductsStore } from "@/store/fullProducts";
import { useProductStore } from "@/store/product";
import { useEffect } from "react";

const useFetchProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const updateFullProducts = fullProductsStore(
    (state: any) => state.updateFullProducts
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/price/products"
      );
      if (response.ok) {
        // Check if the response status is OK (200-299)
        const products = await response.json();
        setProducts(products);
        updateFullProducts(products);
      } else {
        console.error(`Error fetching products: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch products immediately on component mount
    fetchProducts();

    // Set up an interval to fetch products every 10 seconds
    const intervalId = setInterval(fetchProducts, 60000); // 10000 ms = 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return fetchProducts;
};

export default useFetchProducts;
