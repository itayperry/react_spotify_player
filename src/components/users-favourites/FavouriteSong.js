import React, { useContext } from 'react';
import { PlayerSourceContext } from '../../store/PlayerSourceContext';

const FavouriteSong = props => {
  const setPlayerSource = useContext(PlayerSourceContext)[1];
  // const [playerSource, setPlayerSource] = useContext(PlayerSourceContext); will provide an unnecessary variable
  return (
    <tr
      className='song-in-table'
      onClick={() => setPlayerSource(props.item.track.preview_url)}
    >
      <td>{props.item.track.name}</td>
      <td>{props.item.track.album.name}</td>
      <td>{props.item.track.artists[0].name}</td>
      <td>{props.item.track.duration_ms}</td>
    </tr>
  );
};

export default FavouriteSong;
