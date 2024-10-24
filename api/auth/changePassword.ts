import { toast } from "@/components/ui/use-toast";
import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";
import axios from "axios";
import { useCookies } from "react-cookie";
import cookie from "js-cookie";

const ChangePassword = () => {
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const [cookies] = useCookies(["xZ9qTn7p_K4wVd1Lm_jx8s2A"]);
  const jwtToken = cookies["xZ9qTn7p_K4wVd1Lm_jx8s2A"];

  const changeUserPassword = async (
    token: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      updateLoading(true);
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/reset-password",
        method: "POST",
        data: {
          token: token,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      updateLoading(false);
      toast({
        title: "Password Changed Successful",
        description:
          "Your password has been changed successfully. You can now log in with your new password.",
      });
      if (jwtToken) {
        cookie.set("xZ9qTn7p_K4wVd1Lm_jx8s2A", "", {
          expires: new Date(0),
        });
      }
      window.location.href = "/login";
    } catch (error: any) {
      updateLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error.response?.data?.message ||
          "There was a problem connecting to the server. Please check your internet connection and try again.",
      });
    }
  };

  return changeUserPassword;
};

export default ChangePassword;
