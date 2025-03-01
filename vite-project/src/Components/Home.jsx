import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import AboutUs from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 text-center">
      {/* <Navbar /> */}
      <section className="py-16  text-blue-200 ">
      <h1 className="text-xl md:text-5xl font-extrabold text-center text-red-500   p-4 inline-block">  
  Welcome to <span className="text-red-400">ASTUALUMNILINK  </span>
</h1>          <p className="text-lg mt-4 text-blue-500 font-bold">Connect with alumni, students, faculty, and industry professionals.</p>
        <a href="/signup" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-bold rounded-lg">Get Started</a>
      </section>

      <div className="bg-gray-100 min-h-screen">
      
      {/* <Home/> */}
     <div className="max-w-6xl mx-auto px-6 py-12">
       <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
         About ASTUALUMNILINK
       </h1>

       {/* Mission Section */}
       <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
         <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
         <p className="text-gray-700 leading-relaxed">
           Our mission is to create a strong bridge between students, alumni, faculty, 
           and industry professionals by fostering mentorship, networking, and career opportunities.
           ASTUALUMNILINK empowers the ASTU community by connecting people who share knowledge, 
           support growth, and build lasting professional relationships.
         </p>
       </section>

       {/* Vision Section */}
       <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
         <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
         <p className="text-gray-700 leading-relaxed">
           We envision a future where every ASTU graduate is connected with the right mentors, 
           career opportunities, and professional networks. By leveraging technology, 
           we aim to build an ecosystem where collaboration and knowledge-sharing drive success.
         </p>
       </section>

       {/* Goals Section */}
       <section className="bg-white p-6 rounded-lg shadow-lg">
         <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Goals</h2>
         <ul className="list-disc list-inside text-gray-700 leading-relaxed">
           <li>Provide students with mentorship opportunities from alumni and faculty.</li>
           <li>Facilitate job and internship opportunities for graduates.</li>
           <li>Enhance professional networking within the ASTU community.</li>
           <li>Support lifelong learning and industry collaboration.</li>
           <li>Encourage knowledge-sharing through discussions and events.</li>
         </ul>
       </section>
     </div>

   </div>
 
      <Footer />
    </div>
  );
};

export default Home;