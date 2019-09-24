import React from 'react';

export default () => (
  <div id='login-content'>
    <button>
      <a href='http://localhost:3001/authorize?scope=user-read-private+user-library-read+streaming+user-read-email&redirect=http://localhost:3000/receive-token'>
        Login to Spotify
      </a>
    </button>
  </div>
);
