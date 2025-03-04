import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 max-w-7xl mx-auto px-6 py-16">
        {/* Sidebar (Left Column) */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white rounded-xl shadow-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-down">
            Quick Links
          </h2>
          {[
            { to: "/student/mentorship", text: "Find a Mentor", emoji: "👩‍🏫" },
            { to: "/student/internships", text: "Browse Internships", emoji: "💼" },
            { to: "/student/events", text: "Upcoming Events", emoji: "📅" },
            { to: "/student/resources", text: "Access Resources", emoji: "📚" },
            { to: "/student/discussions", text: "Join Discussions", emoji: "💬" },
            { to: "/student/profile", text: "View Profile", emoji: "👤" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{link.emoji}</span>
                <span className="text-md font-semibold text-gray-800">{link.text}</span>
              </div>
              <span className="text-blue-600 font-bold text-lg">→</span>
            </Link>
          ))}
        </aside>

        {/* Main Content Area (Right Side) */}
        <main className="flex-1 md:ml-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
            Student Dashboard
          </h1>
          {/* Placeholder for future content */}
          <div className="bg-white p-6 rounded-xl shadow-lg h-full flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Welcome to your dashboard! Select an option from the sidebar to get started.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDashboard;