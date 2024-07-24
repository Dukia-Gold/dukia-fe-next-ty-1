import React from "react";
import PoolAllocatedCalculator from "../PoolAllocatedCalculator";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-24 md:mt-[4.1875rem] relative min-h-[calc(100vh-67px)] rounded-2xl bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed pt-48 xl:pt-36 py-4 flex items-center border-2 border-[#E8E9ED]">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 rounded-2xl"></div> */}
      <div className="px-9 flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-10">
        <div className="z-20 flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-dukiaBlue">

            <h1 className="text-base sm:text-lg md:text-xl  font-semibold">
              BARS • COINS • POOL ALLOCATED
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold mt-4">
              Dukia Gold:
              <br />{" "}
              <TypeAnimation
                sequence={[
                  "Fortify Your Wealth,",
                  10000,
                  "Secure Your Future,",
                  10000,
                ]}
                wrapper="span"
                speed={25}
                deletionSpeed={50}
                repeat={Infinity}
              />{" "}
            </h2>
            <p className="font-medium text-base sm:text-lg md:text-xl mt-6 2xl:w-[70%]">
              Buy, sell, or invest in investment-grade gold and other precious
              metals through Nigeria&apos;s premier bullion dealer. Secure your
              financial future with our safe and secure trading platform.
            </p>
          </div>

          <div>
            <Link href="/buy-gold">
              <button className="bg-dukiaBlue hover:bg-dukiaGold py-3 px-7 rounded-lg font-semibold text-sm text-white hover:text-dukiaBlue">
                Buy Gold
              </button>
            </Link>
          </div>
        </div>

        <PoolAllocatedCalculator />
      </div>
    </section>
  );
};

export default Hero;
