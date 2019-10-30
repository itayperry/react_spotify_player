import React, { useState } from 'react';
import SDKPlayer from './SDKPlayer';
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import Player from './Player';
import FavouriteAlbums from './FavouriteAlbums';
import FavouriteSongs from './FavouriteSongs';
import ShowAlbum from './ShowAlbum';

function Home() {
  // const [sondId, setSongId] = useState('');
  let { path, url } = useRouteMatch();
  let { match } = useRouteMatch();
  console.log(match, path, url);

  return (
    <main>
      <div>You're home..</div>
      {/* <BrowserRouter> */}
      <Link to={`/home/favourite-songs`}>
        <button>Go to songs</button>
      </Link>
      <Link to='/home/favourite-albums'>
        <button>Go to albums</button>
      </Link>

      <Switch>
        <Route path='/home/favourite-albums' component={FavouriteAlbums} />
        <Route path='/home/favourite-songs' component={FavouriteSongs} />
        <Route path='/home/album/:albumId' component={ShowAlbum} />
      </Switch>

      {/* </BrowserRouter> */}

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
