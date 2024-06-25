"use client";

import Newsletter from "@/components/landingPageComponents/landingPageSections/Newsletter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BuyGoldPage = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-5">
      <p className="xl:hidden font-bold text-[2.5rem]">Buy Gold</p>
      <div className="flex flex-col items-center xl:flex-row justify-center gap-6">
        {/* Gold Bars */}
        <Card className="shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
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
              <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] hover:border-dukiaBlue px-[1.875rem]">
                See Catalogue
              </button>
            </Link>
          </CardFooter>
        </Card>

        {/* Gold Coins */}
        <Card className="shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
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
            <Link href="/buy-gold/coins">
              <button className="py-[0.875rem] border-2 font-semibold rounded-lg border-dukiaBlue/[25%] hover:border-dukiaBlue px-[1.875rem]">
                See Catalogue
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BuyGoldPage;
