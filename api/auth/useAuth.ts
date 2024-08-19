"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { userStore } from "@/store/user";
import Cookies from "js-cookie";
import useLoadingStore from "@/store/loadingStore";
import { transactionStore } from "@/store/transactions";
import useModalsStore from "@/store/modalsStore";

const useAuth = () => {
  const baseUrl = process.env.BASE_URL;
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname === "localhost";
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const clearTransactions = transactionStore(
    (state: any) => state.clearTransactions
  );
  const token = Cookies.get("auth-token");
  const { toast } = useToast();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const { updateUser, clearUser } = userStore((state: any) => ({
    user: state.user,
    updateUser: state.updateUser,
    clearUser: state.clearUser,
  }));
  const router = useRouter();

  const loginUser = async (
    email: string,
    password: string,
    deviceName: string
  ) => {
    console.log("loggin user in");
    setLoginLoading(true);
    try {
      updateLoading(true);
      console.log("loggin user in 1");

      const response = await axios.post(
        `${baseUrl}/login`,
        {
          email,
          password,
          device_name: deviceName,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { authorization, expires, user: userData } = response.data;
      updateUser(userData);
      console.log("loggin user in 2");

      const expiresAt = expires;
      const expiryDate = new Date(expiresAt);
      console.log("loggin user in 3");

      // Ensure the cookie is set before redirecting

      Cookies.set("auth-token", authorization, {
        expires: expiryDate,
        secure: !isLocalhost, // Only secure if not localhost
        sameSite: isLocalhost ? "lax" : "none", // Use "lax" for localhost
      });
      console.log("loggin user in 4");

      updateModals({ login: false });
      updateLoading(false);
      window.location.assign("/dashboard");
    } catch (error: any) {
      // console.log(error.response.status);
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            error.response?.data?.message || "Wrong email or password!",
        });
      } else if (error.response.status === 404) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            error.response?.data?.message || "This email is not registered!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An error occured!",
        });
      }
      updateLoading(false);
    }
  };

  const logout = async () => {
    try {
      updateLoading(true);
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

      Cookies.remove("auth-token");
      clearTransactions();
      clearUser();

      window.location.assign("/");
      updateLoading(false);
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
      updateLoading(false);
    }
  };

  return { loginLoading, loginUser, logout };
};

export default useAuth;
