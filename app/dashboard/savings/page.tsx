"use client";

import SavingsCard from "@/components/savingsComponents/SavingsCard";
import SavingsList from "@/components/savingsComponents/SavingsList";
import TransactionHistory from "@/components/savingsComponents/TransactionHistory";

const SavingsPage = () => {
  return (
    <main className="flex justify-between px-4 py-7 bg-white rounded-2xl">
      <div className="space-y-11 w-[40%]">
        <SavingsCard />
        <TransactionHistory />
      </div>

      <SavingsList />
    </main>
  );
};

export default SavingsPage;
