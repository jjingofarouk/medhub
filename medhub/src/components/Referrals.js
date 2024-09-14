// ReferralsList.js
import React from 'react';
import ReferralItem from './ReferralItem';

function ReferralsList({ referrals, onDelete }) {
  return (
    <ul>
      {referrals.map(referral => (
        <ReferralItem key={referral.id} referral={referral} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ReferralsList;
