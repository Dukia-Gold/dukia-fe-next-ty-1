import { useToast } from "@/components/ui/use-toast";
import useLoadingStore from "@/store/loadingStore";
import axios from "axios";

const NewsletterAPI = () => {
  const updateLoading = useLoadingStore((state: any) => state.setLoading);
  const { toast } = useToast();

  const handleSubscribe = async (formData: any) => {
    try {
      updateLoading(true);
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
      updateLoading(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || "An error occurred.",
      });
      updateLoading(false);
    }
  };

  return handleSubscribe;
};

export default NewsletterAPI;
