import React from 'react';
import Footer from './Footer';
import ManageAppointmentsForm from './ManageAppointmentsForm';

const ManageAppointmentsPage = () => {
  return (
    <div className="container">
      <h1>Manage Appointments</h1>
      <ManageAppointmentsForm />
      <a href="/">Back to Home</a>
      <div className="note">Please ensure all details are correct before submitting.</div>
      <Footer />
    </div>
  );
};

export default ManageAppointmentsPage;
