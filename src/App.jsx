import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HelpCenter from './components/HelpCenter/HelpCenter';
import BookAppointment from './components/BookAppointment/BookAppointment';
import PostGallery from './components/PostGallery/PostGallery';
import PostAccount from './components/PostAccount/PostAccount'; 
import LoginPortal from './components/LoginPortal/LoginPortal';
import Signup from './components/Signup/Signup'; 
import Doctor from './components/Doctor/Doctor';
import PatientPage from './components/PatientPage/PateintPage';
import Message from './components/Message/Message';
import ChatUI from './components/ChatUI/ChatUI'; // Import ChatUI component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/gallery" element={<PostGallery />} />
        <Route path="/account" element={<PostAccount />} />
        <Route path="/login" element={<LoginPortal />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/chat" element={<ChatUI />} />

        {/* Dashboard currently same as Doctor */}
        <Route path="/dashboard" element={<Doctor />} />

        {/* Catch-all route for unknown pages */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
