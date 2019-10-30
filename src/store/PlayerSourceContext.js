import React, { useState, createContext, useEffect } from 'react';

export const PlayerSourceContext = createContext();

export const PlayerSourceProvider = props => {
  const [playerSource, setPlayerSource] = useState('some value');

  console.log('playerSource inside this context is ' + playerSource);

  return (
    <PlayerSourceContext.Provider value={[playerSource, setPlayerSource]}>
      {props.children}
    </PlayerSourceContext.Provider>
  );
};
