import React, { useState } from 'react';
import axios from 'axios'; // For form submission

function EditHealthMonitoringRecord() {
  const [formData, setFormData] = useState({
    date: '',
    blood_pressure: '',
    heart_rate: '',
    temperature: '',
    weight: '',
    height: '',
    additional_notes: ''
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
    axios.post('/api/update-health-monitoring-record', formData)
      .then(response => {
        alert('Record updated successfully!');
        // Optionally redirect or refresh
      })
      .catch(error => {
        console.error('There was an error updating the record!', error);
      });
  };

  return (
    <main>
      <h1>Edit Health Monitoring Record</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label><br />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="blood_pressure">Blood Pressure:</label><br />
          <input
            type="text"
            id="blood_pressure"
            name="blood_pressure"
            value={formData.blood_pressure}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="heart_rate">Heart Rate:</label><br />
          <input
            type="text"
            id="heart_rate"
            name="heart_rate"
            value={formData.heart_rate}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="temperature">Temperature:</label><br />
          <input
            type="text"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label><br />
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="height">Height:</label><br />
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="additional_notes">Additional Notes:</label><br />
          <textarea
            id="additional_notes"
            name="additional_notes"
            value={formData.additional_notes}
            onChange={handleChange}
            rows="3"
            placeholder="e.g., observations, comments, etc."
          /><br />
        </div>
        <button type="submit">Update Record</button>
      </form>
    </main>
  );
}

export default EditHealthMonitoringRecord;
