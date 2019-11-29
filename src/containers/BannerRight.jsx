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

  componentDidMount() {
    console.log('banner props', this.props);
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
    fetch('/user/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name, password: this.state.password })
    });
  }

  render() {
    return (
      <Login state={this.state} handleChange={this.handleChange} handleLoginSubmit={this.handleLoginSubmit} />
    );
  }
}

export default BannerRight;
