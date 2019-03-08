import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/';

class Unsmurf extends Component {
  constructor(props) {
    super(props);
  }

  goldenizeSmurf = (id, event) => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <button onClick={(id, event) => this.goldenizeSmurf(this.props.id, event)}>Goldenize {this.props.name}</button>
    );
  }
};

export default connect( null, { deleteSmurf } )( Unsmurf )
