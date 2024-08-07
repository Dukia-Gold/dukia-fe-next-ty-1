import React from "react";
import { userStore } from "@/store/user";
import Image from "next/image";
import Link from "next/link";
import { formatDecimal } from "@/lib/decimalFormatter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Portfolio = () => {
  const user = userStore((state: any) => state.user);

  return (
    <div className="xl:col-span-2 p-4 border border-dukiaBlue/[5%] rounded-2xl bg-white space-y-3 text-dukiaBlue">
      <p className="font-semibold">Portfolio</p>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-[#E8E9ED] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757027/black_wallet_with_money_l8x1m5.png"
            alt="Silver"
            width={77.26}
            height={90}
            className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Assets Worth
            </p>
            {user?.opening_balance_ng ? (
              <>
                <p className="text-sm font-semibold">
                  {formatDecimal(parseInt(user?.opening_balance_ng))}
                </p>
              </>
            ) : (
              <Skeleton className="w-20 md:w-40 h-8" />
            )}
          </CardContent>
        </Card>

        <Card className="bg-[#FBF7EB] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757083/dukia-Gold-Bar1-1g_philoro_1_xdxpbu.png"
            alt="Silver"
            width={87.8}
            height={149.44}
            className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">Gold (Au)</p>
            {user?.opening_balance_au ? (
              <>
                <p className="text-sm font-semibold">
                  {user?.opening_balance_au}g
                </p>
                <p className="text-[#979BAE] font-semibold">~ ₦ 283,904.84</p>
              </>
            ) : (
              <>
                <Skeleton className="w-20 md:w-40 h-8" />
                <Skeleton className="w-10 md:w-20 h-8" />
              </>
            )}
          </CardContent>
        </Card>

        {/* Silver */}
        <Card className="bg-[#F5F5F5] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757057/silver_shield_qbbmnv.png"
            alt="Silver"
            width={72.16}
            height={90}
            className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">Silver (Ag)</p>
            <p className="text-sm font-semibold">1.3g</p>
            <p className="text-[#979BAE] font-semibold">~ ₦ 23,904.84</p>
          </CardContent>
        </Card>

        {/* Platinum */}
        <Card className="bg-[#F5F5FF] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757024/images_1_ljs3c7.png"
            alt="Platinum"
            width={107.92}
            height={90}
            className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Platinum (Pt)
            </p>
            <p className="text-sm font-semibold">3.0g</p>
            <p className="text-[#979BAE] font-semibold">~ ₦ 283,904.84</p>
          </CardContent>
        </Card>

        {/* Lithium */}
        <Card className="bg-[#FFF4EE] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757024/natural-stones-isolated_23-2151436337_1_t3ystf.png"
            alt="Lithium"
            width={62.26}
            height={90}
            className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Lithium (Li)
            </p>
            <p className="text-sm font-semibold">1.3g</p>
            <p className="text-[#979BAE] font-semibold">~ ₦ 283,904.84</p>
          </CardContent>
        </Card>

        {/* See All */}
        <Link href={"/dashboard/assets"}>
          <Card className="bg-[#F6F6F6] border-0 rounded-xl h-28 flex justify-end items-center relative">
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757027/triple_pointer_arrow_atbmty.png"
              alt="see all"
              width={110}
              height={85}
              className="absolute left-0 bottom-0 w-auto h-auto rounded-bl-xl"
            />
            <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
              <p className="font-extrabold text-xl text-[#979BAE]">See All</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
