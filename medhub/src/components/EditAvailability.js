import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API requests

function EditAvailability() {
  const [formData, setFormData] = useState({
    availability_date: '',
    availability_time_start: '',
    availability_time_end: '',
    break_start_time: '',
    break_end_time: '',
    notes: ''
  });

  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    // Fetch existing availability data
    axios.get('/api/availability')
      .then(response => {
        setAvailability(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the availability data!', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate start time and end time
    if (formData.availability_time_start >= formData.availability_time_end) {
      alert('End time must be later than start time.');
      return;
    }
    // Submit the form data
    axios.post('/api/update-availability', formData)
      .then(response => {
        alert('Availability updated successfully!');
        // Optionally, fetch the updated data
        axios.get('/api/availability')
          .then(response => {
            setAvailability(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the updated availability data!', error);
          });
      })
      .catch(error => {
        console.error('There was an error updating the availability!', error);
      });
  };

  return (
    <div className="container">
      <h1>Edit Availability</h1>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">Update Your Availability</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="availability_date">Select Date:</label>
              <input type="date" id="availability_date" name="availability_date" value={formData.availability_date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="availability_time_start">Start Time:</label>
              <input type="time" id="availability_time_start" name="availability_time_start" value={formData.availability_time_start} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="availability_time_end">End Time:</label>
              <input type="time" id="availability_time_end" name="availability_time_end" value={formData.availability_time_end} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="break_start_time">Break Start Time (Optional):</label>
              <input type="time" id="break_start_time" name="break_start_time" value={formData.break_start_time} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="break_end_time">Break End Time (Optional):</label>
              <input type="time" id="break_end_time" name="break_end_time" value={formData.break_end_time} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Additional Notes:</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="e.g., special instructions, room changes, etc."></textarea>
            </div>
            <input type="submit" value="Update Availability" className="btn btn-info" />
          </div>
        </div>
      </form>

      <div className="card">
        <div className="card-header">Current Availability</div>
        <div className="card-body">
          <table className="availability-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Break Start Time</th>
                <th>Break End Time</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {availability.map((item, index) => (
                <tr key={index}>
                  <td>{item.availability_date}</td>
                  <td>{item.availability_time_start}</td>
                  <td>{item.availability_time_end}</td>
                  <td>{item.break_start_time}</td>
                  <td>{item.break_end_time}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><small>Note: The table above shows your current availability. Update your details using the form above.</small></p>
        </div>
      </div>

      <a href="/" className="btn btn-secondary">Back to Home</a>
    </div>
  );
}

export default EditAvailability;
