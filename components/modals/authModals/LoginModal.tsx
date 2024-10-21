"use client";

import useAuth from "@/api/auth/useAuth";
import useModalsStore from "@/store/modalsStore";
import { Eye, EyeOff, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoginModal = () => {
  const { loginUser } = useAuth();
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const login = useModalsStore((state: any) => state.login);

  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const deviceName = "device-name"; // Assume a default device name for now
    await loginUser(email, password, deviceName);
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
  });

  if (login === false || login === undefined) {
    return null;
  }

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out text-dukiaBlue rounded-lg w-[95%] h-[75%] md:h-[40rem] max-h-[95vh] xl:h-auto md:w-[38.3125rem] xl:w-[1280px] flex justify-center relative">
        <div
          onClick={() => updateModals({ login: false })}
          className="cursor-pointer xl:hidden absolute top-5 md:top-11 right-5 md:right-10 bg-[#E8E9ED] rounded-[50%] p-2.5"
        >
          <X width={24} height={24} />
        </div>

        <div className="bg-[url(https://res.cloudinary.com/dvcw253zw/image/upload/v1722004916/login-img_adgx9u.png)] bg-no-repeat bg-cover bg-center bg-[#FFFBF1] w-[37.9375rem] h-[51.1875rem] max-h-[90vh] hidden xl:flex rounded-l-lg text pt-[5.375rem] justify-center">
          <div className="space-y-3 font-extrabold">
            <p className="text-[2rem]">Begin Your Journey To</p>
            <p className="text-dukiaGold text-5xl">Financial Freedom</p>
            <p className="font-semibold text-[#676D88]">
              Trade Gold And Other Precious Metals At Your Fingertip...
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center relative w-[calc(100%-37.9375rem)]">
          <div
            onClick={() => updateModals({ login: false })}
            className="cursor-pointer hidden xl:block absolute top-11 right-10 bg-[#E8E9ED] rounded-[50%] p-2.5"
          >
            <X width={24} height={24} />
          </div>

          <div className="space-y-7">
            <div className="space-y-12">
              <div>
                <div className="space-y-3">
                  <p className="font-extrabold text-xl">Welcome Back !</p>
                  <p className="font-semibold text-[#676D88]">
                    Login to continue
                  </p>
                </div>
                <div></div>
              </div>
              <form onSubmit={handleLogin} className="space-y-7">
                <div className="font-semibold space-y-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#676D88]">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      className="outline-none p-4 border-2 border-[#979BAE] rounded-lg w-full text-dukiaBlue"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="password" className="text-[#676D88]">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          name="password"
                          required
                          type={viewPassword ? "text" : "password"}
                          className="outline-none p-4 border-2 border-[#979BAE] rounded-lg w-full text-dukiaBlue"
                        />

                        {!viewPassword && (
                          <Eye
                            className="text-dukiaBlue/[50%] cursor-pointer absolute top-5 right-5"
                            size={20}
                            onClick={() => {
                              setViewPassword(true);
                            }}
                          />
                        )}

                        {viewPassword && (
                          <EyeOff
                            className="text-dukiaBlue/[50%] cursor-pointer absolute top-5 right-5"
                            size={20}
                            onClick={() => {
                              setViewPassword(false);
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <p>Forgot Password?</p>
                  </div>
                </div>
                <button className="py-3 px-32 md:px-40 bg-dukiaBlue text-white font-semibold rounded-lg">
                  Login
                </button>
              </form>
            </div>

            <div className="font-semibold flex justify-between">
              <p>Don&apos;t Have an Account?</p>
              <p className="text-dukiaGold hover:underline cursor-pointer">
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
