"use client";

import { goldStore } from "@/store/goldPrice";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

interface GoldPrice {
  oz: number;
  kg: number;
  g: number;
}

export const useFetchGoldPriceDollars = () => {
  const updateGold = goldStore((state: any) => state.updateGold);

  const fetchGoldPriceDollars = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/live-price"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Assuming data.goldDollars is the field containing the gold price in dollars
      updateGold({
        goldDollars: data,
      });

    } catch (error) {
      console.error('Error fetching gold price:', error);
    }
  };

  useEffect(() => {
    fetchGoldPriceDollars(); // Initial fetch

    const interval = setInterval(() => {
      fetchGoldPriceDollars(); // Fetch every 12 seconds
    }, 12000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return fetchGoldPriceDollars;
};


// Hook for fetching gold prices in NGN
export const useFetchGoldPriceNaira1g = () => {
  const [askNaira1g, setAskNaira1g] = useState<number>(0);
  const [bidNaira1g, setBidNaira1g] = useState<number>(0);
  const askNaira1gRef = useRef(askNaira1g);

  const fetchGoldPrice1g = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice"
      );
      const data = await response.json();
      setAskNaira1g(data.ask_price);
      setBidNaira1g(data.bid_price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoldPrice1g(); // Initial fetch

    const interval = setInterval(() => {
      fetchGoldPrice1g();
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    askNaira1gRef.current = askNaira1g;
  }, [askNaira1g]);

  return { askNaira1g, bidNaira1g, fetchGoldPrice1g };
};

export const useFetchGoldPriceNaira10g = () => {
  const [askNaira10g, setAskNaira10g] = useState<number>(0);
  const [bidNaira10g, setBidNaira10g] = useState<number>(0);

  const fetchGoldPrice10g = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/products/philoro-10g/withPrice"
      );
      const data = await response.json();
      setAskNaira10g(data.ask_price);
      setBidNaira10g(data.bid_price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoldPrice10g();
  }, []);

  return { askNaira10g, bidNaira10g, fetchGoldPrice10g };
};

export const useFetchGoldPriceNaira1oz = () => {
  const [askNaira1oz, setAskNaira1oz] = useState<number>(0);
  const [bidNaira1oz, setBidNaira1oz] = useState<number>(0);

  const fetchGoldPrice1oz = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/products/philoro-1oz/withPrice"
      );
      const data = await response.json();
      setAskNaira1oz(data.ask_price);
      setBidNaira1oz(data.bid_price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoldPrice1oz();
  }, []);

  return { askNaira1oz, bidNaira1oz, fetchGoldPrice1oz };
};

