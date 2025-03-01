// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [userType, setUserType] = useState(""); // Store user type selection
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSignUp = () => {
//     if (userType) {
//       navigate(`/signup/${userType}`); // Redirect based on user type
//     } else {
//       alert("Please select a user type.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//           Sign Up
//         </h1>
        
//         <label htmlFor="userType" className="block text-gray-700 font-medium mb-2">
//           Select User Type
//         </label>
        
//         <select
//           id="userType"
//           className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={userType}
//           onChange={(e) => setUserType(e.target.value)}
//         >
//           <option value="">-- Choose User Type --</option>
//           <option value="student">Student</option>
//           <option value="alumni">Alumni</option>
//           <option value="faculty">Faculty</option>
//           <option value="company">Company</option>
//         </select>

//         <button
//           className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//           onClick={handleSignUp}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState(""); // Store user type selection
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = () => {
    if (userType) {
      navigate(`/signup/${userType}`); // Redirect based on user type
    } else {
      alert("Please select a user type.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        {/* Motivational Section */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Join ASTUALUMNILINK Today!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Connect with alumni, students, faculty, and industry professionals. 
          Expand your network, explore opportunities, and collaborate to build a stronger ASTU community.
        </p>

        {/* User Role Information */}
        <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
          Choose Your Role
        </h2>
        <div className="mb-6">
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <strong className="text-blue-600">🎓 Student:</strong>  
            Find mentors, internships, and job opportunities.
          </div>
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <strong className="text-blue-600">👩‍🎓 Alumni:</strong>  
            Connect with students, share knowledge, and offer mentorship.
          </div>
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <strong className="text-blue-600">📚 Faculty:</strong>  
            Guide students and collaborate with alumni & industry partners.
          </div>
          <div className="bg-gray-100 p-3 rounded-md">
            <strong className="text-blue-600">🏢 Company:</strong>  
            Post jobs, recruit top talent, and offer internships.
          </div>
        </div>

        {/* Role Selection Dropdown */}
        <label htmlFor="userType" className="block text-gray-700 font-medium mb-2 text-center">
          Select User Type
        </label>
        <select
          id="userType"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="">-- Choose User Type --</option>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="faculty">Faculty</option>
          <option value="company">Company</option>
        </select>

        {/* Continue Button */}
        <button
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleSignUp}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SignUp;

