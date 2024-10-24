"use client";

import { formatDecimal } from "@/lib/decimalFormatter";
import React from "react";
import { useCookies } from "react-cookie";
import { RiEyeFill, RiEyeOffFill, RiInformation2Fill } from "react-icons/ri";

const SavingsCard = () => {
  const [cookies] = useCookies(["xZ9qTn7p_K4wVd1Lm_jx8s2A"]);
  const token = cookies["xZ9qTn7p_K4wVd1Lm_jx8s2A"];
  const [balance, setBalance] = React.useState<number>(0);
  const [seeBalance, setSeeBalance] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(
          "https://api.dukiapreciousmetals.co/api/v2/savings-plan/balance",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const balance = await response.json();
        setBalance(balance); // Handle the data as needed
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchBalance();
  }, [token]); // Added 'token' to the dependency array

  return (
    <div className="savings-card-gradient savings-card-shadow rounded-2xl px-6 py-4 space-y-12 text-dukiaBlue">
      {/* Top section with "My Savings" and icon */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3 font-semibold">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 4.5C18 5.0625 17.5531 5.58125 16.8 6C15.8906 6.50313 14.5344 6.85938 12.9781 6.96562C12.8625 6.90937 12.7469 6.85625 12.625 6.80937C11.3938 6.29375 9.75625 6 8 6C7.74062 6 7.4875 6.00625 7.23438 6.01875L7.2 6C6.44687 5.58125 6 5.0625 6 4.5C6 3.11875 8.6875 2 12 2C15.3125 2 18 3.11875 18 4.5ZM7.02187 7.03438C7.34062 7.0125 7.66875 7 8 7C9.94375 7 11.6687 7.38437 12.7656 7.98125C13.5406 8.40312 14 8.92812 14 9.5C14 9.625 13.9781 9.74687 13.9344 9.86562C13.7906 10.2781 13.4031 10.6562 12.8406 10.975C12.8375 10.9781 12.8313 10.9781 12.8281 10.9812C12.8188 10.9875 12.8094 10.9906 12.8 10.9969C11.7063 11.6031 9.9625 11.9969 8 11.9969C6.1375 11.9969 4.47187 11.6437 3.36875 11.0875C3.30937 11.0594 3.25312 11.0281 3.19687 10.9969C2.44687 10.5813 2 10.0625 2 9.5C2 8.4125 3.66875 7.48438 6 7.14375C6.32812 7.09688 6.66875 7.05938 7.02187 7.03438ZM15 9.5C15 8.81563 14.6687 8.25313 14.2469 7.83125C15.1312 7.69375 15.9406 7.475 16.6281 7.19063C17.1375 6.97813 17.6125 6.71563 18 6.39375V7.5C18 8.10313 17.4844 8.65937 16.6313 9.09062C16.175 9.32187 15.6187 9.51875 14.9937 9.66875C14.9969 9.6125 15 9.55938 15 9.50313V9.5ZM14 12.5C14 13.0625 13.5531 13.5813 12.8 14C12.7438 14.0312 12.6875 14.0594 12.6281 14.0906C11.5281 14.6469 9.8625 15 8 15C6.0375 15 4.29375 14.6062 3.2 14C2.44688 13.5813 2 13.0625 2 12.5V11.3938C2.39062 11.7156 2.8625 11.9781 3.37188 12.1906C4.60625 12.7063 6.24375 13 8 13C9.75625 13 11.3938 12.7063 12.6281 12.1906C12.8719 12.0906 13.1062 11.975 13.3281 11.85C13.5188 11.7438 13.6969 11.625 13.8656 11.5C13.9125 11.4656 13.9563 11.4281 14 11.3938V12.5ZM15 12.5V10.6906C15.5938 10.5594 16.1406 10.3938 16.6281 10.1906C17.1375 9.97813 17.6125 9.71563 18 9.39375V10.5C18 10.8281 17.8438 11.1562 17.5344 11.4656C17.025 11.975 16.1281 12.3937 14.9937 12.6656C14.9969 12.6125 15 12.5562 15 12.5ZM8 16C9.75625 16 11.3938 15.7063 12.6281 15.1906C13.1375 14.9781 13.6125 14.7156 14 14.3938V15.5C14 16.8813 11.3125 18 8 18C4.6875 18 2 16.8813 2 15.5V14.3938C2.39062 14.7156 2.8625 14.9781 3.37188 15.1906C4.60625 15.7063 6.24375 16 8 16Z"
              fill="#1C254E"
            />
          </svg>
          <p>My Savings</p>
        </div>

        <div className="space-y-1 flex flex-col items-end">
          <div className="flex items-center gap-3">
            <div
              onClick={() => setSeeBalance(!seeBalance)}
              className="w-7 h-7 bg-[#E8E9ED] flex items-center justify-center rounded-full cursor-pointer"
            >
              {seeBalance ? (
                <RiEyeOffFill width={16.76} height={16.18} />
              ) : (
                <RiEyeFill width={16.76} height={16.18} />
              )}
            </div>

            <p className="text-sm text-[#676D88]">Total Savings Balance</p>
          </div>

          <div className="flex items-center gap-2">
            <RiInformation2Fill width={17} height={17} />
            <p className="text-[32px]/[38.4px]">
              {seeBalance ? `${formatDecimal(balance, 2, false)}g` : "***"} Gold
              (Au)
            </p>
          </div>
        </div>
      </div>

      {/* Savings increase message */}
      <div className="bg-white inner-savings-card-shadow border-2 border-[#FBF7EB] p-4 rounded-xl flex items-center justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold">Hurray 🎉</p>

          <p>
            You have saved <span className="font-semibold">0.09g</span> of gold
            in the last 30 days
          </p>
        </div>

        {/* Green upward chart icon */}
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 17l3.79-3.79a1 1 0 011.42 0l3.79 3.79L21 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SavingsCard;
