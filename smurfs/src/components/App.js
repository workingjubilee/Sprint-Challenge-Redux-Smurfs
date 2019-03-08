import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs } from '../actions/';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  smurfs: state.smurfs
};

export default connect(null,{})(App);
