import React from "react";

const Table = () => {
  const data = [
    {
      instrumentName: "COMPASS HMR3000",
      category: "Compass",
      subCategory: "",
      measurements: [
        { name: "Heading", value: 49, unit: "°", lastTransmit: "19 min" },
        { name: "Pitch", value: 0.4, unit: "°", lastTransmit: "19 min" },
        { name: "Pitch Std Dev", value: 1.2, unit: "°", lastTransmit: "19 min" },
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-gray-800 text-sm shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold">Instrument Name</th>
              <th className="px-4 py-2 text-left font-semibold">Category</th>
              <th className="px-4 py-2 text-left font-semibold">Sub Category</th>
              <th className="px-4 py-2 text-left font-semibold">Measurement</th>
              <th className="px-4 py-2 text-left font-semibold">Value</th>
              <th className="px-4 py-2 text-left font-semibold">Unit</th>
              <th className="px-4 py-2 text-left font-semibold">Last Transmit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {item.measurements.map((measurement, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    {/* Only display instrument info for the first row */}
                    {idx === 0 && (
                      <>
                        <td rowSpan={item.measurements.length} className="px-4 py-2 font-medium">
                          {item.instrumentName}
                        </td>
                        <td rowSpan={item.measurements.length} className="px-4 py-2">
                          {item.category}
                        </td>
                        <td rowSpan={item.measurements.length} className="px-4 py-2">
                          {item.subCategory || "-"}
                        </td>
                      </>
                    )}
                    <td className="px-4 py-2">{measurement.name}</td>
                    <td className="px-4 py-2">{measurement.value}</td>
                    <td className="px-4 py-2">{measurement.unit}</td>
                    <td className="px-4 py-2 text-center bg-green-100 text-green-700 rounded">
                      {measurement.lastTransmit}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
