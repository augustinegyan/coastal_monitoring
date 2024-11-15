import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const AfricaMap = () => {
  const [buoys, setBuoys] = useState([]);

  useEffect(() => {
    // Fix default icon issue
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Add CSS for pulsing effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-opacity {
        0% { opacity: 0.8; }
        50% { opacity: 0.2; }
        100% { opacity: 0.8; }
      }
      .pulsing-circle {
        animation: pulse-opacity 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    // Initialize map - centered over Africa with a wider zoom level
    const africaCoords = [0, 20];
    const map = L.map('map').setView(africaCoords, 3);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Buoy locations (example coordinates)
    const buoyLocations = [
      { id: 1, coords: [5.22175, -0.31397], name: "Buoy 1 - Tema Port", location: "Tema, Ghana" },
      { id: 2, coords: [4.9041, -1.7593], name: "Buoy 2 - Sekondi", location: "Sekondi, Ghana" },
      { id: 3, coords: [5.5601, -0.2055], name: "Buoy 3 - Accra", location: "Accra, Ghana" },
      { id: 4, coords: [6.1375, 1.2224], name: "Buoy 4 - Aflao", location: "Aflao, Ghana" },
      { id: 5, coords: [4.8910, -1.7532], name: "Buoy 5 - Takoradi", location: "Takoradi, Ghana" }
    ];

    setBuoys(buoyLocations);

    // Create markers and pulsing circles for each buoy
    buoyLocations.forEach(buoy => {
      const marker = L.marker(buoy.coords).addTo(map);
      marker.bindPopup(buoy.name).openPopup();

      const PulsingCircle = L.Circle.extend({
        initialize: function(latlng, options) {
          L.Circle.prototype.initialize.call(this, latlng, options);
        },

        onAdd: function(map) {
          L.Circle.prototype.onAdd.call(this, map);
          this._renderer._container.children[0].classList.add('pulsing-circle');
        }
      });

      const pulsingCircle = new PulsingCircle(buoy.coords, {
        color: '#00bfa5',
        fillColor: '#00bfa5',
        fillOpacity: 0.3,
        radius: 2000,
        weight: 2
      }).addTo(map);
    });

    return () => {
      map.remove();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="container">
      <div
        id="map"
        style={{
          height: '600px',
          width: '100%',
          position: 'relative',
          zIndex: 0,
          border: '2px solid #e0e0e0',
          borderRadius: '10px',
          marginBottom: '30px'
        }}
      />
      
      <div style={{ overflowX: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
        <h1 style={{
          textAlign: 'left',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Buoy Networks
        </h1>
        
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#3498db' }}>
              <th style={{...tableHeaderStyle, color: 'white'}}>ID</th>
              <th style={{...tableHeaderStyle, color: 'white'}}>Buoy Name</th>
              <th style={{...tableHeaderStyle, color: 'white'}}>Location</th>
              <th style={{...tableHeaderStyle, color: 'white'}}>Coordinates</th>
            </tr>
          </thead>
          <tbody>
            {buoys.map((buoy, index) => (
              <tr 
                key={buoy.id} 
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8f4f8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f8f9fa' : 'white'}
              >
                <td style={tableCellStyle}>{buoy.id}</td>
                <td style={tableCellStyle}>{buoy.name}</td>
                <td style={tableCellStyle}>{buoy.location}</td>
                <td style={{...tableCellStyle, color: '#2ecc71', fontWeight: '500'}}>
                  {buoy.coords[0].toFixed(4)}°N, {buoy.coords[1].toFixed(4)}°E
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles for table elements
const tableHeaderStyle = {
  padding: '15px',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '15px'
};

const tableCellStyle = {
  padding: '12px 15px',
  borderBottom: '1px solid #ecf0f1'
};

export default AfricaMap;