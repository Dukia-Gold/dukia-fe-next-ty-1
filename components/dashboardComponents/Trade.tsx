import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  useFetchGoldPriceDollars,
  useFetchGoldPriceNaira10g,
  useFetchGoldPriceNaira1g,
  useFetchGoldPriceNaira1oz,
} from "@/api/fetchGoldPrice";
import { formatCurrency } from "@/lib/currencyformatter";
import { formatDecimal } from "@/lib/decimalFormatter";
import useBuy from "@/api/trading/buy";

const Trade = () => {
  const [tradeType, setTradeType] = useState<string>("buy");
  const [currency, setCurrency] = useState<string>("naira");

  const [buyValue, setBuyValue] = useState<string>("");
  const [buyWorth, setBuyWorth] = useState<string | undefined>(undefined);

  const { askNaira1g, fetchGoldPrice1g } = useFetchGoldPriceNaira1g();
  const { askNaira10g, fetchGoldPrice10g } = useFetchGoldPriceNaira10g();
  const { askNaira1oz, fetchGoldPrice1oz } = useFetchGoldPriceNaira1oz();

  const buyPoolAllocated = useBuy();

  useEffect(() => {
    fetchGoldPrice1g();
    fetchGoldPrice10g();
    fetchGoldPrice1oz();
  }, [fetchGoldPrice1g, fetchGoldPrice10g, fetchGoldPrice1oz]);

  const buyValueParsed = parseFloat(buyValue.replace(/,/g, ""));
  const buyWorthParsed =
    buyWorth !== undefined ? parseFloat(buyWorth.replace(/,/g, "")) : 0;

  const buyPoolAllocatedFunc = async () => {
    if (!isNaN(buyValueParsed) && !isNaN(buyWorthParsed) && askNaira1g) {
      await buyPoolAllocated(buyValueParsed, buyWorthParsed, askNaira1g);
      setBuyValue("");
      setBuyWorth("");
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
        let buyCalc;

        if (numericValue <= 1 && askNaira1g) {
          buyCalc = numericValue * askNaira1g;
        } else if (numericValue > 1 && numericValue <= 10 && askNaira10g) {
          buyCalc = (numericValue / 10) * askNaira10g;
        } else if (
          numericValue > 10 &&
          numericValue <= 31.1035 &&
          askNaira1oz
        ) {
          buyCalc = (numericValue / 31.1035) * askNaira1oz;
        }

        if (buyCalc !== undefined) {
          const formattedBuyCalc = formatDecimal(buyCalc, 2, true);
          setBuyWorth(formattedBuyCalc);
        } else {
          setBuyWorth(""); // Optionally reset the buy worth if conditions aren't met
        }
      } else {
        setBuyWorth(""); // Optionally reset the buy worth if conditions aren't met
      }
    }
  };

  return (
    <div className="px-3 md:px-6 pb-4 border border-dukiaBlue/[5%] rounded-lg bg-white flex flex-col gap-6 text-dukiaBlue">
      {/* Buy and Sell tab */}
      <div className="grid grid-cols-2 font-semibold text-dukiaBlue/[50%]">
        <div
          onClick={() => setTradeType("buy")}
          className={`${
            tradeType === "buy"
              ? "border-dukiaBlue text-dukiaBlue"
              : "border-dukiaBlue/[10%]"
          } border-b-2 py-4 flex items-center justify-center cursor-pointer`}
        >
          Buy
        </div>
        <div
          onClick={() => setTradeType("sell")}
          className={`${
            tradeType === "sell"
              ? "border-dukiaBlue text-dukiaBlue"
              : "border-dukiaBlue/[10%]"
          } border-b-2 py-4 flex items-center justify-center cursor-pointer`}
        >
          Sell
        </div>
      </div>

      <div>
        <p className="font-semibold text-dukiaBlue/[60%]">Gold Type</p>
        <div className="grid grid-cols-3">
          <div></div>
        </div>
      </div>

      <form action="" className="flex flex-col gap-6">
        <div className="space-y-4 text-sm text-dukiaBlue font-semibold">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-dukiaBlue/[60%]">
              I want to {tradeType === "buy" ? "buy" : "sell"}
            </p>

            <div className="border-2 rounded-lg flex">
              <Select disabled defaultValue="gold">
                <SelectTrigger className="w-[40%] focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] p-4">
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
                className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal"
              />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-dukiaBlue/[60%]">For</p>

            <div className="border-2 rounded-lg flex">
              <Select
                disabled
                defaultValue="naira"
                onValueChange={(e) => setCurrency(e)}
              >
                <SelectTrigger className="w-[40%] focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] p-4">
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
                className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white rounded-lg bg-dukiaBlue text-sm font-semibold py-4 px-11"
            onClick={buyPoolAllocatedFunc}
          >
            {tradeType === "buy" ? "Buy" : "Sell"} Gold
          </button>
        </div>
      </form>
    </div>
  );
};

export default Trade;
