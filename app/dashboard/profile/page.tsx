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
import useModalsStore from "@/store/modalsStore";
import { RiUser2Fill, RiUser3Fill } from "react-icons/ri";
import Address from "@/components/profileComponents/Address";
import PersonalDetails from "@/components/profileComponents/PersonalDetails";
import BankInformation from "@/components/profileComponents/BankInformation";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState<
    "personalDetails" | "address" | "bank" | null
  >(null);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const user = userStore((state: any) => state.user);

  let formattedDate = "";
  if (user) {
    formattedDate = new Date(user?.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <main className="w-full bg-white rounded-2xl text-dukiaBlue h-full mb-40 lg:mb-24">
      {/* <button
        onClick={() => updateModals({ resetPassword: true })}
        className="bg-dukiaBlue hover:bg-dukiaGold hover:text-black text-white font-semibold text-sm py-4 px-6 rounded-lg"
      >
        Reset Password
      </button> */}

      {user ? (
        <div className="px-10 py-12">
          {/* User Details */}
          <div className="border border-[#E8E9ED] py-5 pl-6 pr-8 rounded-xl flex items-center justify-between">
            {/* User profile information container */}
            <div className="flex items-center gap-3">
              {/* User avatar */}
              <div className="rounded-full bg-[#E8E9ED] p-3">
                <RiUser3Fill size={30} />
              </div>

              {/* User details */}
              <div className="space-y-1">
                {/* User name */}
                <p className="font-semibold">
                  {/* Display name based on user type */}
                  {user.type === "corporate" &&
                    capitalizeFirstLetter(user.first_name)}
                  {user.type === "Joint" &&
                    `${capitalizeFirstLetter(
                      user.first_name
                    )} & ${capitalizeFirstLetter(user.first_name2)}`}
                  {(user.type === "Individual" ||
                    user.type === "individual" ||
                    user.type === "personal") &&
                    `${capitalizeFirstLetter(
                      user.first_name
                    )} ${capitalizeFirstLetter(user.last_name)}`}
                </p>
                {/* User join date */}
                <p className="text-xs text-[#676D88]">Joined {formattedDate}</p>
              </div>
            </div>

            {/* Account Details */}
            <div className="flex items-center gap-3">
              {/* Account Number */}
              <div className="flex flex-col px-1.5 md:px-6 border-r-2 font-semibold">
                <p className="text-sm text-[#676D88]">User ID</p>
                <p className="text-dukiaGold">{user.account_number}</p>
              </div>

              {/* Account Type */}
              <div className="flex flex-col px-1.5 md:px-6 border-r-2 font-semibold">
                <p className="text-sm text-[#676D88]">Account Type</p>
                <p>{capitalizeFirstLetter(user.type)}</p>
              </div>

              {/* Account Tier */}
              <div className="flex items-center gap-3 px-1.5 md:px-6 font-semibold">
                <svg
                  width="25"
                  height="35"
                  viewBox="0 0 25 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1091 1.66806C15.6642 1.14518 15.1111 0.725196 14.488 0.437183C13.8648 0.149169 13.1865 0 12.5 0C11.8135 0 11.1352 0.149169 10.512 0.437183C9.88889 0.725196 9.33576 1.14518 8.89093 1.66806L8.8246 1.74703C8.6623 1.93743 8.45709 2.08655 8.22587 2.18211C7.99466 2.27767 7.74405 2.31694 7.49469 2.29668L7.39202 2.28879C6.708 2.23397 6.02024 2.32837 5.37629 2.56547C4.73234 2.80256 4.14757 3.1767 3.66243 3.662C3.17728 4.1473 2.80332 4.73218 2.56642 5.37621C2.32952 6.02023 2.23533 6.70802 2.29036 7.39202L2.29668 7.49469C2.31694 7.74405 2.27767 7.99466 2.18211 8.22587C2.08655 8.45709 1.93743 8.6623 1.74703 8.82459L1.66806 8.89093C1.14518 9.33576 0.725197 9.88889 0.437183 10.512C0.149169 11.1352 0 11.8135 0 12.5C0 13.1865 0.149169 13.8648 0.437183 14.488C0.725197 15.1111 1.14518 15.6642 1.66806 16.1091L1.74703 16.1754C1.93743 16.3377 2.08655 16.5429 2.18211 16.7741C2.27767 17.0053 2.31694 17.2559 2.29668 17.5053L2.28879 17.608C2.1947 18.7825 2.54132 19.95 3.26108 20.8829C3.98085 21.8158 5.02218 22.4473 6.18216 22.6544V33.033C6.18211 33.3189 6.2597 33.5995 6.40664 33.8448C6.55358 34.0902 6.76435 34.291 7.01648 34.4259C7.26861 34.5608 7.55263 34.6247 7.83825 34.6108C8.12386 34.597 8.40035 34.5058 8.63822 34.3471L12.5 31.7726L16.3618 34.3471C16.5996 34.5058 16.8761 34.597 17.1618 34.6108C17.4474 34.6247 17.7314 34.5608 17.9835 34.4259C18.2356 34.291 18.4464 34.0902 18.5934 33.8448C18.7403 33.5995 18.8179 33.3189 18.8178 33.033V22.6559C19.9781 22.4489 21.0197 21.8172 21.7395 20.8839C22.4593 19.9507 22.8057 18.7828 22.7112 17.608L22.7033 17.5053C22.6831 17.2559 22.7223 17.0053 22.8179 16.7741C22.9135 16.5429 23.0626 16.3377 23.253 16.1754L23.3319 16.1091C23.8548 15.6642 24.2748 15.1111 24.5628 14.488C24.8508 13.8648 25 13.1865 25 12.5C25 11.8135 24.8508 11.1352 24.5628 10.512C24.2748 9.88889 23.8548 9.33576 23.3319 8.89093L23.253 8.82459C23.0626 8.6623 22.9135 8.45709 22.8179 8.22587C22.7223 7.99466 22.6831 7.74405 22.7033 7.49469L22.7112 7.39202C22.766 6.708 22.6716 6.02024 22.4345 5.37629C22.1974 4.73234 21.8233 4.14757 21.338 3.66242C20.8527 3.17727 20.2678 2.80332 19.6238 2.56642C18.9798 2.32952 18.292 2.23533 17.608 2.29036L17.5053 2.29668C17.2559 2.31694 17.0053 2.27767 16.7741 2.18211C16.5429 2.08655 16.3377 1.93743 16.1754 1.74703L16.1091 1.66806ZM9.34108 30.0826V23.7931C10.2101 24.5695 11.3347 24.9987 12.5 24.9987C13.6653 24.9987 14.7899 24.5695 15.6589 23.7931V30.0794L13.3766 28.5584C13.117 28.3852 12.812 28.2928 12.5 28.2928C12.188 28.2928 11.883 28.3852 11.6234 28.5584L9.34108 30.0826Z"
                    fill="#1C254E"
                  />
                  <text
                    x="50%"
                    y="37%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize={14}
                    fontWeight={600}
                  >
                    {user.tier ? user.tier : "0"}
                  </text>
                </svg>
                <p>Tier {user.tier}</p>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="mt-12 space-y-6">
            <p className="font-semibold">Account Information</p>

            {/* Account Information */}
            <div className="border border-[#E8E9ED] rounded-xl p-6 space-y-3">
              {/* Personal Details */}
              <div
                className={`${
                  activeSection === "personalDetails" &&
                  "border-2 border-dukiaBlue"
                } bg-white rounded-lg border border-[#E8E9ED] overflow-hidden`}
              >
                {/* Personal Details */}
                <div
                  className={`${
                    activeSection === "personalDetails" && "pt-14"
                  } py-4 px-6 flex items-center justify-between cursor-pointer`}
                  onClick={() =>
                    setActiveSection(
                      activeSection === "personalDetails"
                        ? null
                        : "personalDetails"
                    )
                  }
                >
                  {/* Personal Details */}
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-dukiaBlue mr-2"
                      fill="#1c254e"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-semibold">Personal Details</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transform ${
                      activeSection === "personalDetails" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Personal Details */}
                {activeSection === "personalDetails" && (
                  <PersonalDetails user={user} />
                )}
              </div>

              {/* Address */}
              <div
                className={`${
                  activeSection === "address" && "border-2 border-dukiaBlue"
                } bg-white rounded-lg border border-[#E8E9ED] overflow-hidden`}
              >
                <div
                  className={`${
                    activeSection === "address" && "pt-14"
                  } py-4 px-6 flex items-center justify-between cursor-pointer`}
                  onClick={() =>
                    setActiveSection(
                      activeSection === "address" ? null : "address"
                    )
                  }
                >
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-dukiaBlue mr-2"
                      fill="#1c254e"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        fill="white"
                        stroke="white"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-semibold">Address</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transform ${
                      activeSection === "address" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {activeSection === "address" && <Address user={user} />}
              </div>

              {/* Bank Information */}
              <div
                className={`${
                  activeSection === "bank" && "border-2 border-dukiaBlue"
                } bg-white rounded-lg border border-[#E8E9ED] overflow-hidden`}
              >
                <div
                  className={`${
                    activeSection === "bank" && "pt-14"
                  } py-4 px-6 flex items-center justify-between cursor-pointer`}
                  onClick={() =>
                    setActiveSection(activeSection === "bank" ? null : "bank")
                  }
                >
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-dukiaBlue mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span className="font-semibold">Bank Information</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transform ${
                      activeSection === "bank" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {activeSection === "bank" && <BankInformation user={user} />}
              </div>
            </div>
            {/* <div className="border border-[#E8E9ED] rounded-xl p-6 space-y-3"></div> */}
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}

      <ResetPasswordModal />
    </main>
  );
};

export default ProfilePage;
