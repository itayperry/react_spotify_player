import React, { useState, createContext } from 'react';

export const AccessTokenContext = createContext();

export const AccessTokenProvider = props => {
  const [accessToken, setAccessToken] = useState('asdasd');
  //   console.log(props.location.state.accessToken);
  return (
    <AccessTokenContext.Provider value={[accessToken, setAccessToken]}>
      {props.children}
    </AccessTokenContext.Provider>
  );
};
