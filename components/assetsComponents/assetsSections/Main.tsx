import { formatCurrency } from "@/lib/currencyformatter";
import { formatDecimal } from "@/lib/decimalFormatter";
import { fullProductsStore } from "@/store/fullProducts";
import { userAssetsStore } from "@/store/user";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Main = ({ id }: { id: string }) => {
  const [itemDetails, setItemDetails] = useState<any>(null);
  const [balance, setBalance] = useState<number>(0);
  const [balanceUnit, setBalanceUnit] = useState<string>("g");
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

  useEffect(() => {
    // Function to fetch and update details
    const updateDetails = () => {
      const details = findItemById(id);
      const balance = findBalanceById(id);
      setItemDetails(details);
      setBalance(balance !== undefined ? balance.total_weight : 0);
      setBalanceUnit(balance !== undefined ? balance.total_weight_unit : "g");
    };

    // Run the function once on page load
    updateDetails();

    // Set up the interval to run every 10 seconds
    const intervalId = setInterval(updateDetails, 10000); // Run every 10 seconds (10000 ms)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [fullProducts, id]); // Dependencies: update when fullProducts or id changes

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">All Assets</p>

        <div></div>
      </div>

      <div className="mt-4"></div>

      <div className="mt-8 bg-[#F6F7F9] rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Asset Thumbnail */}
          <div className="p-2.5 bg-[#FBF7EB] border border-white rounded-[50%]">
            <Image
              src={itemDetails?.thumbnail_url}
              alt={itemDetails?.name}
              width={40}
              height={23.5}
            />
          </div>

          {/* Asset Details */}
          <div className="border-r ml-4 pr-4 border-[#B9BBC8] space-y-1 text-xs">
            {/* Asset Name */}
            <p className="text-[#676D88]">{itemDetails?.name}</p>

            {/* Asset Price */}
            <p className="font-semibold text-sm">
              {formatCurrency(itemDetails?.ask_price)}
            </p>

            {/* 24hr Change */}
            <p className="text-[#43BA64]">
              ↑1.3% <span className="text-[#979BAE]">(24 hr)</span>
            </p>
          </div>

          {/* Your Balance */}
          <div className="space-y-1 ml-4">
            <p className="text-xs text-[#676D88]">Your Balance</p>

            <p className="text-sm font-semibold">
              {formatDecimal(balance, 4)} {balanceUnit}
            </p>
          </div>
        </div>

        {/* Buy, Sell, Gift Buttons */}
        <div className="text-sm font-semibold flex space-x-6">
          {/* Buy */}
          <div className="space-y-2 flex flex-col items-center">
            <div className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1">
              <Plus width={24} height={24} stroke="white" />
            </div>
            <p>Buy</p>
          </div>

          {/* Sell */}
          <div className="space-y-2 flex flex-col items-center">
            <div className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1">
              <ArrowDown width={24} height={24} stroke="white" />
            </div>
            <p>Sell</p>
          </div>

          {/* Gift */}
          <div className="space-y-2 flex flex-col items-center">
            <div className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1">
              <ArrowUpRight width={24} height={24} stroke="white" />
            </div>
            <p>Gift</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
