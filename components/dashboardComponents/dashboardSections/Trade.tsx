"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import framePool from "../../../assets/frame-pool.png";
import { formatDecimal } from "@/lib/decimalFormatter";
import useBuy from "@/api/trading/buy";
import useSell from "@/api/trading/sell";
import { formatCurrency } from "@/lib/currencyformatter";
import TradeTab from "./TradeComponents/TradeTab";
import GoldTypeCard from "./TradeComponents/GoldTypeCard";
import GoldItem from "./TradeComponents/GoldItem";
import { Cart } from "@/typings/cart";
import { useProductStore } from "@/store/product";
import { useModalStore } from "@/store/modalStore";
import usePoolAllocatedStore from "@/store/usePoolAllocatedStore";
import PoolAllocated from "@/lib/poolallocated";

// Type definitions for the trade type and rates
type TradeType = "buy" | "sell";

interface Rate {
  "1g"?: number;
  "10g"?: number;
  "1oz"?: number;
  "50g"?: number;
  "100g"?: number;
  "1kg"?: number;
}

interface Rates {
  buy: Rate;
  sell: Rate;
}

interface Range {
  max: number;
  rateKey: keyof Rate;
}

const Trade = () => {
  const { price, Gram } = usePoolAllocatedStore((state: any) => ({
    price: state.price,
    Gram: state.gram,
  }));
  const {
    handlePriceInput,
    handleGramInput,
    goldPricePerGram,
    timer,
    toggleMode,
    isGramToPrice,
  } = PoolAllocated();
  const openModal = useModalStore((state) => state.openModal);
  const getProductById = useProductStore((state) => state.getProductById);

  const [tradeType, setTradeType] = useState<TradeType>("buy");
  const [goldType, setGoldType] = useState<string>("pool");
  const [discreteProduct, setDiscreteProduct] = useState<string>("");

  const [buyValue, setBuyValue] = useState<string>("");
  const [buyWorth, setBuyWorth] = useState<string>("");
  const [discreteBuyWorth, setDiscreteBuyWorth] = useState<number>(0.0);
  const [delivery, setDelivery] = useState<boolean>(false);

  const { buyPoolAllocated, buyDiscrete } = useBuy();
  const { sellPoolAllocated } = useSell();
  const buyValueParsed =
    Gram !== undefined ? parseFloat(Gram.replace(/,/g, "")) : 0;
  const buyWorthParsed = parseFloat(price.replace(/,/g, ""));

  // Define the ranges and corresponding rate keys
  const ranges: Range[] = [
    { max: 31.1035, rateKey: "1g" },
    // { max: 10, rateKey: "10g" },
    { max: Infinity, rateKey: "1oz" },
    // { max: 50, rateKey: "50g" },
    // { max: 100, rateKey: "100g" },
    // { max: Infinity, rateKey: "1kg" },
  ];

  // Define the buy and sell rates for different quantities
  const rates: Rates = {
    buy: {
      "1g": getProductById("philoro-1g")?.ask_price,
      // "10g": getProductById("philoro-10g")?.ask_price,
      "1oz": getProductById("philoro-1oz")?.ask_price,
      // "50g": getProductById("philoro-50g")?.ask_price,
      // "100g": getProductById("philoro-100g")?.ask_price,
      // "1kg": getProductById("philoro-1kg")?.ask_price,
    },
    sell: {
      "1g": getProductById("philoro-1g")?.bid_price,
      // "10g": getProductById("philoro-10g")?.bid_price,
      "1oz": getProductById("philoro-1oz")?.bid_price,
      // "50g": getProductById("philoro-50g")?.bid_price,
      // "100g": getProductById("philoro-100g")?.bid_price,
      // "1kg": getProductById("philoro-1kg")?.bid_price,
    },
  };

  // Function to get the appropriate rate based on the numeric value and trade type
  const getRate = (value: number, tradeType: TradeType): number | undefined => {
    for (const range of ranges) {
      if (value <= range.max) {
        return rates[tradeType][range.rateKey];
      }
    }
    return undefined; // Return undefined if no rate is found
  };

  const executeTrade = async (
    value: number,
    worth: number,
    price: number,
    tradeType: "buy" | "sell"
  ) => {
    if (tradeType === "buy") {
      await buyPoolAllocated(value, worth, price);
    } else {
      await sellPoolAllocated(value, worth, price);
    }
    setBuyValue("");
    setBuyWorth("");
  };

  const discreteTradingFunc = async () => {
    let cart: Cart = {
      cart: [
        {
          sn: 1,
          id: discreteProduct,
          price: discreteBuyWorth,
          usd_price: 0,
          quantity: 1,
          line_price: discreteBuyWorth,
        },
      ],
      delivery_option: delivery ? "delivery" : "storage",
    };
    openModal({
      type: "confirm",
      title: "Confirm Payment",
      message: `Sure to continue with the payment of ${formatCurrency(
        discreteBuyWorth
      )} ?`,
      onConfirm: async () => {
        await buyDiscrete(cart);
      },
    });
  };

  const poolAllocatedTradingFunc = async () => {
    if (!isNaN(buyValueParsed) && !isNaN(buyWorthParsed)) {
      const price = getRate(buyValueParsed, tradeType);

      if (price !== undefined) {
        openModal({
          type: "confirm",
          title: "Confirm Payment",
          message: `Sure to continue with the ${
            tradeType === "buy" ? "payment" : "withdrawal"
          } of ${formatCurrency(buyWorthParsed)} ?`,
          onConfirm: async () => {
            await executeTrade(
              buyValueParsed,
              buyWorthParsed,
              price,
              tradeType
            );
          },
        });
      }
    }
  };

  // Calculate buy worth based on prod
  const handleFigureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Regex to match numbers with up to 4 decimal places
    const decimalRegex = /^\d*\.?\d{0,4}$/;

    if (decimalRegex.test(inputValue)) {
      const numericValue = parseFloat(inputValue);

      setBuyValue(inputValue);

      if (!isNaN(numericValue) && numericValue > 0) {
        // Function to calculate the price based on the value, rate, and rate key
        const calculatePrice = (
          value: number,
          rate: number,
          rateKey: keyof Rate
        ): number => {
          const divisor =
            rateKey === "1kg"
              ? 1000
              : rateKey === "1oz"
              ? 31.1035
              : parseFloat(rateKey);
          return (value / divisor) * rate;
        };

        // Retrieve the appropriate rate for the given numeric value and trade type
        const tradeRate = getRate(numericValue, tradeType);

        // Initialize the price variable
        let price: number | null = null;

        if (tradeRate !== undefined) {
          // Find the corresponding rate key for the retrieved rate
          const rateKey = ranges.find(
            (r) => rates[tradeType][r.rateKey] === tradeRate
          )?.rateKey;
          if (rateKey) {
            // Calculate the price using the rate and rate key
            price = calculatePrice(numericValue, tradeRate, rateKey);
            const formattedPrice = formatDecimal(price, 2, true);
            setBuyWorth(formattedPrice);
          }
        }

        // Log an error if no valid rate was found
        if (price === null) {
          console.error(
            "No valid rate found for the given value and trade type."
          );
          setBuyWorth("");
        }
      } else {
        setBuyWorth(""); // Optionally reset the buy worth if conditions aren't met
      }
    }
  };

  const handleTabClick = (type: TradeType) => {
    if (tradeType !== type) {
      setBuyValue("");
      setBuyWorth("");
      setTradeType(type);
      if (type === "sell") {
        setGoldType("pool");
        setDiscreteBuyWorth(0.0);
        setDiscreteProduct("");
      }
    }
  };

  const handleGoldTypeClick = (type: string) => {
    // setGoldTypeState(type);
    if (type === "pool") {
      setDiscreteProduct("");
      setDiscreteBuyWorth(0.0);
    } else if (
      (type === "bars" && goldType !== "bars") ||
      (type === "coins" && goldType !== "coins")
    ) {
      setBuyValue("");
      setBuyWorth("");
      setDiscreteProduct("");
      setDiscreteBuyWorth(0.0);
    }
    setGoldType(type);
  };

  const goldPrices = {
    bars: [
      {
        label: "1g",
        id: "philoro-1g",
        price: getProductById("philoro-1g")?.ask_price,
      },
      {
        label: "10g",
        id: "philoro-10g",
        price: getProductById("philoro-10g")?.ask_price,
      },
      {
        label: "1oz",
        id: "philoro-1oz",
        price: getProductById("philoro-1oz")?.ask_price,
      },
      {
        label: "50g",
        id: "philoro-50g",
        price: getProductById("philoro-50g")?.ask_price,
      },
      {
        label: "100g",
        id: "philoro-100g",
        price: getProductById("philoro-100g")?.ask_price,
      },
      {
        label: "1kg",
        id: "philoro-1kg",
        price: getProductById("philoro-1kg")?.ask_price,
      },
    ],
    coins: [
      {
        label: "1oz CMLGC",
        id: "canadian-maple-leaf-1oz",
        price: getProductById("canadian-maple-leaf-1oz")?.ask_price,
      },
      {
        label: "10oz SAKGC",
        id: "south-african-krugerrand-1oz",
        price: getProductById("south-african-krugerrand-1oz")?.ask_price,
      },
      {
        label: "1oz APGC",
        id: "austrian-philharmonic-1oz",
        price: getProductById("austrian-philharmonic-1oz")?.ask_price,
      },
      {
        label: "1oz AEGC",
        id: "american-eagle-1oz",
        price: getProductById("american-eagle-1oz")?.ask_price,
      },
    ],
  };

  return (
    <section className="px-4 pb-4 bg-white border-[0.5px] border-dukiaBlue/[5%] rounded-2xl">
      {/* Buy and Sell Tabs */}
      <div className="grid grid-cols-2 font-semibold text-[#979BAE]">
        <TradeTab
          label="Buy"
          isActive={tradeType === "buy"}
          onClick={() => handleTabClick("buy")}
        />
        <TradeTab
          label="Sell"
          isActive={tradeType === "sell"}
          onClick={() => handleTabClick("sell")}
        />
      </div>

      {/* Select Gold Type */}
      <div className="space-y-1 mt-6">
        <p className="text-dukiaBlue/[60%] font-semibold">Gold Type</p>
        <div className="grid grid-cols-3 gap-2.5 text-sm font-semibold text-[#676D88]">
          <GoldTypeCard
            label="Pool Allocated"
            isActive={goldType === "pool"}
            onClick={() => handleGoldTypeClick("pool")}
            imageSrc="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798084/Gold_eevbxb.png"
            imageAlt="Pool Allocated"
            imageWidth={78}
            imageHeight={50}
          />
          {tradeType === "buy" && (
            <GoldTypeCard
              label="Bars"
              isActive={goldType === "bars"}
              onClick={() => handleGoldTypeClick("bars")}
              imageSrc="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798084/dukia-Gold-Bar1-1g_philoro_1_1_fkpf2q.png"
              imageAlt="Philoro Gold Bar - 1g"
              imageWidth={60}
              imageHeight={100}
            />
          )}
          {tradeType === "buy" && (
            <GoldTypeCard
              label="Coins"
              isActive={goldType === "coins"}
              onClick={() => handleGoldTypeClick("coins")}
              imageSrc="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798086/dukia-gold-coin-1oz-Canadian-Maple-Leaf_ndq4vy.png"
              imageAlt="Coin - 1oz Canadian Maple Leaf"
              imageWidth={51}
              imageHeight={51}
            />
          )}
        </div>
      </div>

      {/* Pool Allocated Buy and Sell */}
      {goldType === "pool" && (
        <form action="" className="flex flex-col gap-6 mt-4">
          {/* Calculator */}
          <div className="space-y-4 text-dukiaBlue font-semibold">
            {/* Gold */}
            <div className="space-y-1">
              <p className="text-dukiaBlue/[60%] font-semibold">
                I want to {tradeType === "buy" ? "buy" : "sell"}
              </p>

              {/* Gold */}
              <div className="border-2 rounded-lg flex">
                <Select disabled defaultValue="gold">
                  <SelectTrigger className="w-[30%] focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] p-4">
                    <SelectValue placeholder="Select Crypto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gold">Gold (Au)</SelectItem>
                    <SelectItem value="silver">Silver (Ag)</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  disabled
                  placeholder="Enter Gold Value"
                  value={Gram}
                  className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal w-[70%]"
                />
              </div>
            </div>

            {/* Fiat */}
            <div className="space-y-1">
              <p className="text-dukiaBlue/[60%] font-semibold">For</p>

              {/* Fiat */}
              <div className="border-2 rounded-lg flex">
                <Select disabled defaultValue="naira">
                  <SelectTrigger className="w-[30%] p-4 focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] text-dukiaBlue">
                    <SelectValue placeholder="Select Fiat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="naira">Naira (NGN)</SelectItem>
                    <SelectItem value="dollars">US Dollars (USD)</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  placeholder="Enter Gold Value"
                  value={price}
                  onChange={handlePriceInput}
                  className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal w-[70%]"
                />
              </div>
            </div>

            <p className="text-center text-sm">
              Time until next update:{" "}
              <span id="timer" className="font-semibold">
                {timer}
              </span>{" "}
              seconds
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={Gram === "" || price === "" || !price}
              className="text-white rounded-lg bg-dukiaBlue font-semibold py-3 px-4 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
              onClick={() => {
                poolAllocatedTradingFunc();
              }}
            >
              {tradeType === "buy" ? "Buy" : "Sell"} Gold
            </button>
          </div>
        </form>
      )}

      {/* Discrete Buy */}
      {(goldType === "bars" || goldType === "coins") && (
        <div className="mt-6 space-y-5">
          {/* Select and Price */}
          <div className="space-y-3.5">
            {/* Select Product */}
            <div className="font-semibold space-y-1.5">
              <p className="text-dukiaBlue/[60%]">Select</p>
              <div className="flex items-center font-semibold gap-3">
                {goldType === "bars" &&
                  goldPrices.bars.map((item) => (
                    <GoldItem
                      key={item.label}
                      label={item.label}
                      isSelected={discreteProduct === item.id}
                      onClick={() => {
                        setDiscreteProduct(item.id);
                        setDiscreteBuyWorth(item.price ? item.price : 0.0);
                      }}
                      padding="py-2 px-4"
                    />
                  ))}

                {goldType === "coins" &&
                  goldPrices.coins.map((item) => (
                    <GoldItem
                      key={item.label}
                      label={item.label}
                      isSelected={discreteProduct === item.id}
                      onClick={() => {
                        setDiscreteProduct(item.id);
                        setDiscreteBuyWorth(item.price ? item.price : 0.0);
                      }}
                      padding="py-2 px-3" // Different padding for coins
                    />
                  ))}
              </div>
            </div>

            {/* Price and Timer */}
            <div className="font-semibold space-y-1.5">
              <p className="text-dukiaBlue/[60%]">Price In Naira</p>
              <div className="flex items-center justify-between">
                {/* Price */}
                <div className="py-2 px-3 bg-[#E8E9ED] rounded-lg">
                  = {formatCurrency(discreteBuyWorth)}
                </div>

                {/* Timer */}
                <div className="flex items-center gap-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 2.65625C7.23915 2.65625 6.00661 3.03014 4.95824 3.73063C3.90988 4.43113 3.09278 5.42676 2.61027 6.59164C2.12776 7.75652 2.00152 9.03832 2.2475 10.275C2.49348 11.5116 3.10064 12.6475 3.9922 13.5391C4.88376 14.4306 6.01967 15.0378 7.2563 15.2838C8.49293 15.5297 9.77473 15.4035 10.9396 14.921C12.1045 14.4385 13.1001 13.6214 13.8006 12.573C14.5011 11.5246 14.875 10.2921 14.875 9.03125C14.8731 7.34109 14.2008 5.72071 13.0057 4.52558C11.8105 3.33045 10.1902 2.65818 8.5 2.65625ZM11.5321 6.75086L8.87586 9.40711C8.8265 9.45647 8.76791 9.49562 8.70342 9.52233C8.63893 9.54905 8.56981 9.5628 8.5 9.5628C8.4302 9.5628 8.36108 9.54905 8.29659 9.52233C8.2321 9.49562 8.1735 9.45647 8.12414 9.40711C8.07478 9.35775 8.03563 9.29915 8.00892 9.23466C7.98221 9.17017 7.96846 9.10105 7.96846 9.03125C7.96846 8.96145 7.98221 8.89233 8.00892 8.82784C8.03563 8.76335 8.07478 8.70475 8.12414 8.65539L10.7804 5.99914C10.8298 5.94978 10.8883 5.91063 10.9528 5.88392C11.0173 5.8572 11.0864 5.84345 11.1563 5.84345C11.2261 5.84345 11.2952 5.8572 11.3597 5.88392C11.4242 5.91063 11.4828 5.94978 11.5321 5.99914C11.5815 6.0485 11.6206 6.1071 11.6473 6.17159C11.674 6.23608 11.6878 6.3052 11.6878 6.375C11.6878 6.4448 11.674 6.51392 11.6473 6.57841C11.6206 6.6429 11.5815 6.7015 11.5321 6.75086ZM6.375 1.0625C6.375 0.921604 6.43097 0.786478 6.5306 0.68685C6.63023 0.587221 6.76536 0.53125 6.90625 0.53125H10.0938C10.2346 0.53125 10.3698 0.587221 10.4694 0.68685C10.569 0.786478 10.625 0.921604 10.625 1.0625C10.625 1.2034 10.569 1.33852 10.4694 1.43815C10.3698 1.53778 10.2346 1.59375 10.0938 1.59375H6.90625C6.76536 1.59375 6.63023 1.53778 6.5306 1.43815C6.43097 1.33852 6.375 1.2034 6.375 1.0625Z"
                      fill="#1C254E"
                    />
                  </svg>

                  <p>00:10 s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery and Buy Button */}
          <div className="flex items-center justify-between">
            {/* Delivery */}
            <div className="flex items-center gap-2">
              <Image src={framePool} alt="Gold bars" width={40} height={20} />

              <div className="text-sm">
                <p className="font-semibold">Include Home Delivery?</p>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    onChange={(e) => setDelivery(e.target.checked)}
                    className="m-1 cursor-pointer appearance-auto w-4 h-4 border border-dukiaBlue rounded-sm"
                  />
                  <p>Check the box for delivery</p>
                </div>
              </div>
            </div>

            {/* Button to Buy */}
            <button
              type="button"
              disabled={
                (goldType === "bars" && !discreteBuyWorth) ||
                (goldType === "coins" && discreteBuyWorth < 1)
              }
              onClick={discreteTradingFunc}
              className="text-white rounded-lg bg-dukiaBlue font-semibold py-3 px-4 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
              //   onClick={buyPoolAllocatedFunc}
            >
              Buy Gold
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trade;
