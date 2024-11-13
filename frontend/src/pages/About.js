// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleButtonClick = () => {
    navigate('/phones'); // Redirect to the Phones page
  };

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
          </p>
        </section>

        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help couples and event organizers create lasting memories. We believe every moment deserves to be
            celebrated and remembered, and our Audio Guest Books are designed to do just that.
          </p>
        </section>

        {/* Select Your Style Button */}
        <div className="select-style-button-container">
          <button className="hero-button" onClick={handleButtonClick}>
            Select Your Style
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;