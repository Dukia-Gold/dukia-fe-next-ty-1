import { userAssetsStore } from "@/store/user";
import React, { useCallback, useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";

interface Product {
  product_id: string;
  total_bid_price_naira: number;
}

const ChartComponent = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const userAssets = userAssetsStore((state: any) => state.userAssets);

  const sortProducts = useCallback(() => {
    const products = userAssets.products.map((product: any) => ({
      product_id: product.product_id,
      total_bid_price_naira: parseFloat(product.total_bid_price_naira),
    }));

    setProductData(products);
  }, [userAssets.products]);

  useEffect(() => {
    sortProducts();
  }, [sortProducts]);

  const labels = productData.map((product) => product.product_id);
  const data = productData.map((product) => product.total_bid_price_naira);

  return (
    <>
      <div className="w-[318px] h-[318px]">
        <DoughnutChart data={data} labels={labels} />
      </div>
    </>
  );
};

export default ChartComponent;
