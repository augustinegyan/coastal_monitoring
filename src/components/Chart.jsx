import React from 'react';

const GaugeChart = ({ value, maxValue = 100, label, color = "#3B82F6" }) => {
  const percentage = (value / maxValue) * 100;
  const angle = (percentage * 180) / 100;

  const createArc = (radius, startAngle, endAngle) => {
    const start = polarToCartesian(radius, startAngle);
    const end = polarToCartesian(radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  const polarToCartesian = (radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180;
    return {
      x: 100 + radius * Math.cos(angleInRadians),
      y: 100 + radius * Math.sin(angleInRadians)
    };
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-white rounded-lg shadow-sm p-3">
      <svg width="100%" height="120" viewBox="0 0 200 120">
        {/* Background arc */}
        <path
          d={createArc(80, 0, 180)}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="24"
          strokeLinecap="butt"
        />
        
        {/* Value arc */}
        <path
          d={createArc(80, 0, angle)}
          fill="none"
          stroke={color}
          strokeWidth="24"
          strokeLinecap="butt"
        />
        
        {/* Center text */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          className="text-2xl font-bold"
          fill="currentColor"
        >
          {value}
        </text>
        
        {/* Label */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className="text-sm font-medium"
          fill="currentColor"
        >
          {label}
        </text>
      </svg>
    </div>
  );
};

const GaugeSlider = () => {
  const parameters = [
    { value: 57.28, label: "Parameter 1", color: "#3B82F6" },
    { value: 33.1, label: "Parameter 2", color: "#2563EB" },
    { value: 82.5, label: "Parameter 3", color: "#1D4ED8" },
    { value: 45.9, label: "Parameter 4", color: "#1E40AF" },
    { value: 91.2, label: "Parameter 5", color: "#1E3A8A" },
  ];

  return (
    <div className="w-full bg-gray-50 rounded-lg p-4">
      {/* Container for the gauges */}
      <div className="mx-auto overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4">
          {parameters.map((param, index) => (
            <GaugeChart
              key={index}
              value={param.value}
              label={param.label}
              color={param.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaugeSlider;
