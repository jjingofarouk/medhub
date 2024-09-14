import React from 'react';
import { useForm } from 'react-hook-form'; // Using react-hook-form for form handling

function CreateReferralForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="referring_doctor_id">Referring Doctor</label>
        <input type="text" id="referring_doctor_id" {...register('referring_doctor_id', { required: true })} />
        {errors.referring_doctor_id && <span className="error">Referring Doctor is required</span>}
      </div>
      <div>
        <label htmlFor="referred_patient_id">Referred Patient</label>
        <input type="text" id="referred_patient_id" {...register('referred_patient_id', { required: true })} />
        {errors.referred_patient_id && <span className="error">Referred Patient is required</span>}
      </div>
      <div>
        <label htmlFor="reason">Reason</label>
        <input type="text" id="reason" {...register('reason', { required: true })} />
        {errors.reason && <span className="error">Reason is required</span>}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status" {...register('status', { required: true })}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {errors.status && <span className="error">Status is required</span>}
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" rows="3" {...register('notes')} />
      </div>
      <button type="submit">Create Referral</button>
    </form>
  );
}

export default CreateReferralForm;
