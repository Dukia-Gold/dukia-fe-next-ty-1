import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

type header = {
  name: string
};

const Header:FC <header> = () => {
  return (
    <header className="felx flex-col">
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
            <li className="hover:text-dukiaGold">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-dukiaGold">
              <Link href="/" className="flex items-center gap-0.5">
                <p>Buy Gold</p>
                <RiArrowDropDownLine size={30} />
              </Link>
            </li>

            <li className="hover:text-dukiaGold">
              <Link href="/">About Us</Link>
            </li>

            <li className="hover:text-dukiaGold">
              <Link href="/" className="flex items-center gap-0.5">
                <p>Guides</p>
                <RiArrowDropDownLine size={30} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden sm:flex items-center gap-4 text-xs font-light">
          <div className="relative">
            <div className="absolute top-[-0.75rem] right-[-0.7rem] text-white bg-dukiaGold rounded-[50%] py-0.5 px-1.5 font-bold">
              <p>0</p>
            </div>

            <FaCartShopping size={24} color="white" />
          </div>
          <button className="text-dukiaBlue bg-white border border-dukiaGold px-4 py-1 rounded-3xl hover:bg-dukiaBlue hover:text-white">
            Login
          </button>
          <button className="bg-dukiaBlue text-white py-1 px-4 rounded-3xl hover:bg-dukiaGold">
            Get Started
          </button>
        </div>

        <GiHamburgerMenu className="sm:hidden" color="#FFF" size={28} />
      </div>

      <div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
