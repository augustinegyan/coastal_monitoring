import React from 'react';
import HeroSection from '../../components/MHero';
import InfoSection from '../../components/MInfo';
// Import any other components you want to use on the homepage

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      {/* Add more components here if needed */}
    </div>
  );
};

export default Home;
