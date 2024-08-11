import { toast } from "@/components/ui/use-toast";
import { useCookies } from "react-cookie";
import { GetUrl } from "./getUrl";
import { userAssetsStore, userStore } from "@/store/user";
import { useEffect } from "react";

const useFetchUserData = () => {
  const updateUser = userStore((state: any) => state.updateUser);
  const updateUserAssets = userAssetsStore(
    (state: any) => state.updateUserAssets
  );
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const url = GetUrl();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/v2/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      let assetUrl = `https://api.dukiapreciousmetals.co/api/product-weights/${data.id}`;

      const assetResponse = await fetch(assetUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
        toast({
          variant: "destructive",
          title: "Network Error",
          description:
            "There was a problem connecting to the server. Please check your internet connection and try again.",
        });
      } else {
        if (token && url === "/dashboard") {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "An error occurred! Please refresh the dashboard.",
          });
        }
      }
    }
  };

  useEffect(() => {
    if (token) {
      // Check if token exists before fetching data
      fetchUserData();
    }
  }, [token]); // Fetch data when token changes

  useEffect(() => {
    const interval = setInterval(fetchUserData, 120000); // Fetch every 2 minutes (adjust as needed)
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return fetchUserData; // Return the user data (if needed)
};

export default useFetchUserData;
