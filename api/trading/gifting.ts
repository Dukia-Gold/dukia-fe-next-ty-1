import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";
import axios from "axios";
import { useCookies } from "react-cookie";

const useGift = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [cookies] = useCookies(["auth-token"]);
  const token = cookies["auth-token"];

  const openModal = useModalStore((state) => state.openModal);
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const gifting = async (accNum: string, quantity: number, remark: string) => {
    updateLoading(true);
    const payload = {
      recipient_account_number: accNum,
      quantity: quantity,
      remark: remark,
    };

    try {
      const response = await axios({
        url: `${API_BASE_URL}/v2/gold-transfers`,
        method: "POST",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (response.status === 200 && response.data.token) {
        updateModals({
          transactionCode: true,
          trade: "gifting",
          payload: payload,
          token: response.data.token,
          message: response.data.message,
          attemptsLeft: response.data.attempts,
        });
      }
      updateLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          openModal({
            type: "error",
            title: "Unauthorized request!",
            message: "You're not authorized to perform this action.",
          });
        } else if (
          data.message ===
          "Your account has been suspended. Please contact support."
        ) {
          openModal({
            type: "error",
            title: "Account suspended!",
            message: "Your account has been suspended. Please contact support.",
          });
        } else {
          openModal({
            type: "error",
            title: "Error!",
            message: `${error.response.data.message}`,
          });
        }
      } else {
        openModal({
          type: "error",
          title: "Network Error!",
          message:
            "Error connecting to the server. Please check your internet connection and try again.",
        });
      }
      updateLoading(false);
    }
  };

  return gifting;
};

export default useGift;
