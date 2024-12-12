
// import React, { useState } from 'react';
// import { FaCompass, FaWind, FaBatteryHalf, FaMapMarkerAlt } from 'react-icons/fa';

// const Compass = () => {
//   // Static values for the components
//   const [heading, setHeading] = useState(180); // Fixed heading value
//   const [pitch, setPitch] = useState(10); // Fixed pitch value
//   const [roll, setRoll] = useState(5); // Fixed roll value
//   const [tilt, setTilt] = useState(3); // Fixed tilt value
//   const [windDirection, setWindDirection] = useState('NW'); // Fixed wind direction
//   const [power, setPower] = useState(75); // Fixed power consumption
//   const [voltage, setVoltage] = useState(12.5); // Fixed voltage value
//   const [batteryPercent, setBatteryPercent] = useState(90); // Fixed battery percentage

//   // Static GPS data
//   const [latitude, setLatitude] = useState('51.5074° N'); // Fixed latitude
//   const [longitude, setLongitude] = useState('0.1278° W'); // Fixed longitude
//   const [altitude, setAltitude] = useState('15 m'); // Fixed altitude

//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-full">
//       {/* Compass Heading Card - spans 2 columns on larger screens */}
//       <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2 bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
//         <div className="flex items-center space-x-2">
//           <FaCompass className="text-3xl text-green-400" />
//           <h2 className="text-lg font-semibold">Compass Heading</h2>
//         </div>
//         <p className="text-3xl font-bold">{heading.toFixed(1)}°</p>
//         <p className="text-gray-400 text-sm">Current Direction</p>
//       </div>

//       {/* Wind Direction Card */}
//       <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
//         <div className="flex items-center space-x-2">
//           <FaWind className="text-3xl text-blue-400" />
//           <h2 className="text-lg font-semibold">Wind Direction</h2>
//         </div>
//         <p className="text-2xl font-bold">{windDirection}</p>
//         <p className="text-gray-400 text-sm">Current Wind Direction</p>
//       </div>

//       {/* Power Consumption and Battery Card */}
//       <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
//         <div className="flex items-center space-x-2">
//           <h2 className="text-lg font-semibold">Power Consumption</h2>
//         </div>
//         <div className="space-y-2">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 text-sm">Power</span>
//             <span className="text-base font-semibold">{power.toFixed(1)} W</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 text-sm">Voltage</span>
//             <span className="text-base font-semibold">{voltage.toFixed(1)} V</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <FaBatteryHalf className="text-xl text-green-400" />
//             <span className="text-base font-semibold">{batteryPercent}%</span>
//           </div>
//         </div>
//       </div>

//       {/* GPS Location Table - placed next to Power Consumption */}
//       <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full xl:col-span-2 ">
//         <div className="flex items-center space-x-2">
//           <FaMapMarkerAlt className="text-3xl text-yellow-400" />
//           <h2 className="text-lg font-semibold">GPS Location</h2>
//         </div>
//         <table className="min-w-full bg-gray-800 text-white text-sm rounded-lg">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="px-4 py-2 text-left font-semibold">Coordinate</th>
//               <th className="px-4 py-2 text-left font-semibold">Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-600">
//               <td className="px-4 py-2">Latitude</td>
//               <td className="px-4 py-2">{latitude}</td>
//             </tr>
//             <tr className="border-b border-gray-600">
//               <td className="px-4 py-2">Longitude</td>
//               <td className="px-4 py-2">{longitude}</td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">Altitude</td>
//               <td className="px-4 py-2">{altitude}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Compass;


import React, { useState } from 'react';
import { FaCompass, FaWind, FaBatteryHalf, FaMapMarkerAlt, FaWater } from 'react-icons/fa';

const Compass = () => {
  // Static values for the components
  const [heading, setHeading] = useState(180); // Fixed heading value
  const [pitch, setPitch] = useState(10); // Fixed pitch value
  const [roll, setRoll] = useState(5); // Fixed roll value
  const [tilt, setTilt] = useState(3); // Fixed tilt value
  const [windDirection, setWindDirection] = useState('NW'); // Fixed wind direction
  const [power, setPower] = useState(75); // Fixed power consumption
  const [voltage, setVoltage] = useState(12.5); // Fixed voltage value
  const [batteryPercent, setBatteryPercent] = useState(90); // Fixed battery percentage

  // Static GPS data
  const [latitude, setLatitude] = useState('51.5074° N'); // Fixed latitude
  const [longitude, setLongitude] = useState('0.1278° W'); // Fixed longitude
  const [altitude, setAltitude] = useState('15 m'); // Fixed altitude

  // New wave-related data
  const [waveDirection, setWaveDirection] = useState('WNW'); // Fixed wave direction
  const [waveEnergy, setWaveEnergy] = useState(8.5); // Fixed wave energy in kW/m

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-full">
      {/* Compass Heading Card - spans 2 columns on larger screens */}
      <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2 bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
        <div className="flex items-center space-x-2">
          <FaCompass className="text-3xl text-green-400" />
          <h2 className="text-lg font-semibold">Compass Heading</h2>
        </div>
        <p className="text-3xl font-bold">{heading.toFixed(1)}°</p>
        <p className="text-gray-400 text-sm">Current Direction</p>
      </div>

      {/* Wind Direction Card */}
      <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
        <div className="flex items-center space-x-2">
          <FaWind className="text-3xl text-blue-400" />
          <h2 className="text-lg font-semibold">Wind Direction</h2>
        </div>
        <p className="text-2xl font-bold">{windDirection}</p>
        <p className="text-gray-400 text-sm">Current Wind Direction</p>
      </div>

      {/* Wave Information Card */}
      <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
        <div className="flex items-center space-x-2">
          <FaWater className="text-3xl text-cyan-400" />
          <h2 className="text-lg font-semibold">Wave Information</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Wave Direction</span>
            <span className="text-base font-semibold">{waveDirection}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Wave Energy</span>
            <span className="text-base font-semibold">{waveEnergy.toFixed(1)} kW/m</span>
          </div>
        </div>
      </div>

      {/* Power Consumption and Battery Card */}
      <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Power Consumption</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Power</span>
            <span className="text-base font-semibold">{power.toFixed(1)} W</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Voltage</span>
            <span className="text-base font-semibold">{voltage.toFixed(1)} V</span>
          </div>
          <div className="flex justify-between items-center">
            <FaBatteryHalf className="text-xl text-green-400" />
            <span className="text-base font-semibold">{batteryPercent}%</span>
          </div>
        </div>
      </div>

      {/* GPS Location Table */}
      <div className="bg-gray-800 text-white border border-gray-700 p-3 w-full text-left space-y-2 h-full">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-3xl text-yellow-400" />
          <h2 className="text-lg font-semibold">GPS Location</h2>
        </div>
        <table className="min-w-full bg-gray-800 text-white text-sm rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left font-semibold">Coordinate</th>
              <th className="px-4 py-2 text-left font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="px-4 py-2">Latitude</td>
              <td className="px-4 py-2">{latitude}</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="px-4 py-2">Longitude</td>
              <td className="px-4 py-2">{longitude}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Altitude</td>
              <td className="px-4 py-2">{altitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compass;