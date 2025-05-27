import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';

// Placeholder components for pages we'll create soon
// We'll replace these with actual page components later
const MenPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Men's Clothing Page</h1>;
const WomenPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Women's Clothing Page</h1>;
const NewArrivalsPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>New Arrivals Page</h1>;
const SalePage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Sale Page</h1>;
const ProductDetailPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Product Detail Page</h1>;
const CartPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Shopping Cart Page</h1>;
const AccountPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>My Account Page</h1>;
const SearchPage = () => <h1 style={{ padding: '100px', textAlign: 'center' }}>Search Results Page</h1>;


function App() {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <div className="App">
        <Navbar />
        <main>
          <Routes> {/* Define your routes here */}
            <Route path="/" element={<HomePage />} /> {/* Homepage */}
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} /> {/* Dynamic route for product details */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* Add more routes for login, signup, checkout, etc. later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;