// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

function HeroSection({ isDrawerOpen }) {
  return (
    <div className={`hero-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <h1>Your Loved Ones Voices Last Forever</h1>
      <p>Vintage Audio Guest Book</p>
      <button className="hero-button">Select Your Style</button>
    </div>
  );
}

export default HeroSection;
