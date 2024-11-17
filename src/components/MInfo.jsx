
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const InfoSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-left overflow-x-hidden infoHead">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
          {/* Logos Container */}
          <motion.div 
            className="col-span-1 md:col-span-4 flex justify-center md:justify-start items-center space-x-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Logo 1 */}
            <motion.img
              src="/GaiaLogo.jpg"
              alt="Institution 1 Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            {/* Logo 2 */}
            <motion.img
              src="/gmesafrica.png"
              alt="Institution 2 Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="col-span-1 md:col-span-8 lg:col-span-7 md:pl-4 ml-8 md:ml-16"  
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The Buoy System: A Cutting-Edge Solution for Coastal Monitoring
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our innovative buoy system is designed to monitor real-time ocean conditions, including water quality, 
              temperature, and tidal movements. Equipped with state-of-the-art sensors, it helps provide critical data 
              for environmental protection efforts, ensuring the health of our oceans and coastal ecosystems.
            </motion.p>

            <motion.a
              href="#"
              className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
              <svg 
                className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L14 7.414V17a1 1 0 11-2 0V7.414l-3.293 3.293a1 1 0 01-1.414-1.414l5-5z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
