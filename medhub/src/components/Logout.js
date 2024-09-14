import React from 'react';
import './LogoutPage.css'; // Import the CSS file for styling

const LogoutPage = () => {
  return (
    <div>
      <button className="sidebar-toggle" id="sidebarToggle">&#9776;</button>

      <div className="main-content">
        <h1>Logout</h1>
        <div className="summary-card">
          <h2>You have been logged out</h2>
          <p>Thank you for using MedHub. We hope to see you again soon.</p>
          <a href="/login" className="button">Login Again</a>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
