// src/pages/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="help-section">
        <h1>Manual</h1>

        {/* Canva Embed Code for Manual */}
        <div className="manual-embed" style={{ position: 'relative', width: '100%', height: 0, paddingTop: '75%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
          <iframe
            loading="lazy"
            style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
            src="https://www.canva.com/design/DAGGQa1boHM/PdmJ2D95gLCNwZU5cac-Rg/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>

        {/* Link to YouTube video */}
        <div className="manual-video-link">
          <a
            href="https://www.youtube.com/your-video-link"  // Replace with the actual YouTube link
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch our video guide on using the phone
          </a>
        </div>

        {/* Thumbnail image below the video link */}
        <div className="video-thumbnail">
          <a
            href="https://www.youtube.com/your-video-link"  // Same YouTube link as above
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg"  // Replace YOUR_VIDEO_ID with the actual YouTube video ID
              alt="Video Thumbnail"
              className="thumbnail-image"
            />
          </a>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {/* FAQ items here */}
      </div>
    </div>
  );
};

export default Help;