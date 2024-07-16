import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
import { formatCurrency } from "@/lib/currencyformatter";
import { goldStore } from "@/store/goldPrice";
import React, { useEffect, useState } from "react";

const GoldPrice = () => {
  const fetchGoldPriceDollars = useFetchGoldPriceDollars();
  const goldDollars = goldStore((state: any) => state.goldDollars);
  const [askClass, setAskClass] = useState("");
  const [bidClass, setBidClass] = useState("");

  useEffect(() => {
    setAskClass('flash');
    const timeoutId = setTimeout(() => setAskClass(''), 1500);
    return () => clearTimeout(timeoutId);
  }, [goldDollars]);

  useEffect(() => {
    setBidClass('flash');
    const timeoutId = setTimeout(() => setBidClass(''), 1500);
    return () => clearTimeout(timeoutId);
  }, [goldDollars]);

  return (
    <div
      className="flex flex-col md:items-center  md:flex-row justify-between gap-1 py-3 px-1.5 md:px-5 lg:px-10
  bg-dukiaGold text-sm text-dukiaBlue font-semibold"
    >
      <p>
        GOLD ASK: <span className={`text-xs font-black ${askClass}`}>{formatCurrency(goldDollars?.ask.oz, "en-US", "USD")}/oz</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs font-black ${askClass}`}>{formatCurrency(goldDollars?.ask.g, "en-US", "USD")}/g</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs font-black ${askClass}`}>{formatCurrency(goldDollars?.ask.kg, "en-US", "USD")}/kg</span>
        <span className="text-xs font-black"> -0.01%(-$0.12)</span>
      </p>

      <p>
        GOLD BID:
        <span className={`text-xs font-black ${bidClass}`}>{formatCurrency(goldDollars?.bid.oz, "en-US", "USD")}/oz</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs font-black ${bidClass}`}>{formatCurrency(goldDollars?.bid.g, "en-US", "USD")}/g</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs font-black ${bidClass}`}>{formatCurrency(goldDollars?.bid.kg, "en-US", "USD")}/kg</span>
      </p>
    </div>
  );
};

export default GoldPrice;
