import React from 'react';
import { useForm } from 'react-hook-form'; // Using react-hook-form for form handling

function HealthMonitoringForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register('date', { required: true })} />
        {errors.date && <span className="error">Date is required</span>}
      </div>
      <div>
        <label htmlFor="blood_pressure">Blood Pressure</label>
        <input type="text" id="blood_pressure" {...register('blood_pressure', { required: true })} />
        {errors.blood_pressure && <span className="error">Blood Pressure is required</span>}
      </div>
      <div>
        <label htmlFor="heart_rate">Heart Rate</label>
        <input type="text" id="heart_rate" {...register('heart_rate', { required: true })} />
        {errors.heart_rate && <span className="error">Heart Rate is required</span>}
      </div>
      <div>
        <label htmlFor="temperature">Temperature</label>
        <input type="text" id="temperature" {...register('temperature', { required: true })} />
        {errors.temperature && <span className="error">Temperature is required</span>}
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="text" id="weight" {...register('weight', { required: true })} />
        {errors.weight && <span className="error">Weight is required</span>}
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="text" id="height" {...register('height', { required: true })} />
        {errors.height && <span className="error">Height is required</span>}
      </div>
      <div>
        <label htmlFor="additional_notes">Additional Notes</label>
        <textarea id="additional_notes" rows="3" {...register('additional_notes')} />
      </div>
      <button type="submit">Create Record</button>
    </form>
  );
}

export default HealthMonitoringForm;
