import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="bg-[#F3F3F4] dark:bg-dukiaDark dark:text-white flex flex-col gap-14 items-center px-4 lg:px-20 pt-12 pb-[4.65rem]">
      <p className="font-bold text-[1.75rem]">What We Offer</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Buy Gold */}
        <div className="rounded-2xl bg-white dark:bg-dukiaBlue flex flex-col gap-4 p-6 items-center">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/dollar-dollar-premium_fzffoa.png"
            alt="Shield Dynamic Premium"
            width={64}
            height={64}
          />

          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold">Buy Gold</p>

            <p className="text-sm">
              Buy from our wide selection of real physical gold of 99.99% purity
              stored for you at Brink&apos;s or for insured delivery to your
              doorstep.
            </p>
          </div>
        </div>

        {/* Sell Gold */}
        <div className="rounded-2xl bg-white dark:bg-dukiaBlue flex flex-col gap-4 p-6 items-center">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/money-dynamic-premium_lldvpk.png"
            alt="Shield Dynamic Premium"
            width={64}
            height={64}
          />

          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold">Sell Gold</p>

            <p className="text-sm">
              Get instant liquidity for your gold and get paid.
            </p>
          </div>
        </div>

        {/* Control & Flexibility */}
        <div className="rounded-2xl bg-white dark:bg-dukiaBlue flex flex-col gap-4 p-6 items-center">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/setting-dynamic-premium_ay5tcd.png"
            alt="Shield Dynamic Premium"
            width={64}
            height={64}
          />

          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold">Control & Flexibility</p>

            <p className="text-sm">
              Buy gold based on your budget, and even better, set up an
              investment plan.
            </p>
          </div>
        </div>

        {/* Real Time Tracking */}
        <div className="rounded-2xl bg-white dark:bg-dukiaBlue flex flex-col gap-4 p-6 items-center">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/chart-dynamic-premium_bvifrx.png"
            alt="Shield Dynamic Premium"
            width={64}
            height={64}
          />

          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold">Real Time Tracking</p>

            <p className="text-sm">See how your portfolio is doing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
