import useAuth from "@/api/auth/useAuth";
import { formatDecimal } from "@/lib/decimalFormatter";
import { capitalizeFirstLetter } from "@/lib/formatText";
import { GetUrl } from "@/lib/getUrl";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import { ArrowRight, Eye, EyeOff, Info, Power } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TopBar = () => {
  const { logout } = useAuth();
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const [seeBalance, setSeeBalance] = useState(false);
  const pathname = GetUrl();

  return (
    <div className="text-dukiaBlue mt-7 space-y-7">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-dukiaBlue">
            <p className="font-semibold">
              Hi {user ? capitalizeFirstLetter(user.first_name) : "Guest"},
            </p>
            <p className="text-sm">Welcome back to your dashboard!</p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="p-2.5 rounded-[50%] bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99609 3.49609C2.99609 3.36349 3.04877 3.23631 3.14254 3.14254C3.23631 3.04877 3.36349 2.99609 3.49609 2.99609H3.93409C4.66109 2.99609 5.07909 3.46909 5.32109 3.94109C5.48609 4.26409 5.60509 4.65809 5.70409 5.00009H15.9991C16.1536 5.00014 16.306 5.03599 16.4443 5.10484C16.5827 5.17368 16.7032 5.27365 16.7964 5.39689C16.8896 5.52013 16.953 5.66329 16.9815 5.81514C17.0101 5.96699 17.0031 6.1234 16.9611 6.27209L15.4651 11.5471C15.3461 11.9656 15.0939 12.3339 14.7467 12.5961C14.3994 12.8583 13.9762 13.0001 13.5411 13.0001H8.46209C8.02337 13.0002 7.59677 12.8561 7.24801 12.59C6.89926 12.3238 6.6477 11.9503 6.53209 11.5271L5.89009 9.17209L5.88009 9.14009L4.85009 5.64209L4.75009 5.30509C4.65009 4.95909 4.56209 4.65309 4.43009 4.39609C4.27109 4.08609 4.12509 3.99609 3.93409 3.99609H3.49609C3.36349 3.99609 3.23631 3.94342 3.14254 3.84965C3.04877 3.75588 2.99609 3.6287 2.99609 3.49609ZM8.49909 17.0001C8.89692 17.0001 9.27845 16.8421 9.55975 16.5608C9.84106 16.2794 9.99909 15.8979 9.99909 15.5001C9.99909 15.1023 9.84106 14.7207 9.55975 14.4394C9.27845 14.1581 8.89692 14.0001 8.49909 14.0001C8.10127 14.0001 7.71974 14.1581 7.43843 14.4394C7.15713 14.7207 6.99909 15.1023 6.99909 15.5001C6.99909 15.8979 7.15713 16.2794 7.43843 16.5608C7.71974 16.8421 8.10127 17.0001 8.49909 17.0001ZM13.4991 17.0001C13.8969 17.0001 14.2785 16.8421 14.5598 16.5608C14.8411 16.2794 14.9991 15.8979 14.9991 15.5001C14.9991 15.1023 14.8411 14.7207 14.5598 14.4394C14.2785 14.1581 13.8969 14.0001 13.4991 14.0001C13.1013 14.0001 12.7197 14.1581 12.4384 14.4394C12.1571 14.7207 11.9991 15.1023 11.9991 15.5001C11.9991 15.8979 12.1571 16.2794 12.4384 16.5608C12.7197 16.8421 13.1013 17.0001 13.4991 17.0001Z"
                  fill="#111827"
                />
              </svg>
            </div>

            <div className="p-2.5 rounded-[50%] bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99925 1.6665C8.45215 1.6665 6.96842 2.28109 5.87446 3.37505C4.7805 4.46901 4.16592 5.95274 4.16592 7.49984V10.4398C4.16604 10.5691 4.13608 10.6966 4.07842 10.8123L2.64758 13.6732C2.57769 13.8129 2.54469 13.9683 2.55171 14.1244C2.55873 14.2805 2.60554 14.4322 2.6877 14.5651C2.76987 14.698 2.88464 14.8078 3.02114 14.8838C3.15763 14.9599 3.31132 14.9999 3.46758 14.9998H16.5309C16.6872 14.9999 16.8409 14.9599 16.9774 14.8838C17.1139 14.8078 17.2286 14.698 17.3108 14.5651C17.393 14.4322 17.4398 14.2805 17.4468 14.1244C17.4538 13.9683 17.4208 13.8129 17.3509 13.6732L15.9209 10.8123C15.863 10.6967 15.8327 10.5692 15.8326 10.4398V7.49984C15.8326 5.95274 15.218 4.46901 14.124 3.37505C13.0301 2.28109 11.5463 1.6665 9.99925 1.6665ZM9.99925 17.4998C9.48207 17.5 8.97756 17.3398 8.55521 17.0413C8.13285 16.7428 7.81343 16.3207 7.64092 15.8332H12.3576C12.1851 16.3207 11.8656 16.7428 11.4433 17.0413C11.0209 17.3398 10.5164 17.5 9.99925 17.4998Z"
                  fill="#111827"
                />
              </svg>
            </div>

            <div
              onClick={logout}
              className="p-2.5 rounded-[50%] bg-white cursor-pointer"
            >
              <Power width={20} height={20} />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="text-xl font-extrabold">
            {pathname === "/dashboard" && <p>Dashboard</p>}
            {pathname === "/dashboard/profile" && <p>Account Info</p>}
            {pathname === "/dashboard/card" && <p>Debit Card</p>}
            {pathname === "/dashboard/kyc" && <p>KYC Verification</p>}

            {pathname === "/dashboard/buy-gold" && <p>Buy Gold</p>}
            {pathname === "/dashboard/buy-gold/buy-dukia-gold-bars" && (
              <p className="text-[#676D88]">
                Buy Gold /{" "}
                <span className="text-dukiaBlue font-extrabold">Gold Bars</span>
              </p>
            )}

            {pathname === "/dashboard/assets" && <p>Assets</p>}
            {pathname === "/dashboard/transactions" && <p>Transactions</p>}
            {pathname === "/dashboard/charts" && <p>Charts</p>}
            {pathname === "/dashboard/settings" && <p>Settings</p>}
          </div>

          <div className="flex items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Info
                  width={17}
                  height={17}
                  fill="#111827"
                  stroke="white"
                  className="cursor-pointer"
                />
                <p className="text-sm">Initial Account Balance</p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold">
                  <span className="text-xs text-[#676D88]">₦ </span>
                  {seeBalance
                    ? formatDecimal(user?.opening_balance_ng)
                    : "******"}
                </p>

                {!seeBalance && (
                  <Eye
                    className="text-dukiaBlue/[50%] cursor-pointer"
                    size={20}
                    onClick={() => {
                      setSeeBalance(true);
                    }}
                  />
                )}

                {seeBalance && (
                  <EyeOff
                    className="text-dukiaBlue/[50%] cursor-pointer"
                    size={20}
                    onClick={() => {
                      setSeeBalance(false);
                    }}
                  />
                )}
              </div>
            </div>

            {/* Deposit */}
            <button
              onClick={() => updateModals({ deposit: true })}
              className="bg-dukiaBlue text-white flex py-3 px-4 rounded-lg items-center gap-2.5"
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
                  fill="white"
                />
              </svg>
              Fund account
            </button>
          </div>
        </div>
      </div>

      {/* KYC (if not verified) */}
      {user && user.is_bvn === 0 && (
        <div className="bg-[#FFF7F0] py-2.5 px-4 rounded-2xl flex items-center gap-11 border border-dukiaBlue/[10%]">
          <p>You have not completed your KYC verification!</p>
          <Link href="/dashboard/kyc">
            <button className="flex items-center gap-2.5 py-3 px-4 border text-[#ED7004] rounded-lg border-[#ED7004] font-semibold">
              Complete KYC <ArrowRight width={19} height={19} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBar;
