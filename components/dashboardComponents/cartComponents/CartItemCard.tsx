import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/currencyformatter";
import { useCartStore } from "@/store/cart";
import { fullProductsStore } from "@/store/fullProducts";
import { Product } from "@/typings/product";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  price: number | undefined;
  quantity: number | undefined;
  id: string | undefined;
};

const CartItemCard = ({ price, quantity, id }: Props) => {
  const { removeFromCart } = useCartStore();
  const [itemDetails, setItemDetails] = useState<Product | null>(null);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/price/products"
      );
      const productsData = await response.json();

      // Get product details by ID
      const product = productsData.find(
        (product: Product) => product.id === id
      );

      setItemDetails(product || null); // Set itemDetails to the found product or null if not found
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]); // Add 'id' to the dependency array to re-fetch if it changes

  return (
    <div className="rounded-xl bg-[#F6F7F9] py-4 px-6 flex justify-between">
      <div className="flex gap-6">
        <div className="bg-white py-4 px-7 rounded-lg flex items-center">
          {itemDetails ? (
            <Image
              src={itemDetails?.thumbnail_url ? itemDetails?.thumbnail_url : ""}
              alt={itemDetails?.name ? itemDetails?.name : ""}
              width={53}
              height={89}
            />
          ) : (
            <Skeleton className="w-[53px] h-[89px]" />
          )}
        </div>

        <div className="text-sm space-y-3">
          <p className="text-base font-semibold">
            {itemDetails?.name ? itemDetails?.name : id}
          </p>
          <p>Size: {itemDetails?.size}</p>
          <p>
            Type:{" "}
            {itemDetails?.type === "bar"
              ? "Discrete Bar"
              : itemDetails?.type === "coin"
              ? "Discrete Coin"
              : "Discrete product"}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end text-sm font-semibold space-y-6">
        <p className="font-extrabold text-xl">{formatCurrency(price || 0)}</p>

        <p>
          Quantity: <span>{quantity}</span>
        </p>

        <div
          onClick={() => removeFromCart(id ? id : "")}
          className="flex items-center gap-1 text-dukiaGold cursor-pointer"
        >
          <Trash width={16} height={16} />
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
