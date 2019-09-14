import React, { Component } from 'react';
import Album from './Album';

class ReceiveToken extends Component {
  constructor(props) {
    super(props);
    this.checkForToken = this.checkForToken.bind(this);
  }

  componentDidMount() {
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
    return <div>Waiting for a token..</div>;
  }
}

export default ReceiveToken;
