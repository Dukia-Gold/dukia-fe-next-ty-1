import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const AuthButtons = ({ updateModals }: { updateModals: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status here
    const checkAuth = () => {
      const token = Cookies.get("auth-token"); // or however you store your token
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="font-semibold py-3">
        Checking Status...
      </div>
    ); // or any loading indicator
  }

  if (isAuthenticated) {
    return (
      <Link href="/dashboard">
        <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white font-semibold py-3 px-5 rounded-lg">
          Return to Dashboard
        </button>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-7">
      <p
        onClick={() => updateModals({ login: true })}
        className="font-semibold text-dukiaGold hover:underline hover:cursor-pointer"
      >
        Login
      </p>
      <Link href="/login">
        <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white font-semibold py-3 px-4 rounded-lg">
          Register
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
