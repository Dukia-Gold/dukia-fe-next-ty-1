import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { transactionStore } from "@/store/transactions";
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";

const Transactions = () => {
  const [page, setPage] = useState(1);
  const fetchTransactionHistory = useFetchTransactionHistory();

  useEffect(() => {
    fetchTransactionHistory(5, 1);
  }, []);

  const transactions = transactionStore((state: any) => state.transactions);

  const dateAndTimeFormatter = (date: string) => {
    const formattedDate = date.split("T")[0];
    const formattedTime = date.split("T")[1].split(".")[0];

    return (
      <>
        {formattedDate}
        <br />
        {formattedTime}
      </>
    );
  };

  return (
    <div className="space-y-3">
      <p className="font-semibold text-dukiaBlue">Recent Transactions</p>

      <Table>
        <TableHeader>
          <TableRow className="hidden md:table-row bg-dukiaBlue text-white border-b border-dukiaBlue/[10%] hover:bg-dukiaBlue">
            <TableHead className="pl-6 py-4 text-white rounded-tl-lg">
              Trx ID
            </TableHead>
            <TableHead className="text-white">Date & Time</TableHead>
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white rounded-tr-lg">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions &&
            transactions.data &&
            transactions.data.map((transaction: any) => (
              <TableRow
                key={transaction.id}
                className="grid md:table-row text-dukiaBlue bg-white hover:bg-dukiaBlue/[50%] hover:text-white"
              >
                {/* Trx ID */}
                <TableCell className="grid grid-cols-3 md:table-cell bg-dukiaBlue/[20%] font-medium pl-6 py-4">
                  <p className="md:hidden">Trx ID:</p>
                  <p className="col-span-2">{transaction.id}</p>
                </TableCell>

                {/* Date */}
                <TableCell className="grid grid-cols-3 md:table-cell font-medium pl-6 py-4">
                  <p className="md:hidden">Date & Time:</p>
                  <p className="col-span-2">
                    {dateAndTimeFormatter(transaction.date)}
                  </p>
                </TableCell>

                {/* Type */}
                <TableCell className="grid grid-cols-3 md:table-cell font-medium pl-6 py-4">
                  <p className="md:hidden">Type:</p>
                  <p className="col-span-2">{transaction.transaction_type}</p>
                </TableCell>

                {/* Quantity */}
                <TableCell className="grid grid-cols-3 md:table-cell font-medium pl-6 py-4">
                  <p className="md:hidden">Quantity:</p>
                  <p className="col-span-2">
                    {transaction.quantity ? transaction.quantity : "N/A"}
                  </p>
                </TableCell>

                {/* Amount */}
                <TableCell className="grid grid-cols-3 md:table-cell font-medium pl-6 py-4">
                  <p className="md:hidden">Amount:</p>
                  <p className="col-span-2">{transaction.amount}</p>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
