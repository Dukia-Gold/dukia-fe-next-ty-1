"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { userAssetsStore, userStore } from "@/store/user";
import Cookies from "js-cookie";
import useLoadingStore from "@/store/loadingStore";
import { transactionStore } from "@/store/transactions";
import useModalsStore from "@/store/modalsStore";

const useAuth = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname === "localhost";
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const clearTransactions = transactionStore(
    (state: any) => state.clearTransactions
  );
  const token = Cookies.get("xZ9qTn7p_K4wVd1Lm_jx8s2A");
  const { toast } = useToast();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const { updateUser, clearUser } = userStore((state: any) => ({
    user: state.user,
    updateUser: state.updateUser,
    clearUser: state.clearUser,
  }));
  const { updateUserAssets, clearUserAssets } = userAssetsStore(
    (state: any) => ({
      updateUserAssets: state.updateUserAssets,
      clearUserAssets: state.clearUserAssets,
    })
  );
  const router = useRouter();

  function clearAllCookies() {
    // Get all cookies from the document
    const cookies = document.cookie.split(";");

    // Iterate over all cookies and remove them
    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim(); // Get cookie name
      Cookies.remove(cookieName, {
        secure: !isLocalhost,
        sameSite: isLocalhost ? "lax" : "none",
      });
    });
  }

  const generateRandomName = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  // Function to generate a random Base64-like string of a specified length
  const generateRandomBase64 = (length: number) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"; // Base64 URL-safe characters
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Function to generate a random JWT-like value
  const generateJWTLikeValue = () => {
    return (
      generateRandomBase64(20) +
      "." +
      generateRandomBase64(40) +
      "." +
      generateRandomBase64(43)
    );
  };

  const loginUser = async (
    email: string,
    password: string,
    deviceName: string
  ) => {
    setLoginLoading(true);
    try {
      updateLoading(true);

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
      let assetUrl = `${baseUrl}/product-weights/${userData.id}`;

      const assetResponse = await fetch(assetUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (!assetResponse.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const assetData = await assetResponse.json();

      updateUserAssets(assetData[0]); // Update the user in the user store
      updateUser(userData);

      const expiresAt = expires;
      const expiryDate = new Date(expiresAt);

      // Ensure the cookie is set before redirecting

      // Function to set a cookie with a random name
      const setRandomCookie = (name: string, value: string) => {
        Cookies.set(name, value, {
          expires: expiryDate,
          secure: !isLocalhost, // Only secure if not localhost
          sameSite: isLocalhost ? "lax" : "none", // Use "lax" for localhost
        });
      };

      // Set JWT Token with scrambled name
      setRandomCookie("xZ9qTn7p_K4wVd1Lm_jx8s2A", authorization);

      // Set a few random cookies with dummy values
      for (let i = 0; i < 20; i++) {
        setRandomCookie(generateRandomName(), generateJWTLikeValue());
      }

      updateModals({ login: false });
      updateLoading(false);
      router.push("/dashboard");
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
      if (!token) {
        throw new Error("No authentication token found");
      }

      await axios.post(`${baseUrl}/v2/logout`, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear all auth-related data
      clearAllCookies();
      clearTransactions();
      await clearUser();
      await clearUserAssets();

      // Redirect to home page
      router.push("/");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description:
          error.message || "An error occurred during logout. Please try again.",
      });
    } finally {
      updateLoading(false);
    }
  };

  return { loginLoading, loginUser, logout };
};

export default useAuth;
