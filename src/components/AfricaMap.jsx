// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const AfricaMap = () => {
//   const [buoys, setBuoys] = useState([]);

//   useEffect(() => {
//     // Fix default icon issue
//     const DefaultIcon = L.icon({
//       iconUrl: icon,
//       shadowUrl: iconShadow,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//     });
//     L.Marker.prototype.options.icon = DefaultIcon;

//     // Add CSS for pulsing effect
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes pulse-opacity {
//         0% { opacity: 0.8; }
//         50% { opacity: 0.2; }
//         100% { opacity: 0.8; }
//       }
//       .pulsing-circle {
//         animation: pulse-opacity 2s ease-in-out infinite;
//       }
//     `;
//     document.head.appendChild(style);

//     // Initialize map - centered over Africa with a wider zoom level
//     const africaCoords = [0, 20];
//     const map = L.map('map').setView(africaCoords, 3);

//     // Add OpenStreetMap tiles
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '© OpenStreetMap contributors'
//     }).addTo(map);

//     // Buoy locations (example coordinates)
//     const buoyLocations = [
//       { id: 1, coords: [5.22175, -0.31397], name: "Buoy 1 - Tema Port", location: "Tema, Ghana" },
//       { id: 2, coords: [4.9041, -1.7593], name: "Buoy 2 - Sekondi", location: "Sekondi, Ghana" },
//       { id: 3, coords: [5.5601, -0.2055], name: "Buoy 3 - Accra", location: "Accra, Ghana" },
//       { id: 4, coords: [6.1375, 1.2224], name: "Buoy 4 - Aflao", location: "Aflao, Ghana" },
//       { id: 5, coords: [4.8910, -1.7532], name: "Buoy 5 - Takoradi", location: "Takoradi, Ghana" }
//     ];

//     setBuoys(buoyLocations);

//     // Create markers and pulsing circles for each buoy
//     buoyLocations.forEach(buoy => {
//       const marker = L.marker(buoy.coords).addTo(map);
//       marker.bindPopup(buoy.name).openPopup();

//       const PulsingCircle = L.Circle.extend({
//         initialize: function(latlng, options) {
//           L.Circle.prototype.initialize.call(this, latlng, options);
//         },

//         onAdd: function(map) {
//           L.Circle.prototype.onAdd.call(this, map);
//           this._renderer._container.children[0].classList.add('pulsing-circle');
//         }
//       });

//       const pulsingCircle = new PulsingCircle(buoy.coords, {
//         color: '#00bfa5',
//         fillColor: '#00bfa5',
//         fillOpacity: 0.3,
//         radius: 2000,
//         weight: 2
//       }).addTo(map);
//     });

//     return () => {
//       map.remove();
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div
//         id="map"
//         style={{
//           height: '600px',
//           width: '100%',
//           position: 'relative',
//           zIndex: 0,
//           border: '2px solid #e0e0e0',
//           borderRadius: '10px',
//           marginBottom: '30px'
//         }}
//       />
      
//       <div style={{ overflowX: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
//         <h1 style={{
//           textAlign: 'left',
//           fontSize: '24px',
//           fontWeight: 'bold',
//           marginBottom: '15px',
//           color: '#2c3e50'
//         }}>
//           Buoy Networks
//         </h1>
        
//         <table style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           backgroundColor: 'white',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           borderRadius: '8px',
//           overflow: 'hidden'
//         }}>
//           <thead>
//             <tr style={{ backgroundColor: '#3498db' }}>
//               <th style={{...tableHeaderStyle, color: 'white'}}>ID</th>
//               <th style={{...tableHeaderStyle, color: 'white'}}>Buoy Name</th>
//               <th style={{...tableHeaderStyle, color: 'white'}}>Location</th>
//               <th style={{...tableHeaderStyle, color: 'white'}}>Coordinates</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buoys.map((buoy, index) => (
//               <tr 
//                 key={buoy.id} 
//                 style={{ 
//                   backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
//                   transition: 'background-color 0.3s'
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8f4f8'}
//                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f8f9fa' : 'white'}
//               >
//                 <td style={tableCellStyle}>{buoy.id}</td>
//                 <td style={tableCellStyle}>{buoy.name}</td>
//                 <td style={tableCellStyle}>{buoy.location}</td>
//                 <td style={{...tableCellStyle, color: '#2ecc71', fontWeight: '500'}}>
//                   {buoy.coords[0].toFixed(4)}°N, {buoy.coords[1].toFixed(4)}°E
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Styles for table elements
// const tableHeaderStyle = {
//   padding: '15px',
//   textAlign: 'left',
//   fontWeight: 'bold',
//   fontSize: '15px'
// };

// const tableCellStyle = {
//   padding: '12px 15px',
//   borderBottom: '1px solid #ecf0f1'
// };

// export default AfricaMap;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import 'leaflet/dist/leaflet.css';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const AfricaMap = () => {
//   const [selectedBuoy, setSelectedBuoy] = useState(null);
//   const [map, setMap] = useState(null);

//   // Sample tide data - in reality, this would come from your API
//   const tideData = {
//     morning: { height: 1.2, time: '06:00' },
//     noon: { height: 2.5, time: '12:00' },
//     evening: { height: 1.8, time: '18:00' },
//     night: { height: 0.8, time: '00:00' },
//     dawn: { height: 1.0, time: '04:00' }
//   };

//   // Sample historical data
//   const historicalData = [
//     { time: '00:00', height: 0.8 },
//     { time: '04:00', height: 1.0 },
//     { time: '08:00', height: 1.5 },
//     { time: '12:00', height: 2.5 },
//     { time: '16:00', height: 2.0 },
//     { time: '20:00', height: 1.2 }
//   ];

//   const buoyLocations = [
//     { id: 1, coords: [5.22175, -0.31397], name: "Ghana - Tema Port", country: "Ghana" },
//     { id: 2, coords: [8.4850, -13.2300], name: "Sierra Leone - Freetown", country: "Sierra Leone" },
//     { id: 3, coords: [3.8480, 9.5000], name: "Cameroon - Douala", country: "Cameroon" },
//     { id: 4, coords: [5.3190, -4.0120], name: "Côte d'Ivoire - Abidjan", country: "Côte d'Ivoire" },
//     { id: 5, coords: [31.2001, 32.3500], name: "Egypt - Port Said", country: "Egypt" },
//     { id: 6, coords: [6.4450, 3.4050], name: "Nigeria - Lagos", country: "Nigeria" },
//     { id: 7, coords: [-33.9180, 18.4230], name: "South Africa - Cape Town", country: "South Africa" }
//   ];

//   useEffect(() => {
//     const DefaultIcon = L.icon({
//       iconUrl: icon,
//       shadowUrl: iconShadow,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//     });
//     L.Marker.prototype.options.icon = DefaultIcon;

//     // Initialize map centered over Africa
//     const africaCoords = [4.7700, 21.7100];
//     const mapInstance = L.map('map').setView(africaCoords, 4);
//     setMap(mapInstance);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '© OpenStreetMap contributors'
//     }).addTo(mapInstance);

//     // Add markers
//     buoyLocations.forEach(buoy => {
//       const marker = L.marker(buoy.coords).addTo(mapInstance);
      
//       marker.on('click', () => {
//         setSelectedBuoy(buoy);
//         mapInstance.setView(buoy.coords, 8);
//       });

//       marker.bindPopup(`
//         <div style="text-align: center;">
//           <strong>${buoy.name}</strong><br/>
//           ${buoy.coords[0].toFixed(4)}°N, ${buoy.coords[1].toFixed(4)}°E
//         </div>
//       `);
//     });

//     return () => {
//       mapInstance.remove();
//     };
//   }, []);

//   // Function to draw circular tide gauge
//   const TideGauge = () => {
//     const gaugeSize = 200;
//     const centerX = gaugeSize / 2;
//     const centerY = gaugeSize / 2;
//     const radius = (gaugeSize / 2) - 20;

//     return (
//       <div className="flex flex-col items-center space-y-4">
//         <svg width={gaugeSize} height={(gaugeSize / 2) + 20} className="bg-white rounded-lg shadow-md">
//           <path
//             d={`M ${centerX - radius} ${centerY} 
//                 A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
//             fill="none"
//             stroke="#e0e0e0"
//             strokeWidth="10"
//           />
//           {Object.entries(tideData).map(([time, data], index) => {
//             const angle = (Math.PI * (index / 4));
//             const x = centerX + radius * Math.cos(angle);
//             const y = centerY - radius * Math.sin(angle);
//             return (
//               <circle
//                 key={time}
//                 cx={x}
//                 cy={y}
//                 r="6"
//                 fill="#3498db"
//                 className="cursor-pointer hover:fill-blue-600"
//               />
//             );
//           })}
//         </svg>
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-6">
//       <div className="flex items-center space-x-4 mb-4">
//         <select 
//           className="p-2 border rounded-md shadow-sm"
//           value={selectedBuoy?.id || ''}
//           onChange={(e) => {
//             const buoy = buoyLocations.find(b => b.id === parseInt(e.target.value));
//             setSelectedBuoy(buoy);
//             if (map && buoy) {
//               map.setView(buoy.coords, 8);
//             }
//           }}
//         >
//           <option value="">Select a Buoy</option>
//           {buoyLocations.map(buoy => (
//             <option key={buoy.id} value={buoy.id}>
//               {buoy.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div 
//           id="map"
//           className="h-96 rounded-lg shadow-md border-2 border-gray-200"
//         />

//         <div className="space-y-6">
//           {selectedBuoy && (
//             <>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-4">
//                   {selectedBuoy.name} - Tide Gauge
//                 </h2>
//                 <TideGauge />
//               </div>

//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-4">Historical Tide Data</h2>
//                 <LineChart width={500} height={300} data={historicalData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="time" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line 
//                     type="monotone" 
//                     dataKey="height" 
//                     stroke="#3498db" 
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AfricaMap;

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const AfricaMap = () => {
  const [selectedBuoy, setSelectedBuoy] = useState(null);
  const [map, setMap] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  // Enhanced sample data with new parameters
  const buoyLocations = [
    {
      id: 1,
      coords: [5.22175, -0.31397],
      name: "Ghana - Tema Port",
      country: "Ghana",
      parameters: {
        temperature: 27.5,
        turbidity: 12.3,
        pH: 8.1,
        tideLevel: 2.4
      }
    },
    {
      id: 2,
      coords: [8.4850, -13.2300],
      name: "Sierra Leone - Freetown",
      country: "Sierra Leone",
      parameters: {
        temperature: 26.8,
        turbidity: 15.7,
        pH: 8.2,
        tideLevel: 1.8
      }
    },
    {
      id: 3,
      coords: [5.3190, -4.0169],
      name: "Côte d'Ivoire - Port of Abidjan",
      country: "Côte d'Ivoire",
      parameters: {
        temperature: 28.2,
        turbidity: 14.5,
        pH: 8.0,
        tideLevel: 2.1
      }
    },
    {
      id: 4,
      coords: [4.0511, 9.7679],
      name: "Cameroon - Port of Douala",
      country: "Cameroon",
      parameters: {
        temperature: 27.9,
        turbidity: 18.2,
        pH: 7.9,
        tideLevel: 2.3
      }
    },
    {
      id: 5,
      coords: [31.2001, 29.9187],
      name: "Egypt - Alexandria Port",
      country: "Egypt",
      parameters: {
        temperature: 24.5,
        turbidity: 10.8,
        pH: 8.3,
        tideLevel: 0.9
      }
    },
    {
      id: 6,
      coords: [6.3350, 2.4288],
      name: "Benin - Port of Cotonou",
      country: "Benin",
      parameters: {
        temperature: 28.1,
        turbidity: 13.9,
        pH: 8.0,
        tideLevel: 1.9
      }
    },
    {
      id: 7,
      coords: [6.1311, 1.2255],
      name: "Togo - Port of Lomé",
      country: "Togo",
      parameters: {
        temperature: 27.8,
        turbidity: 13.5,
        pH: 8.1,
        tideLevel: 2.0
      }
    },
    {
      id: 8,
      coords: [6.4412, 3.4079],
      name: "Nigeria - Lagos Port",
      country: "Nigeria",
      parameters: {
        temperature: 28.4,
        turbidity: 16.2,
        pH: 7.8,
        tideLevel: 2.2
      }
    }
  ];

  // Parameter ranges for gauges
  const parameterRanges = {
    temperature: { min: 20, max: 35, unit: '°C' },
    turbidity: { min: 0, max: 50, unit: 'NTU' },
    pH: { min: 6, max: 9, unit: '' },
    tideLevel: { min: 0, max: 5, unit: 'm' }
  };

  // Historical data enhanced with all parameters
  const historicalData = [
    { time: '00:00', temperature: 26.5, turbidity: 12.0, pH: 8.0, tideLevel: 1.8 },
    { time: '04:00', temperature: 26.2, turbidity: 12.5, pH: 8.1, tideLevel: 2.1 },
    { time: '08:00', temperature: 27.0, turbidity: 13.0, pH: 8.2, tideLevel: 2.4 },
    { time: '12:00', temperature: 28.5, turbidity: 13.5, pH: 8.1, tideLevel: 2.2 },
    { time: '16:00', temperature: 28.0, turbidity: 12.8, pH: 8.0, tideLevel: 1.9 },
    { time: '20:00', temperature: 27.2, turbidity: 12.3, pH: 8.1, tideLevel: 1.7 }
  ];

  // Gauge component for individual parameters
  const ParameterGauge = ({ value, parameter }) => {
    const { min, max, unit } = parameterRanges[parameter];
    const percentage = ((value - min) / (max - min)) * 100;
    
    return (
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute -top-6 left-0 right-0 flex justify-between text-sm">
          <span>{value.toFixed(1)}{unit}</span>
          <span className="text-gray-400">{max}{unit}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const africaCoords = [4.7700, 21.7100];
    const mapInstance = L.map('map', {
      zoomControl: false
    }).setView(africaCoords, 4);
    
    L.control.zoom({
      position: 'topright'
    }).addTo(mapInstance);

    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Enhanced popup with live parameters
    buoyLocations.forEach(buoy => {
      const marker = L.marker(buoy.coords).addTo(mapInstance);
      
      const createPopupContent = (buoy) => {
        const container = L.DomUtil.create('div', 'bg-black bg-opacity-80 rounded-lg p-4 min-w-[250px]');
        
        container.innerHTML = `
          <div class="text-white">
            <h3 class="font-bold text-lg mb-3">${buoy.name}</h3>
            
            <div class="space-y-4">
              <div class="parameter-row">
                <div class="flex justify-between items-center mb-1">
                  <span>Temperature</span>
                  <span class="font-bold text-blue-400">
                    ${buoy.parameters.temperature}°C
                  </span>
                </div>
                <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500" style="width: ${
                    ((buoy.parameters.temperature - parameterRanges.temperature.min) /
                    (parameterRanges.temperature.max - parameterRanges.temperature.min)) * 100
                  }%"></div>
                </div>
              </div>

              <div class="parameter-row">
                <div class="flex justify-between items-center mb-1">
                  <span>Turbidity</span>
                  <span class="font-bold text-blue-400">
                    ${buoy.parameters.turbidity} NTU
                  </span>
                </div>
                <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500" style="width: ${
                    ((buoy.parameters.turbidity - parameterRanges.turbidity.min) /
                    (parameterRanges.turbidity.max - parameterRanges.turbidity.min)) * 100
                  }%"></div>
                </div>
              </div>

              <div class="parameter-row">
                <div class="flex justify-between items-center mb-1">
                  <span>pH Level</span>
                  <span class="font-bold text-blue-400">
                    ${buoy.parameters.pH}
                  </span>
                </div>
                <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500" style="width: ${
                    ((buoy.parameters.pH - parameterRanges.pH.min) /
                    (parameterRanges.pH.max - parameterRanges.pH.min)) * 100
                  }%"></div>
                </div>
              </div>

              <div class="parameter-row">
                <div class="flex justify-between items-center mb-1">
                  <span>Tide Level</span>
                  <span class="font-bold text-blue-400">
                    ${buoy.parameters.tideLevel}m
                  </span>
                </div>
                <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500" style="width: ${
                    ((buoy.parameters.tideLevel - parameterRanges.tideLevel.min) /
                    (parameterRanges.tideLevel.max - parameterRanges.tideLevel.min)) * 100
                  }%"></div>
                </div>
              </div>
            </div>

            <button class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              View Detailed Analysis
            </button>
          </div>
        `;

        // Add click handler for the button
        const button = container.querySelector('button');
        L.DomEvent.on(button, 'click', function() {
          setSelectedBuoy(buoy);
          setShowOverlay(true);
        });

        return container;
      };

      marker.bindPopup(L.popup({
        closeButton: true,
        className: 'custom-popup'
      }).setContent(() => createPopupContent(buoy)));

      marker.on('click', () => {
        marker.openPopup();
      });
    });

    return () => {
      mapInstance.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div 
        id="map"
        className="absolute inset-0 z-0"
      />
      
      {showOverlay && selectedBuoy && (
        <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-xl max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{selectedBuoy.name}</h2>
            <button 
              onClick={() => setShowOverlay(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(selectedBuoy.parameters).map(([key, value]) => (
                <div key={key} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-sm text-gray-400 mb-2 capitalize">{key}</h3>
                  <div className="text-2xl font-bold mb-2">
                    {value}{parameterRanges[key].unit}
                  </div>
                  <ParameterGauge value={value} parameter={key} />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">24-Hour Trends</h3>
              <div className="bg-gray-900 p-4 rounded-lg">
                <LineChart width={320} height={200} data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="time" 
                    stroke="rgba(255,255,255,0.6)"
                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.6)"
                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: 'none',
                      color: 'white'
                    }}
                  />
                  {Object.keys(selectedBuoy.parameters).map((param, index) => (
                    <Line 
                      key={param}
                      type="monotone"
                      dataKey={param}
                      stroke={`hsl(${index * 90}, 70%, 50%)`}
                      strokeWidth={2}
                      dot={{ fill: `hsl(${index * 90}, 70%, 50%)` }}
                    />
                  ))}
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfricaMap;