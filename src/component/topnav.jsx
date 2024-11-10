import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaShoppingCart, FaTimes } from "react-icons/fa"; 
import "./css/topnav.css";

export const Topnav = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="topnav">
      <nav className="navbar">
        
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
        </div>

        
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch size={13} color="#3498db" className="search-icon" />
          
        </div>

        {/* Auth Links */}
        <div className={`auth-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="/login" className="auth-link">
            <FaUser size={10} /> Login
          </a>
          <a href="/register" className="auth-link">
            <FaUser size={10} /> Register
          </a>
        </div>

        
        <div className={`cart-icon ${isMobileMenuOpen ? "active" : ""}`}>
          <FaShoppingCart size={18} />
        </div>
      </nav>
    </header>
  );
};
