import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">&copy; 2024 ASTUALUMNILINK. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
