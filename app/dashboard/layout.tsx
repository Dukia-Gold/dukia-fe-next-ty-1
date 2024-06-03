import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukia Gold",
  description:
    "Buy and sell gold with Dukia Gold, a gold and precious metals refiner and the only full-service bullion-merchant in Nigeria, West Africa.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <nav>
        {/* Dashboard navigation here */}
       </nav>
       <main className={inter.className}>
         {children}
       </main>
     </div>
  );
}

// /app/dashboard/layout.tsx
// import { ReactNode } from 'react';

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   return (
//     <div>
//       <nav>
//         {/* Dashboard navigation here */}
//       </nav>
//       <main>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

