"use client";

import { capitalizeFirstLetter } from "@/lib/formatText";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { Search } from "lucide-react";
import Link from "next/link";

const AssetsPage = () => {
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  return (
    <main className="w-full bg-dukiaGrey text-dukiaBlue h-full mb-40 lg:mb-24">
      {user ? (
        <div className="py-4 mb-40 px-1.5 md:px-5 lg:px-10 space-y-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Text */}
            <div className="text-dukiaBlue">
              <p className="font-bold text-xl">
                Hi {capitalizeFirstLetter(user.first_name)},
              </p>
              <p>Welcome back to your dashboard!</p>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex gap-2 text-sm font-semibold">
              {/* Withdraw */}
              <button className="text-white bg-dukiaBlue py-4 px-5 rounded-lg flex items-center gap-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 19L18 13M12 19L6 13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Withdraw
              </button>

              {/* Deposit */}
              <button
                onClick={() => updateModals({ deposit: true })}
                className="bg-dukiaGold flex py-4 px-2.5 rounded-lg items-center gap-2.5"
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5312 9C16.5312 9.22378 16.4424 9.43839 16.2841 9.59662C16.1259 9.75485 15.9113 9.84375 15.6875 9.84375H10.3438V15.1875C10.3438 15.4113 10.2549 15.6259 10.0966 15.7841C9.93839 15.9424 9.72378 16.0312 9.5 16.0312C9.27622 16.0312 9.06161 15.9424 8.90338 15.7841C8.74514 15.6259 8.65625 15.4113 8.65625 15.1875V9.84375H3.3125C3.08872 9.84375 2.87411 9.75485 2.71588 9.59662C2.55764 9.43839 2.46875 9.22378 2.46875 9C2.46875 8.77622 2.55764 8.56161 2.71588 8.40338C2.87411 8.24514 3.08872 8.15625 3.3125 8.15625H8.65625V2.8125C8.65625 2.58872 8.74514 2.37411 8.90338 2.21588C9.06161 2.05764 9.27622 1.96875 9.5 1.96875C9.72378 1.96875 9.93839 2.05764 10.0966 2.21588C10.2549 2.37411 10.3438 2.58872 10.3438 2.8125V8.15625H15.6875C15.9113 8.15625 16.1259 8.24514 16.2841 8.40338C16.4424 8.56161 16.5312 8.77622 16.5312 9Z"
                    fill="#10152D"
                  />
                </svg>
                Fund account
              </button>
            </div>
          </div>

          <div className="bg-white border border-dukiaBlue/[5%] rounded-lg px-6 pb-12 pt-8 space-y-6">
            <div className="flex justify-between items-center text-sm font-semibold">
              <p>Gold (Au) holding in storage</p>
              <Link
                href="/dashboard/transactions"
                className="text-dukiaGold underline"
              >
                Transaction History
              </Link>
            </div>
            <div className="space-y-4">
              {/* Search Bar and Gold Holdings */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Search Bar */}
                <div className="flex items-center rounded-lg border-2 border-dukiaBlue/[10%] w-96">
                  {/* Search Icon */}
                  <div className="py-3.5 px-2 border-r-2 border-dukiaBlue/[10%]">
                    <Search width={20} height={20} />
                  </div>

                  {/* Input */}
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-2 font-medium text-xs outline-none"
                  />

                  {/* Sort */}
                  <div className="py-3.5 px-2 border-l-2 border-dukiaBlue/[10%]">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 20V10M8.5 20L5.5 17M8.5 20L11.5 17M16.5 4V14M16.5 4L19.5 7M16.5 4L13.5 7"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gold Holdings */}
                <div className="flex gap-2">
                  {/* Discrete Bars */}
                  <div className="p-2 rounded-lg shadow-md border border-[#9999994D]/[30%] flex gap-2 w-44">
                    <div className="p-1.5 bg-[#F3F3F4] rounded-[50%]">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33203 18.3333L2.58203 14.1667H8.41536L9.66537 18.3333H1.33203ZM11.332 18.3333L12.582 14.1667H18.4154L19.6654 18.3333H11.332ZM5.4987 12.5L6.7487 8.33333H12.582L13.832 12.5H5.4987ZM19.6654 5.04166L16.4487 5.95L15.5404 9.16666L14.632 5.95L11.4154 5.04166L14.632 4.13333L15.5404 0.916664L16.4487 4.13333L19.6654 5.04166Z"
                          fill="#111827"
                        />
                      </svg>
                    </div>

                    <div className="text-[0.625rem]">
                      <p className="text-dukiaBlue/[75%] font-medium">
                        Total discrete bars
                      </p>
                      <p className="font-bold">100g</p>
                    </div>
                  </div>

                  {/* Pool Allocated */}
                  <div className="p-2 rounded-lg shadow-md border border-[#9999994D]/[30%] flex gap-2 w-44">
                    <div className="p-1.5 bg-[#F3F3F4] rounded-[50%]">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33203 18.3333L2.58203 14.1667H8.41536L9.66537 18.3333H1.33203ZM11.332 18.3333L12.582 14.1667H18.4154L19.6654 18.3333H11.332ZM5.4987 12.5L6.7487 8.33333H12.582L13.832 12.5H5.4987ZM19.6654 5.04166L16.4487 5.95L15.5404 9.16666L14.632 5.95L11.4154 5.04166L14.632 4.13333L15.5404 0.916664L16.4487 4.13333L19.6654 5.04166Z"
                          fill="#111827"
                        />
                      </svg>
                    </div>

                    <div className="text-[0.625rem]">
                      <p className="text-dukiaBlue/[75%] font-medium">
                        Total pool allocated
                      </p>
                      <p className="font-bold">100g</p>
                    </div>
                  </div>

                  {/* Total Gold Holdings */}
                  <div className="p-2 rounded-lg shadow-md border border-[#9999994D]/[30%] flex gap-2 w-44">
                    <div className="p-1.5 bg-[#F3F3F4] rounded-[50%]">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33203 18.3333L2.58203 14.1667H8.41536L9.66537 18.3333H1.33203ZM11.332 18.3333L12.582 14.1667H18.4154L19.6654 18.3333H11.332ZM5.4987 12.5L6.7487 8.33333H12.582L13.832 12.5H5.4987ZM19.6654 5.04166L16.4487 5.95L15.5404 9.16666L14.632 5.95L11.4154 5.04166L14.632 4.13333L15.5404 0.916664L16.4487 4.13333L19.6654 5.04166Z"
                          fill="#111827"
                        />
                      </svg>
                    </div>

                    <div className="text-[0.625rem]">
                      <p className="text-dukiaBlue/[75%] font-medium">
                        Total gold holdings
                      </p>
                      <p className="font-bold">100g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            WalletPage
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default AssetsPage;
