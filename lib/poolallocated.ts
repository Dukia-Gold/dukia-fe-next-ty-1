import React, { useState, useEffect, useRef } from "react";
import { formatDecimal } from "./decimalFormatter";
import usePoolAllocatedStore from "@/store/usePoolAllocatedStore";

const PoolAllocated = () => {
  let gram = 0;
  let localPrice = 0;
  const { update } = usePoolAllocatedStore((state: any) => ({
    update: state.update,
  }));
  const [buy, isBuy] = useState<boolean>(true);
  // const [price, setPrice] = useState<string>("0");
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(0);
  const [goldBidPricePerGram, setGoldBidPricePerGram] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [isGramToPrice, setIsGramToPrice] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to round up to the nearest 10
  const roundUpToNearestTen = (value: number) => {
    return Math.ceil(value / 100) * 100;
  };

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setGoldPricePerGram(data.ask_price);
      setGoldBidPricePerGram(data.bid_price);
      if (isGramToPrice) {
        const precisePrice = gram * data.ask_price;
        const roundedPrice = roundUpToNearestTen(precisePrice);
        update({ price: formatDecimal(roundedPrice, 2, true) });
        // setPrice(formatDecimal(roundedPrice, 2, true));
      } else {
        if (buy) {
          update({ gram: formatDecimal(localPrice / goldPricePerGram, 4) });
        } else {
          update({ gram: formatDecimal(localPrice / goldBidPricePerGram, 4) });
        }
      }
    } catch (error) {
      console.error("Error fetching gold price:", error);
    }
  };

  const handleGramInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "" || value === ".") {
      update({ gram: value });
      gram = Number(value);

      // Calculate the price with full precision
      const precisePrice = parseFloat(value) * goldPricePerGram;

      // Round up to the nearest 10 Naira
      const roundedPrice = roundUpToNearestTen(precisePrice);

      // Display the rounded price
      update({ price: formatDecimal(roundedPrice, 2, true) });

      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      update({ gram: "0" });
      resetTimer();
    }
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(value)) || value === "" || value === ".") {
      localPrice = Number(value);

      // Full precision gram calculation
      let preciseGram;
      if (buy) {
        preciseGram = parseFloat(value) / goldPricePerGram;
      } else {
        preciseGram = parseFloat(value) / goldBidPricePerGram;
      }

      // Display rounded values
      const roundedGram = formatDecimal(preciseGram, 4);
      update({
        price: formatNumber(value, true),
        gram: roundedGram,
      });

      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      update({ price: "0" });
      resetTimer();
    }
  };

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimer(30);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          fetchGoldPrice();
          return 30;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(30);
  };

  const toggleMode = () => {
    setIsGramToPrice(!isGramToPrice);
    update({ gram: "0", price: "0" });
    resetTimer();
  };

  const formatNumber = (
    value: string | number,
    isPrice: boolean = false
  ): string => {
    if (isPrice) {
      const parts = value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return value.toString();
  };

  useEffect(() => {
    fetchGoldPrice();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    handlePriceInput,
    handleGramInput,
    resetTimer,
    formatNumber,
    goldPricePerGram,
    isBuy,
    goldBidPricePerGram,
    timer,
    toggleMode,
    isGramToPrice,
  };
};

export default PoolAllocated;
