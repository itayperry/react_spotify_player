import React, { useState, useContext, useEffect } from 'react';
import Album from './FavouriteAlbum';
import { AccessTokenContext } from '../store/AccessTokenContext';

function FavouriteAlbums(props) {
  const [albums, setAlbums] = useState([]);
  const [accessToken] = useContext(AccessTokenContext);

  useEffect(() => {
    (async function() {
      const albumsResponse = await fetch(
        'https://api.spotify.com/v1/me/albums',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
            // Authorization: `Bearer ${this.context[0].accessToken}`
          }
        }
      );
      if (!albumsResponse.ok) {
        const text = await albumsResponse.text();
        throw new Error(`Spotify error: ${albumsResponse.status}: ${text}`);
      }
      const jsonResponse = await albumsResponse.json();
      setAlbums(jsonResponse.items);
    })();
  }, []);

  const elements = albums.map((albumInfo, index) => (
    <Album album={albumInfo.album} key={index} />
  ));

  return (
    <div>
      <h2>Your favourite albums:</h2>
      <ul id='albums'>{elements}</ul>
      <audio controls>
        <source
          src='https://p.scdn.co/mp3-preview/157cd3bdc4ab062399413bd20e529de0afecffb9?cid=c176b4c54f424176b6e587c6e937a5f5'
          type='audio/ogg'
        />
        <source src='horse.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default FavouriteAlbums;

// fetch('https://api.spotify.com/v1/me/albums', {
//   headers: {
//     Authorization: `Bearer ${accessToken}`
//     // Authorization: `Bearer ${this.context[0].accessToken}`
//   }
// })
//   .then(function(albumsResponse) {
//     if (!albumsResponse.ok)
//       return albumsResponse.text().then(function(text) {
//         throw new Error(`Spotify error: ${albumsResponse.status}: ${text}`);
//       });
//     return albumsResponse.json();
//   })
//   .then(albums => {
//     setAlbums(albums.items);
//     // console.log(this.state.albumsInfo);
//   });
