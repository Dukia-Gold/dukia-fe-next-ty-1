import Cookies from "js-cookie";
import { verifyAuth } from "./auth";

const checkAuth = async () => {
  const token = Cookies.get("auth-token");
  if (token) {
    try {
      const verifiedToken = await verifyAuth(token);
      return !!verifiedToken;
    } catch (err) {
      //   console.log(err);
      return false;
    }
  }
  return false;
};

export default checkAuth;
