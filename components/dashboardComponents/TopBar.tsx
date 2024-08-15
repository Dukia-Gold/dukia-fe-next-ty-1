"use client";

import useAuth from "@/api/auth/useAuth";
import { formatDecimal } from "@/lib/decimalFormatter";
import { capitalizeFirstLetter } from "@/lib/formatText";
import { GetUrl } from "@/lib/getUrl";
import { useCartStore } from "@/store/cart";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Info,
  Power,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TopBar = () => {
  const cart = useCartStore((state) => state.cart);
  const itemCount = cart.length;

  const { logout } = useAuth();
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const [seeBalance, setSeeBalance] = useState(false);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the client-side flag to true after the component mounts
    setIsClient(true);
  }, []);

  const { queryParam, idParam } = GetUrl();

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
            <Link href={"/dashboard/cart/checkout"}>
              <div className="p-2.5 rounded-[50%] bg-white relative">
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1.5 transform translate-x-1/2 -translate-y-1/2 bg-dukiaGold font-semibold text-white rounded-full text-sm px-2 py-1">
                    {itemCount}
                  </span>
                )}
                <ShoppingCart className="text-xl" />
              </div>
            </Link>

            <Link href={"/dashboard/cart"}>
              <div className="p-2.5 rounded-[50%] bg-white relative">
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1.5 transform translate-x-1/2 -translate-y-1/2 bg-dukiaGold font-semibold text-white rounded-full text-sm px-2 py-1">
                    {itemCount}
                  </span>
                )}
                <ShoppingCart className="text-xl" />
              </div>
            </Link>

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
            {pathname === "/dashboard/cart" && <p>Cart</p>}
            {pathname === "/dashboard/product" && (
              <p className="text-[#676D88]">
                Product /{" "}
                <span className="text-dukiaBlue font-extrabold">{idParam}</span>
              </p>
            )}

            {pathname === "/dashboard" && <p>Dashboard</p>}
            {pathname === "/dashboard/profile" && <p>Account Info</p>}
            {pathname === "/dashboard/card" && <p>Debit Card</p>}
            {pathname === "/dashboard/kyc" && <p>KYC Verification</p>}

            {pathname === "/dashboard/buy-gold" && <p>Buy Gold</p>}
            {pathname === "/dashboard/buy-gold/dukia-gold-catalogue" && (
              <p className="text-[#676D88]">
                Buy Gold /{" "}
                {isClient && (
                  <span className="text-dukiaBlue font-extrabold">
                    Gold {queryParam === "Bars" ? "Bars" : "Coins"}
                  </span>
                )}
              </p>
            )}

            {pathname === "/dashboard/assets" && <p>Assets</p>}
            {pathname === "/dashboard/transactions" && <p>Transactions</p>}
            {pathname === "/dashboard/exchange" && <p>Exchange</p>}
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
      {user && user.is_verified === 0 && (
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
