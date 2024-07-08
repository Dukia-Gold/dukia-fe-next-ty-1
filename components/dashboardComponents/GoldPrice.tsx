import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
import { formatCurrency } from "@/lib/currencyformatter";
import React, { useEffect, useState } from "react";

const GoldPrice = () => {
  const { ask, bid, fetchGoldPrice } = useFetchGoldPriceDollars();
  const [askClass, setAskClass] = useState("");
  const [bidClass, setBidClass] = useState("");

  useEffect(() => {
    fetchGoldPrice();

    const interval = setInterval(() => {
      fetchGoldPrice();
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAskClass("animate-bounce");
    const timeout = setTimeout(() => setAskClass(""), 1500);
    return () => clearTimeout(timeout);
  }, [ask]);

  useEffect(() => {
    setBidClass("animate-bounce");
    const timeout = setTimeout(() => setBidClass(""), 1500);
    return () => clearTimeout(timeout);
  }, [bid]);

  return (
    <div
      className="flex flex-col md:items-center  md:flex-row justify-between gap-1 py-3 px-1.5 md:px-5 lg:px-10
  bg-dukiaGold text-sm text-dukiaBlue font-bold"
    >
      <p>
        GOLD ASK: <span className={`text-xs ${askClass}`}>{formatCurrency(ask?.oz, "en-US", "USD")}/oz</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs ${askClass}`}>{formatCurrency(ask?.g, "en-US", "USD")}/g</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs ${askClass}`}>{formatCurrency(ask?.kg, "en-US", "USD")}/kg</span>
        <span className="text-xs"> -0.01%(-$0.12)</span>
      </p>

      <p>
        GOLD BID:
        <span className={`text-xs ${bidClass}`}>{formatCurrency(bid?.oz, "en-US", "USD")}/oz</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs ${bidClass}`}>{formatCurrency(bid?.g, "en-US", "USD")}/g</span>
        <span className="mx-0.5">|</span>
        <span className={`text-xs ${bidClass}`}>{formatCurrency(bid?.kg, "en-US", "USD")}/kg</span>
      </p>
    </div>
  );
};

export default GoldPrice;
