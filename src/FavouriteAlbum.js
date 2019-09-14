import React from 'react';

function FavouriteAlbum(props) {
  console.log(props);
  return <li>{props.name}</li>;
}

export default FavouriteAlbum;
