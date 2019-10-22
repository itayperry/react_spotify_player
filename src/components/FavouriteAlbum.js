import React, { useContext } from 'react';

function FavouriteAlbum(props) {
  console.log(props.album);
  return (
    <div>
      <li>{props.album.name}</li>
      <img src={props.album.images[2].url} />
    </div>
  );
}

export default FavouriteAlbum;
