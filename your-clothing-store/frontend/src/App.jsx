import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import the HomePage component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main> {/* The main tag will now contain the HomePage */}
        <HomePage /> {/* Render the HomePage component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;