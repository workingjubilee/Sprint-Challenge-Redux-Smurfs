import React, { Component } from 'react';
import { connect } from 'react-redux';
import Unsmurf from './Unsmurf';
import './Gargamel.css';

class GargamelsLair extends Component {
  render() {
    const mapUnsmurfs = this.props.unsmurfs.map(smurf => {
      return (
        <Unsmurf name={smurf.name} id={smurf.id} />
      )
    });
    return (
      <div className="Gargamel">
        <p>Gargamel in the hizzouse!</p>
        {mapUnsmurfs}
      </div>
    )
  };
}

const mapSmurfsToDead = state => ({
  unsmurfs: state.gargamelList
});

export default connect(mapSmurfsToDead, {})( GargamelsLair )
