import React from 'react';

const SmurfList = ({smurfs}) => {
  const mapSmurfs = smurfs.map(smurf => {
    return (
      <li>
      {smurf.name}, {smurf.age} years old, {smurf.height} tall!</li>
    )
  });
  return (
    <ul>
      {mapSmurfs}
    </ul>
  );
}

export default SmurfList;
