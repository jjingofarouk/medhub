import React, { useState,  } from 'react';

function AddPatient() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    district: '',
    email: '',
    country_code: '',
    phone_number: '',
    occupation: '',
    marital_status: '',
    marital_status_other_input: '',
    smoking_status: '',
    alcohol_consumption: '',
    physical_activity: '',
    family_medical_history: '',
    family_medical_history_details: '',
    emergency_contact: '',
    emergency_phone: '',
    emergency_contact_relationship: '',
    other_relationship_input: '',
    language_preference: '',
    other_language_input: '',
    insurance_coverage: '',
    insurance_provider: '',
    insurance_policy_number: '',
    medical_history: '',
    other_medical_history_input: '',
    primary_care_physician: '',
    current_medications: '',
    medication_details_input: '',
    medication_duration: '',
    surgical_history: '',
    surgery_details_input: '',
    allergies: '',
    allergy_details_input: '',
    consent_share_info: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
    console.log('Patient Data:', formData);
  };



  return (
    <div className="container">
      <div className="sidebar">
        {/* Add sidebar content if needed */}
      </div>
      <form onSubmit={handleSubmit}>
        {/* Example form field */}
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {/* Include other form fields and use toggleOtherInput if needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPatient;
