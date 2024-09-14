import React from 'react';

const ManageAppointmentsForm = () => {
  return (
    <form method="POST" action="/book-appointment" id="appointment-form">
      <h2>Book Appointment</h2>
      <div className="form-group">
        <label htmlFor="patient_id">Patient ID:</label>
        <input type="text" id="patient_id" name="patient_id" required />
      </div>
      <div className="form-group">
        <label htmlFor="doctor_id">Doctor ID:</label>
        <input type="text" id="doctor_id" name="doctor_id" required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason for Visit:</label>
        <select id="reason" name="reason" required>
          <option value="Consultation">Consultation</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Routine Check-up">Routine Check-up</option>
          <option value="Urgent Care">Urgent Care</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="appointment_type">Appointment Type:</label>
        <select id="appointment_type" name="appointment_type" required>
          <option value="In-Person">In-Person</option>
          <option value="Telehealth">Telehealth</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="communication_method">Preferred Communication Method:</label>
        <select id="communication_method" name="communication_method" required>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="App Notification">App Notification</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" required>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Additional Notes:</label>
        <textarea id="notes" name="notes" rows="3" placeholder="Any additional information or special instructions..."></textarea>
      </div>
      <input type="submit" value="Book Appointment" />
    </form>
  );
};

export default ManageAppointmentsForm;
