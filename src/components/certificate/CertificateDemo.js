import React from 'react';
import './CertificateDemo.css'; // Import the CSS file


const CertificateDemo = () => {
  return (
    <div className="certificate-demo-container">
      {/* Header Section */}
      <div className="header-section">
        <h2>
          Get Certified By Learning <span className="highlight">200+ Skills For Free</span> on YouTube.
        </h2>
        <ul className="features-list">
          <li>🎓 200+ In-Demand Skills</li>
          <li>👨‍🎓 8,00,000+ Learners</li>
          <li>💼 1100+ Hiring Partners</li>
          <li>⭐ 4.8/5 Average Course Rating</li>
          <li>🎁 Unlock ₹1.1 Lakh+ Rewards</li>
        </ul>
      </div>

      {/* Body Section */}
      <div className='body-section'>
        <div className="certificate-section">
          
          
        </div>

        {/* Form Section */}
        <div className="form-section">
            <div className="certificate-section">
          <img src="/images/certificate.png" alt="Certificate" className="certificate-image" />
          
        </div>
          <div className="social-login">
            <button className="google-login">Sign in with Google</button>
            <button className="facebook-login">Sign in with Facebook</button>
          </div>
          <span>or</span>
          <form className="registration-form">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input type="text" placeholder="WhatsApp Number" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            <button type="submit" className="form-submit-button">Start Learning For Free</button>
          </form>
          <p className="login-link">or <a href="#">Login with Email</a></p>
        </div>
      </div>
    </div>
  );
};

export default CertificateDemo;
