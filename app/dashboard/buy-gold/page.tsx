import GridOption from "@/components/dashboardComponents/buyGoldComponents/GridOption";
import Image from "next/image";
import Link from "next/link";

const BuyGoldPage = () => {
  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <div className="bg-[#F6F7F9] pt-12 px-4 rounded-xl">
        <p className="font-manrope text-[1.28rem] font-extrabold leading-[1.875rem] tracking-[-0.03em] text-center text-[#676D88]">
          Select Gold Type to Continue
        </p>
        <div className="gap-4 grid xl:grid-cols-2 2xl:grid-cols-3 px-4 pt-[2.5625rem] pb-[2.625rem]">
          {/* BARS */}
          <GridOption
            title="Bars"
            description="Dukia Gold Bars are a 100% pure gold, 99.99% certified gold, and are made from 100% gold bars."
            image="https://res.cloudinary.com/dvcw253zw/image/upload/v1722464611/Property_1_Frame_1171278153_bbi0fg.png"
          />

          {/* COINS */}
          <GridOption
            title="Coins"
            description="Dukia Gold Coins are a 100% pure gold, 99.99% certified gold, and are made from 100% gold coins."
            image="https://res.cloudinary.com/dvcw253zw/image/upload/v1722433471/Component_52_atedst.png"
          />

          {/* POOL ALLOCATED */}
          <GridOption
            title="Pool Allocated"
            description="Dukia Gold Pool Allocated is a 100% pure gold, 99.99% certified gold, and is made from 100% gold coins."
            className="xl:col-span-2 2xl:col-span-1"
            image="https://res.cloudinary.com/dvcw253zw/image/upload/v1722433452/Component_51_mkl5aj.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyGoldPage;
