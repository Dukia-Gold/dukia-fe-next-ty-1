import { User } from "@/types/user";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useFetchUserData = () => {
  const [user, setUser] = useState<User | null>(null); // Use the User type
  const [cookies] = useCookies(['auth-token']);

  const token = cookies['auth-token'];

  const fetchData = async () => {
    try {
      const response = await axios({
        url: "https://api.dukiapreciousmetals.co/api/v2/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include the token in the request headers
        },
      });

      setUser(response.data); // Set the fetched user data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  return user; // Return the user data
};

export default useFetchUserData;
