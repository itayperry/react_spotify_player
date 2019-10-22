import React, { Component } from 'react';
import FavouriteAlbums from './FavouriteAlbums';
import FavouriteSongs from './FavouriteSongs';
import SDKPlayer from './SDKPlayer';
import { Redirect } from 'react-router-dom';
import { AccessTokenContext } from '../store/AccessTokenContext';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsInfo: [],
      accessToken: this.props.location.state.accessToken
    };
  }

  static contextType = AccessTokenContext;

  componentDidMount() {
    // console.log(this.context[0].accessToken);
    console.log(
      "You're at the home component - this is its context " + this.context[0]
    );

    fetch('https://api.spotify.com/v1/me/albums', {
      headers: {
        Authorization: `Bearer ${this.state.accessToken}`
        // Authorization: `Bearer ${this.context[0].accessToken}`
      }
    })
      .then(function(albumsResponse) {
        if (!albumsResponse.ok)
          albumsResponse.text().then(function(text) {
            throw new Error(`Spotify error: ${albumsResponse.status}: ${text}`);
          });
        return albumsResponse.json();
      })
      .then(albums => {
        this.setState({
          //this works thanks to the arrow function
          albumsInfo: albums.items
        });
        // console.log(this.state.albumsInfo);
      });
  }

  render() {
    // if (this.context[0]) {
    return (
      <main>
        <div>You're home..</div>
        <FavouriteAlbums albums={this.state.albumsInfo} />
        <SDKPlayer accessToken={this.state.accessToken} />
        <FavouriteSongs />
        {/* <SDKPlayer accessToken={this.context[0].accessToken} /> */}
      </main>
    );
    // } else {
    // return <Redirect to='/login' />;
    // }
  }
}

// Home.contextType = AccessTokenContext;
export default Home;
