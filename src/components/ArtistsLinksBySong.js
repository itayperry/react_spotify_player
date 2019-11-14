import React, { Fragment } from 'react';

const ArtistsLinksBySong = props => {
  return (
    <Fragment>
      {props.artistArrOfObj.map((item, index) => (
        <Fragment>
          {index !== 0 && <span>, </span>}
          <span key={item.id} href='javascript: void(0)'>
            {item.name}
          </span>
          {/* <a key={item.id} href='javascript: void(0)'>
            {item.name}
          </a> */}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ArtistsLinksBySong;
