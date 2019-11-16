import React, { useContext, useRef, useEffect, useState } from 'react';
import ArtistsLinksBySong from '../ArtistsLinksBySong';
import { PlayerSourceContext } from '../../store/PlayerSourceContext';

export default () => {
  const [playerSource] = useContext(PlayerSourceContext);
  const containerTagRef = useRef(null);
  const songTitleTag = useRef(null);
  const artistNamesTag = useRef(null);
  const [isOverflowingTitle, setIsOverflowingTitle] = useState(false);
  const [isOverflowingNames, setIsOverflowingNames] = useState(false);

  useEffect(() => {
    artistNamesTag.current.clientWidth > 224
      ? setIsOverflowingNames(true)
      : setIsOverflowingNames(false);

    songTitleTag.current.clientWidth > 224
      ? setIsOverflowingTitle(true)
      : setIsOverflowingTitle(false);
  }, [playerSource]);

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
    <div id='player-song-text-container' ref={containerTagRef}>
      <div id='title-name-text'>
        <div id='move-control'>
          <div
            id='move1'
            ref={songTitleTag}
            className={isOverflowingTitle ? 'active_animation' : ''}
          >
            {getSongTitle()}
          </div>
          {isOverflowingTitle && (
            <div className='adjacent-copy'>{getSongTitle()}</div>
          )}
        </div>
      </div>
      <div id='artists-names-text'>
        <div id='move-control2'>
          <div
            id='move2'
            ref={artistNamesTag}
            className={isOverflowingNames ? 'active_animation' : ''}
          >
            {getSongArtists()}
          </div>
          {isOverflowingNames && (
            <div className='adjacent-copy'>{getSongArtists()}</div>
          )}
        </div>
      </div>
      <div id='left-shade'></div>
      <div id='right-shade'></div>
    </div>
  );
};
