// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React 
import './Footer.css'; // Import the CSS file


const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <p>&copy; 2024 MedHub. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/support">Get Support</Link>
        <Link to="/view-medical-history">View Medical History</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
