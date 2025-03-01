import React, { useState } from "react";
import Footer from "../../Components/Footer";

const FacultySignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    employmentYear: "",
    qualification: "",
    campusRole: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    alert("Registration Successful!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Faculty Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Campus Email"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="number"
            name="employmentYear"
            placeholder="Year of Employment"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {/* Qualification Selection */}
          <select
            name="qualification"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Qualification</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>

          {/* Role Selection */}
          <select
            name="campusRole"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Role in Campus</option>
            <option value="Professor">Professor</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Researcher">Researcher</option>
            <option value="Administrator">Administrator</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default FacultySignUp;
