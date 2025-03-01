import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from "../../components/Footer";
import Footer from "../../Components/Footer";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Simulating user authentication & redirecting based on role
    const userRole = getUserRole(formData.email);

    if (userRole) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userRole", userRole);
      alert("Login Successful!");
      navigate(getRedirectPath(userRole));
    } else {
      setError("Invalid email or password.");
    }
  };

  // Mock function to determine role (replace with backend authentication)
  const getUserRole = (email) => {
    if (email.includes("@student.astu.edu")) return "student";
    if (email.includes("@alumni.astu.edu")) return "alumni";
    if (email.includes("@faculty.astu.edu")) return "faculty";
    if (email.includes("@company.com")) return "company";
    if (email.includes("@admin.astu.edu")) return "admin";
    return null;
  };

  // Redirect paths based on role
  const getRedirectPath = (role) => {
    switch (role) {
      case "student":
        return "/dashboard-student";
      case "alumni":
        return "/dashboard-alumni";
      case "faculty":
        return "/dashboard-faculty";
      case "company":
        return "/dashboard-company";
      case "admin":
        return "/admin-panel";
      default:
        return "/";
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>

          <p className="text-gray-600 text-sm text-center">
            Don't have an account? <a href="/signup" className="text-blue-600 font-semibold">Sign Up</a>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
