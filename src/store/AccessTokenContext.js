import React, { useState, createContext, useEffect } from 'react';
import { loadState } from './localStorage';

export const AccessTokenContext = createContext();

export const AccessTokenProvider = props => {
  console.log('context rendered');
  // const spotifyState = loadState();
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('spotify-state')
  );
  useEffect(() => {
    if (!accessToken) return;
    window.localStorage.setItem('spotify-state', accessToken);
    let timeoutHandle;
    timeoutHandle = setTimeout(async () => {
      const { accessToken, expiresIn } = await fetch(
        `http://localhost:3001/refresh?accessToken=${accessToken}`,
        {
          method: 'POST'
        }
      );
      setAccessToken(accessToken);
    }, 3600 * 1000);
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [accessToken]);
  console.log('accessToken inside the context is ' + accessToken);

  return (
    <AccessTokenContext.Provider value={[accessToken, setAccessToken]}>
      {props.children}
    </AccessTokenContext.Provider>
  );
};
