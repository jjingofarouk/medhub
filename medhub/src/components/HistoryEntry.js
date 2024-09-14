// HistoryEntry.js
import React from 'react';

function HistoryEntry({ entry }) {
  return (
    <li>
      <strong>Date:</strong> {entry.date}<br />
      <strong>Reason for Visit:</strong> {entry.visit_reason}<br />
      <strong>Diagnosis:</strong> {entry.diagnosis}<br />
      <strong>Prescription:</strong> {entry.prescription}<br />
      <strong>Tests Results:</strong> {entry.test_results}<br />
      <strong>Treatment Plan:</strong> {entry.treatment_plan}<br />
      <strong>Allergies:</strong> {entry.allergies}<br />
      <strong>Past Surgeries:</strong> {entry.past_surgeries}<br />
      <strong>Chronic Conditions:</strong> {entry.chronic_conditions}
    </li>
  );
}

export default HistoryEntry;
