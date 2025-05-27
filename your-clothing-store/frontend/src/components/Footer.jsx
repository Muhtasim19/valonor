import React from 'react';
import './Footer.css'; // We'll create this CSS file next

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Brand Info / About */}
        <div className="footer-section footer-about">
          <h3 className="footer-logo">VALONOR</h3>
          <p className="footer-description">
            Your premium destination for contemporary fashion, crafted with quality and style.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              {/* Placeholder for Facebook icon */}
              <span>f</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              {/* Placeholder for Instagram icon */}
              <span>i</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              {/* Placeholder for Twitter icon */}
              <span>t</span>
            </a>
            {/* You can replace 'f', 'i', 't' with actual SVG icons or Font Awesome later */}
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/faq" className="footer-link">FAQ</a></li>
            <li><a href="/blog" className="footer-link">Blog</a></li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div className="footer-section footer-customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/shipping-policy" className="footer-link">Shipping Policy</a></li>
            <li><a href="/returns-exchanges" className="footer-link">Returns & Exchanges</a></li>
            <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>

        {/* Section 4: Newsletter (Optional for now, but good to plan) */}
        <div className="footer-section footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe to our newsletter for exclusive updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VALONOR. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;