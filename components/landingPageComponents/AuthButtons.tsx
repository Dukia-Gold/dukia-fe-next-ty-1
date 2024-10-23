import { useState, useEffect } from "react";
import Link from "next/link";
import checkAuth from "@/lib/checkAuth";

const AuthButtons = ({ updateModals }: { updateModals: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status every second
    const checkAuthInterval = async () => {
      // Make the function async
      setIsAuthenticated(await checkAuth()); // Await the promise
      setIsLoading(false);
    };

    const interval = setInterval(checkAuthInterval, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div className="font-semibold py-3">Checking Status...</div>; // or any loading indicator
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
      {/* <Link href="/login"> */}
      <button
        onClick={() => updateModals({ register: true })}
        className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white font-semibold py-3 px-4 rounded-lg"
      >
        Register
      </button>
      {/* </Link> */}
    </div>
  );
};

export default AuthButtons;
