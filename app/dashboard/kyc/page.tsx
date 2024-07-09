"use client";

import BVN from "@/components/dashboardComponents/kycComponents/BVN";
import Others from "@/components/dashboardComponents/kycComponents/Others";
import useFetchUserData from "@/lib/fetchUserData";
import { Spin } from "antd";

const KYCPage = () => {
  const user = useFetchUserData();

  return (
    <main className="w-full bg-dukiaGrey h-full pb-28">
      {user ? (
        <div className="py-4 px-1.5 md:px-5 lg:px-10 space-y-4">
          {/* Top */}
          <div className="text-dukiaBlue">
            <p className="font-bold text-xl">Hi {user.first_name},</p>
            <p>Please complete your KYC verification here.</p>
          </div>

          {user.is_bvn === 0 && (
            <BVN />
          )}

          {user.is_verified === 1 && (
            <Others />
          )}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </main>
  );
};

export default KYCPage;
