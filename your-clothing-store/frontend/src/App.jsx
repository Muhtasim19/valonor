import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';     // Import LoginPage
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage
import './App.css';

// ... (keep other placeholder components for now like CartPage etc.)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<ProductListPage />} />
            <Route path="/women" element={<ProductListPage />} />
            <Route path="/new-arrivals" element={<ProductListPage />} />
            <Route path="/sale" element={<ProductListPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>Shopping Cart Page</h1>} />
            <Route path="/account" element={<LoginPage />} /> {/* Route account icon to Login */}
            <Route path="/login" element={<LoginPage />} />       {/* New Login Route */}
            <Route path="/register" element={<RegisterPage />} /> {/* New Register Route */}
            <Route path="/search" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>Search Results Page</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;