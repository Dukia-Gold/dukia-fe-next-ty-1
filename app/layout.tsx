import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/landingPageComponents/Header";
import Footer from "@/components/landingPageComponents/Footer";
import { Toaster } from "@/components/ui/toaster";
import LoadingModal from "@/components/loadingModal";
import DepositModal from "@/components/modals/DepositModal";
import SuccessfulDepositModal from "@/components/modals/SuccessfulDepositModal";
import WithdrawalModal from "@/components/modals/WithdrawalModal";
import ConfirmWithdrawalModal from "@/components/modals/ConfirmWithdrawalModal";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukia Gold Precious Metals Refining ",
  description:
    "Buy and sell gold with Dukia Gold,  a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa. ",
  keywords: [
    "dukia",
    "gold",
    "buy",
    "sell",
    "pool allocated",
    "buy gold",
    "sell gold",
    "Gold in Nigeria",
    "Philoro",
  ].join(", "),
  // authors: ["Dukia Gold - Precious Metals Refining Co. Ltd."],
  // themeColor: "#000000",
  // language: "English",
  robots: ["index", "follow"].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen`}>
        <Header />
        <main className="min-h-screen flex flex-col justify-between">
          {children}

          <Toaster />
          <LoadingModal />

          <>
            <DepositModal />
            <SuccessfulDepositModal />
          </>

          <>
            <WithdrawalModal />
            <ConfirmWithdrawalModal />
            <SuccessfulDepositModal />
          </>

          <Footer />
        </main>
      </body>
    </html>
  );
}
