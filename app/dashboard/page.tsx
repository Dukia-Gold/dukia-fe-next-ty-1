"use client";

import Portfolio from "@/components/dashboardComponents/Portfolio";
import Trade from "@/components/dashboardComponents/Trade";
import Transactions from "@/components/dashboardComponents/Transactions";
import { capitalizeFirstLetter } from "@/lib/formatText";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import Link from "next/link";

const DashboardPage = () => {
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  return (
    <main className="w-full bg-dukiaGrey h-full mb-48 md:mb-56  lg:mb-24">
      {user ? (
        <div className="py-4 mb-40 px-1.5 md:px-5 lg:px-10 space-y-6">

          {/* KYC (if not verified) */}
          {user.is_bvn === 0 && (
            <div className="bg-[#D20000]/[10%] text-[#D20000] py-4 rounded-lg text-sm flex justify-center text-center">
              <p>
                <span className="font-bold">KYC Verification!</span> Please 
                <Link href="/dashboard/kyc" className="underline">
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
        <div className="w-full h-screen flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;

// export default withAuth(DashboardPage)
