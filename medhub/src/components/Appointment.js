import React from 'react';

function AppointmentForm() {
  const handleProceed = () => {
    // Implement your logic for showing appointment details
  };

  return (
    <div className="section">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="appointment_id">Enter Appointment ID:</label>
        <input type="text" id="appointment_id" name="appointment_id" required />
        <button type="button" className="button" onClick={handleProceed}>Proceed</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
