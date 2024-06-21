"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";

type header = {
  // name: string
};

const Header: FC<header> = () => {
  const { ask, bid, fetchGoldPrice } = useFetchGoldPriceDollars();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [askClass, setAskClass] = useState("");
  const [bidClass, setBidClass] = useState("");

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetchGoldPrice();

    const interval = setInterval(() => {
      fetchGoldPrice();
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAskClass("animate-bounce");
    const timeout = setTimeout(() => setAskClass(""), 1500);
    return () => clearTimeout(timeout);
  }, [ask]);

  useEffect(() => {
    setBidClass("animate-bounce");
    const timeout = setTimeout(() => setBidClass(""), 1500);
    return () => clearTimeout(timeout);
  }, [bid]);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <header
      className={`${
        pathname === "/dashboard" ? "hidden" : "fixed z-50"
      } w-[100vw] flex flex-col`}
    >
      {/* GOLD PRICE */}
      <div
        className="flex flex-col md:items-center  md:flex-row justify-between gap-1 py-3 px-1.5 md:px-5 lg:px-10 xl:px-20
      bg-dukiaGold text-sm text-dukiaBlue font-semibold"
      >
        <p className="flex items-center gap-0.5 lg:gap-1">
          GOLD ASK:
          <span className={`text-xs font-normal ${askClass}`}>
            $ {ask.oz}/oz
          </span>
          |
          <span className={`text-xs font-normal ${askClass}`}>$ {ask.g}/g</span>
          |
          <span className={`text-xs font-normal ${askClass}`}>
            $ {ask.kg}/kg
          </span>
          <span className="text-xs hidden sm:block">-0.01% (-$0.12)</span>
        </p>

        <p className="flex items-center gap-0.5 lg:gap-1">
          GOLD BID:
          <span className={`text-xs font-normal ${bidClass}`}>
            $ {bid.oz}/oz
          </span>
          |
          <span className={`text-xs font-normal ${bidClass}`}>$ {bid.g}/g</span>
          |
          <span className={`text-xs font-normal ${bidClass}`}>
            $ {bid.kg}/kg
          </span>
        </p>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-dukiaBlue flex justify-between items-center px-3 md:px-5 lg:px-10 xl:px-20 py-2">
        <Link href="/">
          {" "}
          <Image
            src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
            alt="Dukia Gold's Logo"
            width={85}
            height={85}
          />{" "}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <ul className="flex text-sm items-center gap-4 lg:gap-4 text-white">
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
                  pathname === "/about-us" ? "text-dukiaGold font-bold" : ""
                } hover:text-dukiaGold hover:font-semibold`}
              >
                <Link href="/about-us">About Dukia</Link>
              </li>

              {/* BUY GOLD */}
              <li className="hover:text-dukiaGold hover:font-semibold">
                <Link
                  href="https://www.dukiapreciousmetals.co/buy-gold"
                  className="flex items-center gap-0.5"
                >
                  <p>Buy Gold</p>
                  <RiArrowDropDownLine size={30} />
                </Link>
              </li>

              {/* GUIDES */}
              <li className="hover:text-dukiaGold hover:font-semibold">
                <Link href="/">
                  <p>Guides</p>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex items-center gap-2 text-sm">
            <Link href="/login">
              <button className="text-white font-semibold py-3 px-5 rounded-lg border border-white">
                Log In
              </button>
            </Link>

            <Link href="/register">
              <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>

        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="sm:hidden cursor-pointer"
          color="#FFF"
          size={28}
        />
      </div>
      <MobileNav isOpen={isOpen} toggle={closeMobileNav} />
    </header>
  );
};

export default Header;
