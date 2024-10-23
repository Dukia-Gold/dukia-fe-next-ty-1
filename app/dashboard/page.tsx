"use client";

import toast from "react-hot-toast";
import MarketPrices from "@/components/dashboardComponents/dashboardSections/MarketPrices";
import Portfolio from "@/components/dashboardComponents/dashboardSections/Portfolio";
import Trade from "@/components/dashboardComponents/dashboardSections/Trade";
import Transactions from "@/components/dashboardComponents/dashboardSections/Transactions";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useCheckLoginStatus } from "@/lib/isLoggedIn";
import { useRouter } from "next/navigation";
import Gift from "@/components/dashboardComponents/dashboardSections/Gift";

const DashboardPage = () => {
  const user = userStore((state: any) => state.user);
  const router = useRouter();
  const checkLoginStatus = useCheckLoginStatus();
  const [isOnline, setIsOnline] = useState(false);
  // const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    // Run immediately on mount
    checkLoginStatus();

    // Set up interval to run every 5 seconds
    const intervalId = setInterval(() => checkLoginStatus(), 5000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

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
            <Gift />
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
