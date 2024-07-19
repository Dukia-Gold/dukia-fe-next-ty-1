import { toast } from "@/components/ui/use-toast";
import { useCookies } from "react-cookie";
import { transactionStore } from "@/store/transactions";
import { useEffect } from "react";
import useLoadingStore from "@/store/loadingStore";

const useDownloadAccountStatement = () => {
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];

  const downloadAccountStatement = async (
    start_date: string,
    end_date: string
  ) => {
    let data;

    try {
      updateLoading(true);
      const apiUrl = `https://api.dukiapreciousmetals.co/api/v2/user/download-statement?start_date=${start_date}&page=${end_date}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "No transactions found for the selected period.",
          });
          updateLoading(false);
          throw new Error("No transactions found for the selected period.");
        } else if (response.status === 503) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Service Unavailable! Please, contact support.",
          });
          updateLoading(false);
        } else {
          updateLoading(false);
          throw new Error("Failed to fetch account statement");
        }
      }

      data = await response.json();
      console.log(data); // Update the user in the user store
      updateLoading(false);
    } catch (error: any) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast({
          variant: "destructive",
          title: "Network Error",
          description:
            "There was a problem connecting to the server. Please check your internet connection and try again.",
        });
      }
      updateLoading(false);
    }

    return data;
  };

  return downloadAccountStatement; // Return the user data (if needed)
};

export default useDownloadAccountStatement;
