import React from 'react';
import GeneralSongItem from './GeneralSongItem';

const GeneralSongsList = props => {
  console.log(props.songs);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {props.songs.map((item, index) => (
          <GeneralSongItem key={index} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>{/* <td>Sum</td>
                <td>$180</td> */}</tr>
      </tfoot>
    </table>
  );
};

export default GeneralSongsList;
