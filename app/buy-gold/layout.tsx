"use client";

import Newsletter from "@/components/landingPageComponents/landingPageSections/Newsletter";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type BuyGoldLayoutProps = {
  children: ReactNode;
};

export default function BuyGoldLayout({ children }: BuyGoldLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="px-3 md:px-5 lg:px-10 xl:px-20 pt-32 pb-20 flex flex-col gap-7 md:gap-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 text-dukiaBlue gap-3">
          <div className="flex items-center gap-2 text-lg font-bold text-dukiaBlue">
            <Link href="/">Home</Link>
            <ArrowRight size={18} />{" "}
            <Link
              href="/buy-gold"
              className={`${pathname === "/buy-gold" ? "text-dukiaGold" : ""}`}
            >
              Buy Gold
            </Link>
            {pathname === "/buy-gold/bars" ? (
              <>
                {" "}
                <ArrowRight size={18} />{" "}
                <Link href="/buy-gold/bars" className="text-dukiaGold">
                  Gold Bars
                </Link>{" "}
              </>
            ) : null}
            {pathname === "/buy-gold/coins" ? (
              <>
                {" "}
                <ArrowRight size={18} />{" "}
                <Link href="/buy-gold/bars" className="text-dukiaGold">
                  Gold Bars
                </Link>{" "}
              </>
            ) : null}
          </div>

          {pathname === "/buy-gold" ? (
            <p className="hidden xl:block font-bold text-[2.5rem]">Buy Gold</p>
          ) : null}

          {pathname === "/buy-gold/bars" ? (
            <p className="hidden xl:block font-bold text-[2.5rem]">Gold Bars</p>
          ) : null}

          {pathname === "/buy-gold/coins" ? (
            <p className="hidden xl:block font-bold text-[2.5rem]">
              Gold Coins
            </p>
          ) : null}

          <div className="flex items-center gap-2 border-2 border-dukiaBlue/[10%] bg-[#F3F3F4] px-2 md:px-4 py-3.5 w-[90vw] md:w-80 rounded-lg">
            <Search size={20} color="#111827" />
            <input
              type="text"
              placeholder="Search for gold, amount,quantity..."
              disabled
              className="outline-none bg-transparent w-full text-dukiaBlue placeholder:text-dukiaBlue/[40%]"
            />
          </div>
        </div>

        {children}
      </div>

      <Newsletter />
    </div>
  );
}
