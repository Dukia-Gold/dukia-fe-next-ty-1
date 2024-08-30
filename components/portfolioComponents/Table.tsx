import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableComponent = () => {
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
      <TableBody></TableBody>
    </Table>
  );
};

export default TableComponent;
