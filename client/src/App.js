import React, { useState, useEffect } from 'react';
import Users from './Users';
import Items from './Items';
import PixelGrid from './pixelgrid.js';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('pixelgrid');

  useEffect(() => {
    // Prevent mouse wheel scrolling (both horizontal and vertical) but allow scrollbar
    const preventWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    // Add to window and document to catch all wheel events
    window.addEventListener('wheel', preventWheel, { passive: false, capture: true });
    document.addEventListener('wheel', preventWheel, { passive: false, capture: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('wheel', preventWheel, { capture: true });
      document.removeEventListener('wheel', preventWheel, { capture: true });
    };
  }, []);

  return (
    <div className="App">
      {currentPage !== 'pixelgrid' && (
        <nav className="navbar">
          <h1 className="app-title">PixelGrid</h1>
          <div className="nav-buttons">
            <button
              onClick={() => setCurrentPage('pixelgrid')}
              className={currentPage === 'pixelgrid' ? 'active' : ''}
            >
              PixelGrid
            </button>
            <button
              onClick={() => setCurrentPage('users')}
              className={currentPage === 'users' ? 'active' : ''}
            >
              Users
            </button>
            <button
              onClick={() => setCurrentPage('items')}
              className={currentPage === 'items' ? 'active' : ''}
            >
              Items
            </button>
          </div>
        </nav>
      )}

      <main className="main-content">
        {currentPage === 'users' && <Users />}
        {currentPage === 'items' && <Items />}
        {currentPage === 'pixelgrid' && (
          <div style={{ margin: 0, padding: 0 }}>
            <PixelGrid />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
