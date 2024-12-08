// src/pages/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="help-section">
        

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
        <div className="faq-item">
          <h3>How does the Lovely Voicemail audio guest book work?</h3>
          <p>The price is lower than the rental audio guestbooks. Once you purchase it, you will 100% own the phone, and you are free to access your own voicemails without any strangers listening to your private messages, and you are free to reuse the phone for all of life’s celebrations!</p>
        </div>

        <div className="faq-item">
          <h3>Do I own the phone or do I have to return it as a rental?</h3>
          <p>Once you purchase it, you will 100% own the phone, and you are free to access your own voicemails without any strangers listening to your private messages, and you are free to reuse the phone for all of life’s celebrations!</p>
        </div>

        <div className="faq-item">
          <h3>How many voicemails can I record on the phone?</h3>
          <p>Our phone has 8GB storage and can hold 133 hours / 8000 minutes of audio recordings. You can also empty up more space by transferring the audio files to another location on your laptop.</p>
        </div>

        <div className="faq-item">
          <h3>How do I access the voicemail files? Do I need any special software?</h3>
          <p>By simply connecting the phone to your laptop/PC using the USB-C cord that comes with your package. You will see a USB folder “NO NAME / Untitled” on your device, all of your voicemails are in there in MP3 format.</p>
        </div>

        <div className="faq-item">
          <h3>How is the audio guestbook powered?</h3>
          <p>Our audio guestbooks can be powered by 3 AA batteries.</p>
        </div>

        <div className="faq-item">
          <h3>How long do the 3AA batteries last the phone?</h3>
          <p>3 AA batteries can power on the phone for 8 hours. Your package comes with 5 AA batteries. We recommend taking out the batteries after testing the phone or using a fresh set for each event.</p>
        </div>

        <div className="faq-item">
          <h3>Does the audio guestbook need to be connected to Wi-Fi / Internet?</h3>
          <p>Nope!</p>
        </div>

        <div className="faq-item">
          <h3>How’s the sound quality of the audio guestbooks?</h3>
          <p>Our audio guestbooks are designed to block out loud music and noises in the background while providing high sound quality. <a href="https://www.canva.com/design/DAGITyxpI9Q/2XIA8QUXFJH12uPHfUGTvA/watch" target="_blank" rel="noopener noreferrer">Voicemail Recording Example</a></p>
          
        </div>

        <div className="faq-item">
          <h3>How do I know if the phone is powered on?</h3>
          <p>When the phone is powered on, you’ll see a blue light near the battery box at the bottom of the phone.</p>
        </div>

        <div className="faq-item">
          <h3>My phone starts ringing when I power it on, what do I do?</h3>
          <p>This happens when the MicroSD card in the battery box is not securely inserted. The MicroSD card is located in the battery box behind a small metal plate. Pop out the SD card, then insert it again, and the ringing will stop.</p>
        </div>

        <div className="faq-item">
          <h3>My phone doesn’t have any sounds, what do I do?</h3>
          <p>Make sure 1) the speaker is plugged in; 2) the switch is flipped to “on” (for older models, the switch should be flipped to “Audio”); 3) The phone is powered on (you’ll see a blue light next to the battery box).</p>
        </div>

        <div className="faq-item">
          <h3>I tried to reset my greeting message but it wouldn’t update:</h3>
          <p>Please refer to the “Reset greeting message” section [xx:xx] of the instruction video.</p>
        </div>

        <div className="faq-item">
          <h3>Can I turn down the volume of my greeting message?</h3>
          <p>It might sound loud now, but from testing, we’ve found that it’s the necessary volume for an event space with loud music and background sounds. We’ve designed the volume level to ensure your guests can hear the greeting message even during the most cheerful moments of your event!</p>
        </div>
      </div>
    </div>
  );
};

export default Help;