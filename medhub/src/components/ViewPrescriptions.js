import React, { useState, useEffect } from 'react';
import PrescriptionTable from './PrescriptionTable';
import SearchBar from './SearchBar'; // Custom search component
import Filter from './Filter'; // Filters component for sorting and filtering
import ExportButton from './ExportButton'; // Export to PDF
import LoadingSpinner from './LoadingSpinner'; // Custom loading spinner
import ErrorMessage from './ErrorMessage'; // Error message component
import './ViewPrescriptions.css'; // Custom CSS file

function ViewPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrescriptions, setFilteredPrescriptions] = useState([]);

  useEffect(() => {
    // Simulate API call for prescriptions
    fetch('/api/prescriptions')
      .then(response => response.json())
      .then(data => {
        setPrescriptions(data);
        setFilteredPrescriptions(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch prescriptions. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = prescriptions.filter(prescription =>
      prescription.medication.toLowerCase().includes(query.toLowerCase()) ||
      prescription.doctor.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPrescriptions(filtered);
  };

  // Handle sorting (by date, medication name, etc.)
  const handleSort = (criteria) => {
    const sorted = [...filteredPrescriptions].sort((a, b) => {
      if (criteria === 'date') {
        return new Date(a.date) - new Date(b.date);
      } else if (criteria === 'medication') {
        return a.medication.localeCompare(b.medication);
      }
      return 0;
    });
    setFilteredPrescriptions(sorted);
  };

  // Display loading spinner while fetching data
  if (loading) return <LoadingSpinner />;

  // Display error message if API call fails
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="view-prescriptions-container">
      <h1>Your Prescriptions</h1>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <Filters onSort={handleSort} />
      <ExportButton prescriptions={filteredPrescriptions} />
      
      {/* Display prescriptions table only if data is available */}
      {filteredPrescriptions.length > 0 ? (
        <PrescriptionTable prescriptions={filteredPrescriptions} />
      ) : (
        <p>No prescriptions found. Try adjusting your search or filters.</p>
      )}
    </main>
  );
}

export default ViewPrescriptions;
