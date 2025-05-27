import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './HomePage.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover Elevated Style.</h1>
        <p className="hero-subtitle">VALONOR: Where quality meets contemporary design.</p>
        <Link to="/new-arrivals" className="hero-button">Shop New Arrivals</Link> {/* Use Link */}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />

      <section className="shop-by-gender-section">
        <div className="gender-card men-card">
          <Link to="/men" className="gender-link"> {/* Use Link */}
            <h2>Shop Men</h2>
          </Link>
        </div>
        <div className="gender-card women-card">
          <Link to="/women" className="gender-link"> {/* Use Link */}
            <h2>Shop Women</h2>
          </Link>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Our Latest Collection</h2>
        <div className="product-grid-placeholder">
          <p>Loading amazing new products...</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;