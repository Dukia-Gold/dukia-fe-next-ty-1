import React from "react";
import PoolAllocatedCalculator from "../PoolAllocatedCalculator";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed pt-48 xl:pt-36 px-3 md:px-12 xl:px-28 py-4 flex flex-col gap-10 xl:flex-row justify-center xl:justify-between items-center bg-gray-500">
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60"></div>
      <div className="z-20 flex flex-col gap-6">
        <div className="md:w-[33.875rem] flex flex-col gap-2 text-white">
          {/* <p className="font-extrabold text-4xl">
            Dukia Gold is the leading full-service bullion merchant in Nigeria,
            West Africa. From refining to providing easy access to
            investment-grade precious metals, Dukia Gold is your expert, safe,
            secure, and regulated partner.
          </p>
          <p>
            If you wish to purchase gold or sell part or all of your existing
            holding, please login or register to access our trading platform. If
            you are experiencing any difficulty, please call us on +234 703 323
            8121 or +234 903 150 6699 and we will do our best to assist.
          </p> */}
          <p className="font-extrabold text-4xl">
            Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
            Nigeria, West Africa
          </p>
          <p>
            Creating ease of access to investment grade gold & other precious
            metals in Nigeria via a safe and secure trading platform
          </p>
        </div>

        <div>
          <Link href="/buy-gold">
            <button className="bg-dukiaGold py-3 px-7 rounded-lg font-semibold text-sm text-dukiaBlue">
              Buy Gold
            </button>
          </Link>
        </div>
      </div>

      <PoolAllocatedCalculator />
    </section>
  );
};

export default Hero;
