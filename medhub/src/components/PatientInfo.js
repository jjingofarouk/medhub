// PatientInfo.js
import React from 'react';

function PatientInfo({ patient }) {
  return (
    <div className="patient-info">
      <h2>Patient Information</h2>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Date of Birth:</strong> {patient.dob}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <p><strong>Address:</strong> {patient.address}</p>
    </div>
  );
}

export default PatientInfo;
