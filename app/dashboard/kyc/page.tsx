"use client";

import useFetchUserData from "@/lib/fetchUserData";
import { Spin } from "antd";

const KYCPage = () => {
  const user = useFetchUserData();

  return (
    <main className="w-full bg-dukiaGrey h-screen">
      {user ? (
        <div className="py-4 px-1.5 md:px-5 lg:px-10 space-y-4">
          {/* Top */}
          <div className="text-dukiaBlue">
            <p className="font-bold text-xl">Hi {user.first_name},</p>
            <p>Please complete your KYC verification here.</p>
          </div>

          {user.is_bvn === 0 && (
            <div className="rounded-lg p-6 bg-white space-y-2 text-dukiaBlue">
              <p className="font-bold text-lg">Proof of Identity</p>

              <div className="space-y-6 text-sm">
                <p>
                  To comply with government regulations, we need to verify your
                  identity to ensure the security and safety of your account.
                  Please proceed to the next step to enter your Bank
                  Verification Number (BVN) to complete this step.
                  <br /> <br />
                  We will not store or share your BVN data. It is only used to
                  verify your identity and will be deleted once the process is
                  complete.
                </p>

                <button className="py-3.5 px-6 bg-dukiaBlue text-white rounded-lg">Proceed to BVN Verification</button>
              </div>
            </div>
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
