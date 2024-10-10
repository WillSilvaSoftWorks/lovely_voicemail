import React from "react";
import "./Navbar.css";
import logo from '../assets/images/Lovely_Voicemail_Media.png'; // Make sure this path points to your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-title">                                 
        <img src={logo} alt="Lovely Voicemail Logo" className="navbar-logo"/>
        <div className="navbar-title">Lovely Voicemail</div>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/phones">Phones</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

