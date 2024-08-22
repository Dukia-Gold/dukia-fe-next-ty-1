import useFind from "@/lib/findById";
import { useEffect, useState } from "react";

const Chart = ({ id }: { id: string }) => {
  const [item, setItem] = useState<any>(null);
  const { findItemById } = useFind();

  useEffect(() => {
    const item = findItemById(id);
    setItem(item);
  }, [id]);

  return (
    <div className="bg-white rounded-2xl p-4">
      <p className="font-semibold">{item?.name} Market Price</p>

      <div className="mt-4"></div>
    </div>
  );
};

export default Chart;
