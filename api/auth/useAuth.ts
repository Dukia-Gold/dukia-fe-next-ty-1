"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { userStore } from "@/store/user";

const useAuth = () => {
  const { toast } = useToast();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  // const [user, setUser] = useState(null);
  const updateUser = userStore((state: any) => state.updateUser);
  const clearUser = userStore((state: any) => state.clearUser);
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
      updateUser(userData);

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
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "Wrong email or password!",
        });
        setLoginLoading(false);
      } else if (error.response.status === 404) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "This email is not registered!",
        });
        setLoginLoading(false);
      }
    }
  };

  const logout = async () => {
    cookie.remove("auth-token");
    clearUser();
    router.push("/login");
    // try {
    //   await axios.post("https://api.dukiapreciousmetals.co/api/logout");
    //   cookie.remove("auth-token");
    //   setUser(null);
    // } catch (error) {
    //   setError(error instanceof Error ? error.message : "Unknown error");
    // }
  };

  return { loginLoading, login, logout };
};

export default useAuth;
