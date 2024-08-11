"use client";

import { useFetchProductPrices } from "@/api/fetchGoldPrice";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/lib/currencyformatter";
import { fetchProductDetails } from "@/lib/fetchProductDetails";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/typings/cart";
import { Product } from "@/typings/product";
import { Spin } from "antd";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  searchParams: {
    id: string;
  };
};

const ProductModal = ({ searchParams: { id } }: Props) => {
  const { addToCart, updatePrices } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [thumbnail, setThmbnail] = useState("front");
  const [count, setCount] = useState(1);
  const router = useRouter();

  const fetchProductsPrices = useFetchProductPrices();

  useEffect(() => {
    const updateCartPrices = async () => {
      const products = await fetchProductsPrices();
      updatePrices(products);
    };

    updateCartPrices(); // Initial price update

    const interval = setInterval(updateCartPrices, 10000); // Update prices every 12 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [fetchProductsPrices, updatePrices]);


  const handleBack = () => {
    router.back();
  };

  const cartProduct: CartItem = {
    sn: 1,
    id: product?.id,
    price: product?.ask_price,
    usd_price: product?.ask_price_usd,
    quantity: count,
    line_price: 100,
  };

  const updateCount = (type: "increment" | "decrement") => {
    setCount((prevCount) =>
      type === "increment" ? prevCount + 1 : prevCount - 1
    );
  };

  const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCount(value);
    } else if (event.target.value === "") {
      setCount(1);
    }
  };

  const handleBlur = () => {
    if (count === 0) {
      setCount(1); // Reset to 1 if the input is left empty
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await fetchProductDetails(id);
        setProduct(result);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    // Fetch immediately when the component mounts
    fetchProduct();

    // Set up an interval to fetch the product details every 5 seconds
    const intervalId = setInterval(fetchProduct, 5000);

    // Cleanup the interval when the component unmounts or id changes
    return () => clearInterval(intervalId);
  }, [id]); // Dependency array includes 'id' to refetch if 'id' changes

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      {product ? (
        <ScrollArea className="text-dukiaBlue p-6 bg-white xl:w-[1111px] rounded-2xl h-[90vh] relative">
          <div
            onClick={handleBack}
            className="absolute top-5 right-5 rounded-[50%] bg-[#E8E9ED] p-2.5 cursor-pointer"
          >
            <X width={18} height={18} />
          </div>
          <div className="space-y-14">
            <div className="flex gap-28">
              {/* Image and Thumbnails */}
              <div className="space-y-3">
                {/* Image */}
                <div className="py-20 px-28 bg-[#FBF7EB] rounded-xl">
                  {/* <div
                    className={`${
                      product.type === "coin" ? "px-11 py-24" : "py-20 px-28"
                    } bg-[#FBF7EB] rounded-xl`}
                  > */}
                  <Image
                    width={product.type === "bar" ? 250 : 384}
                    height={product.type === "bar" ? 424.67 : 384}
                    src={
                      thumbnail === "front"
                        ? product.thumbnail_url
                        : product.thumbnail_url2
                    }
                    alt={product.name}
                    className={
                      product.type === "bar"
                        ? "w-96 h-[26.6rem]"
                        : "w-[24rem] h-[24rem]"
                    }
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4">
                  {/* Front */}
                  <div
                    onClick={() => setThmbnail("front")}
                    className={`${
                      thumbnail === "front" && "border-2 border-dukiaGold"
                    } rounded-xl py-4 px-7 cursor-pointer bg-[#FBF7EB] w-28 h-[7.75rem] flex items-center justify-center`}
                  >
                    <Image
                      width={53}
                      height={89}
                      src={product.thumbnail_url}
                      alt={product.name}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Back */}
                  <div
                    onClick={() => setThmbnail("back")}
                    className={`${
                      thumbnail === "back" && "border-2 border-dukiaGold"
                    } rounded-xl py-4 px-7 cursor-pointer bg-[#E8E9ED] w-28 h-[7.75rem] flex items-center justify-center`}
                  >
                    <Image
                      width={53}
                      height={89}
                      src={product.thumbnail_url2}
                      alt={product.name}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Details and Count container (buttons included) */}
              <div className="pt-16 space-y-16">
                {/* Details and Count */}
                <div className="space-y-6">
                  <div className="space-y-11">
                    {/* Name and Price */}
                    <div className="space-y-6">
                      <p className="font-extrabold text-xl">{product.name}</p>

                      <div>
                        <p className="font-semibold text-[#979BAE]">Price:</p>
                        <p className="text-[2rem]/9 font-extrabold">
                          {product.ask_price > 0
                            ? formatCurrency(product.ask_price)
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 text-sm font-semibold">
                      <p>Product Details</p>

                      <Table className="w-96">
                        <TableBody>
                          {/* Manufacturer */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Manufacturer
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.manufacturer}
                            </TableCell>
                          </TableRow>

                          {/* Gross Weight */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Gross Weight
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.gross_weight
                                ? product.gross_weight
                                : "N/A"}
                            </TableCell>
                          </TableRow>

                          {/* Fine Weight */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Fine Weight
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.fine_weight
                                ? product.fine_weight
                                : "N/A"}
                            </TableCell>
                          </TableRow>

                          {/* Fineness */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Fineness
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.fineness ? product.fineness : "N/A"}
                            </TableCell>
                          </TableRow>

                          {/* Thickness */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Thickness
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.thickness ? product.thickness : "N/A"}
                            </TableCell>
                          </TableRow>

                          {/* Certificates */}
                          <TableRow>
                            <TableCell className="py-3 px-0 text-[#676D88]">
                              Certificates
                            </TableCell>
                            <TableCell className="py-3 px-0 text-right">
                              {product.certificates
                                ? product.certificates
                                : "N/A"}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  {product.ask_price > 0 && (
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <p>Quantity</p>

                      <div className="flex items-center">
                        <button
                          onClick={() => updateCount("decrement")}
                          disabled={count === 1}
                          className="bg-[#B9BBC8] p-1 text-center text-white rounded-l disabled:bg-[#B9BBC8]/[50%] disabled:text-dukiaBlue disabled:cursor-not-allowed w-7"
                        >
                          -
                        </button>

                        <input
                          type="text"
                          className="w-12 p-1 text-center outline-none"
                          value={count}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                        />

                        <button
                          onClick={() => updateCount("increment")}
                          className="bg-dukiaBlue p-1 text-center text-white rounded-r  w-7"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Add to cart and checkout buttons */}
                <div className="space-y-3">
                  {product.ask_price > 0 && (
                    <button
                      onClick={() => {
                        addToCart(cartProduct);
                        handleBack();
                      }}
                      className="bg-dukiaBlue py-3 text-white w-full font-semibold rounded-lg"
                    >
                      Add to Cart and Continue Shopping
                    </button>
                  )}

                  <button
                    disabled={product.ask_price === 0}
                    className="bg-[#E8E9ED] py-3 w-full font-semibold rounded-lg disabled:cursor-not-allowed"
                  >
                    {product.ask_price > 0
                      ? "Add to Cart and Checkout"
                      : "Contact support to order"}
                  </button>
                </div>
              </div>
            </div>

            {/* Description and Full Details */}
            <div className="border-2 border-[#E8E9ED] rounded-xl">
              <div className="border-b p-4 font-semibold">
                <p>Description</p>
              </div>

              <div className="p-4">{product.description}</div>
            </div>
          </div>
        </ScrollArea>
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

export default ProductModal;
