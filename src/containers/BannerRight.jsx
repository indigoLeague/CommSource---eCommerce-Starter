import React, { Component } from 'react';
import Login from '../components/Login.jsx';

class BannerRight extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    // console.log(e.target, e.target.name);
    this.setState((prevState) => {
      prevState[e.target.name] = e.target.value;
      return prevState;
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Login state={this.state} handleChange={this.handleChange} handleLoginSubmit={this.handleLoginSubmit} />
    );
  }
}

export default BannerRight;
