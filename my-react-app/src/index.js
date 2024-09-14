// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './index.css'; // Global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renders the App component */}
  </React.StrictMode>,
  document.getElementById('root') // The HTML element to mount the React app
);
