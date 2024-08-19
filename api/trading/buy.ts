import useLoadingStore from "@/store/loadingStore";
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "react-cookie";
import useFetchUserData from "@/lib/fetchUserData";
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";
import { Cart } from "@/typings/cart";
import { useModalStore } from "@/store/modalStore";

const useBuy = () => {
  const openModal = useModalStore((state) => state.openModal);
  const fetchUserData = useFetchUserData();
  const fetchTransactionHistory = useFetchTransactionHistory();
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const buyPoolAllocated = async (
    order_weight: any,
    order_total: any,
    ask_oz_usd: any
  ) => {
    if (!token) {
      openModal({
        type: "error",
        title: "Unauthenticated!",
        message: "You need to be logged in to make this purchase.",
      });
    }

    updateLoading(true);
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/buyOrder",
        method: "POST",
        data: {
          order_weight: order_weight,
          order_total: order_total,
          ask_oz_usd: ask_oz_usd,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      openModal({
        type: "success",
        title: "Order Successful!",
        message: `${response.data.message}`,
      });

      fetchUserData();
      fetchTransactionHistory(5, 1);
      updateLoading(false);
    } catch (error: any) {
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

  const buyDiscrete = async (cart: Cart): Promise<boolean> => {
    if (!token) {
      openModal({
        type: "error",
        title: "Unauthenticated!",
        message: "You need to be logged in to make this purchase.",
      });
    }

    updateLoading(true);
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/buyOrderDiscrete",
        method: "POST",
        data: cart,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      openModal({
        type: "success",
        title: "Order Successful!",
        message: `${response.data.message}`,
      });

      fetchUserData();
      fetchTransactionHistory(5, 1);
      updateLoading(false);

      return true; // Return true to indicate success
    } catch (error: any) {
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
      return false; // Return false to indicate failure
    }
  };

  return { buyPoolAllocated, buyDiscrete };
};

export default useBuy;
