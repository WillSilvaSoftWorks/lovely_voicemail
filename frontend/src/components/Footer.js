import React from "react";
import "./Footer.css";

function Footer({ isDrawerOpen }) {
  return (
    <footer className={`footer ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <div className="footer-content">
        <div className="footer-logo-title">
          <h2 className="footer-title">Lovely Voicemail</h2>
          <p className="copyright">&copy; 2024 Lovely Voicemail. All rights reserved.</p>
        </div>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/phones">Phones</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
