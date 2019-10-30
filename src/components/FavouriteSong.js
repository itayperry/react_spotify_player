import React, { useContext } from 'react';
import { PlayerSourceContext } from '../store/PlayerSourceContext';

const FavouriteSong = props => {
  const [playerSource, setPlayerSource] = useContext(PlayerSourceContext);
  console.log(props.item.track.preview_url);
  const updateMusicSrc = () => {
    setPlayerSource(props.item.track.preview_url);
  };
  return (
    <div>
      <li
        // onClick={() => setPlayerSource(props.item.track.preview_url)}
        onClick={() => updateMusicSrc()}
        style={{ color: 'black' }}
      >
        {props.item.track.name}
      </li>
    </div>
  );
};

export default FavouriteSong;
