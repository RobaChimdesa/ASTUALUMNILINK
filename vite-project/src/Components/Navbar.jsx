import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">ASTUALUMNILINK</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
            <Link to="/signin" className="hover:text-gray-200">Sign In</Link>
            <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 p-3">
          <Link to="/" className="block py-2 text-center hover:text-gray-300" onClick={() => setIsOpen(!isOpen)}>Home</Link>
          <Link to="/signup" className="block py-2 text-center hover:text-gray-300" onClick={() => setIsOpen(!isOpen)}>Sign Up</Link>
          <Link to="/signin" className="block py-2 text-center hover:text-gray-300" onClick={() => setIsOpen(!isOpen)}>Sign In</Link>
          {/* <Link to="/dashboard" className="block py-2 text-center hover:text-gray-300">Dashboard</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
