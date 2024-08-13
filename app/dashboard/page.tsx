"use client";

import toast from "react-hot-toast";
import MarketPrices from "@/components/dashboardComponents/dashboardSections/MarketPrices";
import Portfolio from "@/components/dashboardComponents/dashboardSections/Portfolio";
import Trade from "@/components/dashboardComponents/dashboardSections/Trade";
import Transactions from "@/components/dashboardComponents/dashboardSections/Transactions";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [isOnline, setIsOnline] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // ONLINE OR OFFLINE
  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      setIsOnline(window.navigator.onLine);

      const handleOnline = () => {
        toast.success("You're back online!");
        setIsOnline(true);
      };

      const handleOffline = () => {
        toast.error("You are offline!");
        setIsOnline(false);
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

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
