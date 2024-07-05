"use client";

import Portfolio from "@/components/dashboardComponents/Portfolio";
import Trade from "@/components/dashboardComponents/Trade";
import Transactions from "@/components/dashboardComponents/Transactions";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useFetchUserData from "@/lib/fetchUserData";
import { Spin } from "antd";
import Link from "next/link";

const DashboardPage = () => {
  const user = useFetchUserData();
  console.log(user);

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <main className="w-full bg-dukiaGrey h-screen">
      {user ? (
        <div className="py-4 px-1.5 md:px-5 lg:px-10 space-y-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="text-dukiaBlue">
              <p className="font-bold text-xl">Hi {user.first_name},</p>
              <p>Welcome back to your dashboard!</p>
            </div>

            <div className="hidden md:flex gap-2 text-sm font-semibold">
              <button className="text-white bg-dukiaBlue py-4 px-8 rounded-lg">
                Withdraw
              </button>
              <button className="bg-dukiaGold py-4 px-8 rounded-lg">
                Top Up
              </button>
            </div>
          </div>

          {/* KYC (if not verified) */}
          {user.is_bvn === 0 && (
            <div className="bg-[#D20000]/[10%] text-[#D20000] py-4 rounded-lg text-sm flex justify-center">
              <p>
                <span className="font-bold">KYC Verification!</span> Please 
                <Link href="/dashboard" className="underline">
                  click here
                </Link>
                 to complete your KYC verification.
              </p>
            </div>
          )}

          <div className="grid gap-6">
            <div className="grid xl:grid-cols-3 gap-y-6 gap-x-5">
              <Portfolio />
              <Trade />
            </div>

            <Transactions />
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;

// export default withAuth(DashboardPage)
