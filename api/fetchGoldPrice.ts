"use client";

import axios from 'axios';
import { useState } from 'react';

const useFetchGoldPrice = () => {
    const [ask, setAsk] = useState({});
    const [bid, setBid] = useState({});

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

export default useFetchGoldPrice;