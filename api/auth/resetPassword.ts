import { toast } from "@/components/ui/use-toast";
import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

const ResetPassword = () => {
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const updateModals = useModalsStore((state: any) => state.updateModals);
  const user = userStore((state: any) => state.user);
  const [cookies] = useCookies(["auth-token"]);
  const token = cookies["auth-token"];

  const resetUserPassword = async () => {
    try {
      updateLoading(true);
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/auth/password-reset",
        method: "POST",
        data: {
          email: user.email,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      updateLoading(false);
      toast({
        title: "Password Reset Successful",
        description:
          "A Reset Password Link has been sent to your email address. Please check your email and follow the instructions to reset your password.",
      });
      updateModals({ resetPassword: false });
      // router.push("/login");
    } catch (error: any) {
      updateLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "There was a problem connecting to the server. Please check your internet connection and try again.",
      });
    }
  };

  return resetUserPassword;
};

export default ResetPassword;
