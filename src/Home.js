import React, { Component } from 'react';
import FavouriteAlbums from './FavouriteAlbums';
import SDKPlayer from './SDKPlayer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsInfo: [],
      accessToken: this.props.location.state.accessToken
    };
  }

  componentDidMount() {
    fetch('https://api.spotify.com/v1/me/albums', {
      headers: {
        Authorization: `Bearer ${this.state.accessToken}`
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
        console.log(this.state.albumsInfo);
      });
  }

  render() {
    return (
      <main>
        <div>You're home..</div>
        <FavouriteAlbums albums={this.state.albumsInfo} />
        <SDKPlayer accessToken={this.state.accessToken} />
      </main>
    );
  }
}

export default Home;
