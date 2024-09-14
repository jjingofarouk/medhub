import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Video, MessageSquare, Calendar, Activity, FileText, HelpCircle } from 'lucide-react';
import './StartConsultation.css';

const StartConsultation = () => {
  return (
      <div className="bg-[#f6f6f6] min-h-screen font-sans">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-[#023246] mb-6">Start a Consultation</h1>
          <p className="text-[#287094] mb-8">Select the type of consultation or explore more options below:</p>
          
          <div className="grid-container">
            {[
              { to: "/video", icon: Video, text: "Start Video Call" },
              { to: "/chat", icon: MessageSquare, text: "Start Chat" },
              { to: "/schedule-appointment", icon: Calendar, text: "Schedule an Appointment" },
            ].map((option, index) => (
              <Link key={index} to={option.to} className="grid-item">
                <option.icon className="icon" />
                <span className="text">{option.text}</span>
              </Link>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#023246] mb-4">More Options</h2>
            <ul className="space-y-4">
              {[
                { to: "/symptom-checker", icon: Activity, text: "Use Symptom Checker" },
                { to: "/medical-history", icon: FileText, text: "View Medical History" },
              ].map((option, index) => (
                <li key={index}>
                  <Link to={option.to} className="flex items-center text-[#287094] hover:text-[#023246] transition-colors duration-300">
                    <option.icon className="w-5 h-5 mr-2" />
                    <span>{option.text}</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#d4d4ce] bg-opacity-30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#023246] mb-4">Need Help?</h2>
            <p className="text-[#287094] mb-6">If you need assistance with starting a consultation, please contact our support team.</p>
            <Link to="/contact-us" className="inline-flex items-center bg-[#287094] text-white px-6 py-3 rounded-lg hover:bg-[#023246] transition-colors duration-300">
              <HelpCircle className="w-5 h-5 mr-2" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default StartConsultation;
