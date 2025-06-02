import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For linking to registration
import './AuthPage.css'; // We'll create a shared CSS file for Auth pages

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send a request to your Django backend
    // using axios.post to an endpoint like /api/token/ (for Djoser/DRF Simple JWT)
    console.log('Login attempt:', { email, password });
    alert('Login functionality coming soon!'); // Placeholder for now
    // On successful login, redirect user to their dashboard or homepage
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link-text">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p className="auth-link-text">
          <Link to="/forgot-password">Forgot password?</Link> {/* Placeholder for later */}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;