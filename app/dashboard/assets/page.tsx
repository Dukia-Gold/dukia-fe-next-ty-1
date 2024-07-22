"use client"

import { capitalizeFirstLetter } from "@/lib/formatText";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";

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
              <p className="font-bold text-xl">Hi {capitalizeFirstLetter(user.first_name)},</p>
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

          <div></div>
        </div>) : (<></>)}
    </main>
  )
}

export default AssetsPage