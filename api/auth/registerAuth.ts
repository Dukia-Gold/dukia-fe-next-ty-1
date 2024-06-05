import axios from "axios";
import React from "react";

const registerAuth = () => {
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
