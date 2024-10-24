export const fetchProductSearch = async (query: string) => {
  try {
    const response = await fetch(
      "https://api.dukiapreciousmetals.co/api/price/products"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const products = await response.json();

      const filteredProducts = products.filter(
        (product: any) => product.type === query
      );

      return filteredProducts;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
