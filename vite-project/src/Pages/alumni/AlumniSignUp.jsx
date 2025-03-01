import React, { useState } from "react";
import Footer from "../../Components/Footer";
const AlumniSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    alumniId: "",
    graduationYear: "",
    department: "",
    status: "",
    jobTitle: "",
    jobLocation: "",
    jobField: "",
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
          Alumni Sign Up
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
            type="text"
            name="alumniId"
            placeholder="Alumni ID"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="number"
            name="graduationYear"
            placeholder="Graduation Year"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          {/* Department Selection */}
          <select
            name="department"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Biomedical Engineering">Biomedical Engineering</option>
          </select>

          {/* Employment Status */}
          <select
            name="status"
            required
            className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Select Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>

          {/* Job Details (Visible if Employed) */}
          {formData.status === "Employed" && (
            <>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="jobLocation"
                placeholder="Job Location"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
              <select
                name="jobField"
                required
                className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="">Select Job Field</option>
                <option value="Same as Learned Department">Same as Learned Department</option>
                <option value="Other Fields">Other Fields</option>
              </select>
            </>
          )}

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

export default AlumniSignUp;
