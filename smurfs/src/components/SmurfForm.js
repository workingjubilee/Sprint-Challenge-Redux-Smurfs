import React, { Component } from 'react';

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
  };

  render() { return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" onChange={this.handleFormText} />
      <input type="text" name="age" onChange={this.handleFormText} />
      <input type="text" name="email" onChange={this.handleFormText} />
    </form>
  )};
};

export default SmurfForm;
