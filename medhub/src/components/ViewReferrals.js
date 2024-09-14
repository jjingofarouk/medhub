// ViewReferrals.js
import React, { useState, useEffect } from 'react';
import ReferralsList from './ReferralsList';
import CreateNewReferralLink from './CreateNewReferralLink';

function ViewReferrals() {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    // Fetch the referrals from an API or other source
    // Example:
    // fetch('/api/referrals')
    //   .then(response => response.json())
    //   .then(data => setReferrals(data));
  }, []);

  const handleDelete = (id) => {
    // Handle the delete action
    // Example:
    // fetch(`/api/referrals/${id}`, { method: 'DELETE' })
    //   .then(() => setReferrals(referrals.filter(referral => referral.id !== id)));
  };

  return (
    <div>
      <h1>View Referrals</h1>
      <CreateNewReferralLink />
      <ReferralsList referrals={referrals} onDelete={handleDelete} />
    </div>
  );
}

export default ViewReferrals;
