import { userAssetsStore } from "@/store/user";
import Image from "next/image";
import Link from "next/link";
import { formatDecimal } from "@/lib/decimalFormatter";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currencyformatter";

const Portfolio = () => {
  const userAssets = userAssetsStore((state: any) => state.userAssets);
  const poolAllocated = userAssets?.products.find(
    (product: any) => product.product_id === "pool-allocated-1g"
  );

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
            className="absolute left-0 bottom-0 rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Assets Worth
            </p>
            {userAssets?.total_ask_price_naira ? (
              <p className="font-bold">
                {formatCurrency(
                  userAssets?.total_ask_price_usd,
                  "en-US",
                  "USD"
                )}
              </p>
            ) : (
              <p className="font-bold">$0.00</p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-[#FBF7EB] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757083/dukia-Gold-Bar1-1g_philoro_1_xdxpbu.png"
            alt="Silver"
            width={87.8}
            height={149.44}
            className="absolute left-0 bottom-0 rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">Gold (Au)</p>
            {userAssets?.total_weight_of_all_products ? (
              <>
                <p className="font-bold">
                  {formatDecimal(userAssets?.total_weight_of_all_products, 4)}g
                </p>
                <p className="text-[#979BAE] text-xs font-semibold">
                  ~{" "}
                  {formatCurrency(
                    poolAllocated.total_ask_price_usd,
                    "en-US",
                    "USD"
                  )}
                </p>
              </>
            ) : (
              <>
                <p className="font-bold">0.0000g</p>
                <p className="text-[#979BAE] text-xs font-semibold">~ $ 0.00</p>
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
            className="absolute left-0 bottom-0 rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">Silver (Ag)</p>
            <p className="font-bold">0.0000g</p>
            <p className="text-[#979BAE] text-xs font-semibold">~ $ 0.00</p>
          </CardContent>
        </Card>

        {/* Platinum */}
        <Card className="bg-[#F5F5FF] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757024/images_1_ljs3c7.png"
            alt="Platinum"
            width={107.92}
            height={90}
            className="absolute left-0 bottom-0 rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Platinum (Pt)
            </p>
            <p className="font-bold">0.0000g</p>
            <p className="text-[#979BAE] text-xs font-semibold">~ $ 0.00</p>
          </CardContent>
        </Card>

        {/* Lithium */}
        <Card className="bg-[#FFF4EE] border-0 rounded-xl h-28 flex justify-end items-center relative">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1722757024/natural-stones-isolated_23-2151436337_1_t3ystf.png"
            alt="Lithium"
            width={62.26}
            height={90}
            className="absolute left-0 bottom-0 rounded-bl-xl"
          />
          <CardContent className="pr-6 space-y-2 flex flex-col justify-center py-0 h-full text-right">
            <p className="font-extrabold text-xl text-[#979BAE]">
              Lithium (Li)
            </p>
            <p className="font-bold">0.0000g</p>
            <p className="text-[#979BAE] text-xs font-semibold">~ $ 0.00</p>
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
              className="absolute left-0 bottom-0 rounded-bl-xl"
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
