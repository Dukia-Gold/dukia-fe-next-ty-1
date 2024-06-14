import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="flex flex-col gap-8 px-3 md:px-12 xl:px-28 bg-white text-dukiaBlue justify-between">
      <section className="py-12 flex flex-col gap-14">
        {/* TEXTS */}
        <div className="flex flex-col md:items-center gap-2">
            <p className="text-[1.75rem] font-bold">Who We Are</p>
            <p className="text-lg md:text-center">Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in Nigeria, West Africa creating ease of access to investment grade gold & other precious metals in Nigeria via a safe and secure trading platform. Dukia Gold offers an easy, secure and accessible way to buy, sell, invest and do much more with gold. With Dukia Gold, you have full control and peace of mind over securing your financial future.</p>
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

                <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] px-[1.875rem]">Learn More</button>
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

                <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] px-[1.875rem]">Learn More</button>
            </div>
        </div>
      </section>

      {/* Pool Allocated Buys */}
      <section></section>
    </section>
  );
};

export default WhoWeAre;
