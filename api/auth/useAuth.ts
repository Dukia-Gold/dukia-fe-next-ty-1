"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { userStore } from "@/store/user";
import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies] = useCookies(["auth-token"]);
  const token = cookies["auth-token"];
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
          description:
            error.response?.data?.message || "Wrong email or password!",
        });
        setLoginLoading(false);
      } else if (error.response.status === 404) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            error.response?.data?.message || "This email is not registered!",
        });
        setLoginLoading(false);
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "https://api.dukiapreciousmetals.co/api/v2/logout",
        null, // Assuming no data payload for logout
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the bearer token here
          },
        }
      );

      cookie.remove("auth-token");
      clearUser();

      router.push("/login");
    } catch (error: any) {
      // console.log(error.response.status);
      if (token) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "There was a problem connecting to the server. Please check your internet connection and try again.",
        });
      }
    }
  };

  return { loginLoading, login, logout };
};

export default useAuth;
