import { transactionStore } from "@/store/transactions";
import { userStore } from "@/store/user";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Check if the user is logged in
const isLoggedIn = () => {
  const token = Cookies.get("xZ9qTn7p_K4wVd1Lm_jx8s2A");
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
