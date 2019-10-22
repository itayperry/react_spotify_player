import React, { useState, useContext, useEffect } from 'react';
import { AccessTokenContext } from '../store/AccessTokenContext';
import FavouriteSong from './FavouriteSong';

const FavouriteSongs = () => {
  const [songs, setSongs] = useState([]);
  const [accessToken] = useContext(AccessTokenContext);

  useEffect(() => {
    fetch('https://api.spotify.com/v1/me/tracks', {
      headers: {
        Authorization: `Bearer ${accessToken}`
        // Authorization: `Bearer ${this.context[0].accessToken}`
      }
    })
      .then(songsResponse => {
        if (!songsResponse.ok)
          songsResponse.text().then(function(text) {
            throw new Error(`Spotify error: ${songsResponse.status}: ${text}`);
          });
        return songsResponse.json();
      })
      .then(songsList => {
        // this.setState({
        //this works thanks to the arrow function
        //   albumsInfo: albums.items
        setSongs(songsList.items);
        console.log(songs);
      });
  }, []);
  //   const elements = songs.items.map((item, index) => <li>{item.track.name}</li>);
  return (
    <div>
      {songs.map((item, index) => (
        <FavouriteSong item={item} />
      ))}
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
