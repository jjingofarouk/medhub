// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"><h2>MedHub</h2></Link>
      <Link to="/manage-appointments">Manage Appointments</Link>
      <Link to="/book-appointment">Book Appointment</Link>
      <Link to="/rebook-appointment">ReBook Appointment</Link>
      <Link to="/cancel-appointment">Cancel Appointment</Link>
      <Link to="/view-doctor-availability">View Doctor Availability</Link>
      <Link to="/edit-availability" className="active">Edit Availability</Link>
      <Link to="/consultations">Start Consultation</Link>
      <Link to="/view-medical-history">View Medical History</Link>
    </div>
  );
};

export default Sidebar;
