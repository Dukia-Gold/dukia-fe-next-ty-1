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
import formatNairaAmount from "@/lib/formatNairaAmount";
import { DownloadIcon } from "lucide-react";
import useModalsStore from "@/store/modalsStore";

const Transactions = () => {
  const updateModals = useModalsStore((state: any) => state.updateModals);
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
        {formattedTime} <span className="text-xs font-bold">(UTC)</span>
      </>
    );
  };

  return (
    <div className="space-y-7 bg-white pt-5 py-2 px-4 rounded-2xl mb-36">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-dukiaBlue">Recent Transactions</p>

        <button
          onClick={() => updateModals({ statementOfAccount: true })}
          className="font-semibold text-dukiaGold flex items-center gap-2"
        >
          <DownloadIcon width={16} height={16} className="stroke-dukiaGold" />
          Download
        </button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hidden md:table-row bg-dukiaGrey border-b border-dukiaBlue/[10%] hover:bg-dukiaGrey">
            <TableHead className="p-2.5 text-dukiaBlue rounded-tl-xl font-bold">
              Trx ID
            </TableHead>
            <TableHead className="p-2.5 text-dukiaBlue font-bold">
              Date & Time
            </TableHead>
            <TableHead className="p-2.5 text-dukiaBlue font-bold">
              Type
            </TableHead>
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
        <TableBody>
          {/* No Transactions */}
          {transactions && !transactions.data && (
            <TableRow className="bg-white hover:bg-white">
              <TableCell className="text-center font-bold py-6" colSpan={6}>
                No transaction found.
              </TableCell>
            </TableRow>
          )}

          {/* Transactions */}
          {transactions &&
            transactions.data &&
            transactions.data.map((transaction: any) => (
              <TableRow
                key={transaction.id}
                className="grid md:table-row bg-white hover:bg-[#FBF7EB] hover:border hover:border-[#E8E9ED]"
              >
                <TableCell className="grid grid-cols-3 md:table-cell bg-dukiaBlue/[20%] md:bg-transparent text-[#676D88]  font-semibold p-2.5">
                  <p className="md:hidden font-bold">Trx ID:</p>
                  <p className="col-span-2">{transaction.id}</p>
                </TableCell>
                <TableCell className="grid grid-cols-3 md:table-cell text-[#676D88]  font-semibold p-2.5">
                  <p className="md:hidden font-bold">Date & Time:</p>
                  <p className="col-span-2">
                    {dateAndTimeFormatter(transaction.date)}
                  </p>
                </TableCell>
                <TableCell className="grid grid-cols-3 md:table-cell text-[#676D88]  font-semibold p-2.5">
                  <p className="md:hidden font-bold">Type:</p>
                  <p className="col-span-2">{transaction.transaction_type}</p>
                </TableCell>
                <TableCell className="grid grid-cols-3 md:table-cell text-[#676D88]  font-semibold p-2.5">
                  <p className="md:hidden font-bold">Quantity:</p>
                  <p className="col-span-2">
                    {transaction.quantity ? transaction.quantity : "N/A"}
                  </p>
                </TableCell>
                <TableCell className="grid grid-cols-3 md:table-cell p-2.5">
                  <p className="md:hidden font-bold">Status:</p>
                  {transaction.status && transaction.status === "processed" && (
                    <div className="w-auto">
                      {" "}
                      {/* Set this to a fixed width if needed */}
                      <p className="border-[0.5px] border-[#43BA64] text-[#43BA64] px-3 rounded-lg inline-block">
                        Successful
                      </p>
                    </div>
                  )}
                  {transaction.status && transaction.status === "initiated" && (
                    <div className="w-auto">
                      {" "}
                      {/* Set this to a fixed width if needed */}
                      <p className="border-[0.5px] border-dukiaGold text-dukiaGold px-3 rounded-lg inline-block">
                        Initiated
                      </p>
                    </div>
                  )}
                  {!transaction.status && (
                    <div className="w-auto">
                      {" "}
                      {/* Set this to a fixed width if needed */}
                      <p className="border-[0.5px] border-[#FF5757] text-[#FF5757] px-3 rounded-lg inline-block">
                        Failed
                      </p>
                    </div>
                  )}
                </TableCell>

                <TableCell className="grid grid-cols-3 md:table-cell text-[#676D88]  font-semibold p-2.5">
                  <p className="md:hidden font-bold">Amount:</p>
                  <p className="col-span-2">
                    {formatNairaAmount(transaction.amount)}
                  </p>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
