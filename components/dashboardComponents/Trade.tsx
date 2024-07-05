import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Trade = () => {
  const [tradeType, setTradeType] = useState<string>("buy");
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

      <form action="" className="flex flex-col gap-6">
        <div className="space-y-4 text-sm text-dukiaBlue font-semibold">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-dukiaBlue/[60%]">
              I want to {tradeType === "buy" ? "buy" : "sell"}
            </p>

            <div className="border-2 rounded-lg flex">
              <Select defaultValue="gold">
                <SelectTrigger className="w-[40%] focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] p-4">
                  <SelectValue placeholder="Select Crypto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">Gold (Au)</SelectItem>
                  <SelectItem value="silver">Silver (Ag)</SelectItem>
                </SelectContent>
              </Select>
              <input type="text" placeholder="Enter Gold Value" className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal" />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-dukiaBlue/[60%]">For</p>

            <div className="border-2 rounded-lg flex">
              <Select defaultValue="naira">
                <SelectTrigger className="w-[40%] focus:ring-transparent border-t-0 border-l-0 border-b-0 rounded-none rounded-l-lg focus:ring-offset-0  border-dukiaBlue/[10%] p-4">
                  <SelectValue placeholder="Select Fiat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="naira">Naira (NGN)</SelectItem>
                  <SelectItem value="dollars">US Dollars (USD)</SelectItem>
                </SelectContent>
              </Select>
              <input type="text" placeholder="Enter Gold Value" className="outline-none px-6 placeholder:text-dukiaBlue/[50%] placeholder:font-normal" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button className="text-white rounded-lg bg-dukiaBlue text-sm font-semibold py-4 px-11">
            {tradeType === "buy" ? "Buy" : "Sell"} Gold
          </button>
        </div>
      </form>
    </div>
  );
};

export default Trade;
