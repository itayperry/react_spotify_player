import React, { useContext, Fragment } from 'react';
import ArtistsLinksBySong from '../ArtistsLinksBySong';
import { PlayerSourceContext } from '../../store/PlayerSourceContext';

export default () => {
  const [playerSource] = useContext(PlayerSourceContext);

  const isOverflowning = (container, child) => {
    return false;
  };
  const getSongArtists = () => {
    if (playerSource.artists) {
      return <ArtistsLinksBySong artistArrOfObj={playerSource.artists} />;
    } else {
      return 'Artist Name';
    }
  };
  const getSongTitle = () => {
    if (playerSource.name) {
      return String(playerSource.name);
    } else {
      return 'Track Title';
    }
  };

  return (
    <div id='player-song-text-container'>
      <div id='title-name-text'>
        <div id='move-control'>
          <div
            id='move1'
            className={isOverflowning() ? 'active_animation' : ''}
          >
            {getSongTitle()}
          </div>
          {isOverflowning() && (
            <div className='adjacent-copy'>{getSongTitle()}</div>
          )}
        </div>
      </div>
      <div id='artists-names-text'>
        <div id='move-control2'>
          <div
            id='move2'
            className={isOverflowning() ? 'active_animation' : ''}
          >
            {getSongArtists()}
          </div>
          {isOverflowning() && (
            <div className='adjacent-copy'>{getSongArtists()}</div>
          )}
        </div>
      </div>
      <div id='left-shade'></div>
      <div id='right-shade'></div>
    </div>
  );
};
