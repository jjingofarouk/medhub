import React from 'react';

function SymptomChecker() {
  const checkSymptoms = () => {
    window.location.href = '/symptom-checker'; // Update the URL accordingly
  };

  return (
    <div id="symptom-checker" className="section">
      <h3>Symptom Checker</h3>
      <button className="button" onClick={checkSymptoms}>Check Symptoms</button>
    </div>
  );
}

export default SymptomChecker;
