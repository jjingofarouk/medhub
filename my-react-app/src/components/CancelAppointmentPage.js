import React from 'react';
import CancelAppointmentForm from './CancelAppointmentForm';
import Footer from './Footer';

const CancelAppointmentPage = () => {
  return (
    <div className="container">
      <h1>Cancel Appointment</h1>
      <CancelAppointmentForm />
      <a href="/" className="btn btn-secondary">Back to Home</a>
      <Footer />
    </div>
  );
};

export default CancelAppointmentPage;
