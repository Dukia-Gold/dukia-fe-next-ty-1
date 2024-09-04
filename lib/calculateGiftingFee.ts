import axios from "axios";

export const calculateGiftingFee = async (
  accNum: string,
  userID: number,
  quantity: number
) => {
  try {
    const response = await axios.post(
      "https://api.dukiapreciousmetals.co/api/calculate-gold-gifting-fee",
      {
        recipient_account_number: accNum,
        fire: userID,
        quantity: quantity,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const fee = response.data;

      if (fee.status === "success") {
        return fee;
      }
    }
  } catch (error: any) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return {
        status: "error",
        message: "Network error. Please check your internet connection.",
      };
    } else if (error.response.data) {
      return {
        status: "error",
        message: error.response.data.message || "Bad request",
      };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};
