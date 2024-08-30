import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { userAssetsStore } from "@/store/user";
import { capitalizeFirstLetter } from "@/lib/formatText";
import { formatCurrency } from "@/lib/currencyformatter";
import { ArrowDown, Plus } from "lucide-react";

const TableComponent = () => {
  const userAssets = userAssetsStore((state: any) => state.userAssets);

  return (
    <Table>
      <TableHeader>
        <TableRow className="hidden md:table-row bg-dukiaGrey border-b border-dukiaBlue/[10%] hover:bg-dukiaGrey">
          <TableHead className="p-2.5 text-dukiaBlue rounded-tl-xl font-bold">
            Type
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Weight
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Quantity
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Amount(₦) / Unit
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Total Value (₦)
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold rounded-tr-xl">
            Quick Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {userAssets?.products.map((product: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="p-2.5 text-left">
              {capitalizeFirstLetter(product.product_id)}
            </TableCell>
            <TableCell className="p-2.5 text-left">
              {product.total_weight}
              {product.total_weight_unit}
            </TableCell>
            <TableCell className="p-2.5 text-left">
              {product.total_quantity}
            </TableCell>
            <TableCell className="p-2.5 text-left">{product.amount}</TableCell>
            <TableCell className="p-2.5 text-left">
              {formatCurrency(product.total_bid_price_naira)}
            </TableCell>
            <TableCell className="p-2.5 text-left flex items-center gap-3 text-sm">
              <button className="bg-white hover:bg-[#43BA64] font-bold py-0.5 px-2 border border-[#43BA64] text-[#43BA64] hover:text-white flex items-center gap-2.5 rounded-lg">
                <Plus width={14} height={14} />
                Buy
              </button>
              <button className="bg-white hover:bg-[#FF5757] font-bold py-0.5 px-2 border border-[#FF5757] text-[#FF5757] hover:text-white flex items-center gap-2.5 rounded-lg">
                <ArrowDown width={14} height={14} />
                Sell
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
