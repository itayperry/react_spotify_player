import React from 'react';

export default () => (
  <div id='login-content'>
    <h1>Welcome to React Spotify Player</h1>
    <a href='http://localhost:3001/authorize?scope=user-read-private+user-library-read+user-library-modify+streaming+user-read-email&redirect=http://localhost:3000/receive-token'>
      <button>Login to Spotify</button>
    </a>
  </div>
);
