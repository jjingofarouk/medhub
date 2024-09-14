import React, { useState } from 'react';
import RebookAppointment from './RebookAppointment';
import CancelAppointmentForm from './CancelAppointmentForm';
import PatientAvailability from './PatientAvailability';
import DoctorAvailability from './DoctorAvailability';
import Book from './Book';
import Confetti from 'react-confetti'; // Add Confetti for celebration
import './Book.css'; // Import CSS file

const ManageAppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('book');
  const [taskComplete, setTaskComplete] = useState(false); // State for task completion (achievement)

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTaskCompletion = () => {
    setTaskComplete(true);
    setTimeout(() => setTaskComplete(false), 3000); // Hide achievement after 3 seconds
  };

  return (
    <div className="container">
      <h1>Manage Appointments</h1>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className={`progress-step ${activeTab === 'book' ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${activeTab === 'rebook' ? 'active' : ''}`}>2</div>
        <div className={`progress-step ${activeTab === 'cancel' ? 'active' : ''}`}>3</div>
        <div className={`progress-step ${activeTab === 'patient-availability' ? 'active' : ''}`}>4</div>
        <div className={`progress-step ${activeTab === 'doctor-availability' ? 'active' : ''}`}>5</div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'book' ? 'active' : ''}`}
          onClick={() => { handleTabChange('book'); handleTaskCompletion(); }} // Simulate task completion for Book
        >
          Book Appointment
        </button>
        <button
          className={`tab-button ${activeTab === 'rebook' ? 'active' : ''}`}
          onClick={() => handleTabChange('rebook')}
        >
          Rebook Appointment
        </button>
        <button
          className={`tab-button ${activeTab === 'cancel' ? 'active' : ''}`}
          onClick={() => handleTabChange('cancel')}
        >
          Cancel Appointment
        </button>
        <button
          className={`tab-button ${activeTab === 'patient-availability' ? 'active' : ''}`}
          onClick={() => handleTabChange('patient-availability')}
        >
          Patient Availability
        </button>
        <button
          className={`tab-button ${activeTab === 'doctor-availability' ? 'active' : ''}`}
          onClick={() => handleTabChange('doctor-availability')}
        >
          Doctor Availability
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'book' && <Book />}
        {activeTab === 'rebook' && <RebookAppointment />}
        {activeTab === 'cancel' && <CancelAppointmentForm />}
        {activeTab === 'patient-availability' && <PatientAvailability />}
        {activeTab === 'doctor-availability' && <DoctorAvailability />}
      </div>

      {/* Achievement Pop-Up */}
      {taskComplete && (
        <div className="achievement-popup">
          <h2>Achievement Unlocked!</h2>
          <p>You successfully booked an appointment!</p>
          <img src="/trophy.png" alt="trophy" />
        </div>
      )}

      {/* Confetti on task completion */}
      {taskComplete && <Confetti />}

      <a href="/" className="btn btn-secondary">Back to Home</a>
      <div className="note">Please ensure all details are correct before submitting.</div>
    </div>
  );
};

export default ManageAppointmentsPage;
