import React, { useState } from 'react';
import './ReviewSection.css';
import etsyLogo from '../assets/images/etsy-logo.png';

const reviews = [
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
    name: "Maria Rodriguez",
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
    name: "Kirsten",
    date: "Oct 8, 2024",
    rating: 5,
    text: "We used this for our wedding as a guest book! The phone was so cute, just as pictured! And super easy to use for our guests.",
    product: "White Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Heidi",
    date: "Oct 4, 2024",
    rating: 5,
    text: "The phone is adorable and exactly as ordered/pictured. The message was easy to set up. Summer is great to work with and in answering your questions quickly.",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "adriv17",
    date: "Sep 20, 2024",
    rating: 5,
    text: "The Bride to be and all guests loved this! We decided to use it for her Bridal Shower so far and she’ll use it again for the wedding! Very fun, sweet, and personable!",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "bsandler84",
    date: "Sep 20, 2024",
    rating: 5,
    text: "Great product! Amazing customer service!",
    product: "Black Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Rodricnique",
    date: "Sep 5, 2024",
    rating: 5,
    text: "Item went above my expectations, in person it’s even more beautiful & well worth the price.",
    product: "White Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "kenforeverlost",
    date: "Sep 3, 2024",
    rating: 5,
    text: "Product is a quality and unique guest book! Seller is helpful and responsive. Would highly recommend!",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Claire",
    date: "Aug 24, 2024",
    rating: 5,
    text: "She was so great and amazing! The phone is perfect so nice easy directions I can’t wait for my wedding to see everybody using it !!!",
    product: "Black Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Adisa",
    date: "Aug 22, 2024",
    rating: 5,
    text: "Seller was great! The phone was a hit at the wedding! Can’t wait to listen to the messages at our 1yr!",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Nuria",
    date: "Aug 21, 2024",
    rating: 5,
    text: "I received the phone for my daughters Quince and it is a perfect addition for the party. Can’t wait to use it. Had questions when it arrived but the seller was quick to respond which was appreciated. I love the idea of a phone guestbook.",
    product: "White Retro Audio Guest Book Phone with Sign",
    productLink: "https://www.etsy.com/listing/1660744197/vintage-audio-guest-book-phone-with-sign"
  },
  {
    name: "Janie",
    date: "Aug 17, 2024",
    rating: 5,
    text: "Just absolutely amazing! The amount of compliments we got on this audio guestbook was through the roof! Couldn’t be happier with how everything turned out and even more excited to be able to hear our loved ones voices for years to come! Beautiful memories 🥰",
    product: "Black Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
  },
  {
    name: "Gina",
    date: "Aug 16, 2024",
    rating: 5,
    text: "Summer was SO helpful and responsive to all of our questions. The phone is beautiful and voicemails play back clear!",
    product: "Black Voicemail Guest Book with Sign",
    productLink: "https://www.etsy.com/listing/1660741405/voicemail-guest-book-with-sign-free"
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
