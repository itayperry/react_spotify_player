import React, { useContext, Fragment } from 'react';
import { PlayerSourceContext } from '../../store/PlayerSourceContext';
import { convertSongDuration } from '../../utils/utils';
import ArtistsLinksBySong from '../ArtistsLinksBySong';
const FavouriteSong = props => {
  const setPlayerSource = useContext(PlayerSourceContext)[1];
  // console.log(props.item.track);
  // const [playerSource, setPlayerSource] = useContext(PlayerSourceContext); will provide an unnecessary variable
  // console.log(props.active);
  return (
    <tr
      // className='song-in-table'
      className={'song-in-table ' + (props.active ? 'chosen_active_song' : '')}
      // onClick={() => setPlayerSource(props.item.track.preview_url)}
      onClick={() => {
        props.changeSelection(props.idx);
        setPlayerSource(props.item.track);
      }}
    >
      <td>{props.item.track.name}</td>
      {/* <td>{props.item.track.artists[0].name}</td> */}
      {/* <td>{createArtistsString(props.item.track.artists)}</td> */}
      <td>
        <ArtistsLinksBySong artistArrOfObj={props.item.track.artists} />
      </td>
      <td>{props.item.track.album.name}</td>
      <td>{convertSongDuration(props.item.track.duration_ms)}</td>
    </tr>
  );
};

export default FavouriteSong;
