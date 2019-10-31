import React, { useState, useContext, useEffect } from 'react';
import { AccessTokenContext } from '../../store/AccessTokenContext';
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
  }, [accessToken]);

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
        {/* <tfoot> tag - optional */}
      </table>
    </div>
  );
};
export default FavouriteSongs;
