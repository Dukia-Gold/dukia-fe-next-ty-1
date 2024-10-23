import React, { useState, useEffect, useRef } from "react";
import { formatDecimal } from "./decimalFormatter";

const PoolAllocated = () => {
  let gram = 0;
  let localPrice = 0;
  const [Gram, setGram] = useState<string>("0");
  const [price, setPrice] = useState<string>("0");
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [isGramToPrice, setIsGramToPrice] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      const data = await response.json();
      setGoldPricePerGram(data.ask_price);
      if (isGramToPrice) {
        setPrice(
          formatDecimal(gram * data.ask_price, 2, true)
        );
      } else {
        setGram(formatDecimal(localPrice / goldPricePerGram, 4));
      }
    } catch (error) {
      console.error("Error fetching gold price:", error);
    }
  };

  const handleGramInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "" || value === ".") {
      setGram(value);
      gram = Number(value);
      setPrice(formatDecimal(parseFloat(value) * goldPricePerGram, 2, true));
      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      setGram("0");
      resetTimer();
    }
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    console.log(e.target.value);
    if (!isNaN(Number(value)) || value === "" || value === ".") {
      localPrice = Number(value);
      setPrice(formatNumber(value, true));
      setGram(formatDecimal(parseFloat(value) / goldPricePerGram, 4));
      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      setPrice("0");
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
    setGram("0");
    setPrice("0");
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
    price,
    handlePriceInput,
    Gram,
    handleGramInput,
    resetTimer,
    formatNumber,
    goldPricePerGram,
    timer,
    toggleMode,
    isGramToPrice,
    setPrice,
  };
};

export default PoolAllocated;
