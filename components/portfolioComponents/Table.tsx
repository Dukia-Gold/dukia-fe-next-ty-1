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
            Trx ID
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Date & Time
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">Type</TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Quantity
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold">
            Status
          </TableHead>
          <TableHead className="p-2.5 text-dukiaBlue font-bold rounded-tr-xl">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
};

export default TableComponent;
