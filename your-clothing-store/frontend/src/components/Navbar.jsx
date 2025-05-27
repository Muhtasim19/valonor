import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand Name */}
        <Link to="/" className="navbar-logo"> {/* Use Link instead of a */}
          VALONOR
        </Link>

        {/* Primary Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/men" className="nav-links"> {/* Use Link */}
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/women" className="nav-links"> {/* Use Link */}
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new-arrivals" className="nav-links"> {/* Use Link */}
              New Arrivals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sale" className="nav-links"> {/* Use Link */}
              Sale
            </Link>
          </li>
        </ul>

        {/* Right-aligned Icons (Search, User, Cart) */}
        <div className="nav-icons">
          <Link to="/search" className="nav-icon-link"> {/* Use Link */}
            <span className="icon">🔍</span>
          </Link>
          <Link to="/account" className="nav-icon-link"> {/* Use Link */}
            <span className="icon">👤</span>
          </Link>
          <Link to="/cart" className="nav-icon-link"> {/* Use Link */}
            <span className="icon">🛒</span>
            <span className="cart-item-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;