"use client";

import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { userStore } from "@/store/user";
import { useCookies } from "react-cookie";
import useLoadingStore from "@/store/loadingStore";
import { transactionStore } from "@/store/transactions";
import useModalsStore from "@/store/modalsStore";

const useAuth = () => {
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const clearTransactions = transactionStore(
    (state: any) => state.clearTransactions
  );
  const [cookies] = useCookies(["auth-token"]);
  const token = cookies["auth-token"];
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
    setLoginLoading(true);
    try {
      updateLoading(true);

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

      // Ensure the cookie is set before redirecting
      await new Promise((resolve, reject) => {
        // Correct the argument count by omitting the callback if `cookie.set` only accepts 2 or 3 arguments
        cookie.set("auth-token", authorization, {
          expires: expiryDate,
          secure: true,
          sameSite: "none",
        });
        resolve(true); // Resolve the promise directly after setting the cookie
      });

      updateModals({ login: false });
      updateLoading(false);
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

      cookie.remove("auth-token");
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
