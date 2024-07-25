"use client";

import ChangePassword from "@/api/auth/changePassword";
import { extractParams } from "@/lib/extractParams";
import { validatePassword } from "@/lib/passwordValidator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [validationMessages, setValidationMessages] = useState({
    length: "Password must be at least 8 characters long.",
    uppercase: "Password must contain at least one uppercase letter.",
    lowercase: "Password must contain at least one lowercase letter.",
    number: "Password must contain at least one number.",
    special: "Password must contain at least one special character.",
  });

  const changeUserPassword = ChangePassword();
  const router = useRouter();

  const isFormValid = () => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password) &&
      password === passwordConfirmation
    );
  };

  useEffect(() => {
    const url = window.location.href;
    const params = extractParams(url);

    if (params) {
      setEmail(params.email);
      setToken(params.token);

      console.log(params.email, params.token);
    }
  }, [router]);

  return (
    <main className="bg-white dark:bg-dukiaDark pt-52 md:pt-44 pb-[1.41rem] flex justify-center">
      <div className="bg-[#F3F3F4] dark:bg-dukiaBlue/[50%] dark:text-white flex flex-col min-h-[35rem] gap-6 items-center rounded-2xl px-5 w-[90%] md:w-[30rem] md:px-10 pt-4 pb-10 text-sm">
        <input
          type="email"
          value={email}
          disabled
          className="py-2 px-4 border-2 outline-none"
        />

        <div className="space-y-1 flex flex-col">
          <label htmlFor="passwordConfirmation">New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidationMessages(validatePassword(e.target.value));
            }}
            className="py-2 px-4 border-2 outline-none"
            placeholder="New Password"
          />
          {password && (
            <div className="text-red-500 dark:text-red-900 text-xs mt-2 space-y-1 pl-6">
              {Object.values(validationMessages).map(
                (msg, index) => msg && <p key={index}>{msg}</p>
              )}
            </div>
          )}
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="passwordConfirmation">Confirm New Password:</label>
          <input
            name="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="py-2 px-4 border-2 outline-none"
            placeholder="Confirm New Password"
          />
          {password &&
            passwordConfirmation &&
            password !== passwordConfirmation && (
              <p className="text-red-600">Passwords do not match</p>
            )}
        </div>

        <button className="py-3.5 px-6 bg-dukiaBlue text-white rounded-lg" disabled={!isFormValid()} onClick={() => {changeUserPassword(token, email, password, passwordConfirmation)}}>Change password</button>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
