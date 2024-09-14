import React, { useState } from 'react';
import './PharmaciesSection.css';
import Map from './Map'; // Assuming you have a Map component
import PharmacyDetails from './PharmacyDetails'; // Assuming you have a PharmacyDetails component

const PharmaciesSection = ({ pharmacies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2); // Initial number of pharmacies to show
  const [showMap, setShowMap] = useState(false); // State to control map visibility

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setVisibleCount(2); // Reset visible count when search term changes
  };

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 2); // Increase visible count
  };

  const handleToggleMap = () => {
    setShowMap(prevState => !prevState); // Toggle map visibility
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
      <button className="toggle-map-button" onClick={handleToggleMap}>
        {showMap ? 'Hide Map' : 'Show Map'}
      </button>
      {showMap && (
        <Map locations={filteredPharmacies.slice(0, visibleCount).map(pharmacy => ({ lat: pharmacy.lat, lng: pharmacy.lng }))} />
      )}
    </section>
  );
};

export default PharmaciesSection;
