// src/components/ui/avatar.js

import React from 'react';
import './avatar.css'; // Assuming you have some styles

const Avatar = ({ src, alt }) => (
  <img className="avatar" src={src} alt={alt} />
);

export default Avatar;
