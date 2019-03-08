import React from 'react';
import Unsmurf from './Unsmurf';
import './Gargamel.css';

export const GargamelsLair = ({smurfs}) => {
  const mapSmurfs = smurfs.map(smurf => {
    return (
      <Unsmurf name={smurf.name} id={smurf.id} />
    )
  });
  return (
    <div className="Gargamel">
      <p>Gargamel in the hizzouse!</p>
      {mapSmurfs}
    </div>
  )
};
