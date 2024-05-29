"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

type header = {
  // name: string
};

const Header: FC<header> = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-[100vw] flex flex-col">
      <div className="bg-dukiaGrey flex justify-between items-center px-3 md:px-12 xl:px-24 py-4">
        <Link href="/">
          {" "}
          <Image
            src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
            alt="Dukia Gold's Logo"
            width={60}
            height={60}
          />{" "}
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex text-sm font-medium items-center gap-5 lg:gap-10 text-white">
            {/* HOME */}
            <li
              className={`${
                pathname === "/" ? "text-dukiaGold" : ""
              } hover:text-dukiaGold`}
            >
              <Link href="/">Home</Link>
            </li>

            {/* BUY GOLD */}
            <li className="hover:text-dukiaGold">
              <Link
                href="https://www.dukiapreciousmetals.co/buy-gold"
                className="flex items-center gap-0.5"
              >
                <p>Buy Gold</p>
                <RiArrowDropDownLine size={30} />
              </Link>
            </li>

            {/* ABOUT US */}
            <li className="hover:text-dukiaGold">
              <Link href="/">About Us</Link>
            </li>

            {/* GUIDES */}
            <li className="hover:text-dukiaGold">
              <Link href="/" className="flex items-center gap-0.5">
                <p>Guides</p>
                <RiArrowDropDownLine size={30} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden sm:flex items-center gap-4 text-xs">
          <div className="relative">
            <div className="absolute top-[-0.75rem] right-[-0.7rem] text-white bg-dukiaGold rounded-[50%] py-0.5 px-1.5 font-bold">
              <p>0</p>
            </div>

            <FaCartShopping size={24} color="white" />
          </div>

          <Link href="/login">
            <button className="text-dukiaBlue bg-white border border-dukiaGold px-4 py-1 rounded-3xl hover:bg-dukiaBlue hover:text-white">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-dukiaBlue text-white py-1 px-4 rounded-3xl hover:bg-dukiaGold">
              Get Started
            </button>
          </Link>
        </div>

        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="sm:hidden cursor-pointer"
          color="#FFF"
          size={28}
        />
      </div>

      <div>
        <div></div>
        <div></div>
      </div>

      <MobileNav isOpen={isOpen} toggle={closeMobileNav} />
    </header>
  );
};

export default Header;
