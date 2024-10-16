import React from "react";
import "./Footer.css";

function Footer({ isDrawerOpen }) {
  return (
    <footer class={`footer ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <div class="footer-content">
        <div class="footer-logo-title">
          <h2 class="footer-title">Lovely Voicemail</h2>
          <p class="copyright">&copy; 2024 Lovely Voicemail. All rights reserved.</p>
        </div>
        <ul class="footer-links">
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
