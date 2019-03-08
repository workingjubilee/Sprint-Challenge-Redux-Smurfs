import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleFormText = (event) => {
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    })
  )};

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createSmurf();
  };

  render() { return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" onChange={this.handleFormText} />
      <input type="text" name="age" onChange={this.handleFormText} />
      <input type="text" name="email" onChange={this.handleFormText} />
      <button type="submit">Smurf Another Smurf!</button>
    </form>
  )};
};

export default connect(null,{ createSmurf })(SmurfForm);
