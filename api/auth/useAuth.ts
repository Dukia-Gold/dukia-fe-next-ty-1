"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string, deviceName: string) => {
    try {
      const response = await axios.post(
        "https://api.dukiapreciousmetals.co/api/login",
        {
          email,
          password,
          device_name: deviceName,
        }
      );
      const { access_token, user: userData } = response.data;

      setToken(access_token.plainTextToken);
      setUser(userData);
      
      cookie.set("auth-token", access_token.plainTextToken, { expires: 1 }); // expires in 1 day
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // console.log(error.response.data.message);
        setError(error.message);
      } else {
        setError("Unknown error");
      }
    }

    // console.log(token);
  };

  const logout = async () => {
    cookie.remove("auth-token");
    router.push('/login');
    // try {
    //   await axios.post("https://api.dukiapreciousmetals.co/api/logout");
    //   cookie.remove("auth-token");
    //   setUser(null);
    // } catch (error) {
    //   setError(error instanceof Error ? error.message : "Unknown error");
    // }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return { token, user, error, login, logout };
};

export default useAuth;
