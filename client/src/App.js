import React, { useState } from 'react';
import Users from './Users';
import Items from './Items';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('users');

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="app-title">Full Stack App</h1>
        <div className="nav-buttons">
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

      <main className="main-content">
        {currentPage === 'users' && <Users />}
        {currentPage === 'items' && <Items />}
      </main>
    </div>
  );
}

export default App;
