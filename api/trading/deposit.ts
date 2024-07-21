import { toast } from "@/components/ui/use-toast";
import { useCookies } from "react-cookie";
import useLoadingStore from "@/store/loadingStore";
import axios from "axios";
import useModalsStore from "@/store/modalsStore";

const useDeposit = () => {
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];

  /**
   * Deposits funds using bank transfer.
   *
   * @param {number} amount - The amount to deposit.
   * @param {File | null} receipt - The receipt file.
   * @return {Promise<any>} The response data.
   */
  const depositWithBankTransfer = async (
    amount: number,
    receipt: File | null
  ) => {
    let data;
    updateModals({ deposit: false });

    try {
      updateLoading(true);
      const apiUrl = `https://api.dukiapreciousmetals.co/api/v2/deposit-request?amount=${amount}`;

      const response = await axios({
        url: apiUrl,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      data = response;
      updateModals({ depositResponse: response.data.message });
      console.log(response); // Update the user in the user store
      updateLoading(false);
      updateModals({ successfulDeposit: true });
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

  const depositWithPayStack = async (amount: number) => {
    let data;
    updateModals({ deposit: false });

    try {
      updateLoading(true);
      const apiUrl = `https://api.dukiapreciousmetals.co/api/v2/paystack-payment?amount=${amount}&currency=NGN`;

      const response = await axios({
        url: apiUrl,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      data = response;
      updateModals({ depositResponse: response.data });
      console.log(response); // Update the user in the user store
      updateLoading(false);
      updateModals({ successfulDeposit: true });
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

  return { depositWithBankTransfer, depositWithPayStack };
};

export default useDeposit;
