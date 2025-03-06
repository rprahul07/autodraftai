import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ name, email, password }) => {
    // const success = handleInputErrors({ username, password, confirmpassword });
    const success = true;
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ username, password, confirmpassword }) {
  if (!username || !password || !confirmpassword) {
    toast.error("Fill all the required fields");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Password and confirm password should match");
    return false;
  }
  if (password.length < 6) {
    toast.error("The minimum password length is 6 characters");
    return false;
  }

  return true;
}
