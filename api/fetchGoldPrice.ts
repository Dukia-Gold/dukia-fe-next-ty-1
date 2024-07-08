"use client";

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

interface GoldPrice {
    oz: number;
    kg: number;
    g: number;
}

// Hook for fetching gold prices in USD
export const useFetchGoldPriceDollars = () => {
    const [ask, setAsk] = useState<GoldPrice>({ oz: 0, kg: 0, g: 0 });
    const [bid, setBid] = useState<GoldPrice>({ oz: 0, kg: 0, g: 0 });

    const fetchGoldPrice = async () => {
        try {
            const response = await axios.get("https://api.dukiapreciousmetals.co/api/live-price");
            setAsk(response.data.ask);
            setBid(response.data.bid);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGoldPrice();
    }, []);

    return { ask, bid, fetchGoldPrice };
};

// Hook for fetching gold prices in NGN
export const useFetchGoldPriceNaira1g = () => {
    const [askNaira1g, setAskNaira1g] = useState<number>(0);
    const [bidNaira1g, setBidNaira1g] = useState<number>(0);
    const askNaira1gRef = useRef(askNaira1g);

    const fetchGoldPrice = async () => {
        try {
            const response = await fetch('https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice');
            const data = await response.json();
            setAskNaira1g(data.ask_price);
            setBidNaira1g(data.bid_price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGoldPrice(); // Initial fetch

        const interval = setInterval(() => {
            fetchGoldPrice();
            console.log(askNaira1gRef.current); // Log the latest state
        }, 30000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        askNaira1gRef.current = askNaira1g;
    }, [askNaira1g]);

    return { askNaira1g, bidNaira1g, fetchGoldPrice };
}

export const useFetchGoldPriceNaira10g = () => {
    const [askNaira10g, setAskNaira10g] = useState<number>(0);
    const [bidNaira10g, setBidNaira10g] = useState<number>(0);

    const fetchGoldPrice = async () => {
        try {
            const response = await fetch('https://api.dukiapreciousmetals.co/api/products/pool-allocated-10g/withPrice');
            const data = await response.json();
            setAskNaira10g(data.ask_price);
            setBidNaira10g(data.bid_price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGoldPrice();
    }, []);

    return { askNaira10g, bidNaira10g, fetchGoldPrice };
}

export const useFetchGoldPriceNaira1oz = () => {
    const [askNaira1oz, setAskNaira1oz] = useState<number>(0);
    const [bidNaira1oz, setBidNaira1oz] = useState<number>(0);

    const fetchGoldPrice = async () => {
        try {
            const response = await fetch('https://api.dukiapreciousmetals.co/api/products/pool-allocated-1oz/withPrice');
            const data = await response.json();
            setAskNaira1oz(data.ask_price);
            setBidNaira1oz(data.bid_price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGoldPrice();
    }, []);

    return { askNaira1oz, bidNaira1oz, fetchGoldPrice };
}