import React, { useState } from 'react';
import './HealthEventsSection.css'; // Import custom CSS for styling

const HealthEventsSection = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const filteredEvents = events
    .filter(event =>
      event.name.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      const comparison = new Date(a.date) - new Date(b.date);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  return (
    <section className="health-events-section">
      <h2>Upcoming Health Events</h2>

      {/* Search and Filter */}
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Sort by Date (Earliest First)</option>
          <option value="desc">Sort by Date (Latest First)</option>
        </select>
      </div>

      {/* Events List */}
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id} onClick={() => handleEventClick(event)}>
            <h3>{event.name} - {event.location}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {/* Detailed View Modal */}
      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedEvent(null)}>&times;</span>
            <h3>{selectedEvent.name}</h3>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {selectedEvent.description || 'No description available'}</p>
            {/* Add more detailed information as needed */}
          </div>
        </div>
      )}
    </section>
  );
};

export default HealthEventsSection;
