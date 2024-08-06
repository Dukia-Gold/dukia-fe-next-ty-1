"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import framePool from "../../assets/frame-pool.png";
import {
  useFetchGoldPriceNaira10g,
  useFetchGoldPriceNaira1g,
  useFetchGoldPriceNaira1oz,
} from "@/api/fetchGoldPrice";
import { formatDecimal } from "@/lib/decimalFormatter";
import useBuy from "@/api/trading/buy";

const Trade = () => {
  const [tradeType, setTradeType] = useState<string>("buy");
  const [goldType, setGoldType] = useState<string>("pool");
  const [barProduct, setBarProduct] = useState<string>("");
  const [coinProduct, setCoinProduct] = useState<string>("");

  const [buyValue, setBuyValue] = useState<string>("");
  const [buyWorth, setBuyWorth] = useState<string>("");

  const { askNaira1g, bidNaira1g, fetchGoldPrice1g } =
    useFetchGoldPriceNaira1g();
  const { askNaira10g, bidNaira10g, fetchGoldPrice10g } =
    useFetchGoldPriceNaira10g();
  const { askNaira1oz, bidNaira1oz, fetchGoldPrice1oz } =
    useFetchGoldPriceNaira1oz();
  useEffect(() => {
    fetchGoldPrice1g();
    fetchGoldPrice10g();
    fetchGoldPrice1oz();

    const interval = setInterval(() => {
      fetchGoldPrice1g();
      fetchGoldPrice10g();
      fetchGoldPrice1oz();
    }, 12000);

    return () => clearInterval(interval);
  }, [fetchGoldPrice1g, fetchGoldPrice10g, fetchGoldPrice1oz]);

  const buyPoolAllocated = useBuy();
  const buyValueParsed = parseFloat(buyValue.replace(/,/g, ""));
  const buyWorthParsed =
    buyWorth !== undefined ? parseFloat(buyWorth.replace(/,/g, "")) : 0;

  const buyPoolAllocatedFunc = async () => {
    const buyValueParsed = parseFloat(buyValue);
    const buyWorthParsed = parseFloat(buyWorth);

    if (!isNaN(buyValueParsed) && !isNaN(buyWorthParsed)) {
      let price;
      if (tradeType === "buy") {
        if (buyValueParsed <= 1 && askNaira1g) {
          price = askNaira1g;
        } else if (buyValueParsed > 1 && buyValueParsed <= 10 && askNaira10g) {
          price = askNaira10g;
        } else if (
          buyValueParsed > 10 &&
          buyValueParsed <= 31.1035 &&
          askNaira1oz
        ) {
          price = askNaira1oz;
        }
      } else if (tradeType === "sell") {
        if (buyValueParsed <= 1 && bidNaira1g) {
          price = bidNaira1g;
        } else if (buyValueParsed > 1 && buyValueParsed <= 10 && bidNaira10g) {
          price = bidNaira10g;
        } else if (
          buyValueParsed > 10 &&
          buyValueParsed <= 31.1035 &&
          bidNaira1oz
        ) {
          price = bidNaira1oz;
        }
      }

      if (price !== undefined) {
        await buyPoolAllocated(buyValueParsed, buyWorthParsed, price);
        setBuyValue("");
        setBuyWorth("");
      }
    }
  };

  const handleFigureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Regex to match numbers with up to 4 decimal places
    const decimalRegex = /^\d*\.?\d{0,4}$/;

    if (decimalRegex.test(inputValue)) {
      const numericValue = parseFloat(inputValue);

      setBuyValue(inputValue);

      if (!isNaN(numericValue) && numericValue > 0) {
        let price;
        if (tradeType === "buy") {
          if (numericValue <= 1 && askNaira1g) {
            price = numericValue * askNaira1g;
          } else if (numericValue > 1 && numericValue <= 10 && askNaira10g) {
            price = (numericValue / 10) * askNaira10g;
          } else if (
            numericValue > 10 &&
            numericValue <= 31.1035 &&
            askNaira1oz
          ) {
            price = (numericValue / 31.1035) * askNaira1oz;
          }
        } else if (tradeType === "sell") {
          if (numericValue <= 1 && bidNaira1g) {
            price = numericValue * bidNaira1g;
          } else if (numericValue > 1 && numericValue <= 10 && bidNaira10g) {
            price = (numericValue / 10) * bidNaira10g;
          } else if (
            numericValue > 10 &&
            numericValue <= 31.1035 &&
            bidNaira1oz
          ) {
            price = (numericValue / 31.1035) * bidNaira1oz;
          }
        }

        if (price !== undefined) {
          const formattedPrice = formatDecimal(price, 2, true);
          setBuyWorth(formattedPrice);
        } else {
          setBuyWorth(""); // Optionally reset the buy worth if conditions aren't met
        }
      } else {
        setBuyWorth(""); // Optionally reset the buy worth if conditions aren't met
      }
    }
  };

  return (
    <section className="px-4 pb-4 bg-white border-[0.5px] border-dukiaBlue/[5%] rounded-2xl">
      {/* Buy and Sell Tabs */}
      <div className="grid grid-cols-2 font-semibold text-[#979BAE]">
        {/* Buy */}
        <div
          onClick={() => {
            if (tradeType !== "buy") {
              setBuyValue("");
              setBuyWorth("");
              setTradeType("buy");
            }
          }}
          className={`${
            tradeType === "buy"
              ? "border-dukiaBlue text-dukiaBlue"
              : "border-dukiaBlue/[10%]"
          } border-b-2 py-4 flex justify-center cursor-pointer`}
        >
          Buy
        </div>

        {/* Sell */}
        <div
          onClick={() => {
            if (tradeType !== "sell") {
              setGoldType("pool");
              setBuyValue("");
              setBuyWorth("");
              setTradeType("sell");
            }
          }}
          className={`${
            tradeType === "sell"
              ? "border-dukiaBlue text-dukiaBlue"
              : "border-dukiaBlue/[10%]"
          } border-b-2 py-4 flex justify-center cursor-pointer`}
        >
          Sell
        </div>
      </div>

      {/* Select Gold Type */}
      <div className="space-y-1 mt-6">
        <p className="text-dukiaBlue/[60%] font-semibold">Gold Type</p>
        <div className="grid grid-cols-3 gap-2.5 text-sm font-semibold text-[#676D88]">
          {/* Pool Allocated */}
          <div
            onClick={() => setGoldType("pool")}
            className={`${
              goldType === "pool"
                ? "border-dukiaBlue border-2 text-dukiaBlue"
                : "border-[#E8E9ED] border-[1.5px]"
            } h-[3.5rem] flex items-center justify-end pr-2.5 rounded-lg cursor-pointer relative pl-[50%] text-right`}
          >
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798084/Gold_eevbxb.png"
              alt="Pool Allocated"
              width={78}
              height={50}
              className="absolute bottom-0 left-0 w-auto h-auto rounded-bl-lg"
            />
            Pool Allocated
          </div>

          {/* Bars */}
          {tradeType === "buy" && (
            <div
              onClick={() => setGoldType("bars")}
              className={`${
                goldType === "bars"
                  ? "border-dukiaBlue border-2 text-dukiaBlue"
                  : "border-[#E8E9ED] border-[1.5px]"
              } h-[3.5rem] flex items-center justify-end pr-2.5 rounded-lg cursor-pointer relative`}
            >
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798084/dukia-Gold-Bar1-1g_philoro_1_1_fkpf2q.png"
                alt="Philoro Gold Bar - 1g"
                width={60}
                height={100}
                className="absolute bottom-0 left-0 w-auto h-auto rounded-bl-lg"
              />
              Bars
            </div>
          )}

          {/* Coins */}
          {tradeType === "buy" && (
            <div
              onClick={() => setGoldType("coins")}
              className={`${
                goldType === "coins"
                  ? "border-dukiaBlue border-2 text-dukiaBlue"
                  : "border-[#E8E9ED] border-[1.5px]"
              } h-[3.5rem] flex items-center justify-end pr-2.5 rounded-lg cursor-pointer relative`}
            >
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722798086/dukia-gold-coin-1oz-Canadian-Maple-Leaf_ndq4vy.png"
                alt="Coin - 1oz Canadian Maple Leaf"
                width={51}
                height={51}
                className="absolute bottom-0 left-0 w-auto h-auto rounded-bl-lg"
              />
              Coins
            </div>
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
                  placeholder="Enter Gold Value"
                  value={buyValue}
                  onChange={handleFigureChange}
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
                  disabled
                  placeholder="Enter Gold Value"
                  value={buyWorth}
                  className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal w-[70%]"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={buyValue === "" || buyWorth === "" || !buyWorth}
              className="text-white rounded-lg bg-dukiaBlue font-semibold py-3 px-4 disabled:bg-dukiaBlue/[50%] disabled:cursor-not-allowed"
              onClick={() => {
                if (tradeType === "buy") {
                  buyPoolAllocatedFunc();
                }
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

              {/* Select Gold Bars */}
              {goldType === "bars" && (
                <div className="flex items-center font-semibold gap-3">
                  {/* 1g */}
                  <div
                    onClick={() => setBarProduct("1g")}
                    className={`${
                      barProduct === "1g"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1g
                  </div>

                  {/* 10g */}
                  <div
                    onClick={() => setBarProduct("10g")}
                    className={`${
                      barProduct === "10g"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    10g
                  </div>

                  {/* 1oz */}
                  <div
                    onClick={() => setBarProduct("1oz")}
                    className={`${
                      barProduct === "1oz"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1oz
                  </div>

                  {/* 50g */}
                  <div
                    onClick={() => setBarProduct("50g")}
                    className={`${
                      barProduct === "50g"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    50g
                  </div>

                  {/* 100g */}
                  <div
                    onClick={() => setBarProduct("100g")}
                    className={`${
                      barProduct === "100g"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    100g
                  </div>

                  {/* 1kg */}
                  <div
                    onClick={() => setBarProduct("1kg")}
                    className={`${
                      barProduct === "1kg"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-4 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1kg
                  </div>
                </div>
              )}

              {goldType === "coins" && (
                <div className="flex items-center font-semibold gap-3">
                  {/* 1oz CMLGC */}
                  <div
                    onClick={() => setCoinProduct("1oz CMLGC")}
                    className={`${
                      coinProduct === "1oz CMLGC"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-3 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1oz CMLGC
                  </div>

                  {/* 10oz SAKGC */}
                  <div
                    onClick={() => setCoinProduct("10oz SAKGC")}
                    className={`${
                      coinProduct === "10oz SAKGC"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-3 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    10oz SAKGC
                  </div>

                  {/* 1oz APGC */}
                  <div
                    onClick={() => setCoinProduct("1oz APGC")}
                    className={`${
                      coinProduct === "1oz APGC"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-3 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1oz APGC
                  </div>

                  {/* 1oz AEGC */}
                  <div
                    onClick={() => setCoinProduct("1oz AEGC")}
                    className={`${
                      coinProduct === "1oz AEGC"
                        ? "text-white bg-dukiaBlue"
                        : "border-[1.5px] border-[#E8E9ED]"
                    } py-2 px-3 rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
                  >
                    1oz AEGC
                  </div>
                </div>
              )}
            </div>

            {/* Price and Timer */}
            <div className="font-semibold space-y-1.5">
              <p className="text-dukiaBlue/[60%]">Price In Naira</p>

              {/* Price and Timer */}
              <div className="flex items-center justify-between">
                {/* Price */}
                <div className="py-2 px-3 bg-[#E8E9ED] rounded-lg">
                  = ₦ 4,380,321.85
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
                    name=""
                    id=""
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
                (goldType === "bars" && !barProduct) ||
                (goldType === "coins" && !coinProduct)
              }
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
