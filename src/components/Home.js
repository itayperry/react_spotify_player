import React, { Component } from 'react';
import FavouriteAlbums from './FavouriteAlbums';
import FavouriteSongs from './FavouriteSongs';
import SDKPlayer from './SDKPlayer';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { AccessTokenContext } from '../store/AccessTokenContext';

class Home extends Component {
  // const [songId, setSongId] = useState('');
  constructor(props) {
    super(props);
    this.state = {
      songId: ''
    };
  }

  setSongId = id => {
    this.setState({ songId: id });
  };

  // static contextType = AccessTokenContext;

  render() {
    // console.log(this.context[0]);
    return (
      <main>
        <div>You're home..</div>
        <BrowserRouter>
          <Link to='/home/favourite-songs'>Go to songs</Link>
          <Link to='/home/favourite-albums'>Go to albums</Link>
          <Switch>
            <Route
              exact
              path='/home/favourite-albums'
              component={FavouriteAlbums}
            />
            <Route
              exact
              path='/home/favourite-songs'
              component={FavouriteSongs}
            />
          </Switch>
        </BrowserRouter>
        {/* <SDKPlayer accessToken={this.state.accessToken} /> */}

        {/* <SDKPlayer accessToken={this.context[0].accessToken} /> */}
      </main>
    );
  }
}

// Home.contextType = AccessTokenContext;
export default Home;
