import React, { useState } from 'react';
import SDKPlayer from './SDKPlayer';
import { Link } from 'react-router-dom';

function Home() {
  const [sondId, setSongId] = useState('');

  return (
    <main>
      <div>You're home..</div>
      <Link to={`/home/favourite-songs`}>Go to songs</Link>
      <Link to={`/home/favourite-albums`}>Go to albums</Link>

      {/* <SDKPlayer accessToken={this.state.accessToken} /> */}

      {/* <SDKPlayer accessToken={this.context[0].accessToken} /> */}
    </main>
  );
}

export default Home;

// static contextType = AccessTokenContext;
// console.log(this.context[0]);

// Home.contextType = AccessTokenContext;
