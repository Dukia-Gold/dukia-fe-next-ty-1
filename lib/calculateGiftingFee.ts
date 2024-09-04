export const calculateGiftingFee = async (
  accNum: string,
  userID: number,
  quantity: number
) => {
  try {
    const response = await fetch(
      "https://api.dukiapreciousmetals.co/api/calculate-gold-gifting-fee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient_account_number: accNum,
          fire: userID,
          quantity: quantity,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const fee = await response.json();

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
    } else if (error.message === "HTTP error! status: 400") {
      return {
        status: "error",
        message: error.response.data.message || "Bad request",
      };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};
