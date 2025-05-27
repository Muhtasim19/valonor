import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage'; // Import ProductListPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Use ProductListPage for all category/list views */}
            <Route path="/men" element={<ProductListPage />} />
            <Route path="/women" element={<ProductListPage />} />
            <Route path="/new-arrivals" element={<ProductListPage />} />
            <Route path="/sale" element={<ProductListPage />} />
            {/* Dynamic route for product details - will create ProductDetailPage next */}
            <Route path="/product/:slug" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>Product Detail Page</h1>} />
            <Route path="/cart" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>Shopping Cart Page</h1>} />
            <Route path="/account" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>My Account Page</h1>} />
            <Route path="/search" element={<h1 style={{ padding: '100px', textAlign: 'center' }}>Search Results Page</h1>} />
            {/* Add more routes for login, signup, checkout, etc. later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;