// import React, { useEffect,useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false)
//   useEffect(() => {  
//     const handleScroll = () => {  
//         // Check scroll position  
//         if (window.scrollY > 50) {  
//             setScrolling(true);  
//         } else {  
//             setScrolling(false);  
//         }  
//     };  

//     window.addEventListener('scroll', handleScroll);  

//     return () => {  
//         window.removeEventListener('scroll', handleScroll);  
//     };  
// }, []); 

//   return (
//     // <nav className="fixed w-full transition-all  duration-300 ease-in-out 
//     // ${scrolling ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}
//     // bg-gray-100 text-black shadow-md">
//     <nav className={`fixed w-full text-white transition-all duration-300 ease-in-out ${scrolling ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>  
       
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-2xl font-bold hover:text-blue-700">ASTUALUMNILINK</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 ">
//             {/* <Link to="/" className="hover:text-gray-200">Home</Link> */}
//             <a href="#Home" className="hover:text-blue-700 ">Home</a>
//             <a href="#About" className="hover:text-blue-700 ">About Us</a>
//             <a href="#contact" className="hover:text-blue-700 ">Contact</a>
//             <Link to="/signup" className="hover:text-blue-700">Sign Up</Link>
//             <Link to="/signin" className="hover:text-blue-700">Sign In</Link>
//             {/* <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link> */}
            
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//             >
//               {isOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 shadow-lg p-3">
//            <a href="#Home" className="block py-2 text-center hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>Home</a>
//             <a href="#About" className="block py-2 text-center hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>About Us</a>
//             <a href="#contact" className="block py-2 text-center hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>Contact</a>
//           {/* <Link to="/" className="block py-2 text-center hover:text-gray-300" onClick={() => setIsOpen(!isOpen)}>Home</Link> */}
//           <Link to="/signup" className="block py-2 text-center hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>Sign Up</Link>
//           <Link to="/signin" className="block py-2 text-center hover:text-blue-700" onClick={() => setIsOpen(!isOpen)}>Sign In</Link>
//           {/* <Link to="/dashboard" className="block py-2 text-center hover:text-gray-300">Dashboard</Link> */}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolling ? "bg-gray-900 shadow-xl" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              ASTUALUMNILINK
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
            <Link
              to="/signup"
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-blue-400 focus:outline-none transition-transform duration-300 transform"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-xl animate-fade-in">
          <div className="flex flex-col items-center py-4 space-y-3">
            <a
              href="#Home"
              className="block py-2 text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#About"
              className="block py-2 text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/signup"
              className="block py-2 text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="block py-2 text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

