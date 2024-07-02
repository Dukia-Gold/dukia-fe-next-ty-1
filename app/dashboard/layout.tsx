import Sidebar from "@/components/dashboardComponents/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dukia Gold",
  description:
    "Buy and sell gold with Dukia Gold, a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>{/* Dashboard navigation here */}</nav>
      <main className="flex pt-0">
        <Sidebar />
        <ScrollArea className="w-full">
          {children}
        </ScrollArea>
      </main>
    </div>
  );
}
