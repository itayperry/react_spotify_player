import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <Link to={`/home/favourite-songs`}>Your Favourite Songs</Link>
      <Link to='/home/favourite-albums'>Your Favourite Albums</Link>
    </nav>
  );
};

export default NavMenu;
