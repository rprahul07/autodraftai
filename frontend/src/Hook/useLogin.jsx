// src/Hooks/useLogin.js
import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5001/api/user/login", {
        email,
        password,
      });

      console.log("✅ Login successful:", response.data);

      setLoading(false);
      return {
        success: true,
        message: response.data.message || "Login successful",
        token: response.data.token, // If backend sends a token
      };
    } catch (err) {
      setLoading(false);
      const errorMsg =
        err.response?.data?.message || "Login failed, please try again.";
      setError(errorMsg);
      console.error("❌ Login error:", errorMsg);
      return { success: false, message: errorMsg };
    }
  };

  return { login, loading, error };
};

export default useLogin;
