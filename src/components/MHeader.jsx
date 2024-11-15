// import React, { useState } from 'react';

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10 ">
//         {/* Logo - Replace with your image */}
//         <div className="flex items-center">
//           <img 
//             src="/gaia_logo.png" 
//             alt="Personal Logo" 
//             className="h-10 md:h-12"  // You can adjust the size as needed
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6">
//           <a href="#home" className="text-white hover:text-blue-500">Home</a>
//           <a href="#campaigns" className="text-white hover:text-blue-500">Campaigns</a>
//           <a href="#events" className="text-white hover:text-blue-500">Events</a>
//           <a href="#about" className="text-white hover:text-blue-500">About</a>
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <div
//           className="text-white text-2xl cursor-pointer md:hidden"
//           onClick={toggleMobileMenu}
//         >
//           ☰
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="absolute top-0 left-0 w-full h-screen bg-white text-black p-6 z-60 shadow-lg md:hidden transition-all ease-in-out duration-300">
//             {/* Cancel Button */}
//             <div className="flex justify-end">
//               <button
//                 className="text-black font-bold text-xl"
//                 onClick={toggleMobileMenu}
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Mobile Navigation Links */}
//             <nav className="flex flex-col gap-4 mt-6">
//               <a href="#home" className="text-black hover:text-blue-500" onClick={toggleMobileMenu}>Home</a>
//               <a href="#campaigns" className="text-black hover:text-blue-500" onClick={toggleMobileMenu}>Campaigns</a>
//               <a href="#events" className="text-black hover:text-blue-500" onClick={toggleMobileMenu}>Events</a>
//               <a href="#about" className="text-black hover:text-blue-500" onClick={toggleMobileMenu}>About</a>
//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// export default Header;



//ADDED FRAME FLOW
// import React, { useState } from 'react'; 
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Menu } from 'lucide-react';
// import '../index.css';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const logoVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   const mobileMenuVariants = {
//     hidden: { 
//       x: '100%',
//       opacity: 0 
//     },
//     visible: { 
//       x: 0,
//       opacity: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: { 
//       x: '100%',
//       opacity: 0,
//       transition: { 
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const navigationItems = ['Home', 'About', 'Contact'];

//   const handleSignIn = () => {
//     window.location.href = '/signin';
//   };

//   return (
//     <>
//       <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10 header-font">
//         {/* Animated Logo */}
//         <motion.div 
//           className="flex items-center"
//           initial="hidden"
//           animate="visible"
//           variants={logoVariants}
//         >
//           <img
//             src="/gaia_logo.png"
//             alt="Personal Logo"
//             className="h-14 md:h-16"
//           />
//         </motion.div>

//         {/* Desktop Navigation */}
//         <motion.nav 
//           className="hidden md:flex items-center gap-8 header-font text-lg mr-4" // Adjusted right margin here
//           initial="hidden"
//           animate="visible"
//         >
//           {navigationItems.map((item, index) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-white hover:text-blue-500 relative font-medium"
//               variants={navItemVariants}
//               custom={index}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item}
//             </motion.a>
//           ))}
//           <motion.button
//             onClick={handleSignIn}
//             className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
//             variants={navItemVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Sign In
//           </motion.button>
//         </motion.nav>

//         {/* Mobile Menu Toggle */}
//         <motion.button
//           className="text-white md:hidden z-50"
//           onClick={toggleMobileMenu}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Menu size={24} />
//         </motion.button>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence mode="wait">
//           {isMobileMenuOpen && (
//             <>
//               {/* Dark overlay */}
//               <motion.div
//                 className="fixed inset-0 bg-black bg-opacity-50 z-40"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={toggleMobileMenu}
//               />

//               {/* Mobile Menu */}
//               <motion.div 
//                 className="fixed top-0 right-0 w-full sm:w-80 h-screen bg-white shadow-lg z-50"
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={mobileMenuVariants}
//               >
//                 {/* Close Button */}
//                 <motion.button
//                   className="absolute top-6 right-6 text-black"
//                   onClick={toggleMobileMenu}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>

//                 {/* Mobile Navigation Links */}
//                 <motion.nav className="flex flex-col gap-4 pt-20 px-8 header-font">
//                   {navigationItems.map((item, index) => (
//                     <motion.a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="text-black text-lg py-2 font-medium hover:text-blue-500"
//                       onClick={toggleMobileMenu}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ 
//                         opacity: 1, 
//                         x: 0,
//                         transition: { delay: index * 0.1 } 
//                       }}
//                       whileHover={{ x: 10 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {item}
//                     </motion.a>
//                   ))}
//                   <motion.button
//                     onClick={() => {
//                       toggleMobileMenu();
//                       handleSignIn();
//                     }}
//                     className="bg-blue-500 text-white text-lg py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 mt-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ 
//                       opacity: 1, 
//                       x: 0,
//                       transition: { delay: navigationItems.length * 0.1 } 
//                     }}
//                     whileHover={{ x: 10 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Sign In
//                   </motion.button>
//                 </motion.nav>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// }

// export default Header;




//
import React, { useState } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import '../index.css';
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Use Link paths instead of hard-coded hrefs
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10 header-font">
        {/* Animated Logo */}
        <motion.div 
          className="flex items-center"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <img
            src="/gaia_logo.png"
            alt="Personal Logo"
            className="h-14 md:h-16"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-8 header-font text-lg mr-4"
          initial="hidden"
          animate="visible"
        >
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={navItemVariants}
              custom={index}
            >
              <Link 
                to={item.path} 
                className="text-white hover:text-blue-500 relative font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
            variants={navItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="text-white md:hidden z-50"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={24} />
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <>
              {/* Dark overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div 
                className="fixed top-0 right-0 w-full sm:w-80 h-screen bg-white shadow-lg z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-6 right-6 text-black"
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                {/* Mobile Navigation Links */}
                <motion.nav className="flex flex-col gap-4 pt-20 px-8 header-font">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 } 
                      }}
                    >
                      <Link 
                        to={item.path} 
                        className="text-black text-lg py-2 font-medium hover:text-blue-500"
                        onClick={toggleMobileMenu}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.button
                    onClick={() => {
                      toggleMobileMenu();
                      handleSignIn();
                    }}
                    className="bg-blue-500 text-white text-lg py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 mt-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: navigationItems.length * 0.1 } 
                    }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </motion.nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;

