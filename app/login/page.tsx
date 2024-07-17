"use client"

import { useFetchGoldPriceDollars } from "@/api/fetchGoldPrice";
import AuthBox from "@/components/authComponents/AuthBox";

const LoginPage = () => {
  const fetchGoldPriceDollars = useFetchGoldPriceDollars();

  return (
    <main className="bg-white dark:bg-dukiaDark pt-52 md:pt-44 pb-[1.41rem] flex justify-center">
      <AuthBox />
    </main>
  );
};

export default LoginPage;
