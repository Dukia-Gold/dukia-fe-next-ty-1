import { FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

type MobileNavProps = {
  isOpen: boolean;
  toggle: () => void;
};

const MobileNav: FC<MobileNavProps> = ({ isOpen, toggle }) => {
  const pathname = usePathname();

  if (!isOpen) {
    // Return null if the modal is not open
    return null;
  }

  // Return the modal
  return (
    <div className="fixed sm:hidden top-0 left-0 w-full h-full bg-[#00000040] flex justify-end">
      <div className="bg-white w-[50%] h-[100vh]">
        <div className="bg-dukiaGrey h-full p-5 flex flex-col justify-between items-start">
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
              <li
                className={`${
                  pathname === "/" ? "text-dukiaGold" : ""
                } hover:text-dukiaGold`}
              >
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

          <div className="flex flex-col items-start gap-4 text-xs font-light">
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
