"use client"

import { extractParams } from "@/lib/extractParams";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;
    const params = extractParams(url);

    if (params) {
      setEmail(params.email);
      setToken(params.token);

      console.log(email, token);
    }
  }, [router]);

  return (
    <main className="bg-white dark:bg-dukiaDark pt-52 md:pt-44 pb-[1.41rem] flex justify-center">
      ResetPassword
    </main>
  );
};

export default ResetPasswordPage;
