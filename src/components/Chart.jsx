import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="flex-shrink-0 w-[calc(20%-16px)] bg-white rounded-lg shadow-sm p-3">
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
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const parameters = [
    { value: 57.28, label: "Parameter 1", color: "#3B82F6" },
    { value: 33.1, label: "Parameter 2", color: "#2563EB" },
    { value: 82.5, label: "Parameter 3", color: "#1D4ED8" },
    { value: 45.9, label: "Parameter 4", color: "#1E40AF" },
    { value: 91.2, label: "Parameter 5", color: "#1E3A8A" },
    { value: 28.7, label: "Parameter 6", color: "#3B82F6" },
    { value: 63.4, label: "Parameter 7", color: "#2563EB" },
    { value: 72.1, label: "Parameter 8", color: "#1D4ED8" },
    { value: 44.6, label: "Parameter 9", color: "#1E40AF" },
    { value: 88.9, label: "Parameter 10", color: "#1E3A8A" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
      );
    }
  };

  return (
    <div className="w-full relative bg-gray-50 rounded-lg p-4">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Fixed width container showing exactly 5 items */}
      <div className="mx-auto overflow-hidden">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 px-3 no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
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