import React from 'react';
import './Navbar.css'; // We'll create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand Name */}
        <a href="/" className="navbar-logo">
          VALONOR
        </a>

        {/* Primary Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/men" className="nav-links">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a href="/women" className="nav-links">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a href="/new-arrivals" className="nav-links">
              New Arrivals
            </a>
          </li>
          <li className="nav-item">
            <a href="/sale" className="nav-links">
              Sale
            </a>
          </li>
        </ul>

        {/* Right-aligned Icons (Search, User, Cart) */}
        <div className="nav-icons">
          <a href="/search" className="nav-icon-link">
            {/* Replace with an actual search icon (e.g., SVG or Font Awesome) */}
            <span className="icon">🔍</span> {/* Placeholder */}
          </a>
          <a href="/account" className="nav-icon-link">
            {/* Replace with an actual user icon */}
            <span className="icon">👤</span> {/* Placeholder */}
          </a>
          <a href="/cart" className="nav-icon-link">
            {/* Replace with an actual cart icon */}
            <span className="icon">🛒</span> {/* Placeholder */}
            <span className="cart-item-count">0</span> {/* Placeholder for item count */}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;