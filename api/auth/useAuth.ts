"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
// import cookieSignature from "cookie-signature";
import { useRouter } from 'next/navigation';
// import { signToken } from "@/lib/auth";

const useAuth = () => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string, deviceName: string) => {
    try {
      const response = await axios.post(
        "https://api.dukiapreciousmetals.co/api/login",
        {
          email,
          password,
          device_name: deviceName,
        }
      );
      const { authorization, expires, user: userData } = response.data;

      setToken(authorization);
      setUser(userData);

      // const secretKey = process.env.SIGN_KEY;
      console.log(authorization);
      // const signedToken = signToken(token);

      const expiresAt = expires;
      const expiryDate = new Date(expiresAt);
      
      cookie.set("auth-token", authorization, { expires: expiryDate, secure: true, sameSite: 'none' }); // expires in 1 day
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // console.log(error.response.data.message);
        setError(error.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  const logout = async () => {
    cookie.remove("auth-token");
    router.push('/login');
    // try {
    //   await axios.post("https://api.dukiapreciousmetals.co/api/logout");
    //   cookie.remove("auth-token");
    //   setUser(null);
    // } catch (error) {
    //   setError(error instanceof Error ? error.message : "Unknown error");
    // }
  };

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  return { token, user, error, login, logout };
};

export default useAuth;
