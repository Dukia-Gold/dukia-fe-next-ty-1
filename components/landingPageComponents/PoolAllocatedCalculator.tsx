import React, { useState } from "react";
import PoolAllocated from "@/lib/poolallocated";

const PoolAllocatedCalculator = () => {
  const { price, handlePriceInput, Gram, handleGramInput, resetTimer, formatNumber, goldPricePerGram, timer, toggleMode, isGramToPrice } = PoolAllocated();
  const [tab, setTab] = useState(true);
  return (
    <div className="z-20 text-black rounded-2xl w-full md:w-auto md:min-w-[35rem] xl:min-w-[26.25rem] flex flex-col gap-4 bg-[#F3F3F4]">
      <div className=" rounded-t-2xl py-4 flex justify-center bg-dukiaBlue text-white font-semibold">
        <p>Pool Allocated Calculator</p>
      </div>

      <form className="pb-6 px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {/* NAIRA INPUT - NAIRA to G */}
          <div className={`${isGramToPrice ? "hidden" : "flex"} flex-col gap-1`}>
            <div className="flex flex-col gap-2">
              <label htmlFor="currency" className="text-sm font-semibold">
                Currency (Naira)
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="currency"
                id="currency"
                value={price}
                onChange={handlePriceInput}
                className="text-dukiaBlue py-4 px-6 outline-none border border-dukiaBlue/[15%] rounded-lg placeholder:text-dukiaBlue/[50%]"
                placeholder="Enter Naira Value"
              />
            </div>
            <p className="text-sm">Starting from N5,000</p>
          </div>

          {/* WEIGHT INPUT - G to NAIRA */}
          <div className={`${isGramToPrice ? "flex" : "hidden"} flex flex-col gap-1`}>
            <div className="flex flex-col gap-2">
              <label htmlFor="weight" className="text-sm font-semibold">
                Weight (Gram)
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="weight"
                id="weight"
                value={Gram}
                onChange={handleGramInput}
                className="text-dukiaBlue py-4 px-6 outline-none border border-dukiaBlue/[15%] rounded-lg placeholder:text-dukiaBlue/[50%]"
                placeholder="Weight(g)"
              />
            </div>
            <p className="text-sm">Minimum of 0.0301 grams</p>
          </div>

          <div className="flex justify-center">
            <svg
              className="cursor-pointer"
              onClick={toggleMode}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="38" height="38" rx="19" fill="white" />
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke="#DAAA38"
                stroke-width="2"
              />
              <path
                d="M16.2347 13.3408L16.2733 13.3362L16.3333 13.3335L16.3833 13.3355L16.4673 13.3468L16.5413 13.3668L16.6153 13.3962L16.6807 13.4308L16.75 13.4802L16.8047 13.5288L20.4714 17.1956C20.591 17.3156 20.6604 17.4765 20.6656 17.6458C20.6707 17.8151 20.6113 17.9801 20.4993 18.1071C20.3872 18.2342 20.231 18.3138 20.0624 18.3299C19.8938 18.3459 19.7254 18.2972 19.5914 18.1936L19.5287 18.1383L17 15.6102V26.0004C16.9998 26.1704 16.9348 26.3338 16.8181 26.4574C16.7015 26.5809 16.542 26.6553 16.3724 26.6652C16.2028 26.6752 16.0357 26.62 15.9054 26.5109C15.7751 26.4019 15.6914 26.2472 15.6713 26.0784L15.6667 26.0004V15.6102L13.1379 18.1383C13.0231 18.2531 12.8704 18.322 12.7084 18.3322C12.5464 18.3424 12.3862 18.2931 12.2579 18.1936L12.1952 18.1383C12.0805 18.0235 12.0115 17.8707 12.0013 17.7087C11.9911 17.5467 12.0404 17.3865 12.1399 17.2582L12.1952 17.1956L15.862 13.5288C15.8852 13.5055 15.9102 13.4838 15.9367 13.4642L16.01 13.4168L16.086 13.3808L16.156 13.3575L16.2347 13.3408ZM23.6668 13.3335C23.8301 13.3335 23.9877 13.3935 24.1097 13.502C24.2318 13.6105 24.3097 13.76 24.3288 13.9222L24.3335 14.0002V24.3904L26.8622 21.8623L26.9249 21.807C27.0532 21.7076 27.2133 21.6584 27.3753 21.6686C27.5373 21.6788 27.69 21.7478 27.8047 21.8625C27.9195 21.9773 27.9885 22.13 27.9987 22.292C28.0089 22.4539 27.9597 22.6141 27.8602 22.7424L27.8049 22.805L24.1382 26.4718L24.1088 26.4991L24.0635 26.5364L23.9902 26.5838L23.9142 26.6198L23.8442 26.6431L23.7662 26.6598L23.7062 26.6664H23.6275L23.5875 26.6624L23.5115 26.6491L23.4388 26.6271L23.3848 26.6044L23.3195 26.5698L23.2555 26.5251C23.2344 26.5086 23.2144 26.4907 23.1955 26.4718L19.5287 22.805L19.4734 22.7424C19.3827 22.6254 19.3335 22.4817 19.3335 22.3337C19.3335 22.1857 19.3827 22.0419 19.4734 21.925L19.5287 21.8623L19.5914 21.807C19.7083 21.7163 19.8521 21.6671 20.0001 21.6671C20.1481 21.6671 20.2918 21.7163 20.4088 21.807L20.4714 21.8623L23.0001 24.3904V14.0002L23.0048 13.9222C23.0239 13.76 23.1019 13.6105 23.2239 13.502C23.3459 13.3935 23.5035 13.3335 23.6668 13.3335Z"
                fill="#111827"
              />
            </svg>
          </div>

          {/* WEIGHT DISPLAY - NAIRA to G */}
          <div className={`${isGramToPrice ? "hidden" : "flex"} flex flex-col gap-1`}>
            <div className="flex flex-col gap-2">
              <label htmlFor="weight" className="text-sm font-semibold">
                Weight (Gram)
              </label>
              <div className=" bg-white h-[3.125rem] text-dukiaBlue flex items-center px-6 border border-dukiaBlue/[15%] rounded-lg placeholder:text-dukiaBlue/[50%]">
                <p>{Gram}</p>
              </div>
            </div>
          </div>

          {/* NAIRA DISPLAY - G to NAIRA */}
          <div className={`${isGramToPrice ? "flex" : "hidden"} flex-col gap-1`}>
            <div className="flex flex-col gap-2">
              <label htmlFor="currency" className="text-sm font-semibold">
                Currency (Naira)
              </label>
              <div className=" bg-white h-[3.125rem] text-dukiaBlue flex items-center px-6 border border-dukiaBlue/[15%] rounded-lg placeholder:text-dukiaBlue/[50%]">
                <p>{price}</p>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-dukiaBlue text-white py-3 font-semibold rounded-lg">
          Continue
        </button>

        <p className="text-right text-sm">Time until next update: <span id="timer" className="font-semibold">{timer}</span> seconds</p>
      </form>
    </div>
  );
};

export default PoolAllocatedCalculator;
