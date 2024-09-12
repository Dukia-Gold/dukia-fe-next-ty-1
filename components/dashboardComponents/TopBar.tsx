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
  ArrowUp,
  ChevronDown,
  Eye,
  EyeOff,
  Info,
  Power,
  User,
  User2,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  RiLogoutBoxRLine,
  RiNotificationFill,
  RiProfileFill,
  RiSettings2Fill,
  RiSettingsFill,
  RiShoppingCartFill,
} from "react-icons/ri";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
            {/* Cart */}
            <Link href={"/dashboard/cart"}>
              <div className="p-2.5 rounded-[50%] bg-white relative">
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1.5 transform translate-x-1/2 -translate-y-1/2 bg-dukiaGold font-semibold text-white rounded-full text-sm px-2 py-1">
                    {itemCount}
                  </span>
                )}
                <RiShoppingCartFill className="text-xl" />
              </div>
            </Link>

            {/* Notification */}
            <div className="p-2.5 rounded-[50%] bg-white">
              <RiNotificationFill className="text-xl" />
            </div>

            {/* User */}
            {user && (
              <Popover>
                <PopoverTrigger asChild>
                  <div className="p-1 pr-2 flex items-center gap-1 rounded-full bg-white cursor-pointer">
                    <UserCircle2 size={32} />
                    <ChevronDown className="w-5 h-5 text-dukiaBlue" />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[13.5rem] rounded-lg p-2.5"
                  align="end"
                >
                  <div className="pb-4 border-b-2 border-[#E8E9ED] flex items-center gap-3">
                    <UserCircle2 size={32} />
                    <div>
                      <p className="font-semibold text-sm">
                        {capitalizeFirstLetter(user?.first_name)}{" "}
                        {capitalizeFirstLetter(user?.last_name)}
                      </p>
                      <p className="text-xs text-[#676D88]">
                        {user?.account_number}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7EB] border-[0.5px] border-dukiaGold rounded-lg p-2 mt-4">
                    <div className="flex gap-3 w-full">
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

                      <div className="space-y-2 text-xs flex-grow">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">Tier {user?.tier}</p>

                          {user && user.is_bvn === 0 ? (
                            <Link href="/dashboard/profile/kyc">
                              <button className="hover:bg-[#ED7004] border-[0.5px] border-[#ED7004] rounded py-0.5 px-1.5 text-[#ED7004] hover:text-white text-[0.625rem] flex items-center">
                                Complete KYC
                                <ArrowUp size={10} />
                              </button>
                            </Link>
                          ) : (
                            <p className="text-[#16A34A] border-dashed border border-[#43BA64] rounded py-0.5 px-1.5 text-[0.625rem] shadow-[8px_8px_8px_0px_#FFD4D426]">
                              Verified
                            </p>
                          )}
                        </div>

                        <p>{capitalizeFirstLetter(user?.type)} Account</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4 text-sm">
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-3 p-2 hover:bg-gray-100"
                    >
                      <RiProfileFill size={20} />
                      Account Information
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center gap-3 p-2 hover:bg-gray-100"
                    >
                      <RiSettings2Fill size={20} />
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left flex items-center gap-3 p-2 hover:bg-gray-100 outline-none"
                    >
                      <RiLogoutBoxRLine size={20} />
                      Logout
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
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
            {pathname === "/dashboard/portfolio" && (
              <p className="text-[#676D88]">
                Dashboard /{" "}
                <span className="text-dukiaBlue font-extrabold">Portfolio</span>
              </p>
            )}

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
