// CreateNewReferralLink.js
import React from 'react';
import { Link } from 'react-router-dom';

function CreateNewReferralLink() {
  return (
    <div className="create-new-referral">
      <Link to="/create-referral">Create New Referral</Link>
    </div>
  );
}

export default CreateNewReferralLink;
