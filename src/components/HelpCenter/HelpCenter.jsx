// src/components/HelpCenter/HelpCenter.jsx
import React from "react";
import aboutImg from "../../assets/OneToTen/5.jpg";  // go up two levels from HelpCenter folder
import Question from "../Question/Question.jsx";    // relative path inside components
import Navbar from "../Navbar/Navbar.jsx";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";
import ServiceFAQs from "../ServiceFAQs/ServiceFAQs.jsx";
import Footer from "../Footer/Footer.jsx";

const HelpCenter = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={aboutImg}
          alt="Help Center"
          className="h-full w-full object-cover object-top absolute -top-10 inset-x-0 z-0"
        />
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Help Center
          </h1>
          <p className="max-w-xl text-sm md:text-base text-gray-300">
            Odio cras proin proin sit quis fringilla aliquet. Consectetur
            elementum viverra egestas egestas nulla ullamcorper varius quam.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Question />
      <ContactInfo />
      <ServiceFAQs />
      <Footer />
    </div>
  );
};

export default HelpCenter;
