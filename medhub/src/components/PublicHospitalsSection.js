import React, { useState } from 'react';
import './PublicHospitalsSection.css';

const PublicHospitalsSection = ({ hospitals }) => {
  const [visibleCount, setVisibleCount] = useState(2); // Initial number of hospitals to show

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 2); // Increase visible count
  };

  return (
    <section className="hospitals-section">
      <h2>Public Hospitals</h2>
      <div className="hospitals-list">
        {hospitals.slice(0, visibleCount).map(hospital => (
          <div key={hospital.id} className="hospital-card">
            <h3 className="hospital-name">{hospital.name}</h3>
            <p className="hospital-district">{hospital.district}</p>
            <p className="hospital-services">
              <strong>Special Services:</strong> {hospital.specialServices.join(", ")}
            </p>
            <p className="hospital-contact">
              <strong>Contact:</strong> {hospital.contact}
            </p>
            <p className="hospital-affiliated">
              <strong>Affiliated With:</strong> {hospital.affiliatedWith}
            </p>
            <p className="hospital-bed-capacity">
              <strong>Bed Capacity:</strong> {hospital.bedCapacity}
            </p>
            <a 
              href={`mailto:${hospital.contactEmail}`} 
              className="hospital-email"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Email the Hospital
            </a>
            <button 
              className="details-button"
              onClick={() => alert(`Showing details for ${hospital.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
        {hospitals.length > visibleCount && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default PublicHospitalsSection;
