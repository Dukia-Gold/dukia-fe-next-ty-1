import React from "react";
import PoolAllocatedCalculator from "../PoolAllocatedCalculator";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import TrustedPartners from "./TrustedPartners";

const Hero = () => {
  return (
    <section className="md:pt-[4.1875rem] relative min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed pt-48 xl:pt-24 grid grid-rows-3 items-center justify-center">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 rounded-2xl"></div> */}
      <div className="xl:max-w-[1280px] xl:mx-auto px-9 row-span-3 flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-10 xl:gap-5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-dukiaBlue">
            <div className="font-semibold text-sm flex items-center gap-2">
              {/* BARS */}
              <div className="border border-[#F4E5C1] py-1 px-2.5 bg-white rounded-lg flex items-center gap-1">
                <Image
                  src={
                    "https://res.cloudinary.com/dvcw253zw/image/upload/v1718367921/Gold_Bar_ly3nbk.png"
                  }
                  alt={"Philoro Gold Bar - 1g"}
                  width={15}
                  height={22}
                  // className="rotate-45"
                />
                <p>BARS</p>
              </div>

              {/* COINS */}
              <div className="border border-[#F4E5C1] py-1 px-2.5 bg-white rounded-lg flex items-center gap-1">
                <Image
                  src={
                    "https://res.cloudinary.com/dvcw253zw/image/upload/v1718368347/Gold_Coin_yzjtdx.png"
                  }
                  alt={"Coin - 1oz Canadian Maple Leaf"}
                  width={17}
                  height={17}
                />
                <p>COINS</p>
              </div>

              {/* POOL ALLOCATED */}
              <div className="border border-[#F4E5C1] py-1 px-2.5 bg-white rounded-lg flex items-center gap-1">
                <Image
                  src={
                    "https://res.cloudinary.com/dvcw253zw/image/upload/v1723049722/Dust_oraimc.png"
                  }
                  alt={"Pool Allocated Dust"}
                  width={17}
                  height={17}
                  className="w-auto h-auto"
                />
                <p>POOL ALLOCATED</p>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold mt-4">
              Secure
              <br />
              Your{" "}
              <span className="text-dukiaGold">
                <TypeAnimation
                  sequence={[
                    "Dreams,",
                    10000,
                    "Wealth,",
                    10000,
                    "Future,",
                    10000,
                    "Assets,",
                    10000,
                  ]}
                  wrapper="span"
                  speed={25}
                  deletionSpeed={50}
                  repeat={Infinity}
                  className=""
                />{" "}
              </span>
            </h2>
            <p className="font-medium text-base sm:text-lg md:text-xl mt-6">
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

        <Image
          src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729773585/hero-img.png"
          alt="Hero Image"
          width={660}
          height={304.97}
        />
      </div>

      <TrustedPartners />
    </section>
  );
};

export default Hero;
