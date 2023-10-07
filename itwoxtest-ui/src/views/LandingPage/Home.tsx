// LandingPage.js
import React from 'react';
import './landing.scss';
// import landingImage from './images/landing-image.jpg'; // Update the path to your image

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <h1>Welcome to ITWOX Test</h1>
      </header>
      <section className="landing-content">
        <div className="image-container">
          {/* <img src={landingImage} alt="Landing Page" /> */}
        </div>
        <div className="text-container">
          <p>This is a landing page for the ITWOX Test.</p>
          {/* You can add more content here */}
        </div>
      </section>
      <footer>
        {/* You can add footer content here */}
      </footer>
    </div>
  );
}

export default LandingPage;
