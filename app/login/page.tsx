"use client";

import useAuth from "@/api/auth/useAuth";
import cookie from "js-cookie";
import { useState } from "react";
import AuthBox from "@/components/authComponents/AuthBox";

const LoginPage = () => {
  const { login, error } = useAuth();
  const logintoken = cookie.get("auth-token");
  // const signedToken: string = cookie.get("auth-token") as string;
  // console.log(logintoken);
  // console.log(logintoken);
  // console.log(token);
  // const [email, setEmail] = useState<string>('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const deviceName = "device-name"; // Assume a default device name for now
    await login(email, password, deviceName);
  };

  return (
    <main className="bg-white pt-52 md:pt-44 pb-[1.41rem] flex justify-center">
      <AuthBox />
    </main>
  );
};

export default LoginPage;
