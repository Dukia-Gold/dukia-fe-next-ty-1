import Image from "next/image";
import React, { useEffect, useState } from "react";
import PoolAllocated from "@/lib/poolallocated";

const WhoWeAre: React.FC = () => {
  const [gram1, setGram1] = useState("0.00");
  const [gram2, setGram2] = useState("0.00");
  const [gram3, setGram3] = useState("0.00");
  const { setPrice, Gram } = PoolAllocated();

  const calcGram = (
    price: string,
    setGram: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setPrice(price);
    setGram(Gram);
  };

  useEffect(() => {
    calcGram("15000", setGram1);
    calcGram("10000", setGram2);
    calcGram("20000", setGram3);

    const interval = setInterval(() => {
      calcGram("15000", setGram1);
      calcGram("10000", setGram2);
      calcGram("20000", setGram3);
    }, 12000); // Fetch every 60 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [Gram, setPrice]);

  return (
    <section className="flex flex-col gap-8 px-3 md:px-12 xl:px-28 bg-white text-dukiaBlue justify-between">
      <section className="py-12 flex flex-col gap-14">
        {/* TEXTS */}
        <div className="flex flex-col md:items-center gap-2">
          <p className="text-[1.75rem] font-bold">Who We Are</p>
          <p className="text-lg md:text-center">
            Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
            Nigeria, West Africa creating ease of access to investment grade
            gold & other precious metals in Nigeria via a safe and secure
            trading platform. Dukia Gold offers an easy, secure and accessible
            way to buy, sell, invest and do much more with gold. With Dukia
            Gold, you have full control and peace of mind over securing your
            financial future.
          </p>
        </div>

        {/* GOLD CARDS */}
        <div className="flex flex-col items-center lg:flex-row justify-center gap-6">
          {/* Gold Bars */}
          <div className="bg-[#f3f3f4] py-10 rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-10">
            <p className="font-bold text-[1.375rem] text-black">Gold Bars</p>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
              alt="Dukia Gold: Gold Bar 1 g - Philoro"
              width={350}
              height={350}
            />

            <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] px-[1.875rem]">
              Learn More
            </button>
          </div>

          {/* Gold Coins */}
          <div className="bg-[#f3f3f4] py-10 rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-10">
            <p className="font-bold text-[1.375rem] text-black">Gold Coins</p>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368347/Gold_Coin_yzjtdx.png"
              alt="Dukia Gold: Gold Bar 1 g - Philoro"
              width={350}
              height={350}
            />

            <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] px-[1.875rem]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pool Allocated Buys */}
      <section className="py-12 overflow-auto flex flex-col md:items-center gap-14">
        <p className="font-bold text-[1.75rem] text-left md:text-center">
          Pool Allocated Buys
        </p>

        <div className="flex overflow-x-auto flex-col lg:flex-row gap-6">
          <div className="bg-[#f3f3f4] relative w-full md:w-[25.6875rem] h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className="font-semibold text-white">{gram1} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full h-full absolute top-0 left-0 bg-white opacity-25"></div>
                <div className="z-20 py-4 font-semibold text-lg text-center">
                  <p>Fractional Gold</p>
                  <p>N15,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f3f4] relative w-full md:w-[25.6875rem] h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className="font-semibold text-white">{gram2} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full h-full absolute top-0 left-0 bg-white opacity-25"></div>
                <div className="z-20 py-4 font-semibold text-lg text-center">
                  <p>Fractional Gold</p>
                  <p>N20,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f3f4] relative w-full md:w-[25.6875rem] h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className="font-semibold text-white">{gram3} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full h-full absolute top-0 left-0 bg-white opacity-25"></div>
                <div className="z-20 py-4 font-semibold text-lg text-center">
                  <p>Fractional Gold</p>
                  <p>N10,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhoWeAre;
