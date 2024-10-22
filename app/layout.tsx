import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/landingPageComponents/Header";
import Footer from "@/components/landingPageComponents/Footer";
import { Toaster } from "@/components/ui/toaster";
import LoadingModal from "@/components/loadingModal";
import DepositModal from "@/components/modals/DepositModal";
import SuccessfulDepositModal from "@/components/modals/SuccessfulDepositModal";
import WithdrawalModal from "@/components/modals/WithdrawalModal";
import LoginModal from "@/components/modals/authModals/LoginModal";
import Copyright from "@/components/landingPageComponents/Copyright";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukia Gold Precious Metals Refining | Buy and Sell Gold in Nigeria",
  description:
    "Dukia Gold is a leading gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa. Buy and sell gold with us.",
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
    "precious metals",
    "refining",
    "bullion",
    "investment",
    "Nigeria",
    "West Africa",
  ].join(", "),
  authors: [
    {
      name: "Dukia Gold",
      url: "https://www.dukiagold.com",
    },
  ],
  robots: [
    "index",
    "follow",
    "max-snippet:-1",
    "max-image-preview:large",
    "max-video-preview:-1",
  ].join(", "),
  openGraph: {
    title: "Dukia Gold Precious Metals Refining | Buy and Sell Gold in Nigeria",
    description:
      "Dukia Gold is a leading gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa. Buy and sell gold with us.",
    url: "https://www.dukiagold.com",
    siteName: "Dukia Gold",
    images: [
      {
        url: "https://www.dukiagold.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Dukia Gold Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DukiaGold",
    creator: "@DukiaGoldApp",
  },
  // alternates: [
  //   {
  //     lang: "en-US",
  //     href: "https://www.dukiagold.com",
  //   },
  // ],
};

export default function RootLayout({
  auth,
  children,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen bg-white`}>
        <Header />
        <main className="min-h-screen flex flex-col justify-between">
          {auth}

          {children}

          <Toaster />
          <LoadingModal />

          <LoginModal />

          <>
            <DepositModal />
            <SuccessfulDepositModal />
          </>

          <>
            <WithdrawalModal />
            {/* <ConfirmWithdrawalModal /> */}
            <SuccessfulDepositModal />
          </>

          <Footer />

          <Copyright />

          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
