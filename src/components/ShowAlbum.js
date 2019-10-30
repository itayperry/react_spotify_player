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
      console.log(jsonResponse.tracks.items);
    })();
  }, []);

  return (
    <div>
      <h2 id='albums'>{album.name}</h2>
      {album.images && <img src={album.images[2].url} />}
      {album.tracks && <GeneralSongsList songs={album.tracks.items} />}
    </div>
  );
};

export default ShowAlbum;
