import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import components
import Home from './Pages/home/Home';
import Navbar from './Components/Navbar';
import Footer from './Pages/home/Footer/Footer';
import AboutUs from './Pages/home/aboutus/AboutUs';
import Contact from './Pages/home/contact/Contact';
import ServicesComponent from './Pages/home/services/Services';
import BelgaumMap from './Pages/home/maps/BelgaumMap';

const AppContent = () => {
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname === "/services") {
      return "#bd410c";
    }
    if (location.pathname === "/contact") {
      return "#f5f2d6";
    }
    return "#f4cc08";
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen transition-all duration-1000"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/routes" element={<BelgaumMap />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
