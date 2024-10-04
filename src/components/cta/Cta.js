import React from 'react';
import './Cta.css'; // Importing the custom CSS

const Footer = () => {
  return (
    <div className="cta-container">
      <h2 className="cta-title">What Are You Waiting For?</h2>
      <button className="cta-button">
        <img src="/images/google.jpeg" alt="Google Logo" className="google-icon" />
        Start Learning For Free
      </button>
    </div>
  );
};

export default Footer;
