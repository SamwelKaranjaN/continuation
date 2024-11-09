import React from "react";
import "./css/topnav.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaShoppingCart } from "react-icons/fa"; // Import necessary icons

export const Topnav = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <header className="topnav">
      <nav className="navbar">
        {/* Hamburger menu (only shows on mobile) */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <FaBars size={24} color="#fff" />
        </div>

        {/* Navigation Links - Visible when 'active' class is added */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Search Input */}
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch size={13} color="#3498db" className="search-icon" />
        </div>


        {/* Auth Links */}
        <div className="auth-links">
          <a href="/login" className="auth-link">
            <FaUser size={10} /> Login
          </a>
          <a href="/register" className="auth-link">
            <FaUser size={10} /> Register
          </a>
          
        {/* Cart Icon */}
        <div className="cart-icon">
          <FaShoppingCart size={18} />
        </div>
        </div>
      </nav>
    </header>
  );
};
