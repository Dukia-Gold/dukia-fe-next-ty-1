"use client";

import { userStore } from "@/store/user";
import { Spin } from "antd";
import profile from "../../../assets/profile.jpg";
import Image from "next/image";
import React, { useState } from "react";
import { capitalizeFirstLetter } from "@/lib/formatText";
import IndividualInfo from "@/components/profileComponents/IndividualInfo";
import JointInfo from "@/components/profileComponents/JointInfo";
import CompanyInfo from "@/components/profileComponents/Company";
import ResetPasswordModal from "@/components/profileComponents/ResetPasswordModal";

const ProfilePage = () => {
  const [resetModal, setResetModal] = useState(false);
  const closeModal = () => setResetModal(false);

  const user = userStore((state: any) => state.user);

  let formattedDate = "";
  if (user) {
    formattedDate = new Date(user?.created_at).toISOString().split("T")[0];
  }

  return (
    <main className="w-full bg-dukiaGrey text-dukiaBlue h-full mb-40 lg:mb-24">
      {user ? (
        <div className="pt-4 pb-14 px-1.5 md:px-5 lg:px-10 space-y-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-xl">
                Hi {capitalizeFirstLetter(user.first_name)},
              </p>
              <p>Here are your account details</p>
            </div>

            <button onClick={() => setResetModal(true)} className="bg-dukiaBlue hover:bg-dukiaGold hover:text-black text-white font-semibold text-sm py-4 px-6 rounded-lg">
              Reset Password
            </button>
          </div>

          {/* Basic Details */}
          <div className="bg-white p-3 md:p-6 rounded-lg space-y-8 md:space-y-2">
            <p className="font-bold text-lg">Account Details</p>

            <div className="md:flex space-y-3 md:space-y-0 items-center justify-between">
              {/* Profile */}
              <div className="flex items-center gap-2">
                <Image
                  src={profile}
                  alt="Profile Image"
                  className="w-10 h-10 object-cover rounded-[50%]"
                />

                {/* Name and Joined */}
                <div className="flex flex-col">
                  {/* Name */}
                  <p className="font-semibold">
                    {capitalizeFirstLetter(user.first_name)}{" "}
                    {capitalizeFirstLetter(user.last_name)}
                  </p>

                  {/* Joined */}
                  <p className="text-sm text-dukiaBlue/[50%]">
                    Joined {formattedDate}
                  </p>
                </div>
              </div>

              {/* Account Details */}
              <div className="py-1.5 md:py-3 text-sm border rounded-md border-dukiaBlue/[10%] flex items-center">
                {/* Account Number */}
                <div className="flex flex-col items-center font-semibold px-1.5 md:px-6 border-r">
                  <p>User ID</p>
                  <p className="text-dukiaGold">{user.account_number}</p>
                </div>

                {/* Account Tier */}
                <div className="flex flex-col items-center px-1.5 md:px-6 border-r">
                  <p className="font-semibold">Account Tier</p>
                  <p>{user.account_number}</p>
                </div>

                {/* Account Type */}
                <div className="flex flex-col items-center px-1.5 md:px-6">
                  <p className="font-semibold">Account Type</p>
                  <p>{capitalizeFirstLetter(user.type)} account</p>
                </div>
              </div>
            </div>
          </div>

          {user.type === "individual" ||
            (user.type === "personal" && <IndividualInfo />)}

          {user.type === "joint" && <JointInfo />}

          {user.type === "corporate" && <CompanyInfo />}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}

      <ResetPasswordModal isOpen={resetModal} closeModal={closeModal} />
    </main>
  );
};

export default ProfilePage;
