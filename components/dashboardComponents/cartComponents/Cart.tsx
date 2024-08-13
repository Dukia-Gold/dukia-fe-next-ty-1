"use client";

import { useFetchProductPrices } from "@/api/fetchGoldPrice";
import CartItemCard from "@/components/dashboardComponents/cartComponents/CartItemCard";
import { formatCurrency } from "@/lib/currencyformatter";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/typings/cart";
import { Spin } from "antd";
import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Cart = () => {
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
    <>
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
              // Empty Cart
              <div className="bg-[#F6F7F9] rounded-xl flex flex-col items-center justify-center space-y-10 py-28">
                {/* Cart Icon */}
                <div className="p-6 rounded-[50%] bg-[#FBF7EB]">
                  <ShoppingCart width={83} height={83} fill="#1C254E" />
                </div>

                {/* Text and Buy Gold button */}
                <div className="flex flex-col gap-3.5 text-center">
                  <p className="text-xl font-extrabold">Cart is empty</p>

                  <p className="text-sm font-semibold">
                    Items appear here when you add them to cart.
                  </p>

                  <div>
                    <button
                      onClick={() => router.push("/dashboard/buy-gold")}
                      className="bg-dukiaBlue rounded-lg text-white py-3 px-9"
                    >
                      Buy Gold
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="grid gap-5 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    {cart?.map((item: CartItem) => (
                      <CartItemCard
                        key={item.id}
                        price={item.line_price}
                        quantity={item.quantity}
                        id={item.id}
                      />
                    ))}
                  </div>
                </div>

                <div className="col-span-1 rounded-xl p-4 bg-[#F6F7F9] space-y-5">
                  <div>
                    <p className="font-semibold pb-3 border-b border-[#E8E9ED]">
                      Cart Summary
                    </p>

                    <div className="text-sm pt-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-[#676D88]">
                          Number of Items
                        </label>
                        <p className="font-bold">{cart.length}</p>
                      </div>

                      {/* Item's total */}
                      <div className="flex items-center justify-between">
                        <label className="text-[#676D88]">
                          Item&apos;s total:
                        </label>
                        <p className="font-bold">
                          {formatCurrency(
                            cart.reduce(
                              (acc, item) => acc + (item.line_price ?? 0),
                              0
                            )
                          )}
                        </p>
                      </div>

                      {/* Subtotal */}
                      <div className="flex items-center justify-between">
                        <label className="text-[#676D88]">Subtotal:</label>
                        <p className="font-bold">
                          {formatCurrency(
                            cart.reduce(
                              (acc, item) => acc + (item.line_price ?? 0),
                              0
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-dukiaBlue text-white text-center py-3 font-semibold w-full rounded-lg">
                    Checkout (
                    {formatCurrency(
                      cart.reduce(
                        (acc, item) => acc + (item.line_price ?? 0),
                        0
                      )
                    )}
                    )
                  </button>
                </div>
              </div>
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
    </>
  );
};

export default Cart;
