import React from 'react';
import './LearningPlatform.css'; // Import the CSS file for styling

const LearningPlatform = () => {
  return (
    <div className="learning-platform-container">
      {/* Main Title */}
      <h1 className="main-title">
        LearnTube is a Freemium Learning Platform That Provides
      </h1>

      {/* Features Section */}
      <div className="features-grid">
        {/* Feature Card 1 */}
        <div className="feature-card">
          <img src="/images/icon1.png" alt="Top Content" className="feature-icon" />
          <h3>Top 1% Content</h3>
          <p>Curated from across the world. No more time wasted looking for the best learning material.</p>
        </div>

        {/* Feature Card 2 */}
        <div className="feature-card">
          <img src="/images/icon2.png" alt="Certified Learning" className="feature-icon" />
          <h3>Certified Learning</h3>
          <p>Assessments & Certification for 2170+ micro-skills across 210+ in-demand skill domains.</p>
        </div>

        {/* Feature Card 3 */}
        <div className="feature-card">
          <img src="/images/icon3.png" alt="Get Paid to Learn" className="feature-icon" />
          <h3>Get Paid to Learn</h3>
          <p>Earn coins for learning & redeem them for cash rewards & even iPhones.</p>
        </div>

        {/* Feature Card 4 */}
        <div className="feature-card">
          <img src="/images/icon4.png" alt="Placement Support" className="feature-icon" />
          <h3>Placement Support</h3>
          <p>Interview preparation, portfolio & CV guidance and access to our network of 900+ employers.</p>
        </div>

        {/* Feature Card 5 */}
        <div className="feature-card">
          <img src="/images/icon5.png" alt="Industry Workshops" className="feature-icon" />
          <h3>Industry Expert Led Workshops</h3>
          <p>From Brands like Google and Facebook! Ask a doubt & get guaranteed responses.</p>
        </div>

        {/* Feature Card 6 */}
        <div className="feature-card">
          <img src="/images/icon6.png" alt="Learn from Whatsapp" className="feature-icon" />
          <h3>Learn From WhatsApp</h3>
          <p>Sign up and Learn On The Go And Get Certified Right Inside Your WhatsApp!</p>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
