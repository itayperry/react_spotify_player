import React from 'react';

const FavouriteSong = props => {
  return <li>{props.item.track.name}</li>;
};

export default FavouriteSong;
