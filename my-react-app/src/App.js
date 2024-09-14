import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import CTAButtons from './components/CTAButtons';
import Footer from './components/Footer';
import Calendar from './components/Calendar'; // Include if you have a Calendar component
import './styles/App.css';

function App() {
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
    <div className="App">
      <Header />
      <div className="main-content">
        <InfoContainer />
        <div className="dashboard">
          <div className="dashboard-item">
            <h2>Medical Tip of the Day</h2>
            <p>{medicalTip}</p>
          </div>
          <div className="dashboard-item calendar-card">
            <h2>Appointment Calendar</h2>
            <Calendar />
          </div>
        </div>
        <CTAButtons />
      </div>
      <Footer />
    </div>
  );
}

export default App;
