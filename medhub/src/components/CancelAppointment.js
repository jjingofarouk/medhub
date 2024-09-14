import React, { useState } from 'react';
import './CancelAppointment.css'; // Import the CSS file

const CancelAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [cancellationReason, setCancellationReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentId) {
      setError('Please enter a valid Appointment ID.');
    } else {
      setError('');
      // Implement form submission logic
      alert('Appointment canceled successfully!');
    }
  };

  return (
    <form method="POST" action="/cancel-appointment" id="cancel-form" onSubmit={handleSubmit} className="cancel-form">
      <h2 className="form-title">Cancel Appointment</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="appointment_id">Appointment ID:</label>
        <input
          type="text"
          id="appointment_id"
          name="appointment_id"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          required
          placeholder="Enter your appointment ID"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cancellation_reason">Reason for Cancellation:</label>
        <select
          id="cancellation_reason"
          name="cancellation_reason"
          value={cancellationReason}
          onChange={(e) => setCancellationReason(e.target.value)}
          required
          className="form-select"
        >
          <option value="">Select a reason</option>
          <option value="Schedule Conflict">Schedule Conflict</option>
          <option value="Personal Reasons">Personal Reasons</option>
          <option value="Doctor Availability">Doctor Availability</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="btn btn-info" id="cancel-btn">
        Cancel Appointment
      </button>
    </form>
  );
};

export default CancelAppointment;
