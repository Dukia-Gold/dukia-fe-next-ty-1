"use client";

import StatementOfAccountModal from "@/components/transactionsComponents/StatementOfAccountModal";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import { useState } from "react";

const TransactionPage = () => {
  const [accountStatementModal, setAccountStatementModal] = useState(false);
  const closeModal = () => setAccountStatementModal(false);

  const user = userStore((state: any) => state.user);

  return (
    <main className="w-full bg-dukiaGrey text-dukiaBlue h-full mb-40 lg:mb-24">
      {user ? (
        <div>
          <button
            onClick={() => setAccountStatementModal(true)}
            className="py-3.5 px-6 text-sm font-semibold bg-dukiaBlue text-white rounded-lg"
          >
            Download Statement of Account
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-center">
          <Spin size="large" />
        </div>
      )}
      
      <StatementOfAccountModal isOpen={accountStatementModal} closeModal={closeModal} />
    </main>
  );
};

export default TransactionPage;
