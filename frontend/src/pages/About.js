// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <h1>About Lovely Voicemail</h1>
        <p>Preserving voices, capturing memories, and making moments unforgettable.</p>
      </div>

      <div className="card">
        <section className="founder-story">
          <h2>Our Story</h2>
          <p>
            Founded by Summer, Lovely Voicemail was born out of a passion for weddings and the desire to help couples
            capture their special day in a unique way. With years of experience in the wedding industry, Summer has
            helped countless couples create cherished memories, turning her love for special moments into a beautiful business.
          </p>
        </section>

        <section className="services-offered">
          <h2>What We Offer</h2>
          <p>
            At Lovely Voicemail, we provide a modern twist on traditional guest books. Our Audio Guest Book
            captures heartfelt messages from loved ones, transforming them into keepsakes you can cherish for years to come.
            Each message is a piece of your story, a way to relive the voices of your loved ones long after the celebration.
          </p>
        </section>

        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help couples and event organizers create lasting memories. We believe every moment deserves to be
            celebrated and remembered, and our Audio Guest Books are designed to do just that. Thank you for choosing us to be a part
            of your special day.
          </p>
          <p>Lovely Voicemail – Capturing moments, preserving voices.</p>
        </section>
      </div>
    </div>
  );
};

export default About;