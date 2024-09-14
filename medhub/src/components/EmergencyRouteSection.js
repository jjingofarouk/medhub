import React, { useState } from 'react';
import './EmergencyRouteSection.css';
// Import a map library such as Leaflet or Google Maps for the interactive map
import MapComponent from './MapComponent'; // A component to display the map

const EmergencyRouteSection = ({ fetchEmergencyRoute, emergencyRoute }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchRoute = async () => {
    setLoading(true);
    try {
      await fetchEmergencyRoute();
    } catch (err) {
      setError('Failed to fetch the emergency route. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="emergency-route-section">
      <h2>Emergency Route</h2>
      <button onClick={handleFetchRoute} disabled={loading}>
        {loading ? 'Fetching Route...' : 'Get Nearest Emergency Route'}
      </button>

      {error && <p className="error-message">{error}</p>}

      {emergencyRoute && (
        <div className="route-details">
          <div className="map-container">
            <MapComponent route={emergencyRoute} /> {/* Display the route on a map */}
          </div>
          <h3>Route: {emergencyRoute.routeName}</h3>
          <p><strong>Path:</strong> {emergencyRoute.path.join(" > ")}</p>
          <p><strong>Estimated Time:</strong> {emergencyRoute.estimatedTime}</p>
          <p><strong>Distance:</strong> {emergencyRoute.distance}</p>
          <p><strong>Traffic Status:</strong> {emergencyRoute.trafficStatus}</p>
          <p><strong>Hospital Name:</strong> {emergencyRoute.hospitalName}</p>
          <p><strong>Hospital Contact:</strong> {emergencyRoute.hospitalContact}</p>

          <h4>Alternative Routes</h4>
          <ul>
            {emergencyRoute.alternativeRoutes.map(route => (
              <li key={route.routeName}>
                <h5>{route.routeName}</h5>
                <p><strong>Path:</strong> {route.path.join(" > ")}</p>
                <p><strong>Estimated Time:</strong> {route.estimatedTime}</p>
                <p><strong>Distance:</strong> {route.distance}</p>
                <p><strong>Traffic Status:</strong> {route.trafficStatus}</p>
              </li>
            ))}
          </ul>

          {/* User instructions */}
          <div className="instructions">
            <h4>Instructions</h4>
            <p>Use the interactive map above to view the route and alternative routes visually. Follow the path instructions and check the estimated time to reach the hospital. For real-time traffic updates, ensure your location services are enabled.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmergencyRouteSection;
