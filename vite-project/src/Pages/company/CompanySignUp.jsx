import React, { useState } from "react";
import Footer from "../../Components/Footer";
const CompanySignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industryType: "",
    location: "",
    companySize: "",
    website: "",
    companyDescription: "",
    hrName: "",
    hrContact: "",
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
    alert("Company Registration Successful!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Company Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {/* Industry Type Selection */}
          <select
            name="industryType"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Industry Type</option>
            <option value="IT & Software">IT & Software</option>
            <option value="Finance & Banking">Finance & Banking</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Company Location"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {/* Company Size Selection */}
          <select
            name="companySize"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Company Size</option>
            <option value="Small (1-50 employees)">Small (1-50 employees)</option>
            <option value="Medium (51-500 employees)">Medium (51-500 employees)</option>
            <option value="Large (500+ employees)">Large (500+ employees)</option>
          </select>

          <input
            type="url"
            name="website"
            placeholder="Company Website (Optional)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          <textarea
            name="companyDescription"
            placeholder="Brief Company Description"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            rows="3"
          ></textarea>

          <input
            type="text"
            name="hrName"
            placeholder="HR Representative Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="hrContact"
            placeholder="HR Contact Number"
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

export default CompanySignUp;
