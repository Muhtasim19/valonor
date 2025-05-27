import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css'; // Keep or modify this for global App styles

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Your main content will go here, like the Homepage component */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to VALONOR</h1>
        <p>Your premium destination for fashion.</p>
        {/* This will be replaced by your Homepage component later */}
      </main>
      {/* We'll add the Footer component here later */}
    </div>
  );
}

export default App;