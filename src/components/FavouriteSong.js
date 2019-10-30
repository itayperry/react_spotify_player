import React, { useContext } from 'react';
import { PlayerSourceContext } from '../store/PlayerSourceContext';

const FavouriteSong = props => {
  const [playerSource, setPlayerSource] = useContext(PlayerSourceContext);
  console.log(props.item.track.duration_ms);
  const updateMusicSrc = () => {
    setPlayerSource(props.item.track.preview_url);
  };
  return (
    <tr
      className='song-in-table'
      // onClick={() => setPlayerSource(props.item.track.preview_url)}
      onClick={() => updateMusicSrc()}
    >
      <td>{props.item.track.name}</td>
      <td>{props.item.track.album.name}</td>
      <td>{props.item.track.artists[0].name}</td>
      <td>{props.item.track.duration_ms}</td>
    </tr>
  );
};

export default FavouriteSong;
