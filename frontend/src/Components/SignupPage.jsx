import { useState } from "react";
import useSignup from "../Hook/useSignup"; // adjust path if needed
import toast from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "Rahul RP",
    email: "rahkhgkjulrp@example.com",
    password: "12345678",
    confirmpassword: "12345678",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { signup, loading } = useSignup();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Submit button clicked");

    const { name, email, password, confirmpassword } = formData;
    console.log("Form Data:", formData);

    if (!name || !email || !password || !confirmpassword) {
      toast.error("All fields are required");
      console.warn("⚠️ Missing fields");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      console.warn("⚠️ Password mismatch");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      console.warn("⚠️ Password too short");
      return;
    }

    try {
      const result = await signup({ name, email, password });
      console.log("Signup result:", result);

      if (result.success) {
        toast.success(result.message || "Signup successful!");
        // Redirect to login or home page
         window.location.href = "/login"; // Uncomment if you want to redirect
      } else {
        toast.error(result.message || "Signup failed, please try again.");
      }
    } catch (err) {
      console.error("❌ Signup error:", err);
      toast.error("Something went wrong during signup.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Create Account</h2>

        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmpassword"
            autoComplete="new-password"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => {
                setShowPassword((prev) => !prev);
                console.log("👁️ Show password:", !showPassword);
              }}
            />
            Show password
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
