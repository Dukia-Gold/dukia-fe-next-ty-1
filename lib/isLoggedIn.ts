import { transactionStore } from "@/store/transactions";
import { userStore } from "@/store/user";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Check if the user is logged in
const isLoggedIn = () => {
  const token = Cookies.get("auth-token");
  return !!token;
};

export const useCheckLoginStatus = () => {
  const router = useRouter();
  const clearTransactions = transactionStore(
    (state: any) => state.clearTransactions
  );
  const clearUser = userStore((state: any) => state.clearUser);

  const checkLoginStatus = (router: any) => {
    const loggedIn = isLoggedIn();
    console.log("Logged in:", loggedIn);
    if (!loggedIn) {
      console.log("Not logged in, clearing transactions and user...");
      clearTransactions();
      console.log("Cleared transactions...");
      clearUser();
      console.log("Cleared user...");
      router.push("/");
      console.log("Redirected to home...");
    }
    return loggedIn;
  };

  return checkLoginStatus;
};
