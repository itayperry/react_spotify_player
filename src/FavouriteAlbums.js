import React, { useContext } from 'react';
import Album from './FavouriteAlbum';
import { AccessTokenContext } from './AccessTokenContext';

function FavouriteAlbums(props) {
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);

  const elements = props.albums.map((albumInfo, index) => (
    <Album name={albumInfo.album.name} key={index} />
  ));
  return (
    <div>
      <p>This is the value from the context Provider: {accessToken}</p>
      <h2>Your favourite albums:</h2>
      <ul id='albums'>{elements}</ul>
    </div>
  );
}

export default FavouriteAlbums;
