import React from 'react';
import Album from './FavouriteAlbum';

function FavouriteAlbums(props) {
  console.log('albums');
  console.table(props.albums);
  const elements = props.albums.map((albumInfo, index) => (
    <Album name={albumInfo.album.name} key={index} />
  ));
  console.log(elements);
  return (
    <div>
      <h2>Your favourite albums:</h2>
      <ul id='albums'>{elements}</ul>
    </div>
  );
}

export default FavouriteAlbums;
