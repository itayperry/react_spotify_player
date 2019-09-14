import React from 'react';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <header>
        <div id='header-content'>
          <h1>Welcome to React Spotify player</h1>
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;
