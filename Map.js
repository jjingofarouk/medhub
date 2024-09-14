import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && locations.length > 0) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: locations[0],
        zoom: 10,
      });

      locations.forEach(location => {
        new window.google.maps.Marker({
          position: location,
          map: map,
        });
      });
    }
  }, [locations]);

  return <div ref={mapRef} className="map"></div>;
};

export default Map;
