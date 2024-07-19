import { toast } from "@/components/ui/use-toast";
import { useCookies } from "react-cookie";
import { GetUrl } from "./getUrl";
import { transactionStore } from "@/store/transactions";
import { useEffect } from "react";

const useFetchTransactionHistory = () => {
  const updateTransactions = transactionStore((state: any) => state.updateTransactions);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const url = GetUrl();

  const fetchTransactionHistory = async ( per_page: number, page: number ) => {
    let data;

    try {
      const apiUrl = `https://api.dukiapreciousmetals.co/api/v2/transaction-history?per_page=${per_page}&page=${page}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data = await response.json();
      updateTransactions(data); // Update the user in the user store
    } catch (error: any) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast({
          variant: "destructive",
          title: "Network Error",
          description:
            "There was a problem connecting to the server. Please check your internet connection and try again.",
        });
      }
    }

    return data;
  };

  return fetchTransactionHistory; // Return the user data (if needed)
};

export default useFetchTransactionHistory;
