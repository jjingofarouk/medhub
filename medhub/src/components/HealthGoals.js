// HealthGoalForm.js
import React, { useState } from 'react';

function HealthGoalForm() {
  const [goal, setGoal] = useState('');

  const handleChange = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      // Replace with your API call
      // Example:
      // fetch('/api/set-health-goal', {
      //   method: 'POST',
      //   body: JSON.stringify({ goal }),
      //   headers: { 'Content-Type': 'application/json' }
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Health goal set:', data);
      // });
      console.log('Health goal set:', goal); // Placeholder
      setGoal('');
    }
  };

  return (
    <div className="container">
      <h1>Set Your Health Goal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="goal">Health Goal:</label>
        <input
          type="text"
          id="goal"
          name="goal"
          value={goal}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HealthGoalForm;
