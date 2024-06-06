import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukia Gold",
  description: "Buy and sell gold with Dukia Gold, a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />

        {children}
        
        <Footer />
        </body>
    </html>
  );
}
