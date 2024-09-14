import React, { useState } from 'react';
import './PharmaciesSection.css';
import Map from './Map'; // Assuming you have a Map component
import PharmacyDetails from './PharmacyDetails'; // Assuming you have a PharmacyDetails component

const PharmaciesSection = ({ pharmacies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2); // Initial number of pharmacies to show

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 2); // Increase visible count
  };

  const filteredPharmacies = pharmacies.filter(pharmacy =>
    pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pharmacy.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pharmacies-section">
      <h2>Find Pharmacies</h2>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="pharmacy-list">
        <ul>
          {filteredPharmacies.slice(0, visibleCount).map(pharmacy => (
            <li key={pharmacy.id} onClick={() => handlePharmacyClick(pharmacy)}>
              <h3>{pharmacy.name}</h3>
              <p><strong>Location:</strong> {pharmacy.location}</p>
              <p><strong>Available Medications:</strong> {pharmacy.medications.join(", ")}</p>
              <p><strong>Contact:</strong> {pharmacy.contact}</p>
            </li>
          ))}
        </ul>
        {filteredPharmacies.length > visibleCount && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
      {selectedPharmacy && (
        <PharmacyDetails pharmacy={selectedPharmacy} onClose={() => setSelectedPharmacy(null)} />
      )}
      <Map locations={filteredPharmacies.slice(0, visibleCount).map(pharmacy => ({ lat: pharmacy.lat, lng: pharmacy.lng }))} />
    </section>
  );
};

export default PharmaciesSection;
