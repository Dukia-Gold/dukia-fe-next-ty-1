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

  const clearUserDetails = async () => {
    await clearTransactions();
    await clearUser();
  };

  const checkLoginStatus = async () => {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      await clearUserDetails();
      window.location.href = "/";
    }
    return loggedIn;
  };

  return checkLoginStatus;
};
