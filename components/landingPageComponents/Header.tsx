"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine, RiFireFill } from "react-icons/ri";
import Cookies from "js-cookie";
import MobileNav from "./MobileNav";
import { formatCurrency } from "@/lib/currencyformatter";
import { goldStore } from "@/store/goldPrice";
import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
import useFetchUserData from "@/lib/fetchUserData";
import useModalsStore from "@/store/modalsStore";
import { usePathname, useRouter } from "next/navigation";
import AuthButtons from "./AuthButtons";
import { ArrowRight } from "lucide-react";

type header = {
  // name: string
};

const Header: FC<header> = () => {
  const router = useRouter();
  const token = Cookies.get("xZ9qTn7p_K4wVd1Lm_jx8s2A");
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const fetchUserData = useFetchUserData();

  const goldDollars = goldStore((state: any) => state.goldDollars);
  const fetchGoldPriceDollars = useFetchGoldPriceDollars();

  const pathname = usePathname();
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

  const [buyGold, openBuyGold] = useState(false);

  const products = [
    {
      pic: "https://res.cloudinary.com/dvcw253zw/image/upload/v1728479454/header-bars_zrm1ig.png",
      slug: "/buy-gold/bars",
      name: "Gold Bars",
    },
    {
      pic: "https://res.cloudinary.com/dvcw253zw/image/upload/v1728479454/header-coins_zsnaxm.png",
      slug: "/buy-gold/coins",
      name: "Gold Coins",
    },
    {
      pic: "https://res.cloudinary.com/dvcw253zw/image/upload/v1728479454/header-pool_kll97m.png",
      slug: "/",
      name: "Pool Allocated",
    },
  ];

  const handleClick = (slug: string) => {
    openBuyGold(false);
    router.push(slug);
  };

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <header
      className={`${
        pathname.startsWith("/dashboard") ? "hidden" : "fixed z-20"
      } w-full`}
    >
      {/* GOLD PRICE */}
      <div className="bg-[#F4E5C1] flex flex-col md:items-center  md:flex-row justify-between gap-1 font-semibold text-dukiaBlue py-3 px-6 md:px-4 lg:px-9">
        <div className="max-w-[1280px] mx-auto flex justify-between w-full">
          {/* Ask */}
          <p className="flex items-center gap-0.5 lg:gap-1">
            GOLD ASK:
            <span className={`font-black ${askClass}`}>
              {formatCurrency(goldDollars?.ask.oz, "en-US", "USD")}/oz
            </span>
            |
            <span className={`font-black ${askClass}`}>
              {formatCurrency(goldDollars?.ask.g, "en-US", "USD")}/g
            </span>
            |
            <span className={`font-black ${askClass}`}>
              {formatCurrency(goldDollars?.ask.kg, "en-US", "USD")}/kg
            </span>
            <span className="hidden sm:block">-0.01% (-$0.12)</span>
          </p>

          {/* Bid */}
          <p className="flex items-center gap-0.5 lg:gap-1">
            GOLD BID:
            <span className={`font-black ${bidClass}`}>
              {formatCurrency(goldDollars?.bid.oz, "en-US", "USD")}/oz
            </span>
            |
            <span className={`font-black ${bidClass}`}>
              {formatCurrency(goldDollars?.bid.g, "en-US", "USD")}/g
            </span>
            |
            <span className={`font-black ${bidClass}`}>
              {formatCurrency(goldDollars?.bid.kg, "en-US", "USD")}/kg
            </span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Image
              src={
                "https://res.cloudinary.com/dvcw253zw/image/upload/v1721822926/dukia-new-logo_gg5cde.png"
              }
              alt="Dukia Gold Logo"
              width={224.47}
              height={50}
            />

            <div className="flex gap-7 font-semibold">
              <p className="text-dukiaGold">Individual</p>

              <p>Corporate</p>
            </div>
          </div>

          <nav className="hidden sm:block">
            <ul className="flex items-center gap-4 lg:gap-4 text-dukiaBlue font-semibold">
              {/* HOME */}
              <li
                onClick={() => openBuyGold(false)}
                className={`${
                  pathname === "/" ? "text-dukiaGold font-bold" : ""
                } hover:text-dukiaGold`}
              >
                <Link href="/">Home</Link>
              </li>

              {/* ABOUT US */}
              <li
                onClick={() => openBuyGold(false)}
                className={`${
                  pathname === "/about-dukia-gold"
                    ? "text-dukiaGold font-bold"
                    : ""
                } hover:text-dukiaGold`}
              >
                <Link href="/about-dukia-gold">About Dukia</Link>
              </li>

              {/* BUY GOLD */}
              <li
                onClick={() => openBuyGold(!buyGold)}
                className={`${
                  pathname.startsWith("/buy-gold")
                    ? "text-dukiaGold font-bold"
                    : ""
                } hover:text-dukiaGold`}
              >
                <div className="flex items-center gap-0.5 cursor-pointer">
                  <p>Buy Gold</p>
                  <RiArrowDropDownLine size={30} />
                </div>
              </li>

              {/* GUIDES */}
              <li
                onClick={() => openBuyGold(false)}
                className="hover:text-dukiaGold"
              >
                <Link href="/">
                  <p>Guides</p>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex">
            <AuthButtons updateModals={updateModals} />

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

      {/* Buy Gold */}
      {buyGold && (
        <div
          className="bg-white font-semibold"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              openBuyGold(!buyGold);
            }
          }}
        >
          <div className="max-w-[1280px] mx-auto pt-32 pb-8 space-y-14">
            <div className="flex items-center gap-3">
              <div className="bg-[#FBF7EB] rounded-full p-3">
                <RiFireFill color="#D4A418" size={25} />
              </div>

              <p className="max-w-[667px]">
                Buy, sell, or invest in investment-grade gold through
                Nigeria&apos;s premier bullion dealer. Select gold type to
                continue.{" "}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(product.slug);
                  }}
                  className="p-3 border border-[#E8E9ED] rounded-2xl flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.pic}
                      alt={product.name}
                      width={108}
                      height={76}
                      className="border-2 border-[#E8E9ED] w-[108px] h-[76px] rounded-xl"
                    />

                    <div>
                      <p className="text-xs">BUY</p>
                      <p className="font-extrabold text-dukiaGold text-xl">
                        {product.name}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F6F7F9] rounded-full p-3 hover:bg-dukiaBlue hover:text-dukiaGold">
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
