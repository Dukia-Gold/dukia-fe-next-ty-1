import Cookies from "js-cookie";
import { verifyAuth } from "./auth";

const checkAuth = async () => {
  const token = Cookies.get("xZ9qTn7p_K4wVd1Lm_jx8s2A");
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
