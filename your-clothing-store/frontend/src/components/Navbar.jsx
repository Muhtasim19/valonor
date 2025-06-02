import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

import './Navbar.css'; // Don't forget to keep your CSS import

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand Name */}
        <Link to="/" className="navbar-logo">
          VALONOR
        </Link>

        {/* Primary Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/men" className="nav-links">
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/women" className="nav-links">
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new-arrivals" className="nav-links">
              New Arrivals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sale" className="nav-links">
              Sale
            </Link>
          </li>
        </ul>

        {/* Right-aligned Icons (Search, User, Cart) */}
        <div className="nav-icons">
          <Link to="/search" className="nav-icon-link">
            {/* Replace with an actual search icon (e.g., SVG or Font Awesome) */}
            <span className="icon">🔍</span> {/* Placeholder */}
          </Link>
          <Link to="/login" className="nav-icon-link"> {/* This now points to your login page */}
            {/* Replace with an actual user icon */}
            <span className="icon">👤</span> {/* Placeholder */}
          </Link>
          <Link to="/cart" className="nav-icon-link">
            {/* Replace with an actual cart icon */}
            <span className="icon">🛒</span> {/* Placeholder */}
            <span className="cart-item-count">0</span> {/* Placeholder for item count */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;