"use client";

import GoldPrice from "@/components/dashboardComponents/GoldPrice";
import MobileHeader from "@/components/dashboardComponents/MobileHeader";
import Sidebar from "@/components/dashboardComponents/Sidebar";
import TopBar from "@/components/dashboardComponents/TopBar";
import StatementOfAccountModal from "@/components/transactionsComponents/StatementOfAccountModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { userStore } from "@/store/user";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Dukia Gold",
//   description:
//     "Buy and sell gold with Dukia Gold, a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa.",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = userStore((state: any) => state.user);

  return (
    <div
      id="dashboardLayout"
      className="flex flex-col lg:flex-row pt-0 overflow-hidden"
    >
      <Sidebar />

      <main className="w-full lg:px-5 2xl:px-10 bg-dukiaGrey pt-4 h-screen">
        <GoldPrice />
        <MobileHeader />
        <TopBar />

        <ScrollArea
          className={`${
            user && user.is_bvn === 0
              ? "mt-2 h-[calc(100vh-315px)] pb-36"
              : "mt-4 h-[calc(100vh-222px)] pb-36"
          } bg-dukiaGrey`}
        >
          {children}
        </ScrollArea>

        <StatementOfAccountModal />
      </main>
    </div>
  );
}
