import React from 'react';

const TT = () => {
  // Sample data for the table
  const data = [
    { id: 1, buoyName: 'Buoy A', coordinates: '37.7749° N, -122.4194° W' },
    { id: 2, buoyName: 'Buoy B', coordinates: '34.0522° N, -118.2437° W' },
    { id: 3, buoyName: 'Buoy C', coordinates: '40.7128° N, -74.0060° W' },
    { id: 4, buoyName: 'Buoy D', coordinates: '51.5074° N, -0.1278° W' },
    { id: 5, buoyName: 'Buoy E', coordinates: '48.8566° N, 2.3522° E' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">Byou Network</h1>
      <table className="min-w-full bg-white text-black border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100 border-b border-gray-300">
            <th className="p-3">ID</th>
            <th className="p-3">Buoy Name</th>
            <th className="p-3">Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-300">
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.buoyName}</td>
              <td className="p-3 bg-green-200">{item.coordinates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TT;
