"use client";

import MarketPrices from "@/components/dashboardComponents/MarketPrices";
import Portfolio from "@/components/dashboardComponents/Portfolio";
import Trade from "@/components/dashboardComponents/Trade";
import Transactions from "@/components/dashboardComponents/Transactions";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { Spin } from "antd";

const DashboardPage = () => {
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  return (
    <main className="w-full bg-dukiaGrey h-full">
      {user ? (
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className="grid xl:grid-cols-3 gap-y-6 gap-x-5">
              <Portfolio />
              <Trade />
            </div>

            <MarketPrices />

            <Transactions />
          </div>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-315px)] flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;

// export default withAuth(DashboardPage)
