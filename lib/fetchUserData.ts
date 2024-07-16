import { toast } from "@/components/ui/use-toast";
import { useCookies } from "react-cookie";
import { GetUrl } from "./getUrl";
import { userStore } from "@/store/user";

const useFetchUserData = () => {
  const updateUser = userStore((state: any) => state.updateUser);
  const [cookies] = useCookies(["auth-token"]);

  const token = cookies["auth-token"];
  const url = GetUrl();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.dukiapreciousmetals.co/api/v2/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      updateUser(data); // Update the user in the user store
    } catch (error: any) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast({
          variant: "destructive",
          title: "Network Error",
          description:
            "There was a problem connecting to the server. Please check your internet connection and try again.",
        });
      } else {
        if (token && url === "/dashboard") {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "An error occurred! Please refresh the dashboard.",
          });
        }
      }
    }
  };

  return; // Return the user data
};

export default useFetchUserData;
