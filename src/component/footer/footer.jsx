import React from 'react'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section contact-info">
        <h3>Contact Information</h3>
        <p>Kenya at Samwel Karanja</p>
        <p>Email: samwelnjoroge757@gmail.com</p>
        <p>Phone: +254793878068</p>
      </div>

      <div className="footer-section customer-service">
        <h3>Customer Service</h3>
        <ul>
          <li><Link to="/service-and-warranty">Service and Warranty</Link></li>
          <li><Link to="/returns-and-exchanges">Returns and Exchanges</Link></li>
          <li><Link to="/secured-online-payment">Secured Online Payment</Link></li>
          <li><Link to="/shipping-and-delivery">Shipping & Delivery</Link></li>
          <li><Link to="/cash-on-delivery">Cash on Delivery</Link></li>
          <li><Link to="/cookies-settings">Cookies Settings</Link></li>
        </ul>
      </div>

      <div className="footer-section help-support">
        <h3>Help & Support</h3>
        <ul>
          <li><Link to="/anti-fraud-disclaimer">Anti-Fraud Disclaimer</Link></li>
          <li><Link to="/responsible-disclosure-policy">Responsible Disclosure Policy</Link></li>
          <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/find-a-store">Find A Store</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  )
}
