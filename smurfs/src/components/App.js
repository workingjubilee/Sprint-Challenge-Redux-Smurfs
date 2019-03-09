import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs, visitGargamel } from '../actions/';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import GargamelsLair from './GargamelsLair';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyToSmurf: false
    };
  };

  beginSmurfing = event => {
    this.setState(prevState => ({
      readyToSmurf: true
      })
    );
    this.props.getSmurfs();
  };

  visitGargamel = event => {
    this.props.visitGargamel();
  };

  render() {
    return (
      <div>
        <button onClick={this.beginSmurfing}>Let's Get Smurfy</button>
        {this.state.readyToSmurf &&  <button onClick={this.visitGargamel}>"Muahaha!"</button>}
        {this.state.readyToSmurf && this.props.gargamel === false &&
            <div className="Smurfy">
            <SmurfForm />
            {this.props.smurfs && <SmurfList smurfs={this.props.smurfs} />}
            </div>}
        {this.props.gargamel &&
          <GargamelsLair smurfs={this.props.smurfs} />}
      </div>
    );
  }
}

const mapSmurfsToSmurfs = state => ({
  smurfs: state.list,
  gargamel: state.gargamel
});

export default connect( mapSmurfsToSmurfs, { getSmurfs, visitGargamel } )( App );
