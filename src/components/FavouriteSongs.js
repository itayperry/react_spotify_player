import React, { useState, useContext, useEffect } from 'react';
import { AccessTokenContext } from '../store/AccessTokenContext';
import FavouriteSong from './FavouriteSong';

const FavouriteSongs = () => {
  const [songs, setSongs] = useState([]);
  const [accessToken] = useContext(AccessTokenContext);

  useEffect(() => {
    (async function() {
      const songsResponse = await fetch(
        'https://api.spotify.com/v1/me/tracks?limit=15',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
            // Authorization: `Bearer ${this.context[0].accessToken}`
          }
        }
      );
      if (!songsResponse.ok) {
        const text = await songsResponse.text();
        throw new Error(`Spotify error: ${songsResponse.status}: ${text}`);
      }
      const jsonResponse = await songsResponse.json();
      setSongs(jsonResponse.items);
      console.log(jsonResponse.items);
    })();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item, index) => (
            <FavouriteSong key={index} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>{/* <td>Sum</td>
                <td>$180</td> */}</tr>
        </tfoot>
      </table>
    </div>
  );
};
export default FavouriteSongs;

//   .then(function(albumsResponse) {
//     if (!albumsResponse.ok)
//       albumsResponse.text().then(function(text) {
//         throw new Error(`Spotify error: ${albumsResponse.status}: ${text}`);
//       });
//     return albumsResponse.json();
//   })
//   .then(albums => {
//     this.setState({
//       //this works thanks to the arrow function
//       albumsInfo: albums.items
//     });
//     // console.log(this.state.albumsInfo);
//   });

// const favouriteSongsResponse = await fetch(
//   'https://api.spotify.com/v1/me/tracks',
//   {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//       // Authorization: `Bearer ${this.context[0].accessToken}`
//     }
//   }
// );
// let data = await favouriteSongsResponse.json();
// setData(data);

// fetch('https://api.spotify.com/v1/me/tracks', {
//   headers: {
//     Authorization: `Bearer ${accessToken}`
//     // Authorization: `Bearer ${this.context[0].accessToken}`
//   }
// })
//   .then(songsResponse => {
//     if (!songsResponse.ok)
//       songsResponse.text().then(function(text) {
//         throw new Error(`Spotify error: ${songsResponse.status}: ${text}`);
//       });
//     return songsResponse.json();
//   })
//   .then(songsList => {
//     //this works thanks to the arrow function
//     setSongs(songsList.items);
//   });
