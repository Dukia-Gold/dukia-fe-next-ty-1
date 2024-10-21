import Checkout from "@/components/dashboardComponents/cartComponents/checkoutComponents/Checkout";
import React from "react";

const CheckoutModal = () => {
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <Checkout />
    </div>
  );
};

export default CheckoutModal;
