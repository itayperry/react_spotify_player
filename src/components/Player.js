import React, { useContext, useEffect, useRef } from 'react';
import { PlayerSourceContext } from '../store/PlayerSourceContext';

const Player = () => {
  const [playerSource] = useContext(PlayerSourceContext);
  const audioTagRef = useRef(null);

  useEffect(() => {
    audioTagRef.current.load();
    /*
        audioTagRef.current.play(); - this will throw an error: "Uncaught (in promise) DOMException"
        read this article: 'Autoplay Policy Changes' in Google Developers :)
        (async function() {
        const play = await audioTagRef.current.play();
        })(); also doesn't work.
        You should always look at the Promise returned by the play function to see if it was rejected:
    */
    var promise = audioTagRef.current.play();
    if (promise !== undefined) {
      promise
        .then(_ => {
          // Autoplay started!
        })
        .catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
    }

    //   return () => {
    //       cleanup
    //   };
  }, [playerSource]);
  return (
    <div>
      <h3>Player Component</h3>
      <p>{playerSource}</p>
      <audio controls ref={audioTagRef}>
        <source src={`${playerSource}`} type='audio/ogg' />
        <source src={`${playerSource}`} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
