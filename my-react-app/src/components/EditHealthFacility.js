import React, { useState } from 'react';
import axios from 'axios'; // For form submission

function EditHealthFacility() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    facility_type: '',
    services: ''
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
    axios.post('/api/update-facility', formData)
      .then(response => {
        alert('Facility updated successfully!');
        // Optionally redirect or refresh
      })
      .catch(error => {
        console.error('There was an error updating the facility!', error);
      });
  };

  return (
    <div className="container">
      <h1>Edit Health Facility</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="address">Address:</label><br />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="website">Website:</label><br />
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="facility_type">Facility Type:</label><br />
          <select
            id="facility_type"
            name="facility_type"
            value={formData.facility_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Facility Type</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="pharmacy">Pharmacy</option>
            {/* Add more options as needed */}
          </select><br />
        </div>
        <div>
          <label htmlFor="services">Services:</label><br />
          <textarea
            id="services"
            name="services"
            value={formData.services}
            onChange={handleChange}
            rows="3"
            placeholder="e.g., emergency care, outpatient services, etc."
            required
          /><br />
        </div>
        <button type="submit">Update Facility</button>
      </form>
      <a href="/view-health-directory">Back to Directory</a>
    </div>
  );
}

export default EditHealthFacility;
