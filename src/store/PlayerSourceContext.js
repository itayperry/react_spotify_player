import React, { useState, createContext, useEffect } from 'react';

export const AccessTokenContext = createContext();

export const PlayerSourceProvider = props => {
  const [playerSource, setPlayerSource] = useState('');

  console.log('playerSource inside this context is ' + playerSource);

  return (
    <PlayerSourceContext.Provider value={[playerSource, setPlayerSource]}>
      {props.children}
    </PlayerSourceContext.Provider>
  );
};
