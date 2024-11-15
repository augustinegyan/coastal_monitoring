import React, { useState } from 'react';

const Header = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const handleLogout = () => {
    // Set redirecting state to true
    setIsRedirecting(true);
    
    // Clear any stored authentication data (if using localStorage)
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Redirect to home page after a brief delay
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };

  const date = new Date();
  const hours = date.getHours();
  const greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md">
      <div>
        <h1 className="text-xs text-gray-600">{greeting}!</h1>
        <p className="text-xl font-semibold">Augustine</p>
      </div>
      <div className="flex items-center space-x-5">
        {/* Notification Bell with Tooltip */}
        <button className="relative text-2xl text-gray-600 group">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
            9
          </span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100">
            Notifications
          </span>
        </button>

        {/* Profile Image with Dropdown Menu */}
        <div className="relative group">
          <img
            className="w-8 h-8 rounded-full border-2 border-indigo-400 cursor-pointer"
            src="https://randomuser.me/api/portraits/men/16.jpg"
            alt="Profile"
          />
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded">
              Profile
            </a>
            <button
              onClick={handleLogout}
              disabled={isRedirecting}
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded"
            >
              {isRedirecting ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;