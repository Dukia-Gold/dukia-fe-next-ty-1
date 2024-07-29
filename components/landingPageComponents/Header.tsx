"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { formatCurrency } from "@/lib/currencyformatter";
import { GetUrl } from "@/lib/getUrl";
import { userStore } from "@/store/user";
import { goldStore } from "@/store/goldPrice";
import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
import useFetchUserData from "@/lib/fetchUserData";
import useModalsStore from "@/store/modalsStore";

type header = {
  // name: string
};

const Header: FC<header> = () => {
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const user = userStore((state: any) => state.user);
  const fetchUserData = useFetchUserData();

  const goldDollars = goldStore((state: any) => state.goldDollars);
  const fetchGoldPriceDollars = useFetchGoldPriceDollars();

  const pathname = GetUrl();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [askClass, setAskClass] = useState("");
  const [bidClass, setBidClass] = useState("");

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setAskClass("flash");
    const timeoutId = setTimeout(() => setAskClass(""), 1500);
    return () => clearTimeout(timeoutId);
  }, [goldDollars]);

  useEffect(() => {
    setBidClass("flash");
    const timeoutId = setTimeout(() => setBidClass(""), 1500);
    return () => clearTimeout(timeoutId);
  }, [goldDollars]);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <header
      className={`${
        pathname.startsWith("/dashboard") ? "hidden" : "fixed z-10"
      } w-full space-y-4`}
    >
      {/* GOLD PRICE */}
      <div className="mt-4 bg-dukiaGold flex flex-col md:items-center  md:flex-row justify-between gap-1 font-semibold text-dukiaBlue py-3 px-6 md:px-4 lg:px-9 rounded-2xl xl:max-w-[1280px] mx-auto">
        {/* Ask */}
        <p className="flex items-center gap-0.5 lg:gap-1">
          GOLD ASK:
          <span className={`text-xs font-black ${askClass}`}>
            {formatCurrency(goldDollars?.ask.oz, "en-US", "USD")}/oz
          </span>
          |
          <span className={`text-xs font-black ${askClass}`}>
            {formatCurrency(goldDollars?.ask.g, "en-US", "USD")}/g
          </span>
          |
          <span className={`text-xs font-black ${askClass}`}>
            {formatCurrency(goldDollars?.ask.kg, "en-US", "USD")}/kg
          </span>
          <span className="text-xs hidden sm:block">-0.01% (-$0.12)</span>
        </p>

        {/* Bid */}
        <p className="flex items-center gap-0.5 lg:gap-1">
          GOLD BID:
          <span className={`text-xs font-black ${bidClass}`}>
            {formatCurrency(goldDollars?.bid.oz, "en-US", "USD")}/oz
          </span>
          |
          <span className={`text-xs font-black ${bidClass}`}>
            {formatCurrency(goldDollars?.bid.g, "en-US", "USD")}/g
          </span>
          |
          <span className={`text-xs font-black ${bidClass}`}>
            {formatCurrency(goldDollars?.bid.kg, "en-US", "USD")}/kg
          </span>
        </p>
      </div>

      {/* Main Header */}
      <div className="xl:max-w-[1280px] mx-auto px-9">
        <div className="py-2 bg-white px-4 rounded-xl border-2 border-[#EFEFEFCC]/[80%] shadow-lg flex items-center justify-between">
          <Image
            src={
              "https://res.cloudinary.com/dvcw253zw/image/upload/v1721822926/dukia-new-logo_gg5cde.png"
            }
            alt="Dukia Gold Logo"
            width={224.47}
            height={50}
          />

          <nav className="hidden sm:block">
            <ul className="flex text-sm items-center gap-4 lg:gap-4 text-dukiaBlue">
              {/* HOME */}
              <li
                className={`${
                  pathname === "/" ? "text-dukiaGold font-bold" : ""
                } hover:text-dukiaGold hover:font-semibold`}
              >
                <Link href="/">Home</Link>
              </li>

              {/* ABOUT US */}
              <li
                className={`${
                  pathname === "/about-dukia-gold"
                    ? "text-dukiaGold font-bold"
                    : ""
                } hover:text-dukiaGold hover:font-semibold`}
              >
                <Link href="/about-dukia-gold">About Dukia</Link>
              </li>

              {/* BUY GOLD */}
              <li
                className={`${
                  pathname.startsWith("/buy-gold")
                    ? "text-dukiaGold font-bold"
                    : ""
                } hover:text-dukiaGold hover:font-semibold`}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center gap-0.5 cursor-pointer">
                      <p>Buy Gold</p>
                      <RiArrowDropDownLine size={30} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-32 text-dukiaBlue dark:bg-dukiaBlue flex flex-col gap-2">
                    <Link
                      href="/buy-gold/bars"
                      className={`${
                        pathname === "/buy-gold/bars"
                          ? "text-dukiaGold font-bold"
                          : ""
                      } font-normal hover:font-bold`}
                    >
                      Gold Bars
                    </Link>
                    <Link
                      href="/buy-gold/coins"
                      className={`${
                        pathname === "/buy-gold/coins"
                          ? "text-dukiaGold font-bold"
                          : ""
                      } font-normal hover:font-bold`}
                    >
                      Gold Coins
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </li>

              {/* GUIDES */}
              <li className="hover:text-dukiaGold hover:font-semibold">
                <Link href="/">
                  <p>Guides</p>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex">
            {user ? (
              <Link href="/dashboard">
                <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white font-semibold py-3 px-5 rounded-lg">
                  Return to Dashboard
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-7">
                <p onClick={() => updateModals({ login: true })} className="font-semibold text-dukiaGold hover:underline hover:cursor-pointer">Login</p>
                <Link href="/login">
                  <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white font-semibold py-3 px-4 rounded-lg">
                    Register
                  </button>
                </Link>
              </div>
            )}

            {/* <Link href="/login">
               <button className="text-white font-semibold py-3 px-5 rounded-lg border border-white">
                 Log In
               </button>
             </Link>

             <Link href="/register">
               <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
                 Register
               </button>
             </Link> */}
          </div>
        </div>
      </div>

      <MobileNav isOpen={isOpen} toggle={closeMobileNav} />
    </header>
    // <header
    //   className={`${
    //     pathname.startsWith("/dashboard") ? "hidden" : "fixed z-50"
    //   } w-[100%] flex flex-col shadow-2xl`}
    // >
    //   {/* GOLD PRICE */}
    //   <div className="bg-dukiaGold">
    //     <div
    //       className="md:container px-3 flex flex-col md:items-center  md:flex-row justify-between gap-1 py-3
    //    text-sm text-dukiaBlue font-semibold"
    //     >
    //       <p className="flex items-center gap-0.5 lg:gap-1">
    //         GOLD ASK:
    //         <span className={`text-xs font-black ${askClass}`}>
    //           {formatCurrency(goldDollars?.ask.oz, "en-US", "USD")}/oz
    //         </span>
    //         |
    //         <span className={`text-xs font-black ${askClass}`}>
    //           {formatCurrency(goldDollars?.ask.g, "en-US", "USD")}/g
    //         </span>
    //         |
    //         <span className={`text-xs font-black ${askClass}`}>
    //           {formatCurrency(goldDollars?.ask.kg, "en-US", "USD")}/kg
    //         </span>
    //         <span className="text-xs hidden sm:block">-0.01% (-$0.12)</span>
    //       </p>

    //       <p className="flex items-center gap-0.5 lg:gap-1">
    //         GOLD BID:
    //         <span className={`text-xs font-black ${bidClass}`}>
    //           {formatCurrency(goldDollars?.bid.oz, "en-US", "USD")}/oz
    //         </span>
    //         |
    //         <span className={`text-xs font-black ${bidClass}`}>
    //           {formatCurrency(goldDollars?.bid.g, "en-US", "USD")}/g
    //         </span>
    //         |
    //         <span className={`text-xs font-black ${bidClass}`}>
    //           {formatCurrency(goldDollars?.bid.kg, "en-US", "USD")}/kg
    //         </span>
    //       </p>
    //     </div>
    //   </div>

    //   {/* MAIN HEADER */}
    //   <div className="bg-dukiaBlue">
    //     <div className="md:container px-3 flex justify-between items-center py-2">
    //       <Link href="/">
    //         {" "}
    //         <Image
    //           src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
    //           alt="Dukia Gold's Logo"
    //           width={85}
    //           height={85}
    //         />{" "}
    //       </Link>

    //       <div className="flex items-center gap-6">
    //         <nav className="hidden sm:block">
    //           <ul className="flex text-sm items-center gap-4 lg:gap-4 text-white">
    //             {/* HOME */}
    //             <li
    //               className={`${
    //                 pathname === "/" ? "text-dukiaGold font-bold" : ""
    //               } hover:text-dukiaGold hover:font-semibold`}
    //             >
    //               <Link href="/">Home</Link>
    //             </li>

    //             {/* ABOUT US */}
    //             <li
    //               className={`${
    //                 pathname === "/about-dukia-gold"
    //                   ? "text-dukiaGold font-bold"
    //                   : ""
    //               } hover:text-dukiaGold hover:font-semibold`}
    //             >
    //               <Link href="/about-dukia-gold">About Dukia</Link>
    //             </li>

    //             {/* BUY GOLD */}
    //             <li
    //               className={`${
    //                 pathname.startsWith("/buy-gold")
    //                   ? "text-dukiaGold font-bold"
    //                   : ""
    //               } hover:text-dukiaGold hover:font-semibold`}
    //             >
    //               <HoverCard>
    //                 <HoverCardTrigger asChild>
    //                   <div className="flex items-center gap-0.5 cursor-pointer">
    //                     <p>Buy Gold</p>
    //                     <RiArrowDropDownLine size={30} />
    //                   </div>
    //                 </HoverCardTrigger>
    //                 <HoverCardContent className="w-32 text-dukiaBlue dark:bg-dukiaBlue flex flex-col gap-2">
    //                   <Link
    //                     href="/buy-gold/bars"
    //                     className={`${
    //                       pathname === "/buy-gold/bars"
    //                         ? "text-dukiaGold font-bold"
    //                         : ""
    //                     } font-normal hover:font-bold`}
    //                   >
    //                     Gold Bars
    //                   </Link>
    //                   <Link
    //                     href="/buy-gold/coins"
    //                     className={`${
    //                       pathname === "/buy-gold/coins"
    //                         ? "text-dukiaGold font-bold"
    //                         : ""
    //                     } font-normal hover:font-bold`}
    //                   >
    //                     Gold Coins
    //                   </Link>
    //                 </HoverCardContent>
    //               </HoverCard>
    //             </li>

    //             {/* GUIDES */}
    //             <li className="hover:text-dukiaGold hover:font-semibold">
    //               <Link href="/">
    //                 <p>Guides</p>
    //               </Link>
    //             </li>
    //           </ul>
    //         </nav>

    //         <div className="hidden sm:flex items-center gap-2 text-sm">
    //           {user ? (
    //             <Link href="/dashboard">
    //               <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
    //                 Return to Dashboard
    //               </button>
    //             </Link>
    //           ) : (
    //             <Link href="/login">
    //               <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
    //                 Login / Register
    //               </button>
    //             </Link>
    //           )}

    //           {/* <Link href="/login">
    //           <button className="text-white font-semibold py-3 px-5 rounded-lg border border-white">
    //             Log In
    //           </button>
    //         </Link>

    //         <Link href="/register">
    //           <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
    //             Register
    //           </button>
    //         </Link> */}
    //         </div>
    //       </div>

    //       <GiHamburgerMenu
    //         onClick={() => setIsOpen(true)}
    //         className="sm:hidden cursor-pointer"
    //         color="#FFF"
    //         size={28}
    //       />
    //     </div>
    //   </div>
    //   <MobileNav isOpen={isOpen} toggle={closeMobileNav} />
    // </header>
  );
};

export default Header;
