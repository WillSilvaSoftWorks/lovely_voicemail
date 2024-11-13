// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import logo from '../assets/images/Lovely_Voicemail_Media.png';

function Navbar({ isDrawerOpen, toggleDrawer }) {
  return (
    <nav className={`nav-bar ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <div className="navbar-logo-title">
        <img src={logo} alt="Lovely Voicemail Logo" className="navbar-logo"/>
        <div className="navbar-title">Lovely Voicemail</div>
      </div>

      {/* Hamburger button for mobile */}
      <button className={`menuButton ${isDrawerOpen ? 'active' : ''}`} onClick={toggleDrawer}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      {/* Drawer Navigation (for mobile) */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <ul className="drawer-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/phones">Phones</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/help">Help</a></li> {/* Added Help link */}
        </ul>
      </div>

      {/* Normal navbar links (for desktop) */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/phones">Phones</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/help">Help</a></li> {/* Added Help link */}
      </ul>
    </nav>
  );
}

export default Navbar;