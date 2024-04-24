import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map: React.FC = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map', {
      center: [-1.952936, 30.094370], // Initial map center coordinates
      zoom: 17, // Initial zoom level
    });

    // Add a tile layer for the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <div className='my-5' id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
