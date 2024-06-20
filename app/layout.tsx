import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/landingPageComponents/Header";
import Footer from "@/components/landingPageComponents/Footer";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Dukia Gold Precious Metals Refining ",
  description: "Buy and sell gold with Dukia Gold,  a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa. ",
  keywords: ['dukia', 'gold', 'buy', 'sell', 'pool allocated', 'buy gold', 'sell gold', 'Gold in Nigeria', 'Philoro'].join(', '),
  // authors: ["Dukia Gold - Precious Metals Refining Co. Ltd."],
  // themeColor: "#000000",
  // language: "English",
  robots: ["index", "follow"].join(', '),
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
          <Footer />
        </main>
        </body>
    </html>
  );
}
