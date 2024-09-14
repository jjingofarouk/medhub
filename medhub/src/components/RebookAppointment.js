import React, { useState } from 'react';
import './RebookAppointment.css'; // Import the CSS file

function RebookAppointment() {
  const [formData, setFormData] = useState({
    appointment_id: '',
    new_date: '',
    new_time: '',
    new_reason: '',
    new_appointment_type: '',
    new_communication_method: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmRebook = () => {
    // Handle form submission here
    // For example, send a POST request with formData

    // Hide the modal
    setShowModal(false);
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div className="rebook-container">
      <h1>Rebook Appointment</h1>
      <form onSubmit={handleSubmit} className="rebook-form">
        <h2 className="form-title">ReBook Appointment</h2>
        <div className="form-group">
          <label htmlFor="appointment_id">Appointment ID:</label>
          <input
            type="text"
            id="appointment_id"
            name="appointment_id"
            value={formData.appointment_id}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new_date">New Date:</label>
          <input
            type="date"
            id="new_date"
            name="new_date"
            value={formData.new_date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new_time">New Time:</label>
          <input
            type="time"
            id="new_time"
            name="new_time"
            value={formData.new_time}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new_reason">Reason for Rebooking:</label>
          <select
            id="new_reason"
            name="new_reason"
            value={formData.new_reason}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select a reason</option>
            <option value="Schedule Conflict">Schedule Conflict</option>
            <option value="Personal Reasons">Personal Reasons</option>
            <option value="Doctor Availability">Doctor Availability</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="new_appointment_type">New Appointment Type:</label>
          <select
            id="new_appointment_type"
            name="new_appointment_type"
            value={formData.new_appointment_type}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="In-Person">In-Person</option>
            <option value="Telehealth">Telehealth</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="new_communication_method">New Preferred Communication Method:</label>
          <select
            id="new_communication_method"
            name="new_communication_method"
            value={formData.new_communication_method}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="App Notification">App Notification</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Rebook Appointment</button>
        </div>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Confirm ReBooking</h5>
              <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to rebook this appointment with the new details?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={confirmRebook}>ReBook Appointment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RebookAppointment;
