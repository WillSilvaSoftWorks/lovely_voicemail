// src/pages/Home.js
import React from 'react';
import Herosection from '../components/Herosection';
import AbsoluteNeed from '../components/AbsoluteNeed';
import ReviewSection from '../components/ReviewSection';

const Home = () => {
  return (
    <div>
      <Herosection />
      <AbsoluteNeed />
      <ReviewSection />
    </div>
  );
};

export default Home;