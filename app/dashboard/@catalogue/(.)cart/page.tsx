"use client";

import { useFetchProductPrices } from "@/api/fetchGoldPrice";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartStore } from "@/store/cart";
import { Spin } from "antd";
import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CartModal = () => {
  const { cart, updatePrices } = useCartStore();
  const router = useRouter();
  const fetchProductsPrices = useFetchProductPrices();
  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const updateCartPrices = async () => {
      try {
        const products = await fetchProductsPrices();
        updatePrices(products);
      } catch (error) {
        console.error("Failed to update cart prices:", error);
      }
    };

    // Update cart prices immediately and set up the interval
    updateCartPrices();
    const priceIntervalId = setInterval(updateCartPrices, 10000);

    // Cleanup intervals on component unmount or when dependencies change
    return () => {
      clearInterval(priceIntervalId);
    };
  }, [fetchProductsPrices, updatePrices]); // Dependency array

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      {cart ? (
        <div className="text-dukiaBlue p-6 bg-white xl:w-[1111px] rounded-2xl relative">
          <div
            onClick={handleBack}
            className="absolute top-5 right-5 rounded-[50%] bg-[#E8E9ED] p-2 cursor-pointer"
          >
            <X width={16} height={16} />
          </div>

          <div className="space-y-6">
            <p className="font-semibold">Cart ({cart.length})</p>

            {cart.length === 0 ? (
              <div className="bg-[#F6F7F9] rounded-xl flex flex-col items-center justify-center space-y-10 py-28">
                <div className="p-6 rounded-[50%] bg-[#FBF7EB]">
                  <ShoppingCart width={83} height={83} fill="#1C254E" />
                </div>

                <div className="flex flex-col gap-3.5 text-center">
                  <p className="text-xl font-extrabold">Cart is empty</p>

                  <p className="text-sm font-semibold">
                    Items appear here when you add them to cart.
                  </p>

                  <Link href={"/dashboard/buy-gold"}>
                    <button className="bg-dukiaBlue rounded-lg text-white py-3 px-9">
                      Buy Gold
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out p-7 pr-10 text-center xl:w-[1111px] flex items-center justify-center rounded-2xl h-[90vh] relative">
          <div
            onClick={handleBack}
            className="absolute top-5 right-5 rounded-[50%] bg-[#E8E9ED] p-2.5 cursor-pointer"
          >
            <X width={18} height={18} />
          </div>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default CartModal;
