import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BookAppointment from './components/BookAppointment';
import Forum from './components/Forum';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';
import Logout from './components/Logout';
import Calendar from './components/Calendar';
import RebookAppointment from './components/RebookAppointment';
import CancelAppointment from './components/CancelAppointment';
import DoctorAvailability from './components/DoctorAvailability';
import EditAvailability from './components/EditAvailability';
import StartConsultation from './components/StartConsultation';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import ViewMedicalHistory from './components/ViewMedicalHistory';
import Profile from './components/Profile';
import HealthGoals from './components/HealthGoals';
import TrackHealthProgress from './components/TrackHealthProgress';
import DocumentHub from './components/DocumentHub';
import Referrals from './components/Referrals';
import Directory from './components/Directory';
import AddDoctor from './components/AddDoctor';
import AddPatient from './components/AddPatient';
import HealthMonitoring from './components/HealthMonitoring';
import ActivityFeed from './components/ActivityFeed';
import MedicalTips from './components/MedicalTips';
import Symptom from './components/Symptom';
import Book from './components/Book';
import Chat from './components/Chat';
import Video from './components/Video';
import NavBar from './components/NavBar';

// Inline styles for layout
const layoutStyles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#287094',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    padding: '1rem',
  },
  footer: {
    backgroundColor: '#023246',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
};

function App() {
  return (
    <Router>
      <div style={layoutStyles.appContainer}>
        <NavBar />
        <main style={layoutStyles.mainContent}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/appointments" element={<BookAppointment />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/:postId" element={<PostDetail />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/rebook-appointment" element={<RebookAppointment />} />
            <Route path="/cancel-appointment" element={<CancelAppointment />} />
            <Route path="/doctor-availability" element={<DoctorAvailability />} />
            <Route path="/edit-availability" element={<EditAvailability />} />
            <Route path="/consultations" element={<StartConsultation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/medical-history" element={<ViewMedicalHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/health-goals" element={<HealthGoals />} />
            <Route path="/track-health-progress" element={<TrackHealthProgress />} />
            <Route path="/document-hub" element={<DocumentHub />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/health-monitoring" element={<HealthMonitoring />} />
            <Route path="/activity-feed" element={<ActivityFeed />} />
            <Route path="/medical-tips" element={<MedicalTips />} />
            <Route path="/symptom-checker" element={<Symptom />} />
            <Route path="/book" element={<Book />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
