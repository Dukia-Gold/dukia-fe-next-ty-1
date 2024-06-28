import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";

const RegisterAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const registerIndividual = async (formData: any) => {
    try {
      setLoading(true);
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/register",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Individual Account Created Successfully",
        description:
          "Your Individual Account has been successfully created. Please, proceed to log in.",
      });
      setLoading(false);

      window.location.reload();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occured!",
      });
    }
  };

  const registerJoint = async (formData: any) => {
    try {
      setLoading(true);
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/joint-account/register",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      setLoading(false);
      window.location.reload();
      toast({
        title: "Joint Account Created Successfully",
        description:
          "Your Joint Account has been created. You can now login with the primary email address",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occured!",
      });
    }
  };

  const registerCorporate = async (formData: any) => {
    try {
      setLoading(true);
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/company/register",
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "application/json",
          },
      });

      setLoading(false);
      window.location.reload();
      toast({
        title: "Corporate Account Created Successfully",
        description:
          "Your Corporate Account has been created. You can now login with the primary email address",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occured!",
      });
    }
  };

  return { loading, registerIndividual, registerJoint, registerCorporate };
};

export default RegisterAuth;
