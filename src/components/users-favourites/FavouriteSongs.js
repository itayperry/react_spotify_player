import React, { useState, useContext, useEffect } from 'react';
import { AccessTokenContext } from '../../store/AccessTokenContext';
import FavouriteSong from './FavouriteSong';
import InfiniteScroll from 'react-infinite-scroll-component';

const FavouriteSongs = () => {
  const [songs, setSongs] = useState([]);
  const [accessToken] = useContext(AccessTokenContext);
  const [nextPageUrl, setNextPageUrl] = useState(
    `https://api.spotify.com/v1/me/tracks?offset=0&limit=20`
  );
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const handleToggle = index => {
    console.log('activated');
    setSelectedSongIndex(index);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  async function fetchData() {
    console.log('triggered');
    const songsResponse = await fetch(nextPageUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!songsResponse.ok) {
      const text = await songsResponse.text();
      // setError(`Spotify error: ${songsResponse.status}: ${text}`);
      // console.log(error);
      throw new Error(`Spotify error: ${songsResponse.status}: ${text}`);
    }
    const jsonResponse = await songsResponse.json();
    console.log(jsonResponse.total);
    setNextPageUrl(jsonResponse.next);
    // setTotalNumOfSongs(jsonResponse.total);
    setSongs([...songs, ...jsonResponse.items]);
  }

  return (
    <InfiniteScroll
      style={{ overflow: 'unset' }}
      dataLength={songs.length} // Don't ever use a static number here
      next={fetchData}
      hasMore={nextPageUrl}
      loader={<h4 style={{ marginLeft: '2rem' }}>Loading...</h4>}
      scrollableTarget='style-9'
      endMessage={
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid white',
            padding: '1rem',
            marginRight: '1.5rem',
            marginLeft: '1.5rem'
          }}
        ></div>
      }
    >
      <div>
        <div id='favourite-songs-headline-container'>
          <h2 id='favourite-songs-headline'>Favourite Songs</h2>
          {/* <span> {totalNumOfSongs} items</span> */}
        </div>
        <div className='table_container'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((item, index) => (
                <FavouriteSong
                  key={index}
                  item={item}
                  changeSelection={handleToggle}
                  active={index === selectedSongIndex}
                  idx={index}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* {nextPageUrl && (
          <button onClick={fetchData}>Change Offset (add 10 songs)</button>
      )} */}
        {/* button disappears when there are no more songs */}
      </div>
    </InfiniteScroll>
  );
};
export default FavouriteSongs;

// const [totalNumOfSongs, setTotalNumOfSongs] = useState(0);
// const [error, setError] = useState(null);
