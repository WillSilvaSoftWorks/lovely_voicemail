// src/components/AbsoluteNeed.js
import React from 'react';
import './AbsoluteNeed.css'; // CSS file for styling
import productImage from '../assets/images/IMG_2231.jpg';

function AbsoluteNeed({ isDrawerOpen }) {
  return (
    <div class={`absolute-need-section ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <div class="absolute-need-content">
        <div class="image-container">
          <img src={productImage} alt="Vintage Phone" class="product-image" />
        </div>
        <div class="text-container">
          <h2 class="card-title">The Phone You Absolutely Need for Life's Special Moments</h2>
          <p>
            There are moments in life that simply cannot be captured by photos or videos alone. Your wedding, the birth of your first child, milestone anniversaries, and once-in-a-lifetime celebrations. These moments deserve to be remembered with heartfelt words, laughter, and the voices of the people you love most.
          </p>
          <p>
            With this vintage-inspired phone, you can capture these special memories in the most intimate and nostalgic way. Your loved ones will leave personal voicemails, full of warmth and sincerity, turning fleeting moments into cherished memories that you can replay again and again.
          </p>
          <button class="absolute-need-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default AbsoluteNeed;
