import React, { useState } from 'react';
// import SDKPlayer from './SDKPlayer';
import { Link, Switch, Route } from 'react-router-dom';
import Player from './Player';
import FavouriteAlbums from './FavouriteAlbums';
import FavouriteSongs from './FavouriteSongs';
import ShowAlbum from './ShowAlbum';

function Home() {
  return (
    <main>
      <h2>You're home..</h2>
      <Link to={`/home/favourite-songs`}>
        <button>Your Favourite Songs</button>
      </Link>
      <Link to='/home/favourite-albums'>
        <button>Your Favourite Albums</button>
      </Link>

      <Switch>
        <Route path='/home/favourite-albums' component={FavouriteAlbums} />
        <Route path='/home/favourite-songs' component={FavouriteSongs} />
        <Route path='/home/album/:albumId' component={ShowAlbum} />
      </Switch>

      <Player />

      {/* <SDKPlayer accessToken={this.state.accessToken} /> */}

      {/* <SDKPlayer accessToken={this.context[0].accessToken} /> */}
    </main>
  );
}

export default Home;

// static contextType = AccessTokenContext;
// console.log(this.context[0]);

// Home.contextType = AccessTokenContext;
