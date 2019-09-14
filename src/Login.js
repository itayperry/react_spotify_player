import React, { Component } from 'react';
import Album from './Album';

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkForToken = this.checkForToken.bind(this);
    this.state = { albumsInfo: [] };
  }

  checkForToken() {
    console.log('hello');
    const params = new URLSearchParams(window.location.search.substring(1));
    const accessToken = params.get('accessToken');
    if (!params.get('accessToken')) {
      return;
    }
    const expiresIn = params.get('expiresIn');
    const userId = params.get('userId');
    console.log('expiresIn: ' + expiresIn);
    console.log('userId: ' + userId);
    console.log('accessToken: ' + accessToken);

    fetch('https://api.spotify.com/v1/me/albums', {
      headers: {
        Authorization: `Bearer ${accessToken}`
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
        document.querySelector('#albums').innerHTML = `
        <ul>
          ${albums.items.map(({ album }) => `<li>${album.name}</li>`).join('')}
        </ul>
      `;
        // this.setState({
        //   //this works thanks to the arrow function
        //   albumsInfo: albums.items
        // });
      });

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = accessToken;
      const player = new window.Spotify.Player({
        name: 'Broadcast to React Spotify Player',
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }

  render() {
    // const elements = this.state.albumsInfo.map(album => (
    //   <Album name={album.name} />
    // ));
    return (
      <div id='login-content'>
        <button>
          <a
            onClick={this.checkForToken()}
            href='http://localhost:3001/authorize?scope=user-read-private+user-library-read+streaming+user-read-email&redirect=http://localhost:3000/receive-token'
          >
            Login to Spotify
          </a>
        </button>
        <h2>Your favourite albums:</h2>
        <div id='albums'></div>
        {/* <h2>Your favourite albums:</h2>
        <div id='albums'>{elements}</div> */}
      </div>
    );
  }
}

export default Login;
