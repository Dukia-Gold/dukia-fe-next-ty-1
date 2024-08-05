import { useState } from "react";

const MarketPrices = () => {
  const [tab, setTab] = useState("bars");

  return (
    <section className="py-2 px-4 bg-white rounded-2xl text-dukiaBlue">
      <div className="flex items-center justify-between font-semibold">
        <p>Market Prices</p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTab("bars")}
            className={`${
              tab === "bars" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Bars
          </button>

          <button
            type="button"
            onClick={() => setTab("coins")}
            className={`${
              tab === "coins" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Coins
          </button>

          <button
            type="button"
            onClick={() => setTab("tokens")}
            className={`${
              tab === "tokens" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Tokens
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketPrices;
