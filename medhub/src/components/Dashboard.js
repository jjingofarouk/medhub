import React, { useState, useEffect } from 'react';
import Calendar from './Calendar'; // Import the Calendar component
import './Dashboard.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import only Link here


const Dashboard = () => {
  const [medicalTip, setMedicalTip] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [healthStats, setHealthStats] = useState({ steps: 0, waterIntake: 0 });

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

    // Function to select a random health tip
    const getRandomTip = () => {
      const randomIndex = Math.floor(Math.random() * healthTips.length);
      return healthTips[randomIndex];
    };

    setMedicalTip(getRandomTip());
  }, []);

  useEffect(() => {
    // Example data for notifications
    const fetchedNotifications = [
      "New message from Dr. Jjingo regarding your recent appointment.",
      "Reminder: Health screening is scheduled for September 15th.",
    ];
    setNotifications(fetchedNotifications);

    // Example data for upcoming appointments
    const fetchedAppointments = [
      { date: '2024-09-12', time: '10:00 AM', doctor: 'Dr. Johnson' },
      { date: '2024-09-14', time: '02:00 PM', doctor: 'Dr. Lee' },
    ];
    setUpcomingAppointments(fetchedAppointments);

    // Example data for health statistics
    const fetchedStats = { steps: 8000, waterIntake: 2.5 };
    setHealthStats(fetchedStats);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="tile-container">
          <div className="tile">
            <h2>Consultation Overview</h2>
            <p>Manage and view your consultations with doctors.</p>
            <Link to="/consultations" className="button">View Consultations</Link>
          </div>
          <div className="tile">
            <h2>Appointments</h2>
            <p>Book and manage your appointments easily.</p>
            <Link to="/book-appointment" className="button">View Appointments</Link>
            </div>
        </div>

        <div className="dashboard-items">
          <div className="dashboard-item medical-tip">
            <h2>Medical Tip of the Day</h2>
            <p>{medicalTip}</p>
          </div>

          <div className="dashboard-item calendar-card">
            <h2>Appointment Calendar</h2>
            <Calendar />
          </div>

          <div className="dashboard-item progress-container">
            <h2>Progress Towards Health Goals</h2>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>
            <p>70% to your goal!</p>
          </div>

          <div className="dashboard-item activity-feed">
            <h2>Activity Feed</h2>
            <ul>
              <li>Consultation with Dr. Smith booked for September 10th.</li>
              <li>Health goal achieved: 5,000 steps a day for a week.</li>
              <li>Appointment with Dr. Johnson completed on August 30th.</li>
            </ul>
          </div>

          {/* New Feature: Notifications */}
          <div className="dashboard-item notifications">
            <h2>Notifications</h2>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </div>

          {/* New Feature: Upcoming Appointments */}
          <div className="dashboard-item upcoming-appointments">
            <h2>Upcoming Appointments</h2>
            <ul>
              {upcomingAppointments.map((appointment, index) => (
                <li key={index}>
                  {appointment.date} at {appointment.time} with {appointment.doctor}
                </li>
              ))}
            </ul>
          </div>

          {/* New Feature: Health Statistics */}
          <div className="dashboard-item health-stats">
            <h2>Health Statistics</h2>
            <div className="stats-item">
              <h3>Steps</h3>
              <p>{healthStats.steps} steps</p>
            </div>
            <div className="stats-item">
              <h3>Water Intake</h3>
              <p>{healthStats.waterIntake} liters</p>
            </div>
          </div>

          {/* New Feature: User Profile Summary */}
          <div className="dashboard-item profile-summary">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Member Since:</strong> January 2023</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
