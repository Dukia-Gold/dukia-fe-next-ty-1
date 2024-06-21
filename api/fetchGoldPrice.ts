"use client";

import axios from 'axios';
import { useState } from 'react';

interface GoldPrice {
    oz: number;
    kg: number;
    g: number;
}

export const useFetchGoldPriceDollars = () => {
    const [ask, setAsk] = useState<GoldPrice>({ oz: 0, kg: 0, g: 0 });
    const [bid, setBid] = useState<GoldPrice>({ oz: 0, kg: 0, g: 0 });

    const fetchGoldPrice = async () => {
        try {
            const response = await axios.get("https://api.dukiapreciousmetals.co/api/live-price");

            setAsk(response.data.ask);
            setBid(response.data.bid);
        } catch (error) {
            // console.error(error);
        }
    };

    return { ask, bid, fetchGoldPrice };
};

export const useFetchGoldPriceNaira = () => {
    const [askNaira, setAskNaira] = useState<number>(0);
    const [bid, setBid] = useState<number>(0);

    const fetchGoldPrice = async () => {
        try {
            const response = await fetch('https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice'); // Replace with your API endpoint
            
            // const response = await axios.get("https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice");

            const data = await response.json();

            console.log(data.ask_price);

            setAskNaira(data.ask_price);
            console.log(askNaira);
            setBid(data.bid_price);
        } catch (error) {
            console.error(error);
        }
    };

    return fetchGoldPrice;
}
