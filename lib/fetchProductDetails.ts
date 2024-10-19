export const fetchProductDetails = async (id: string) => {
  let apiUrl = `https://api.dukiapreciousmetals.co/api/products/${id}/withPrice`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const productDetails = await response.json();

      return productDetails || {};
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
