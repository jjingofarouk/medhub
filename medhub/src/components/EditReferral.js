import React, { useState } from 'react';
import axios from 'axios'; // For form submission

function EditReferral() {
  const [formData, setFormData] = useState({
    referring_doctor_id: '',
    referred_patient_id: '',
    reason: '',
    status: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    axios.post('/api/update-referral', formData)
      .then(response => {
        alert('Referral updated successfully!');
        // Optionally redirect or refresh
      })
      .catch(error => {
        console.error('There was an error updating the referral!', error);
      });
  };

  return (
    <main>
      <h1>Edit Referral</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="referring_doctor_id">Referring Doctor ID:</label><br />
          <input
            type="text"
            id="referring_doctor_id"
            name="referring_doctor_id"
            value={formData.referring_doctor_id}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="referred_patient_id">Referred Patient ID:</label><br />
          <input
            type="text"
            id="referred_patient_id"
            name="referred_patient_id"
            value={formData.referred_patient_id}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label><br />
          <input
            type="text"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="status">Status:</label><br />
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select><br />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label><br />
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Additional notes or instructions"
          /><br />
        </div>
        <button type="submit">Update Referral</button>
      </form>
      <a href="/view-referrals">Back to Referrals</a>
    </main>
  );
}

export default EditReferral;
