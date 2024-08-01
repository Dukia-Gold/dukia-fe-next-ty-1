import ProductOption from "@/components/dashboardComponents/buyGoldComponents/ProductOption";
import { ArrowLeft } from "lucide-react";
import { ArrowDown } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const GoldBarsPage = async () => {
  // await the function that fetches product data.

  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <div className="bg-[#F6F7F9] pt-10 px-4 rounded-xl">
        <Link href={"/dashboard/buy-gold"}>
          <p className="inline-flex items-center text-[#D4A418] font-manrope text-base font-semibold leading-[1.2] tracking-tight text-left">
            <ArrowLeft className="mr-2" /> Go Back
          </p>
        </Link>
        <div className="gap-14 grid md:grid-cols-2 lg:grid-cols-3 pt-10 pb-[2.625rem]">
          <ProductOption
            title="Philoro 1g Gold Bar"
            price="180321.78"
            priceChange="0.99%"
            image="https://res.cloudinary.com/dvcw253zw/image/upload/v1722503559/1g_akhzgs.png"
          />

          <div className="bg-white rounded-xl "></div>

          <div className="bg-white rounded-xl "></div>
        </div>
      </div>
    </div>
  );
};

export default GoldBarsPage;
