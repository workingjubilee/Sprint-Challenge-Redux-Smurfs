import React from 'react';
import './App.css';

const Smurf = ({name, id, age, height}) => {
  return (
        <li key={id}>
          {name}, {age} years old, {height} tall!
        </li>
    );
};

export default Smurf;
