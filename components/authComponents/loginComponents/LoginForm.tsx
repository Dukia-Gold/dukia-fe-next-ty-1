import useAuth from "@/api/auth/useAuth";

const LoginForm = () => {
  const { login, error, loginLoading } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const deviceName = "device-name"; // Assume a default device name for now
    await login(email, password, deviceName);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4 text-dukiaBlue text-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="py-4 px-6 outline-none placeholder:text-dukiaBlue/[50%] border border-dukiaBlue/[15%] rounded-lg"
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
          <input
            className="py-4 px-6 outline-none placeholder:text-dukiaBlue/[50%] border border-dukiaBlue/[15%] rounded-lg"
            required
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        {error && <div style={{ color: "red" }}>{error}</div>}

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
