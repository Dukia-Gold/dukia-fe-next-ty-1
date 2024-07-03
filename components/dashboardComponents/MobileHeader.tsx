import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden flex justify-between items-center bg-dukiaBlue py-3 px-2 md:px-5">
      <Link href="/">
        {" "}
        <Image
          src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
          alt="Dukia Gold's Logo"
          width={50}
          height={35.82}
        />{" "}
      </Link>

      <Menu color="white" onClick={() => setIsOpen(true)} className="cursor-pointer" />

      <MobileSidebar isOpen={isOpen} toggle={closeMobileNav} />
    </div>
  );
};

export default MobileHeader;
