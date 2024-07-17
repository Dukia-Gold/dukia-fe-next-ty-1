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
import useFetchTransactionHistory from "@/lib/fetchTransactionHistory";
import { transactionStore } from "@/store/transactions";

const Transactions = () => {
  const [page, setPage] = useState(1);
  const fetchTransactionHistory = useFetchTransactionHistory();
  const transactions = transactionStore((state: any) => state.transactions);

  console.log(transactions.type);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  return (
    <div className="space-y-3">
      <p className="font-semibold text-dukiaBlue">Recent Transactions</p>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="bg-dukiaBlue text-white border-b border-dukiaBlue/[10%] hover:bg-dukiaBlue">
            <TableHead className="pl-6 py-4 text-white">Trx ID</TableHead>
            <TableHead className="text-white">Date & Time</TableHead>
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {transactions.map((transaction: any) => (
            <TableRow key={transaction.ID}>
              <TableCell className="font-medium pl-6 py-4">{transaction.ID}</TableCell>
              <TableCell>{transaction.Date}</TableCell>
              <TableCell>{transaction.Transaction_Type}</TableCell>
              <TableCell>{transaction.Quantity}</TableCell>
              <TableCell className="">
                {transaction.Amount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Transactions;
