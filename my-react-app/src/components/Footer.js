// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 MedHub - All rights reserved. <span className="footer-link">Privacy Policy</span></p>
      <div className="footer-links">
        <p>&copy; 2024 MedHub. All rights reserved.</p>
        <Link to="/">Back Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/support">Get Support</Link>
        <Link to="/view-medical-history">View Medical History</Link>
        <Link to="/forum">Forums</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
