import React from 'react';

const FavouriteSong = props => {
  console.log(props.item.track.preview_url);
  return (
    <div>
      <li style={{ color: 'black' }}>{props.item.track.name}</li>
      <audio controls>
        <source src={props.item.track.preview_url} type='audio/ogg' />
        <source src={props.item.track.preview_url} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FavouriteSong;
