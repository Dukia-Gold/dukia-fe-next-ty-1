"use client"

import { userStore } from "@/store/user";
import { useState } from "react";



const TransactionPage = () => {
  const [accountStatementModal, setAccountStatementModal] = useState(false);
  const closeModal = () => setAccountStatementModal(false);

  const user = userStore((state: any) => state.user);

  return <div>TransactionPage</div>;
};

export default TransactionPage;
