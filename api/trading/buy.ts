import useLoadingStore from "@/store/loadingStore";
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "react-cookie";
import useFetchUserData from "@/lib/fetchUserData";
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";
import { Cart } from "@/typings/cart";

const useBuy = () => {
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
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      Swal.fire({
        title: "Success!",
        text: `${response.data.message}`,
        icon: "success",
        confirmButtonText: "Okay",
      });

      fetchUserData();
      fetchTransactionHistory(5, 1);
      updateLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          Swal.fire({
            title: "Unauthorized request!",
            text: "You're not authorized to perform this action.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else if (
          data.message ===
          "Your account has been suspended. Please contact support."
        ) {
          Swal.fire({
            title: "Account suspended!",
            text: "Your account has been suspended. Please contact support.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while processing your request. Please try again later.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      } else {
        Swal.fire({
          title: "Network Error!",
          text: "Error connecting to the server. Please check your internet connection and try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
      updateLoading(false);
    }
  };

  const buyDiscrete = async (cart: Cart) => {
    updateLoading(true);
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/buyOrderDiscrete",
        method: "POST",
        data: {
          cart: cart,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      fetchUserData();
      fetchTransactionHistory(5, 1);
      updateLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          Swal.fire({
            title: "Unauthorized request!",
            text: "You're not authorized to perform this action.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else if (
          data.message ===
          "Your account has been suspended. Please contact support."
        ) {
          Swal.fire({
            title: "Account suspended!",
            text: "Your account has been suspended. Please contact support.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while processing your request. Please try again later.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      } else {
        Swal.fire({
          title: "Network Error!",
          text: "Error connecting to the server. Please check your internet connection and try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
      updateLoading(false);
    }
  };

  return { buyPoolAllocated, buyDiscrete };
};

export default useBuy;
