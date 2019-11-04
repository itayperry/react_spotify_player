import React from 'react';
import GeneralSongItem from './GeneralSongItem';

const GeneralSongsList = props => {
  console.log(props.songs);
  return (
    <div className='table_container'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((item, index) => (
            <GeneralSongItem key={index} item={item} i={index} />
          ))}
        </tbody>
        <tfoot>
          <tr>{/* <td>Sum</td>
                <td>$180</td> */}</tr>
        </tfoot>
      </table>
    </div>
  );
};

export default GeneralSongsList;
