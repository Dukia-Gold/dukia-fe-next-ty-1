import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
  }, [fetchTransactionHistory]);

  const transactions = transactionStore((state: any) => state.transactions);

  const dateFormatter = (date: string) => {
    const formattedDate = date.split("T")[0];
    return formattedDate;
  }

  return (
    <div className="space-y-3">
      <p className="font-semibold text-dukiaBlue">Recent Transactions</p>

      <Table>
        <TableHeader>
          <TableRow className="bg-dukiaBlue text-white border-b border-dukiaBlue/[10%] hover:bg-dukiaBlue">
            <TableHead className="pl-6 py-4 text-white rounded-tl-lg">Trx ID</TableHead>
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
              <TableRow key={transaction.id} className="text-dukiaBlue bg-white">
                <TableCell className="font-medium pl-6 py-4">
                  {transaction.id}
                </TableCell>
                <TableCell>{dateFormatter(transaction.date)}</TableCell>
                <TableCell>{transaction.transaction_type}</TableCell>
                <TableCell>{transaction.quantity? transaction.quantity : "N/A"}</TableCell>
                <TableCell className="">{transaction.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
