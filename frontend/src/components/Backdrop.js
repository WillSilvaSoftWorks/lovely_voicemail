// src/components/Backdrop.js
import React from 'react';
import './Backdrop.css';

function Backdrop({ isDrawerOpen }) {
  return (
    <div className={`backdrop ${isDrawerOpen ? 'drawer-open' : ''}`}>
      {/* Background image will shift when drawer is open */}
    </div>
  );
}

export default Backdrop;

