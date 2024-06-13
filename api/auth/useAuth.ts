"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string, deviceName: string) => {
    setLoginLoading(true);
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
      setUser(userData);

      const expiresAt = expires;
      const expiryDate = new Date(expiresAt);
      cookie.set("auth-token", authorization, {
        expires: expiryDate,
        secure: true,
        sameSite: "none",
      });

      router.push("/dashboard");
      setLoginLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  const logout = async () => {
    cookie.remove("auth-token");
    router.push("/login");
    // try {
    //   await axios.post("https://api.dukiapreciousmetals.co/api/logout");
    //   cookie.remove("auth-token");
    //   setUser(null);
    // } catch (error) {
    //   setError(error instanceof Error ? error.message : "Unknown error");
    // }
  };

  return { user, error, loginLoading, login, logout };
};

export default useAuth;
