"use client";

import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoldPrice from "@/components/dashboardComponents/GoldPrice";
import MobileHeader from "@/components/dashboardComponents/MobileHeader";
import Sidebar from "@/components/dashboardComponents/Sidebar";
import TopBar from "@/components/dashboardComponents/TopBar";
import StatementOfAccountModal from "@/components/transactionsComponents/StatementOfAccountModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { userStore } from "@/store/user";
import { useModalStore } from "@/store/modalStore";
import ConfirmModal from "@/components/modals/ConfirmModal";
import TransactionCodeModal from "@/components/modals/TransactionCodeModal";
import SellModal from "@/components/modals/SellModal";

export default function DashboardLayout({
  catalogue,
  children,
}: Readonly<{
  catalogue: React.ReactNode;
  children: React.ReactNode;
}>) {
  const user = userStore((state: any) => state.user);

  const { isOpen, modalOptions, closeModal } = useModalStore();

  const handleConfirm = () => {
    if (modalOptions.onConfirm) modalOptions.onConfirm();
    closeModal();
  };

  return (
    <div
      id="dashboardLayout"
      className="flex flex-col lg:flex-row pt-0 overflow-hidden"
    >
      {catalogue}
      <Sidebar />

      <main className="w-full lg:px-5 2xl:px-10 bg-dukiaGrey pt-4 h-screen">
        <GoldPrice />
        <MobileHeader />
        <TopBar />

        <ScrollArea
          className={`${
            user && user.is_verified === 0
              ? "mt-2 h-[calc(100vh-315px)]"
              : "mt-4 h-[calc(100vh-222px)]"
          } bg-dukiaGrey`}
        >
          {children}
        </ScrollArea>

        <StatementOfAccountModal />

        <Toaster />
        <ToastContainer theme="colored" />

        <TransactionCodeModal />

        <SellModal />

        <ConfirmModal
          isOpen={isOpen}
          type={modalOptions.type}
          title={modalOptions.title}
          message={modalOptions.message}
          onConfirm={handleConfirm}
          onCancel={closeModal}
        />
      </main>
    </div>
  );
}
