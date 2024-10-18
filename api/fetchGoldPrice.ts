"use client";

import { goldStore } from "@/store/goldPrice";
import { useProductStore } from "@/store/product";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

interface GoldPrice {
  oz: number;
  kg: number;
  g: number;
}

export const useFetchProductPrices = () => {
  const fetchProductsPrices = async () => {
    try {
      const response = await axios.get(
        "https://api.dukiapreciousmetals.co/api/price/products"
      );
      const products = response.data.map((product: any) => ({
        id: product.id,
        ask_price: product.ask_price,
        bid_price: product.bid_price,
      }));

      useProductStore.getState().setProducts(products);
      return products;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // useEffect(() => {
  //   fetchProductsPrices(); // Initial fetch

  //   const interval = setInterval(() => {
  //     fetchProductsPrices(); // Fetch every 12 seconds
  //   }, 10000);

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  return fetchProductsPrices;
};

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
      console.error("Error fetching gold price:", error);
    }
  };

  useEffect(() => {
    fetchGoldPriceDollars(); // Initial fetch

    const interval = setInterval(() => {
      fetchGoldPriceDollars(); // Fetch every 12 seconds
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return fetchGoldPriceDollars;
};
