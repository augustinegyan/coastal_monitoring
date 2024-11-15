import React, { useState } from 'react';

const DownloadInterface = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedAltitude, setSelectedAltitude] = useState('');
  
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 }, 
    (_, i) => 2000 + i
  );

  const handleDownload = () => {
    // Here you would implement actual download logic
    console.log('Downloading with settings:', {
      location: selectedLocation,
      year: selectedYear,
      season: selectedSeason,
      altitude: selectedAltitude
    });
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '24px'
      }}>Interactive Download</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Location Selector */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={infoBoxStyle}>
          <strong>Selected Configuration:</strong>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Location: {selectedLocation || 'Not selected'}</li>
            <li>Year: {selectedYear || 'Not selected'}</li>
            <li>Season: {selectedSeason || 'Not selected'}</li>
            <li>Altitude: {selectedAltitude || 'Not selected'}</li>
          </ul>
        </div>

        <button 
          onClick={handleDownload}
          style={buttonStyle}
          disabled={!selectedLocation || !selectedYear || !selectedSeason || !selectedAltitude}
        >
          Download Data
        </button>

        <div style={footerStyle}>
          <small>Data available from 2000 to {currentYear}</small>
          <small>• Last updated: {new Date().toLocaleDateString()}</small>
        </div>
      </div>
    </div>
  );
};

// Styles
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
  fontSize: '16px',
  fontWeight: '500',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#2980b9'
  },
  ':disabled': {
    backgroundColor: '#bdc3c7',
    cursor: 'not-allowed'
  }
};

const infoBoxStyle = {
  padding: '15px',
  backgroundColor: 'white',
  borderRadius: '6px',
  border: '1px solid #e2e8f0'
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  color: '#7f8c8d',
  marginTop: '20px'
};

export default DownloadInterface;