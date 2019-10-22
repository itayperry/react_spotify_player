import React, { useContext } from 'react';
import Album from './FavouriteAlbum';
// import { AccessTokenContext } from '../store/AccessTokenContext';

function FavouriteAlbums(props) {
  // const [contextStateObj] = useContext(AccessTokenContext);

  const elements = props.albums.map((albumInfo, index) => (
    <Album album={albumInfo.album} key={index} />
  ));
  return (
    <div>
      {/* <p>
        This is the value from the context Provider:
        {contextStateObj.accessToken}
      </p> */}
      <h2>Your favourite albums:</h2>
      <ul id='albums'>{elements}</ul>
      <audio controls>
        <source
          src='https://p.scdn.co/mp3-preview/157cd3bdc4ab062399413bd20e529de0afecffb9?cid=c176b4c54f424176b6e587c6e937a5f5'
          type='audio/ogg'
        />
        <source src='horse.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default FavouriteAlbums;
