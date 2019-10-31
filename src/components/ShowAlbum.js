import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AccessTokenContext } from '../store/AccessTokenContext';
import GeneralSongsList from './GeneralSongsList';

const ShowAlbum = () => {
  let { albumId } = useParams();
  const [album, setAlbum] = useState({});
  //   const [imageUrl, setImageUrl] = useState('');
  const [accessToken] = useContext(AccessTokenContext);

  useEffect(() => {
    (async function() {
      const albumResponse = await fetch(
        `https://api.spotify.com/v1/albums/${albumId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      if (!albumResponse.ok) {
        const text = await albumResponse.text();
        throw new Error(`Spotify error: ${albumResponse.status}: ${text}`);
      }
      const jsonResponse = await albumResponse.json();
      setAlbum(jsonResponse);
      // setImageUrl(jsonResponse.images[2].url);
    })();
  }, [albumId, accessToken]);

  return (
    <div>
      <h2 id='albums'>{album.name}</h2>
      {album.images && album.tracks && album.artists[0] ? (
        <div>
          <h3>{album.artists[0].name}</h3>
          <h3>{album.release_date.substring(0, 4)}</h3>
          <img src={album.images[2].url} alt='Album Cover' />
          <GeneralSongsList songs={album.tracks.items} />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ShowAlbum;
