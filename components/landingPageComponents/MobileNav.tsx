import { FC, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
// import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

type MobileNavProps = {
  isOpen: boolean;
  toggle: () => void;
};

const MobileNav: FC<MobileNavProps> = ({ isOpen, toggle }) => {
  const pathname = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  if (!isOpen) {
    // Return null if the modal is not open
    return null;
  }

  // Return the modal
  return (
    <div className="fixed z-50 sm:hidden top-0 left-0 w-full h-[100vh] bg-[#00000040] flex justify-end">
      <div className="bg-dukiaBlue w-[50%] h-[100vh] absolute z-50 p-5 pb-32 flex flex-col justify-between items-start">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            {" "}
            <Image
              src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
              alt="Dukia Gold's Logo"
              width={60}
              height={60}
            />{" "}
          </Link>

          <button className="text-white text-4xl" onClick={toggle}>
            &times;
          </button>
        </div>

        <nav>
          <ul className="flex flex-col text-sm font-medium items-start gap-5 lg:gap-10 text-white">
            {/* HOME */}
            <li
              className={`${
                pathname === "/" ? "text-dukiaGold font-bold" : ""
              } hover:text-dukiaGold hover:font-semibold`}
            >
              <Link href="/" onClick={toggle}>
                Home
              </Link>
            </li>

            {/* ABOUT US */}
            <li
              className={`${
                pathname === "/about-dukia-gold"
                  ? "text-dukiaGold font-bold"
                  : ""
              } hover:text-dukiaGold hover:font-semibold`}
            >
              <Link href="/about-dukia-gold" onClick={toggle}>
                About Dukia
              </Link>
            </li>

            {/* BUY GOLD */}
            <li>
              <Collapsible className="flex flex-col gap-2">
                <div className="flex items-center gap-0.5 cursor-pointer">
                  <Link
                    href="/buy-gold"
                    onClick={toggle}
                    className={`${
                      pathname === "/buy-gold" ||
                      pathname === "/buy-gold/bars" ||
                      pathname === "/buy-gold/coins"
                        ? "text-dukiaGold font-bold"
                        : ""
                    } hover:text-dukiaGold hover:font-semibold`}
                  >
                    <p>Buy Gold</p>
                  </Link>
                  <CollapsibleTrigger>
                    <RiArrowDropDownLine size={30} />
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent className="flex flex-col gap-2">
                  <Link
                    href="/buy-gold/bars"
                    onClick={toggle}
                    className={`${
                      pathname === "/buy-gold/bars"
                        ? "text-dukiaGold font-bold"
                        : ""
                    } font-normal`}
                  >
                    Gold Bars
                  </Link>
                  <Link
                    href="/buy-gold/coins"
                    onClick={toggle}
                    className={`${
                      pathname === "/buy-gold/coins"
                        ? "text-dukiaGold font-bold"
                        : ""
                    } font-normal`}
                  >
                    Gold Coins
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </li>

            {/* GUIDES */}
            <li
              onClick={toggle}
              className="hover:text-dukiaGold hover:font-semibold"
            >
              <Link href="/">
                <p>Guides</p>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <Link onClick={toggle} href="/login">
            <button className="bg-dukiaGold text-dukiaBlue font-semibold py-3 px-5 rounded-lg">
              Login / Register
            </button>
          </Link>
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
  );
};

export default MobileNav;
