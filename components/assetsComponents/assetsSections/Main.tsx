import { formatCurrency } from "@/lib/currencyformatter";
import { formatDecimal } from "@/lib/decimalFormatter";
import { fullProductsStore } from "@/store/fullProducts";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AssetCard from "../AssetCard";
import useFind from "@/lib/findById";
import { Cart } from "@/typings/cart";
import useBuy from "@/api/trading/buy";
import { useModalStore } from "@/store/modalStore";

const Main = ({ id }: { id: string }) => {
  const openModal = useModalStore((state) => state.openModal);
  const { buyPoolAllocated, buyDiscrete } = useBuy();

  const [itemDetails, setItemDetails] = useState<any>(null);
  const [balance, setBalance] = useState<number>(0);
  const [balanceUnit, setBalanceUnit] = useState<string>("g");
  const fullProducts = fullProductsStore((state: any) => state.fullProducts);
  const { findBalanceById, findItemById } = useFind();

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

  const handleTrade = (tradeType: "buy" | "sell") => {
    let cart: Cart = {
      cart: [
        {
          sn: 1,
          id: id,
          price: itemDetails?.ask_price,
          usd_price: itemDetails?.ask_price_usd,
          quantity: 1,
          line_price: itemDetails?.ask_price,
        },
      ],
      delivery_option: "storage",
    };

    openModal({
      type: "confirm",
      title: "Confirm Payment",
      message: `Sure to continue with the ${
        tradeType === "buy" ? "payment" : "withdrawal"
      } of ${
        tradeType === "buy"
          ? formatCurrency(itemDetails?.ask_price)
          : formatCurrency(itemDetails?.bid_price)
      } ?`,
      onConfirm: async () => {
        if (tradeType === "buy") {
          await buyDiscrete(cart);
        } else {
          console.log("Withdrawal not implemented");
        }
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl p-4 col-span-2">
      <div className="flex items-center justify-between">
        <p className="font-semibold">All Assets</p>

        <div></div>
      </div>

      <div className="mt-4 gap-7 grid grid-cols-4">
        {fullProducts &&
          Object.values(fullProducts).map((item: any) => (
            <Link key={item.id} href={`/dashboard/assets?id=${item.id}`}>
              <AssetCard item={item} id={id} />
            </Link>
          ))}
      </div>

      {/* Asset Details Section */}
      <div className="mt-8 bg-[#F6F7F9] rounded-xl p-4 flex items-center justify-between">
        {/* Asset Details */}
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
            <button
              type="button"
              onClick={() => handleTrade("buy")}
              disabled={itemDetails?.ask_price === 0}
              className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
            >
              <Plus width={24} height={24} stroke="white" />
            </button>
            <p>Buy</p>
          </div>

          {/* Sell */}
          <div className="space-y-2 flex flex-col items-center">
            <button
              type="button"
              onClick={() => handleTrade("sell")}
              disabled={balance === 0}
              className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
            >
              <ArrowDown width={24} height={24} stroke="white" />
            </button>
            <p>Sell</p>
          </div>

          {/* Gift */}
          <div className="space-y-2 flex flex-col items-center">
            <button
              type="button"
              disabled={balance === 0}
              className="bg-dukiaBlue rounded-[50%] cursor-pointer flex items-center justify-center p-1 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
            >
              <ArrowUpRight width={24} height={24} stroke="white" />
            </button>
            <p>Gift</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
