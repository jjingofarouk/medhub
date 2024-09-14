import React, { useState } from 'react';

const CancelAppointmentForm = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [cancellationReason, setCancellationReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentId) {
      alert('Please enter a valid Appointment ID.');
    } else {
      // Implement form submission logic
    }
  };

  return (
    <form method="POST" action="/cancel-appointment" id="cancel-form" onSubmit={handleSubmit}>
      <h2>Cancel Appointment</h2>
      <div className="form-group">
        <label htmlFor="appointment_id">Appointment ID:</label>
        <input
          type="text"
          id="appointment_id"
          name="appointment_id"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          required
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
        >
          <option value="">Select a reason</option>
          <option value="Schedule Conflict">Schedule Conflict</option>
          <option value="Personal Reasons">Personal Reasons</option>
          <option value="Doctor Availability">Doctor Availability</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <input type="submit" value="Cancel Appointment" className="btn btn-info" id="cancel-btn" />
    </form>
  );
};

export default CancelAppointmentForm;
