// import React, { useState } from 'react';

// const DownloadInterface = () => {
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedSeason, setSelectedSeason] = useState('');
//   const [selectedAltitude, setSelectedAltitude] = useState('');
  
//   const currentYear = new Date().getFullYear();
//   const years = Array.from(
//     { length: currentYear - 2000 + 1 }, 
//     (_, i) => 2000 + i
//   );

//   const handleDownload = () => {
//     // Here you would implement actual download logic
//     console.log('Downloading with settings:', {
//       location: selectedLocation,
//       year: selectedYear,
//       season: selectedSeason,
//       altitude: selectedAltitude
//     });
//   };

//   return (
//     <div style={{
//       maxWidth: '800px',
//       margin: '20px auto',
//       padding: '30px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '12px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     }}>
//       <h2 style={{
//         textAlign: 'center',
//         color: '#2c3e50',
//         marginBottom: '30px',
//         fontSize: '24px'
//       }}>Interactive Download</h2>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         gap: '20px',
//         marginBottom: '30px'
//       }}>
//         {/* Location Selector */}
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <label style={labelStyle}>Location</label>
//           <select 
//             style={selectStyle}
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//           >
//             <option value="">Select Location</option>
//             <option value="rural">Rural</option>
//             <option value="urban">Urban</option>
//             <option value="coastal">Coastal</option>
//             <option value="mountain">Mountain</option>
//           </select>
//         </div>

//         {/* Year Selector */}
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <label style={labelStyle}>Year</label>
//           <select 
//             style={selectStyle}
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             <option value="">Select Year</option>
//             {years.map(year => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>
//         </div>

//         {/* Season Selector */}
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <label style={labelStyle}>Season</label>
//           <select 
//             style={selectStyle}
//             value={selectedSeason}
//             onChange={(e) => setSelectedSeason(e.target.value)}
//           >
//             <option value="">Select Season</option>
//             <option value="spring">Spring</option>
//             <option value="summer">Summer</option>
//             <option value="autumn">Autumn</option>
//             <option value="winter">Winter</option>
//           </select>
//         </div>

//         {/* Altitude Selector */}
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <label style={labelStyle}>Altitude</label>
//           <select 
//             style={selectStyle}
//             value={selectedAltitude}
//             onChange={(e) => setSelectedAltitude(e.target.value)}
//           >
//             <option value="">Select Altitude</option>
//             <option value="low">Low (0-500m)</option>
//             <option value="medium">Medium (500-1500m)</option>
//             <option value="high">High (1500m+)</option>
//           </select>
//         </div>
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//         <div style={infoBoxStyle}>
//           <strong>Selected Configuration:</strong>
//           <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
//             <li>Location: {selectedLocation || 'Not selected'}</li>
//             <li>Year: {selectedYear || 'Not selected'}</li>
//             <li>Season: {selectedSeason || 'Not selected'}</li>
//             <li>Altitude: {selectedAltitude || 'Not selected'}</li>
//           </ul>
//         </div>

//         <button 
//           onClick={handleDownload}
//           style={buttonStyle}
//           disabled={!selectedLocation || !selectedYear || !selectedSeason || !selectedAltitude}
//         >
//           Download Data
//         </button>

//         <div style={footerStyle}>
//           <small>Data available from 2000 to {currentYear}</small>
//           <small>• Last updated: {new Date().toLocaleDateString()}</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const labelStyle = {
//   marginBottom: '5px',
//   color: '#34495e',
//   fontWeight: '500'
// };

// const selectStyle = {
//   padding: '10px',
//   borderRadius: '6px',
//   border: '1px solid #cbd5e0',
//   backgroundColor: 'white',
//   fontSize: '14px',
//   cursor: 'pointer'
// };

// const buttonStyle = {
//   padding: '12px 24px',
//   backgroundColor: '#3498db',
//   color: 'white',
//   border: 'none',
//   borderRadius: '6px',
//   cursor: 'pointer',
//   fontSize: '16px',
//   fontWeight: '500',
//   transition: 'background-color 0.3s',
//   ':hover': {
//     backgroundColor: '#2980b9'
//   },
//   ':disabled': {
//     backgroundColor: '#bdc3c7',
//     cursor: 'not-allowed'
//   }
// };

// const infoBoxStyle = {
//   padding: '15px',
//   backgroundColor: 'white',
//   borderRadius: '6px',
//   border: '1px solid #e2e8f0'
// };

// const footerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '20px',
//   color: '#7f8c8d',
//   marginTop: '20px'
// };

// export default DownloadInterface;


import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js

const DownloadInterface = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedAltitude, setSelectedAltitude] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => 2000 + i
  );

  const parameters = [
    { label: "Tide Level", value: 12.3, unit: "m", color: "#3B82F6" },
    { label: "Temperature", value: 57.28, unit: "°C", color: "#2563EB" },
    { label: "Turbidity", value: 33.1, unit: "NTY", color: "#1D4ED8" },
    { label: "pH Level", value: 82.5, unit: "pH", color: "#1E40AF" },
    { label: "Humidity", value: 45.9, unit: "%", color: "#1E3A8A" },
  ];

  // Chart Data Example
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Tide Level (m)',
        data: [12.1, 12.3, 12.5, 12.7, 13.0, 13.1, 13.3, 13.5],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
      },
      {
        label: 'Temperature (°C)',
        data: [56, 57, 58, 59, 60, 62, 63, 64],
        borderColor: 'rgba(37, 99, 235, 1)',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const handleDownload = () => {
    console.log('Downloading with settings:', {
      location: selectedLocation,
      year: selectedYear,
      season: selectedSeason,
      altitude: selectedAltitude
    });
    setShowDownloadModal(true); // Show the download modal after settings
  };

  const closeDownloadModal = () => {
    setShowDownloadModal(false);
  };

  const confirmDownload = () => {
    // Trigger the actual download here (you can implement the actual logic)
    alert("Downloading data...");
    setShowDownloadModal(false); // Close modal after download
  };

  return (
    <div>
      {/* Main Interface */}
      <div style={containerStyle}>
        <h2 style={headerStyle}>Interactive Download</h2>

        <div style={formStyle}>
          {/* Location Selector */}
          <div style={formItemStyle}>
            <label style={labelStyle}>Location</label>
            <select
              style={selectStyle}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="coastal">Coastal</option>
              <option value="mountain">Mountain</option>
            </select>
          </div>

          {/* Year Selector */}
          <div style={formItemStyle}>
            <label style={labelStyle}>Year</label>
            <select
              style={selectStyle}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Season Selector */}
          <div style={formItemStyle}>
            <label style={labelStyle}>Season</label>
            <select
              style={selectStyle}
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          {/* Altitude Selector */}
          <div style={formItemStyle}>
            <label style={labelStyle}>Altitude</label>
            <select
              style={selectStyle}
              value={selectedAltitude}
              onChange={(e) => setSelectedAltitude(e.target.value)}
            >
              <option value="">Select Altitude</option>
              <option value="low">Low (0-500m)</option>
              <option value="medium">Medium (500-1500m)</option>
              <option value="high">High (1500m+)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleDownload}
          style={buttonStyle}
          disabled={!selectedLocation || !selectedYear || !selectedSeason || !selectedAltitude}
        >
          Preview Download
        </button>
      </div>

      {/* Modal for Preview and Download */}
      {showDownloadModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2>Download Preview</h2>
              <button onClick={closeDownloadModal} style={closeButtonStyle}>×</button>
            </div>
            <div style={modalBodyStyle}>
              <h3>Selected Configuration</h3>
              <table style={modalTableStyle}>
                <tbody>
                  <tr><td>Location:</td><td>{selectedLocation || 'Not selected'}</td></tr>
                  <tr><td>Year:</td><td>{selectedYear || 'Not selected'}</td></tr>
                  <tr><td>Season:</td><td>{selectedSeason || 'Not selected'}</td></tr>
                  <tr><td>Altitude:</td><td>{selectedAltitude || 'Not selected'}</td></tr>
                </tbody>
              </table>
              <h3>Charts Overview</h3>
              <Line data={chartData} />
            </div>
            <div style={modalFooterStyle}>
              <button onClick={confirmDownload} style={downloadButtonStyle}>Download Data</button>
              <button onClick={closeDownloadModal} style={cancelButtonStyle}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the form
const containerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '30px',
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const headerStyle = {
  textAlign: 'center',
  color: '#2c3e50',
  marginBottom: '30px',
  fontSize: '24px'
};

const formStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginBottom: '30px'
};

const formItemStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const labelStyle = {
  marginBottom: '5px',
  color: '#34495e',
  fontWeight: '500'
};

const selectStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #cbd5e0',
  backgroundColor: 'white',
  fontSize: '14px',
  cursor: 'pointer'
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  width: '100%',
  fontSize: '16px'
};

// Modal Styles
const modalOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '700px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  overflowY: 'auto',
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '10px',
};

const closeButtonStyle = {
  fontSize: '24px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#e74c3c'
};

const modalBodyStyle = {
  paddingBottom: '20px',
};

const modalTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const modalFooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const downloadButtonStyle = {
  padding: '12px 24px',
  backgroundColor: '#27ae60',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const cancelButtonStyle = {
  padding: '12px 24px',
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default DownloadInterface;
