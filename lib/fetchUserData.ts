import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { GetUrl } from "./getUrl";
import { userAssetsStore, userStore } from "@/store/user";
import { useEffect, useCallback } from "react";

const useFetchUserData = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const updateUser = userStore((state: any) => state.updateUser);
  const updateUserAssets = userAssetsStore(
    (state: any) => state.updateUserAssets
  );
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const { pathname } = GetUrl();

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/v2/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      let assetUrl = `${apiBaseUrl}/product-weights/${data.id}`;

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

      updateUser(data); // Update the user in the user store
    } catch (error: any) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast.error(
          "Problem connecting to the server! Check your internet connection.",
          {
            position: "bottom-right",
            theme: "colored",
            toastId: "Network Error - User Data",
          }
        );
      } else {
        if (token && pathname.startsWith("/dashboard")) {
          toast.error(error.response?.data?.message || "An error occured!", {
            position: "bottom-right",
            theme: "colored",
            toastId: "Error - User Data",
          });
        }
      }
    }
  }, [token, apiBaseUrl, updateUser, updateUserAssets, pathname]);

  // useEffect(() => {
  //   if (token && pathname.startsWith("/dashboard")) {
  //     fetchUserData();
  //   }
  // }, [token, pathname, fetchUserData]);

  // useEffect(() => {
  //   if (token && pathname.startsWith("/dashboard")) {
  //     const interval = setInterval(fetchUserData, 30000); // Fetch every 2 minutes (adjust as needed)
  //     return () => clearInterval(interval); // Cleanup on component unmount
  //   }
  // }, [token, pathname, fetchUserData]);

  return fetchUserData; // Return the user data (if needed)
};

export default useFetchUserData;
