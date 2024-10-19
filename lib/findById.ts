import { fullProductsStore } from "@/store/fullProducts";
import { userAssetsStore } from "@/store/user";

const useFind = () => {
  const fullProducts = fullProductsStore((state: any) => state.fullProducts);
  const userAssets = userAssetsStore((state: any) => state.userAssets);

  const findItemById = (id?: string) => {
    if (!fullProducts) {
      return null;
    }
    return Object.values(fullProducts).find((item: any) => item.id === id);
  };

  const findBalanceById = (id?: string) => {
    if (!userAssets) {
      return null;
    }
    return userAssets?.products.find(
      (product: any) => product.product_id === id
    );
  };

  return { findItemById, findBalanceById };
};

export default useFind;
