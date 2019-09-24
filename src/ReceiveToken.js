import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AccessTokenContext } from './AccessTokenContext';

function ReceiveToken(props) {
  const [accessToken, setAccessToken] = useContext(AccessTokenContext);
  const params = new URLSearchParams(props.location.search.substring(1));

  const refreshTokenInterval = () => {
    // setInterval()
  };

  if (!params.get('accessToken')) {
    return <Redirect to='/login' />;
  } else {
    const newContextExamination = params.get('accessToken');
    setAccessToken(newContextExamination);
    return (
      <Redirect
        to={{
          pathname: '/home',
          state: { accessToken: params.get('accessToken') }
        }}
      />
    );
  }
}

export default ReceiveToken;
