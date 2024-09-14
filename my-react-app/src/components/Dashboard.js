// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar'; // Assuming you'll create a Calendar component

const Dashboard = () => {
  const [medicalTip, setMedicalTip] = useState('');

  useEffect(() => {
    const healthTips = [
      "Drink plenty of water throughout the day.",
      "Aim for at least 30 minutes of exercise each day.",
      "Eat a balanced diet rich in fruits and vegetables.",
      "Get at least 7-8 hours of sleep each night.",
      "Practice mindfulness and stress-reducing techniques.",
      "Avoid excessive consumption of sugary and processed foods.",
      "Maintain a healthy weight through diet and exercise.",
      "Schedule regular check-ups with your healthcare provider.",
      "Avoid smoking and limit alcohol consumption.",
      "Stay up to date with vaccinations and preventive care."
    ];

    function getRandomTip() {
      const randomIndex = Math.floor(Math.random() * healthTips.length);
      return healthTips[randomIndex];
    }

    setMedicalTip(getRandomTip());
  }, []);

  return (
    <div className="dashboard">
      <div className="tile-container">
        <div className="tile">
          <h2>Consultation Overview</h2>
          <p>Manage and view your consultations with doctors.</p>
          <a href="/consultations" className="button">View Consultations</a>
        </div>
        <div className="tile">
          <h2>Appointments</h2>
          <p>Book and manage your appointments easily.</p>
          <a href="/book-appointment" className="button">Book Appointment</a>
        </div>
        <div className="dashboard-item">
          <h2>Medical Tip of the Day</h2>
          <p>{medicalTip}</p>
        </div>
      </div>

      <div className="dashboard-item calendar-card">
        <h2>Appointment Calendar</h2>
        <Calendar />
      </div>

      <div className="progress-container">
        <h2>Progress Towards Health Goals</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '70%' }}></div>
        </div>
        <p>70% to your goal!</p>
      </div>

      <div className="activity-feed">
        <h2>Activity Feed</h2>
        <ul>
          <li>Consultation with Dr. Smith booked for September 10th.</li>
          <li>Health goal achieved: 5,000 steps a day for a week.</li>
          <li>Appointment with Dr. Johnson completed on August 30th.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
