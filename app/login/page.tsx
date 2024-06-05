"use client"

import useAuth from "@/api/auth/useAuth";
import cookie from "js-cookie";
import { useState } from "react";



const LoginPage = () => {
  const { login, error } = useAuth();
  const logintoken = cookie.get("auth-token");
  // const signedToken: string = cookie.get("auth-token") as string;
  console.log(logintoken);
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
    <main className="h-screen bg-[#f1f5f9] pt-24 flex flex-col justify-center items-center">
      <div className="w-[75%] h-[50%] shadow-lg">
        <div>LoginPage</div>
        <form onSubmit={handleLogin} className="flex flex-col gap-2 p-4 text-sm">
          <input type="email" name="email" id="" placeholder="Enter your email" className="border p-2 outline-none rounded-md border-black" />

          <input type="password" name="password" id="" placeholder="Enter your password" className="border p-2 outline-none rounded-md border-black" />

          {error && <div style={{ color: 'red' }}>{error}</div>}
          
          <button type="submit" className="p-2 bg-dukiaBlue text-white">Log in</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
