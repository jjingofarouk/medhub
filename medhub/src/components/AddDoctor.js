import React from 'react';
import Sidebar from './NavBar';
import InputField from './InputField';
import SelectField from './SelectField';
import MultiSelectField from './MultiSelectField';
import TextAreaField from './TextAreaField';
import SocialMediaField from './SocialMediaField';

const AddDoctorForm = () => {
  const languages = [{ value: 'english', label: 'English' }, { value: 'acholi', label: 'Acholi' }];
  const districts = [{ value: 'amudat', label: 'Amudat' }, { value: 'zombo', label: 'Zombo' }];

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <h1>Add Doctor</h1>
        <form>
          <InputField label="Name" id="name" name="name" required />
          <SelectField label="District" id="district" name="district" options={districts} />
          <MultiSelectField label="Languages Spoken" id="languages" name="languages" options={languages} handleOtherField={() => {}} />
          <TextAreaField label="Office Address" id="office_address" name="office_address" placeholder="e.g., 123 Main Street" />
          <SocialMediaField />
        </form>
      </div>
    </div>
  );
};

export default AddDoctorForm;
