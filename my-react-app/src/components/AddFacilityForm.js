import React, { useState } from 'react';

const AddFacilityForm = () => {
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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} size={32} />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} size={32} />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} size={32} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} size={32} />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input type="text" name="website" value={formData.website} onChange={handleChange} size={32} />
      </div>
      <div>
        <label htmlFor="facility_type">Facility Type</label>
        <select name="facility_type" value={formData.facility_type} onChange={handleChange}>
          <option value="">Select Facility Type</option>
          <option value="hospital">Hospital</option>
          <option value="clinic">Clinic</option>
          {/* Add other facility types here */}
        </select>
      </div>
      <div>
        <label htmlFor="services">Services</label>
        <textarea name="services" value={formData.services} onChange={handleChange} rows={3}></textarea>
      </div>
      <button type="submit">Add Facility</button>
    </form>
  );
};

export default AddFacilityForm;
