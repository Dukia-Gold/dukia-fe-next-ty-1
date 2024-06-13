"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useAuth = () => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [user, setUser] = useState(null);
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
    } catch (error: any) {
      // console.log(error.response.status);
      if (error.response.status === 401) {
        toast.error("Wrong email or password!", {
          position: "bottom-right",
        });
        setLoginLoading(false);
      } else if (error.response.status === 404) {
        toast.error("This email is not registered!", {
          position: "bottom-right",
        });
        setLoginLoading(false);
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

  return { user, loginLoading, login, logout };
};

export default useAuth;
