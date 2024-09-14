// MedicalHistory.js
import React from 'react';
import HistoryEntry from './HistoryEntry';

function MedicalHistory({ history }) {
  return (
    <div className="history-info">
      <h2>Medical History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map(entry => (
            <HistoryEntry key={entry.date} entry={entry} />
          ))}
        </ul>
      ) : (
        <p>No medical history available.</p>
      )}
    </div>
  );
}

export default MedicalHistory;
