// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Lovely Voicemail</h3>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/phones">Phones</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/help">Help</a></li> {/* Added Help link */}
        </ul>
        <p>&copy; 2024 Lovely Voicemail. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;