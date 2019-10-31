import React, { useContext } from 'react';
import { PlayerSourceContext } from '../store/PlayerSourceContext';

const GeneralSongItem = props => {
  const setPlayerSource = useContext(PlayerSourceContext)[1];
  // const [playerSource, setPlayerSource] = useContext(PlayerSourceContext); will provide an unnecessary variable
  return (
    <tr
      className='song-in-table'
      onClick={() => setPlayerSource(props.item.preview_url)}
    >
      <td>{props.item.name}</td>
      <td>{props.item.duration_ms}</td>
    </tr>
  );
};

export default GeneralSongItem;
