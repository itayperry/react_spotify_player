import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkForToken = this.checkForToken.bind();
  }

  checkForToken() {
    console.log('hello');
    const params = new URLSearchParams(window.location.search.substring(1));
    const accessToken = params.get('accessToken');
    if (!params.get('accessToken')) {
      return;
    }
    console.log(accessToken);

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
      .then(function(albums) {
        document.querySelector('#albums').innerHTML = `
        <ul>
          ${albums.items.map(({ album }) => `<li>${album.name}</li>`).join('')}
        </ul>
      `;
      });

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = accessToken;
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
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
      </div>
    );
  }
}

export default Login;
