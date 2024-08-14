"use client";

import { useFetchProductPrices } from "@/api/fetchGoldPrice";
import { formatCurrency } from "@/lib/currencyformatter";
import { formatDecimal } from "@/lib/decimalFormatter";
import { useCartStore } from "@/store/cart";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Checkout = () => {
  const user = userStore((state: any) => state.user);
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
        <div className="text-dukiaBlue animate-in fade-in-5 duration-500 ease-in-out p-6 bg-white xl:w-[1111px] rounded-2xl relative">
          <div
            onClick={handleBack}
            className="absolute top-5 right-5 rounded-[50%] bg-[#E8E9ED] p-2 cursor-pointer"
          >
            <X width={16} height={16} />
          </div>

          <div className="space-y-6">
            <p className="font-semibold">Checkout ({cart.length})</p>

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
                    You will checkout here when you add them to cart.
                  </p>

                  {/* <div>
                    <button
                      onClick={() => router.push("/dashboard/buy-gold")}
                      className="bg-dukiaBlue rounded-lg text-white py-3 px-9"
                    >
                      Buy Gold
                    </button>
                  </div> */}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="grid gap-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
                    {/* Accessibility */}
                    <div></div>

                    {/* Customer Address if delivery is selected */}
                    <div></div>

                    {/* Shipment */}
                    <div></div>

                    {/* Payment Method */}
                    <div className="p-4 bg-[#F6F7F9] rounded-xl">
                      {/* text */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#E8E9ED]">
                        <p className="font-semibold">Default Payment method</p>

                        <p className="underline text-xs font-semibold text-dukiaGold">
                          Contact Us to change
                        </p>
                      </div>

                      {/* Balance */}
                      <div className="mt-3 bg-white rounded-xl p-3 flex items-center gap-6">
                        <div className="p-4">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_6309_7588)">
                              <path
                                d="M23.5959 13.43H11.5619C10.9171 13.3803 10.2786 13.5866 9.78472 14.0041C9.29082 14.4216 8.98122 15.0169 8.92292 15.661L8.92192 15.67C8.95095 15.9932 9.04339 16.3076 9.19396 16.5951C9.34453 16.8826 9.55028 17.1376 9.79945 17.3455C10.0486 17.5534 10.3363 17.7102 10.6461 17.8069C10.9559 17.9036 11.2817 17.9383 11.6049 17.909L11.5959 17.91H23.5959C23.6715 17.917 23.7476 17.9088 23.82 17.886C23.8923 17.8631 23.9593 17.8261 24.0172 17.777C24.075 17.7279 24.1225 17.6678 24.1568 17.6001C24.1911 17.5325 24.2115 17.4587 24.2169 17.383V13.959C24.1973 13.8127 24.1253 13.6784 24.0142 13.5811C23.9032 13.4838 23.7606 13.4301 23.6129 13.43H23.5949H23.5959ZM11.5619 17.068C11.2791 17.068 11.0026 16.9841 10.7675 16.827C10.5323 16.6699 10.349 16.4465 10.2408 16.1852C10.1325 15.9239 10.1042 15.6364 10.1594 15.359C10.2146 15.0816 10.3508 14.8268 10.5508 14.6268C10.7507 14.4268 11.0055 14.2907 11.2829 14.2355C11.5603 14.1803 11.8479 14.2086 12.1092 14.3169C12.3705 14.4251 12.5938 14.6084 12.7509 14.8435C12.9081 15.0787 12.9919 15.3552 12.9919 15.638V15.642C12.9919 16.43 12.3529 17.068 11.5659 17.068H11.5619ZM3.29492 0V6.404H4.66292V3.668C4.80092 3.702 4.96092 3.724 5.12492 3.73H5.12892C5.62332 3.72894 6.09718 3.53215 6.44686 3.18265C6.79655 2.83315 6.9936 2.3594 6.99492 1.865C6.99254 1.70258 6.97037 1.54106 6.92892 1.384L6.93192 1.399H14.4239C14.3877 1.5505 14.3669 1.7053 14.3619 1.861V1.865C14.363 2.3594 14.5598 2.83326 14.9093 3.18294C15.2588 3.53263 15.7325 3.72968 16.2269 3.731C16.3949 3.725 16.5559 3.703 16.7099 3.665L16.6939 3.668V6.404H18.0949V0H3.29492ZM18.6839 5.626H20.4249C20.2941 5.24734 20.0655 4.91003 19.7622 4.64834C19.4588 4.38664 19.0917 4.20988 18.6979 4.136L18.6839 4.134V5.626Z"
                                fill="#1C254E"
                              />
                              <path
                                d="M11.471 12.684H23.409V9.04698C23.3579 8.50747 23.0969 8.00963 22.6822 7.66077C22.2675 7.31191 21.7323 7.13996 21.192 7.18198H21.199H2.239C2.22269 7.16459 2.2007 7.15359 2.177 7.15098C2.04529 7.08956 1.93252 6.99384 1.85053 6.87384C1.76855 6.75385 1.72035 6.61401 1.711 6.46898V6.46698C1.72747 6.2873 1.79816 6.11686 1.91371 5.97827C2.02926 5.83969 2.18421 5.73949 2.358 5.69098L2.364 5.68998V4.10498C1.057 4.16698 0 6.03198 0 8.36398V22.136C0.0515912 22.6748 0.312511 23.172 0.72669 23.5205C1.14087 23.869 1.67525 24.0412 2.215 24H2.208H21.168C21.7054 24.0396 22.2371 23.8676 22.6494 23.5207C23.0618 23.1737 23.3222 22.6793 23.375 22.143L23.376 22.135V18.498H11.504C9.577 18.498 8.022 17.192 8.022 15.607C8.022 13.991 9.576 12.685 11.472 12.685L11.471 12.684Z"
                                fill="#1C254E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_6309_7588">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>

                        {/* Wallet balance */}
                        <div className="space-y-1">
                          <p className="text-sm">
                            From Your Initial Deposit Balance
                          </p>

                          <p className="font-extrabold text-xl">
                            ₦ {formatDecimal(user.opening_balance_ng, 2, true)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Section */}
                <div className="col-span-1">
                  <div className="rounded-xl p-4 bg-[#F6F7F9] space-y-5">
                    {/* Order Summary */}
                    <div>
                      <p className="font-semibold pb-3 border-b border-[#E8E9ED]">
                        Order Summary
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

                        {/* Total */}
                        <div className="flex items-center justify-between">
                          <label className="text-[#676D88]">Total:</label>
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

                    {/* Confirm Order button */}
                    <div>
                      <Link href={"/dashboard/cart/checkout"}>
                        <button className="bg-dukiaBlue text-white text-center py-3 font-semibold w-full rounded-lg">
                          Confirm Order
                        </button>
                      </Link>
                    </div>

                    {/* Modify Order button */}
                    <div>
                      <Link href={"/dashboard/cart"}>
                        <button className="bg-[#E8E9ED] text-dukiaBlue text-center py-3 font-semibold w-full rounded-lg">
                          Modify Order
                        </button>
                      </Link>
                    </div>
                  </div>
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

export default Checkout;
