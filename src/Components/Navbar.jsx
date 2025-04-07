import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

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
        className={`fixed inset-0 bg-white z-40 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      ></div>

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
        className="object-contain w-20 h-auto" // smaller logo
      />
    </Link>
  </div>
</div>

          {/* Menu Content */}
<div
  className={`fixed inset-0 flex items-center justify-center z-45 transition-opacity duration-500 ${
    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
>
<ul className="text-black text-4xl space-y-6 text-center">
  <li>
    <Link
      to="/"
      className={isActive("/") ? "text-[#f4cc08] font-semibold" : ""}
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/services"
      className={isActive("/services") ? "text-[#f4cc08] font-semibold" : ""}
      onClick={() => setIsMenuOpen(false)}
    >
      Services
    </Link>
  </li>
  <li>
    <Link
      to="/routes"
      className={isActive("/routes") ? "text-[#f4cc08] font-semibold" : ""}
      onClick={() => setIsMenuOpen(false)}
    >
      See Routes
    </Link>
  </li>
  <li>
    <Link
      to="/aboutus"
      className={isActive("/aboutus") ? "text-[#f4cc08] font-semibold" : ""}
      onClick={() => setIsMenuOpen(false)}
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className={isActive("/contact") ? "text-[#f4cc08] font-semibold" : ""}
      onClick={() => setIsMenuOpen(false)}
    >
      Contact
    </Link>
  </li>
</ul>

</div>

        </div>
      </nav>

      <div className="h-24" />
    </div>
  );
};

export default Navbar;