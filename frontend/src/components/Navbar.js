import React from "react";
import "./Navbar.css";
import logo from '../assets/images/Lovely_Voicemail_Media.png';

function Navbar({ isDrawerOpen, toggleDrawer }) {
  return (
    <nav class={`nav-bar ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <div class="navbar-logo-title">
        <img src={logo} alt="Lovely Voicemail Logo" class="navbar-logo"/>
        <div class="navbar-title">Lovely Voicemail</div>
      </div>

      {/* Hamburger button for mobile */}
      <button class={`menuButton ${isDrawerOpen ? 'active' : ''}`} onClick={toggleDrawer}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>

      {/* Drawer Navigation (for mobile) */}
      <div class={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <ul class="drawer-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/phones">Phones</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Normal navbar links (for desktop) */}
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/phones">Phones</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

