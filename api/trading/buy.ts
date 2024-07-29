import useLoadingStore from "@/store/loadingStore";
import axios from "axios";
import { useCookies } from "react-cookie";

const useBuy = () => {
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

      console.log(response); // Update the user in the user store
      updateLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        // handle unauthorized request
        console.log("Unauthorized request");
      }
      updateLoading(false);
    }
  };

  return buyPoolAllocated;
};

export default useBuy;
