import React, { useState } from 'react';
import './ReviewSection.css';
import etsyLogo from '../assets/images/etsy-logo.png';

const reviews = [
  {
    name: "Kirsten",
    date: "Oct 8, 2024",
    rating: 5,
    text: "We used this for our wedding as a guest book! The phone was so cute, just as pictured! And super easy to use for our guests.",
    product: "White Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Navalyn",
    date: "Oct 1, 2024",
    rating: 5,
    text: "My grandmother loved this gift! It made her cry and that was the goal. Happy tears!!",
    product: "Black Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "pdemars10",
    date: "Oct 18, 2024",
    rating: 5,
    text: "Wonderfully and beautifully made. Shipped quickly.",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "LizzyAiesha",
    date: "Oct 16, 2024",
    rating: 5,
    text: "Such a fun idea for the wedding! We’re having a Halloween party next and plan on using again!!",
    product: "White Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Joel",
    date: "Oct 16, 2024",
    rating: 5,
    text: "Worked perfectly for our wedding. It was really easy to set up on the day and our guests had so much fun with it!!",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Maria Fernanda Rodriguez",
    date: "Oct 12, 2024",
    rating: 5,
    text: "Great item to have in Your event! I am looking forward to hearing all the messages from my invitees.",
    product: "White Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Anna",
    date: "Oct 9, 2024",
    rating: 5,
    text: "I am so glad I got this- the messages are so precious! One of the best purchases I made for my wedding!",
    product: "White Vintage Audio Guest Book Phone",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Heidi",
    date: "Oct 4, 2024",
    rating: 5,
    text: "The phone is adorable and exactly as ordered/pictured. The message was easy to set up. Summer is great to work with and in answering your questions quickly.",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  }
];

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at the first review

  const nextSlide = () => {
    if (currentSlide < reviews.length) {
      setCurrentSlide(currentSlide + 1);
      const nextRadioButton = document.getElementById(`review${currentSlide + 1}`);
      if (nextRadioButton) {
        nextRadioButton.checked = true;
      }
    }
  };
  

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
      const prevRadioButton = document.getElementById(`review${currentSlide - 1}`);
      if (prevRadioButton) {
        prevRadioButton.checked = true;
      }
    }
  };
  

  return (
    <div className="review-section">
      <h2 className="reviews-title">What Our Customers Say</h2>

      {/* Radio buttons for slider navigation */}
      <input type="radio" name="slider" id="review1" defaultChecked />
      <input type="radio" name="slider" id="review2" />
      <input type="radio" name="slider" id="review3" />
      <input type="radio" name="slider" id="review4" />

      {/* Left and Right arrow buttons */}
      <button className="arrow left-arrow" onClick={prevSlide} disabled={currentSlide === 1}>
        &#10094;
      </button>
      <button className="arrow right-arrow" onClick={nextSlide} disabled={currentSlide === reviews.length}>
        &#10095;
      </button>

      {/* Review Cards in a slider */}
      <div className="slider">
        {reviews.map((review, index) => (
          <div key={index} className={`review-card slide-${index + 1}`}>
            <div className="review-header">
              <div className="review-info">
                <h3>{review.name}</h3>
                <p>{review.date}</p>
              </div>
              <a href="https://www.etsy.com/shop/LovelyVoicemail" target="_blank" rel="noopener noreferrer">
                <img src={etsyLogo} alt="Etsy Logo" className="etsy-logo" />
              </a>
            </div>

            <p className="review-text">{review.text}</p>

            <div className="rating">
              {'⭐'.repeat(review.rating)} {review.rating} out of 5 stars
            </div>

            <p className="product">Ordered: {review.product}</p>
            <a href={review.productLink} className="view-product" target="_blank" rel="noopener noreferrer">View Product</a>
          </div>
        ))}
      </div>

      {/* Slider navigation */}
      <div className="slider-nav">
        <label htmlFor="review1" className="nav-btn"></label>
        <label htmlFor="review2" className="nav-btn"></label>
        <label htmlFor="review3" className="nav-btn"></label>
        <label htmlFor="review4" className="nav-btn"></label>
      </div>
    </div>
  );
};

export default ReviewSection;
