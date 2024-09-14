// ReferralItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function ReferralItem({ referral, onDelete }) {
  return (
    <li>
      <strong>Referral ID:</strong> {referral.id}<br />
      <strong>Referring Doctor:</strong> {referral.referringDoctor.name}<br />
      <strong>Referred Patient:</strong> {referral.referredPatient.name}<br />
      <strong>Reason:</strong> {referral.reason}<br />
      <strong>Status:</strong> {referral.status}<br />
      <strong>Notes:</strong> {referral.notes}<br />
      <Link to={`/edit-referral/${referral.id}`}>Edit</Link>
      <button onClick={() => onDelete(referral.id)}>Delete</button>
    </li>
  );
}

export default ReferralItem;
