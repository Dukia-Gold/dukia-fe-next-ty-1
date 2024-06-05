import axios from "axios";
import React from "react";

const registerAuth = () => {
  const registerIndividual = async (formData: any) => {
    const data = new FormData();
    for (const key in FormData) {
      if (formData[key] instanceof File) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      // const response = await fetch(
      //   "https://api.dukiapreciousmetals.co/api/register",
      //   {
      //     method: "POST",

      //     body: JSON.stringify(data),
      //   }
      // );
      const reponse = await axios({
        url: "https://api.dukiapreciousmetals.co/api/register",
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const response = await axios.post(
        "https://api.dukiapreciousmetals.co/api/register",
        {
          body: JSON.stringify(data),
        }
      );
      // const result = await response.json();
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const registerJoint = async (data: any) => {
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

export default registerAuth;
