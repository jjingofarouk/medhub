import React from 'react';
import Sidebar from './Sidebar';
import AddFacilityForm from './AddFacilityForm';
import Footer from './Footer';

const AddHealthFacility = () => {
  return (
    <div>
      <Sidebar />
      <h1>Add Health Facility</h1>
      <AddFacilityForm />
      <Footer />
    </div>
  );
};

export default AddHealthFacility;
