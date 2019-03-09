import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleFormText = (event) => {
    event.persist();
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    })
    );
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(newSmurf);
    this.props.createSmurf(newSmurf);
    this.setState(prevState => ({
      name: '',
      age: '',
      height: '',
    }) );
    setTimeout(console.log(this.state),1000);
  };

  render() { return (
    <form onSubmit={(event) => this.handleSubmit(event)}>
      <label>Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleFormText(event)} /></label>
      <label>Age: <input type="text" name="age" value={this.state.age} onChange={(event) => this.handleFormText(event)} /></label>
      <label>Height: <input type="text" name="height" value={this.state.height} onChange={(event) => this.handleFormText(event)} /></label>
      <button type="submit">Smurf Another Smurf!</button>
    </form>
  )};
};

// this.setState(prevState => ({
//   name: '',
//   age: '',
//   height: ''
//   })
// );

export default connect(null,{ createSmurf })(SmurfForm);
