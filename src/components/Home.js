import React from 'react';
// import SDKPlayer from './SDKPlayer';
import { Switch, Route } from 'react-router-dom';
import FavouriteAlbums from './users-favourites/FavouriteAlbums';
import FavouriteSongs from './users-favourites/FavouriteSongs';
import ShowAlbum from './ShowAlbum';
import NavMenu from './NavMenu';
import Player from './Player';

function Home() {
  return (
    <div id='main-home-container'>
      <div id='side-menu'>
        <div style={{ marginTop: '2rem', marginLeft: '1rem' }}>
          <h2>Your Library..</h2>
          <NavMenu />
        </div>
      </div>
      <main>
        <Switch>
          <Route path='/home/favourite-albums' component={FavouriteAlbums} />
          <Route path='/home/favourite-songs' component={FavouriteSongs} />
          <Route path='/home/album/:albumId' component={ShowAlbum} />
        </Switch>
        <Player />
      </main>

      {/* <SDKPlayer accessToken={this.state.accessToken} /> */}

      {/* <SDKPlayer accessToken={this.context[0].accessToken} /> */}
    </div>
  );
}

export default Home;

// static contextType = AccessTokenContext;
// console.log(this.context[0]);

// Home.contextType = AccessTokenContext;
