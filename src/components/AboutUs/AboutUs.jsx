import React from 'react';


import ImgAbout from '/src/components/ImgAbout/ImgAbout.jsx';
import StoryYear from '/src/components/StoryYear/StoryYear.jsx';
import HealthStat from '/src/components/HealthStat/HealthStat.jsx';
import ApproachSection from '/src/components/ApproachSection/ApproachSection.jsx';
import TeamSection from '/src/components/TeamSection/TeamSection.jsx';
import LearnMoreSection from '/src/components/LearnMoreSection/LearnMoreSection.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import Navbar from '/src/components/Navbar/Navbar.jsx';

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="/src/assets/thirtytofourty/33.jpg"
          alt="About Us"
          className="h-full w-full object-cover object-top absolute -top-10 inset-x-0 z-0"
        />
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 border-b border-gray-300 pb-2">
            About Us
          </h1>
          <p className="max-w-xl text-sm md:text-base text-gray-300">
            Odio cras proin sit quis fringilla aliquet. Consectetur elementum
            viverra egestas egestas nulla ullamcorper varius quam.
          </p>
        </div>
      </div>
      <div className="relative z-10 bg-white">
        <ImgAbout />
        <StoryYear />
        <HealthStat />
        <ApproachSection />
        <TeamSection />
        <LearnMoreSection />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
