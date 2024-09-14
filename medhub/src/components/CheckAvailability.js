import React from 'react';

const CheckAvailability = () => {
  const handleCheck = () => {
    // Logic to check availability
    alert('Checking availability');
  };

  return (
    <div>
      <h2>Check Availability</h2>
      <button onClick={handleCheck}>Check</button>
    </div>
  );
};

export default CheckAvailability;
