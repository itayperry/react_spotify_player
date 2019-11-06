import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AccessTokenContext } from '../store/AccessTokenContext';

const NavMenu = () => {
  const [accessToken] = useContext(AccessTokenContext);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    // fetch(https://api.spotify.com/v1/me
    (async function() {
      const userInfoResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (!userInfoResponse.ok) {
        const text = await userInfoResponse.text();
        throw new Error(`Spotify error: ${userInfoResponse.status}: ${text}`);
      }
      const jsonResponse = await userInfoResponse.json();
      console.log(jsonResponse);
      setUserInformation(jsonResponse);
    })();
  }, [accessToken]);
  return (
    <div>
      {userInformation.images && (
        <img
          src={userInformation.images[0].url}
          width='70'
          style={{ borderRadius: '50%' }}
        />
      )}
      <p>{userInformation.display_name}</p>
      <h2>Your Library..</h2>
      <nav>
        <Link to='/home/favourite-songs'>Your Favourite Songs</Link>
        <Link to='/home/favourite-albums'>Your Favourite Albums</Link>
        {/* <Link to='/home/favourite-albums'>Artists Followed</Link> */}
        {/* <Link to='/home/favourite-albums'>My Playlists</Link> */}
        {/* <Link to='/home/favourite-albums'>Recently Played</Link> */}
      </nav>
    </div>
  );
};

export default NavMenu;
