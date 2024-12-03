import React from "react";

const Table = () => {
  const data = [
    {
      deviceName: "4910023",
      category: "Buoy",
      packetReceived: "25Kb",
      lastTransmit: "19 min",
    },
    {
      deviceName: "4910023",
      category: "Buoy",
      packetReceived: "15Kb",
      lastTransmit: "10 min",
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-gray-800 text-sm shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold">Device Name</th>
              <th className="px-4 py-2 text-left font-semibold">Category</th>
              <th className="px-4 py-2 text-left font-semibold">Packet Received</th>
              <th className="px-4 py-2 text-left font-semibold">Last Transmit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2 font-medium">{item.deviceName}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.packetReceived}</td>
                <td className="px-4 py-2 text-center bg-green-100 text-green-700 rounded">
                  {item.lastTransmit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
