import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFetchGoldPriceNaira1g } from "@/api/fetchGoldPrice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { formatCurrency } from "@/lib/currencyformatter";
import { formatDecimal } from "@/lib/decimalFormatter";

const WhoWeAre: React.FC = () => {
  const { askNaira1g, fetchGoldPrice } = useFetchGoldPriceNaira1g();
  const [askClass, setAskClass] = useState("");

  useEffect(() => {
    fetchGoldPrice(); // Ensure initial fetch is called
  }, [fetchGoldPrice]);

  useEffect(() => {
    setAskClass('flash');
    const timeoutId = setTimeout(() => setAskClass(''), 1500);
    return () => clearTimeout(timeoutId);
  }, [askNaira1g]);

  return (
    <section className="flex flex-col gap-8 px-4 lg:px-12 xl:px-28 bg-white dark:bg-dukiaBlue dark:text-white text-dukiaBlue justify-between">
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
          <Card className="dark:bg-white/[5%] shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
            <CardHeader>
              <CardTitle>Gold Bars</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                alt="Dukia Gold: Gold Bar 1 g - Philoro"
                width={350}
                height={350}
              />
            </CardContent>
            <CardFooter>
              <Link href="/buy-gold/bars">
                <button className="py-[0.875rem] border-2 font-semibold rounded-lg dark:border-[#D8DFEE] border-dukiaBlue/[25%] dark:hover:border-dukiaGold hover:border-dukiaBlue px-[1.875rem]">
                  Learn More
                </button>
              </Link>
            </CardFooter>
          </Card>

          {/* Gold Coins */}
          <Card className="dark:bg-white/[5%] shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
            <CardHeader>
              <CardTitle>Gold Coins</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368347/Gold_Coin_yzjtdx.png"
                alt="Dukia Gold: Gold Bar 1 g - Philoro"
                width={350}
                height={350}
              />
            </CardContent>
            <CardFooter>
              <Link href="/buy-gold/bars">
                <button className="py-[0.875rem] border-2 font-semibold rounded-lg dark:border-[#D8DFEE] border-dukiaBlue/[25%] dark:hover:border-dukiaGold hover:border-dukiaBlue px-[1.875rem]">
                  Learn More
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Pool Allocated Buys */}
      <section className="py-12 overflow-auto flex flex-col md:items-center gap-14">
        <p className="font-bold text-[1.75rem] text-left md:text-center">
          Pool Allocated Buys
        </p>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <div className="dark:bg-white/[5%] shadow-2xl relative w-full md:w-[25.6875rem] h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>{askNaira1g ? formatDecimal(10000/askNaira1g, 4) : 0.00} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(10000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/[5%] shadow-2xl relative w-full md:w-[25.6875rem] h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>{askNaira1g ? formatDecimal(15000/askNaira1g, 4) : 0.00} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(15000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/[5%] lg:col-start-1 2xl:col-start-3 lg:col-end-3 shadow-2xl relative w-full md:w-auto h-[25.6875rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>{askNaira1g ? formatDecimal(20000/askNaira1g, 4) : 0.00} gram</p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(20000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
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
