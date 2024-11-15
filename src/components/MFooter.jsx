import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center footer">
        
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left md:w-1/3 mb-6 md:mb-0 footer">
        <img
            src="/gaia_logo.png"
            alt="Personal Logo"
            className="h-7 md:h-8"
          />
          <p className="text-gray-400">
            Join us in making a difference by protecting our oceans. Every step we take helps preserve marine life.
          </p>
        </div>
        
        {/* Center Section - Navigation Links */}
        <div className="flex justify-center md:justify-start gap-6 mb-6 md:mb-0 footerMid">
          <a href="#home" className="text-gray-400 hover:text-white">Home</a>
          <a href="#campaigns" className="text-gray-400 hover:text-white">Contact us</a>
          <a href="#events" className="text-gray-400 hover:text-white">About</a>
          <a href="#about" className="text-gray-400 hover:text-white">Gaia</a>
        </div>
        
        {/* Right Section - Call to Action */}
        <div className="text-center md:text-right md:w-1/3">
          <p className="text-gray-400 mb-2">Stay updated on our latest campaigns</p>
          <a
            href="#subscribe"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Edenway Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
