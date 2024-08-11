export const fetchProductSearch = async (query: string) => {
  try {
    const response = await fetch(
      "https://api.dukiapreciousmetals.co/api/price/products"
    );
    const products = await response.json();

    const filteredProducts = products.filter(
      (product: any) => product.type === query
    );

    console.log(filteredProducts)
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
