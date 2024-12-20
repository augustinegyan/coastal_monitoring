
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 z-[100] header-font transition-all duration-300 ${
      hasScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      {/* Responsive Logo */}
      <motion.div 
        className="flex items-center"
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <img
          src="/gaia_logo.png"
          alt="Personal Logo"
          className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
        />
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav 
        className="hidden md:flex items-center gap-3 lg:gap-6"
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
              className="text-white hover:text-blue-500 relative font-medium text-xs sm:text-sm lg:text-base transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <motion.button
          onClick={handleSignIn}
          className="bg-blue-500 text-white px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs sm:text-sm lg:text-base font-medium hover:bg-blue-600 transition-all duration-300"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="text-white md:hidden z-[110] p-1.5"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isMobileMenuOpen ? (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[105]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Content */}
            <motion.div 
              className="fixed top-0 right-0 w-full h-screen bg-white z-[105]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <motion.nav className="flex flex-col items-center justify-center h-full gap-6 px-5 sm:px-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 } 
                    }}
                    className="w-full text-center"
                  >
                    <Link 
                      to={item.path} 
                      className="text-black text-xl sm:text-2xl py-2 font-medium hover:text-blue-500 block transition-all duration-300"
                      onClick={toggleMobileMenu}
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
                  className="bg-blue-500 text-white text-xl sm:text-2xl py-2 px-8 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: navigationItems.length * 0.1 } 
                  }}
                >
                  Sign In
                </motion.button>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;