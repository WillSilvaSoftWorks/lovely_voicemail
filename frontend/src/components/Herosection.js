// src/components/Herosection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Herosection.css';

function Herosection({ isDrawerOpen }) {
  const navigate = useNavigate(); // Initialize navigate function

  const handleButtonClick = () => {
    navigate('/phones'); // Redirect to the Phones page
  };

  return (
    <div className={`hero-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <h1>Your Loved Ones Voices Last Forever</h1>
      <p>Vintage Audio Guest Book</p>
      <button className="hero-button" onClick={handleButtonClick}>
        Select Your Style
      </button>
    </div>
  );
}

export default Herosection;