import React from 'react';
import '../index.css';  // Make sure to import your CSS file if it's not already imported.

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center text-left"
      style={{ backgroundImage: `url('/ocean.jpg')` }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-white max-w-2xl ml-8 md:ml-16 lg:ml-24 hero-text">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Coastal Monitoring System
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Real-time Monitoring of Tides, Water Quality, and Coastal Conditions to Preserve and Protect Our Oceans
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
