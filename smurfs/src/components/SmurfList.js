import React from 'react';
import Smurf from './Smurf';

const SmurfList = ({smurfs}) => {
  const mapSmurfs = smurfs.map(smurf => {
    return (
      <Smurf {...smurf} />
    )
  });
  return (
    <ul>
      {mapSmurfs}
    </ul>
  );
}

export default SmurfList;
