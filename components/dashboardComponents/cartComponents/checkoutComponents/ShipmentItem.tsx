import { Skeleton } from "@/components/ui/skeleton";
import { fullProductsStore } from "@/store/fullProducts";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  id: string | undefined;
  quantity: number | undefined;
};

const ShipmentItem = ({ id, quantity }: Props) => {
  const [itemDetails, setItemDetails] = useState<any>(null);
  const fullProducts = fullProductsStore((state: any) => state.fullProducts);

  const findItemById = (id?: string) => {
    if (!fullProducts) {
      return null;
    }
    return Object.values(fullProducts).find((item: any) => item.id === id);
  };

  // Step 3: Use useEffect to update itemDetails when fullProducts or id changes
  useEffect(() => {
    const details = findItemById(id);
    setItemDetails(details);
  }, [fullProducts, id]); // Dependencies: update when fullProducts or id changes

  if (!itemDetails) {
    // Handle the case where the item is not found or still loading
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 bg-white rounded-xl flex gap-6 text-dukiaBlue">
      <div className="bg-white shadow-md py-2 px-4 rounded flex items-center border border-[#E8E9ED]">
        {itemDetails ? (
          <Image
            src={itemDetails?.thumbnail_url ? itemDetails?.thumbnail_url : ""}
            alt={itemDetails?.name ? itemDetails?.name : ""}
            width={23.82}
            height={40}
          />
        ) : (
          <Skeleton className="w-[23.82px] h-[40px]" />
        )}
      </div>

      <div className="space-y-3">
        <p className="font-semibold">
          {itemDetails?.name ? itemDetails?.name : "N/A"}
        </p>

        <p className="text-sm">Qty: {quantity}</p>
      </div>
    </div>
  );
};

export default ShipmentItem;
