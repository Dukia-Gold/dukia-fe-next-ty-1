import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";



const RegisterAuth = () => {
  const router = useRouter();

  const registerIndividual = async (formData: any) => {
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/register",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push('/login');
      // return response;
    } catch (error) {
      throw error;
    }
  };

  const registerJoint = async (formData: any) => {
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/joint-account/register",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        description: "Joint Account Created Successfully",
      });
      router.push('/login');
      // return response;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occured!",
      });
      throw error;
    }
  };

  const registerCorporate = async (data: any) => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  return { registerIndividual, registerJoint, registerCorporate };
};

export default RegisterAuth;
