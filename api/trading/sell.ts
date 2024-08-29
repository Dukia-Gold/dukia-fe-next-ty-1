import useLoadingStore from "@/store/loadingStore";
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "react-cookie";
import useFetchUserData from "@/lib/fetchUserData";
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";
import useModalsStore from "@/store/modalsStore";

const useSell = () => {
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
    //   {
    //     "quantity" : "0.05",
    //     "order_total" : "6056.05",
    //     "bid_unit_price" : "100000",
    //     "missing_digits" : "hamk"
    // }
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
          payload: payload,
          token: response.data.token,
          message: response.data.message,
          attemptsLeft: response.data.attempts,
        });
      }

      fetchUserData();
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
            text: `${error.response.data.message}`,
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

  return sellPoolAllocated;
};

export default useSell;
