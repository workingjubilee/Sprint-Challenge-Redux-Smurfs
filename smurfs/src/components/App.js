import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs } from '../actions/';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

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

  render() {
    return (
      <div className="App">
      <button onClick={this.beginSmurfing}>Let's Get Smurfy</button>
        {this.state.readyToSmurf &&
          <React.Fragment>
          <SmurfForm />
          {this.props.smurfs && <SmurfList smurfs={this.props.smurfs} />}
          </React.Fragment>}
      </div>
    );
  }
}

const mapSmurfsToSmurfs = state => ({
  smurfs: state.list
});

export default connect( mapSmurfsToSmurfs, { getSmurfs } )( App );
