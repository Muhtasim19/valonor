import React from 'react';
import './HomePage.css'; // We'll create this CSS file next

// Define a placeholder for the HeroSection for now
// We might break this out into its own component later for reusability if needed
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover Elevated Style.</h1>
        <p className="hero-subtitle">VALONOR: Where quality meets contemporary design.</p>
        <a href="/new-arrivals" className="hero-button">Shop New Arrivals</a>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection /> {/* Integrate the Hero Section */}

      {/* Placeholder for Shop by Gender / Featured Categories */}
      <section className="shop-by-gender-section">
        <div className="gender-card men-card">
          <a href="/men" className="gender-link">
            <h2>Shop Men</h2>
          </a>
        </div>
        <div className="gender-card women-card">
          <a href="/women" className="gender-link">
            <h2>Shop Women</h2>
          </a>
        </div>
      </section>

      {/* Placeholder for Featured Products Grid */}
      <section className="featured-products-section">
        <h2>Our Latest Collection</h2>
        <div className="product-grid-placeholder">
          {/* Products will be loaded here from API later */}
          <p>Loading amazing new products...</p>
        </div>
      </section>

      {/* You can add more sections here later, like a Call to Action or Testimonials */}
    </div>
  );
}

export default HomePage;