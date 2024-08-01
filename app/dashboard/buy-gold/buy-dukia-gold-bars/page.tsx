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
          <div className="bg-white rounded-xl px-3 py-3  flex flex-col">
            <div className="bg-[#FBF7EB] py-3 px-[2.8125rem] flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722503559/1g_akhzgs.png"
                alt="1gram Gold Bar"
                width={200}
                height={343.48}
              />
            </div>
            <div className="">
              <p className="font-manrope text-base font-semibold leading-5 text-left text-dukiaBlue pt-4 pl-3">
                {" "}
                Philoro 1g Fine Gold
              </p>
              <p className="font-manrope inline-flex  text-base font-semibold leading-5 text-left text-dukiaBlue py-3 pl-3">
                ₦180,321.78
                <p className="text-[#FF5757] inline-flex font-manrope text-xs font-semibold leading-4 text-left pt-1">
                  {" "}
                  <ArrowDown className="ml-3" size={15} /> 0.99%
                </p>
              </p>
            </div>
            <div>
              <button className="w-full bg-dukiaBlue text-white py-3 px-4 rounded-xl font-manrope text-base font-semibold leading-5">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl group border  hover:border-4 hover:border-dukiaBlue focus-within:border-dukiaBlue flex flex-col"></div>

          <div className="bg-white rounded-xl group border hover:border-4 hover:border-dukiaBlue focus-within:border-dukiaBlue flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default GoldBarsPage;
