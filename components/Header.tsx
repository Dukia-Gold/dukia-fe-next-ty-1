"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

type header = {
  // name: string
};

const Header: FC<header> = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  // data-aos="fade-down"
  //     data-aos-offset="200"
  //     data-aos-delay="50"
  //     data-aos-duration="800"
  //     data-aos-easing="ease-in-out"

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header
      className={`${
        pathname === "/dashboard" ? "hidden" : "fixed"
      } w-[100vw] flex flex-col`}
    >
      {/* GOLD PRICE */}
      <div className="flex justify-between py-3 px-3 md:px-12 xl:px-20 bg-dukiaGold">
        <div></div>
        <div></div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-dukiaBlue flex justify-between items-center px-3 md:px-10 xl:px-20 py-2">
        <Link href="/">
          {" "}
          <Image
            src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
            alt="Dukia Gold's Logo"
            width={60}
            height={60}
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
              <li className="hover:text-dukiaGold hover:font-semibold">
                <Link href="/">About Dukia</Link>
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
