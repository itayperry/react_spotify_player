import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function FavouriteAlbum(props) {
  console.log(props.album);
  return (
    <li>
      <Link to={`/home/album/${props.album.id}`}>
        <p>{props.album.name}</p>
        <img src={props.album.images[2].url} />
      </Link>
    </li>
  );
}

export default FavouriteAlbum;
