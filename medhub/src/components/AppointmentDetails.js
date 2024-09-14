import React, { useState } from 'react';

function AppointmentDetails() {
  const [showDetails, setShowDetails] = useState(false);

  const startChat = () => {
    // Implement your logic to start chat
  };

  const startVideoCall = () => {
    // Implement your logic to start video call
  };

  return (
    <div id="appointment-details" className="section" style={{ display: showDetails ? 'block' : 'none' }}>
      <h3>Appointment Details:</h3>
      <p><strong>Doctor:</strong> Dr. John Doe</p>
      <p><strong>Date:</strong> 2024-09-08</p>
      <p><strong>Time:</strong> 10:00 AM</p>
      <button type="button" className="button" onClick={startChat}>Start Chat</button>
      <button type="button" className="button" onClick={startVideoCall}>Start Video Call</button>
    </div>
  );
}

export default AppointmentDetails;
