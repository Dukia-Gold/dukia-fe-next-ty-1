import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const NewsletterAPI = () => {
  const { toast } = useToast();

  const handleSubscribe = async (formData: any) => {
    try {
      await axios({
        url: "https://api.simpu.co/lists/form/e738cce6262d552588526f6a7beffc4c",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      toast({
        description: "Newsletter Subscribed Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occurred.",
      });
    }
  };

  return handleSubscribe;
};

export default NewsletterAPI;
