
import React from 'react';

function HeroSection() {
  return (
    <div className="relative min-h-[600px] w-full flex items-center hero-text">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('ocean.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-3xl pl-4 sm:pl-8 lg:pl-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            COASTAL MONITORING SYSTEM
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
            Real-time Monitoring of Tides, Water Quality, and Coastal Conditions to Preserve and Protect Our Oceans
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;