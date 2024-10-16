// src/components/Herosection.js 
import React from 'react';
import './Herosection.css'; // Import the CSS file for styling

function Herosection({ isDrawerOpen }) {
  return (
    <div class={`hero-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <h1>Your Loved Ones Voices Last Forever</h1>
      <p>Vintage Audio Guest Book</p>
      <button class="hero-button">Select Your Style</button>
    </div>
  );
}

export default Herosection;
