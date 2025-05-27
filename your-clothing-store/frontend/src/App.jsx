import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Your main content will go here, like the Homepage component */}
      <main style={{ padding: '60px 20px', textAlign: 'center', minHeight: 'calc(100vh - 80px - 280px)' }}>
        {/* minHeight here is a rough estimate to push footer down, will refine with proper content */}
        <h1>Welcome to VALONOR</h1>
        <p>Your premium destination for fashion.</p>
        {/* This will be replaced by your Homepage component later */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;