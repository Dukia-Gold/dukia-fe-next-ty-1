"use client";

import { ArrowLeft, TimerReset } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [layout, setLayout] = useState("table");

  return (
    <div className="py-10 px-4 rounded-2xl bg-white ">
      <Link href={"/dashboard"}>
        <div className="flex items-center gap-3 text-dukiaGold font-semibold">
          <ArrowLeft width={15} height={15} />
          <p>Go Back</p>
        </div>
      </Link>

      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between font-semibold">
          <div className="flex items-center gap-1">
            <div
              onClick={() => setLayout("table")}
              className={`${
                layout === "table" && "bg-[#E8E9ED]"
              } py-3 px-4 rounded-lg cursor-pointer`}
            >
              Table
            </div>

            <div
              onClick={() => setLayout("charts")}
              className={`${
                layout === "charts" && "bg-[#E8E9ED]"
              } py-3 px-4 rounded-lg cursor-pointer`}
            >
              Charts
            </div>
          </div>

          <Link href={"/dashboard/transactions"}>
            <div className="text-dukiaGold flex items-center gap-2">
              <TimerReset width={16} height={16} />
              <p>Transaction History</p>
            </div>
          </Link>
        </div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default PortfolioPage;
