import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/About";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/signUp";
import StudentSignUp from "./Pages/student/StudentSignUp";
import AlumniSignUp from "./Pages/alumni/AlumniSignUp";
import FacultySignUp from "./Pages/faculty/FacultySignUp";
import CompanySignUp from "./Pages/company/CompanySignUp";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import StudentDashboard from "./Pages/student/StudentDashboard";




const App = ()=>{
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutUs/>} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup/student" element={<StudentSignUp/>} />
            <Route path="/signup/alumni" element={<AlumniSignUp/>} />
            <Route path="/signup/faculty" element={<FacultySignUp/>} />
            <Route path="/signup/company" element={<CompanySignUp/>} />
            <Route path="/dashboard-student" element={<StudentDashboard/>} />
            {/* <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<FAQ/>} /> */}
          </Routes>
        </div>
        {/* <AboutUs/>
        <Footer/>
       */}
      
      </div>
    </Router>
  );
};

export default App;