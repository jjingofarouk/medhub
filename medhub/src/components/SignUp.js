// SignUpForm.js
import React, { useState } from 'react';

function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 1; // Update if you add more steps
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  const changeStep = (step) => {
    setCurrentStep((prevStep) => {
      let newStep = prevStep + step;
      if (newStep > totalSteps) newStep = totalSteps;
      if (newStep < 1) newStep = 1;
      return newStep;
    });
  };

  const updateProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <div className="main-content">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${updateProgress()}%` }}
          ></div>
        </div>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className={`step step-${currentStep} ${currentStep === 1 ? 'active' : ''}`}>
            <div className="step-header">Step 1: Basic Information</div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
            />
            <br />
          </div>
          <div className="feedback" id="feedback"></div>
          <input
            type="button"
            value="Previous"
            id="prev-btn"
            onClick={() => changeStep(-1)}
            className={currentStep === 1 ? 'hidden' : ''}
          />
          <input
            type="button"
            value="Next"
            id="next-btn"
            onClick={() => changeStep(1)}
          />
          <input
            type="submit"
            value="Sign Up"
            id="submit-btn"
            className={currentStep < totalSteps ? 'hidden' : ''}
          />
        </form>
        <p><a href="/login">Already have an account? Log in here</a></p>
        <p><a href="/">Back to Home</a></p>
      </div>
    </div>
  );
}

export default SignUpForm;
