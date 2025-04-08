import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {/* Background Overlay */}
      <div
  className={`fixed inset-0 flex flex-col items-start justify-center z-45 transition-transform duration-500 ${
    isMenuOpen ? "translate-y-0 visible" : "translate-y-full invisible"
  }`}
  style={{ 
    pointerEvents: isMenuOpen ? 'auto' : 'none',
    background: '#bd410c', // Terra cotta/rust color
    padding: '0 2rem'
  }}
>
</div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="px-4 py-6 transition-[height] duration-500 ease-in-out overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Left section (Hamburger Menu) */}
            <div className="flex items-center">
              <button
                className="p-1 rounded-full transition-colors flex items-center justify-center z-50"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>

            {/* Right section (Logo) */}
            <div className="flex items-center justify-end">
              <Link to="/">
                <img
                  src="Images/Adobe Express - file.png"
                  alt="Logo"
                  className="object-contain w-20 h-auto"
                />
              </Link>
            </div>
          </div>

          {/* Menu Content */}
          <div
            className={`fixed inset-0 flex flex-col items-start justify-center z-45 transition-opacity duration-500 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ 
              pointerEvents: isMenuOpen ? 'auto' : 'none',
              background: '#bd410c', // Terra cotta/rust color like in the reference
              padding: '0 2rem'
            }}
          >
            <div className="absolute top-6 right-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-black hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
            
            {/* <div className="text-2xl mb-4 font-light">outpost</div> */}
            
            <ul className="text-black space-y-1 text-left w-full">
              {[
                { to: "/", label: "HOME", delay: 0.1 },
                { to: "/services", label: "SERVICES", delay: 0.2 },
                { to: "/aboutus", label: "ABOUT", delay: 0.3 },
                { to: "/contact", label: "CONTACT", delay: 0.4 },
                { to: "/routes", label: "SEE ROUTES", delay: 0.5 },
              ].map(({ to, label, delay }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block text-6xl font-regular tracking-wide transition-all ${
                      isActive(to) ? "text-white" : "text-black"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <TextAnimate 
                      animation="slideUp" 
                      by="word" 
                      delay={delay}
                      className="block overflow-hidden"
                    >
                      {label}
                    </TextAnimate>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
  {/* Contact Info */}
<div
  className={`absolute bottom-16 left-8 text-black text-sm transition-all duration-500 ${
    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
  } delay-200`}
>
  <div>INFO@ADCHARIOT.COM</div>
  <div>+91 773 290 0099</div>
</div>

{/* Social Icons */}
<div
  className={`absolute bottom-8 left-8 flex space-x-4 transition-all duration-500 ${
    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
  } delay-500`}
>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <Facebook size={24} className="text-black hover:text-[#f4cc08] transition-colors" />
  </a>
  <a href="https://www.instagram.com/adchariot.in/" target="_blank" rel="noopener noreferrer">
    <Instagram size={24} className="text-black hover:text-[#f4cc08] transition-colors" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <Twitter size={24} className="text-black hover:text-[#f4cc08] transition-colors" />
  </a>
  <a href="mailto:info@adchariot.com">
    <Mail size={24} className="text-black hover:text-[#f4cc08] transition-colors" />
  </a>
</div>

            
          </div>
        </div>
      </nav>

      <div className="h-24" />
    </div>
  );
};

export default Navbar;