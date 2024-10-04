import React from 'react';
import './Footer.css'; // Importing the custom CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section: Logo and YouTube Partnership */}
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/images/footer.png" alt="LearnTube Logo" className="footer-logo" />
        </div>
        <div className="footer-developed">
          Developed with <b>YouTube</b>
        </div>
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <a href="#">Terms and Conditions</a>
        <span className="separator">•</span>
        <a href="#">Privacy Policy</a>
        <span className="separator">•</span>
        <a href="#">About Us</a>
      </div>

      {/* Bottom Section: Contact and Social Icons */}
      <div className="footer-bottom">
        <div className="footer-contact">
          <a href="mailto:hello@careerninja.in" className="contact-item">
            <i className="fas fa-envelope"></i> hello@careerninja.in
          </a>
          <a href="https://wa.me/918735089992" className="contact-item">
            <i className="fab fa-whatsapp"></i> +91 8735089992
          </a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        &copy; 2024 CareerNinja
      </div>
    </footer>
  );
};

export default Footer;
