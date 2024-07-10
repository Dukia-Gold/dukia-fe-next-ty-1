"use client";

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./loginComponents/LoginForm";
import RegisterForm from "./registerComponents/RegisterForm";

const AuthBox = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="bg-[#F3F3F4] dark:bg-dukiaBlue/[50%] dark:text-white flex flex-col min-h-[35rem] gap-6 items-center rounded-2xl px-5 w-[90%] md:w-auto md:px-10 pt-4 pb-10">
      <div>
        <Image
          src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
          alt="Dukia Gold's Logo"
          width={85}
          height={85}
        />{" "}
      </div>

      <div className="flex border-b w-full border-dukiaBlue dark:border-dukiaGold/[75%] font-medium">
        <div
          className={`${
            tab === 0 ? " font-bold bg-dukiaBlue/[10%] dark:bg-white/[5%]" : ""
          } w-[50%] py-4 md:px-24 flex items-center justify-center cursor-pointer`}
          onClick={() => {
            setTab(0);
          }}
        >
          <p>Log In</p>
        </div>

        <div
          className={`${
            tab === 1 ? " font-bold bg-dukiaBlue/[10%] dark:bg-white/[5%]" : ""
          } w-[50%] py-4 md:px-24 flex items-center justify-center cursor-pointer`}
          onClick={() => {
            setTab(1);
          }}
        >
          <p>Register</p>
        </div>
      </div>

      {tab === 0 && <LoginForm />}

      {tab === 1 && <RegisterForm />}
    </div>
  );
};

export default AuthBox;
