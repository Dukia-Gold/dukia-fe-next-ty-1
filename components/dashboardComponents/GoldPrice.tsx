import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
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
      <p className="flex items-center gap-0.5 lg:gap-1">
        GOLD ASK:
        <span className={`text-xs ${askClass}`}>$ {ask.oz}/oz</span>
        |<span className={`text-xs ${askClass}`}>$ {ask.g}/g</span>|
        <span className={`text-xs ${askClass}`}>$ {ask.kg}/kg</span>
        <span className="text-xs hidden sm:block">-0.01% (-$0.12)</span>
      </p>

      <p className="flex items-center gap-0.5 lg:gap-1">
        GOLD BID:
        <span className={`text-xs ${bidClass}`}>$ {bid.oz}/oz</span>
        |<span className={`text-xs ${bidClass}`}>$ {bid.g}/g</span>|
        <span className={`text-xs ${bidClass}`}>$ {bid.kg}/kg</span>
      </p>
    </div>
  );
};

export default GoldPrice;
