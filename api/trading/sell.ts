import useLoadingStore from "@/store/loadingStore";
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "react-cookie";
import useFetchUserData from "@/lib/fetchUserData";
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";
import useModalsStore from "@/store/modalsStore";
import { useModalStore } from "@/store/modalStore";

const useSell = () => {
  const openModal = useModalStore((state) => state.openModal);
  const fetchUserData = useFetchUserData();
  const fetchTransactionHistory = useFetchTransactionHistory();
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const sellPoolAllocated = async (
    order_weight: any,
    order_total: any,
    bid_unit_price: any
  ) => {
    updateLoading(true);
    const payload = {
      quantity: order_weight,
      order_total: order_total,
      bid_unit_price: bid_unit_price,
    };

    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/sell-order",
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
          trade: "pool",
          payload: payload,
          token: response.data.token,
          message: response.data.message,
          attemptsLeft: response.data.attempts,
        });
      }
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
    } finally {
      updateLoading(false);
    }
  };

  const sellDiscrete = async (item_id: any, quantity: any, price: any) => {
    updateLoading(true);
    const payload = {
      item_id: item_id,
      quantity: quantity,
      price: price,
    };

    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/sell-discrete",
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
          trade: "discrete",
          payload: payload,
          token: response.data.token,
          message: response.data.message,
          attemptsLeft: response.data.attempts,
        });
      }
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

  return { sellPoolAllocated, sellDiscrete };
};

export default useSell;
