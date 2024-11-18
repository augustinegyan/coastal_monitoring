// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../index.css';

// function Footer() {
//   return (
//     <footer className="bg-black text-white py-12">
//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start footer">
        
//         {/* Left Section - Logo and Description */}
//         <div className="text-center md:text-left md:w-1/3 mb-6 md:mb-0 footer">
//           <img
//             src="/gaia_logo.png"
//             alt="Personal Logo"
//             className="h-7 md:h-8 mb-4 md:mb-0"
//           />
//           <p className="text-gray-400">
//             Join us in making a difference by protecting our oceans. Every step we take helps preserve marine life.
//           </p>
//         </div>
        
//         {/* Center Section - Navigation Links */}
//         <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mb-6 md:mb-0 footerMid">
//           <Link to="/home" className="text-gray-400 hover:text-white">Home</Link>
//           <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
//           <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
//           <Link to="/gaia" className="text-gray-400 hover:text-white">Gaia</Link>
//         </div>
        
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Edenway Foundation. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left md:w-1/3 mb-6 md:mb-0">
          <img
            src="/gaia_logo.png"
            alt="Personal Logo"
            className="h-7 md:h-8 mb-4 md:mb-0"
          />
          <p className="text-gray-400">
            Join us in making a difference by protecting our oceans. Every step we take helps preserve marine life.
          </p>
        </div>
        
        {/* Center Section - Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mb-6 md:mb-0">
          <Link to="/home" className="text-gray-400 hover:text-white">Home</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link to="/gaia" className="text-gray-400 hover:text-white">Gaia</Link>
        </nav>
        
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Edenway Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;