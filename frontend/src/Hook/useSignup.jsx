// src/Hook/useSignup.js
import { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/api/user/register", {
        name, email, password,
      });

      if (response.status === 201) {
        return { success: true, message: "Signup successful!" };
      } else {
        return { success: false, message: "Signup failed." };
      }
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: "Server error." };
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;
