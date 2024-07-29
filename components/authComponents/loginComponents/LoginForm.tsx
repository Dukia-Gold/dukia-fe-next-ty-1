import useAuth from "@/api/auth/useAuth";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const { loginUser, loginLoading } = useAuth();
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const deviceName = "device-name"; // Assume a default device name for now
    await loginUser(email, password, deviceName);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4 text-dukiaBlue dark:text-white text-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="dark:bg-dukiaDark dark:border-dukiaGold/[25%] py-4 px-6 outline-none placeholder:text-dukiaBlue/[50%] dark:placeholder:text-white/[50%] border border-dukiaBlue/[15%] rounded-lg"
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="flex items-center pr-6 bg-white dark:bg-dukiaDark border border-dukiaBlue/[15%] dark:border-dukiaGold/[25%] rounded-lg">
            <input
              className="py-4 px-6 bg-transparent outline-none placeholder:text-dukiaBlue/[50%] dark:placeholder:text-white/[50%] rounded-lg w-full"
              required
              type={viewPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="***********"
            />
            {!viewPassword && (
              <Eye
                className="text-dukiaBlue/[50%] cursor-pointer"
                size={20}
                onClick={() => {
                  setViewPassword(true);
                }}
              />
            )}

            {viewPassword && (
              <EyeOff
                className="text-dukiaBlue/[50%] cursor-pointer"
                size={20}
                onClick={() => {
                  setViewPassword(false);
                }}
              />
            )}
          </div>
        </div>

        <p className="text-end">Forgot Password?</p>
      </div>

      <button
        type="submit"
        className="bg-dukiaBlue text-white py-3 font-semibold rounded-lg"
      >
        <p className={`${loginLoading ? "block" : "hidden"}`}>Loading</p>
        <p className={`${loginLoading ? "hidden" : "block"}`}>Log In</p>
      </button>
    </form>
  );
};

export default LoginForm;
