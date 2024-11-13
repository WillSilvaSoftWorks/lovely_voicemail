// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Lovely Voicemail</h1>
        <p>We’d love to hear from you! Reach out with any questions, comments, or requests, and we’ll get back to you as soon as we can.</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          action="/thank-you" // Optional: Redirects to thank-you page
        >
          {/* Netlify Hidden Field */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-email">
          <h3>Email <a href="mailto:lovelyvoicemail@gmail.com">lovelyvoicemail@gmail.com</a></h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;