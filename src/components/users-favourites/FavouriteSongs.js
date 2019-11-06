import React, { useState, useContext, useEffect } from 'react';
import { AccessTokenContext } from '../../store/AccessTokenContext';
import FavouriteSong from './FavouriteSong';

const FavouriteSongs = () => {
  const [songs, setSongs] = useState([]);
  const [accessToken] = useContext(AccessTokenContext);
  const [nextPageUrl, setNextPageUrl] = useState(
    `https://api.spotify.com/v1/me/tracks?offset=0&limit=10`
  );
  const [totalNumOfSongs, setTotalNumOfSongs] = useState(0);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  async function fetchData() {
    const songsResponse = await fetch(nextPageUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!songsResponse.ok) {
      const text = await songsResponse.text();
      throw new Error(`Spotify error: ${songsResponse.status}: ${text}`);
    }
    const jsonResponse = await songsResponse.json();
    // You can't use set functions direcly - React will require them all to be dependencies
    updateNextPage(jsonResponse.next);
    updateNumOfSongs(jsonResponse.total);
    // updateSongs(jsonResponse.items);
    setSongs([...songs, ...jsonResponse.items]);
  }

  const updateSongs = newSongs => {
    setSongs([...songs, ...newSongs]);
  };
  const updateNextPage = url => {
    setNextPageUrl(url);
  };

  const updateNumOfSongs = val => {
    setTotalNumOfSongs(val);
  };

  return (
    <div>
      <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        Favourite Songs : {totalNumOfSongs}
      </h2>
      <div className='table_container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Duration</th>
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
      {nextPageUrl && (
        <button onClick={fetchData}>Change Offset (add 10 songs)</button>
      )}
      {/* button disappears when there are no more songs */}
    </div>
  );
};
export default FavouriteSongs;
