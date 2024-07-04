"use client";

import GoldPrice from "@/components/dashboardComponents/GoldPrice";
import MobileHeader from "@/components/dashboardComponents/MobileHeader";
import Sidebar from "@/components/dashboardComponents/Sidebar";
import TopBar from "@/components/dashboardComponents/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  return (
    <div className="flex flex-col lg:flex-row pt-0 overflow-hidden">
      <Sidebar />

      <ScrollArea className="w-full">
        <GoldPrice />
        <MobileHeader />
        <TopBar />

        {children}
      </ScrollArea>
    </div>
  );
}
