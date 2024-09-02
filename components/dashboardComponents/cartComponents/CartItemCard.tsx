import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/currencyformatter";
import { useCartStore } from "@/store/cart";
import { fullProductsStore } from "@/store/fullProducts";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  price: number | undefined;
  quantity: number | undefined;
  id: string | undefined;
};

const CartItemCard = ({ price, quantity, id }: Props) => {
  const { removeFromCart } = useCartStore();
  const [itemDetails, setItemDetails] = useState<any>(null);

  const fullProducts = fullProductsStore((state: any) => state.fullProducts);

  const findItemById = useCallback(
    (id?: string) => {
      if (!fullProducts) {
        return null;
      }
      return Object.values(fullProducts).find((item: any) => item.id === id);
    },
    [fullProducts]
  ); // Add fullProducts as a dependency

  useEffect(() => {
    const details = findItemById(id);
    setItemDetails(details);
  }, [findItemById, id]); // Dependencies: update when fullProducts or id changes

  if (!itemDetails) {
    // Handle the case where the item is not found or still loading
    return <div>Loading...</div>;
  }

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
