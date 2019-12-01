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
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

  handleLogOut(e) {
    e.preventDefault();
    console.log('logging out');
    fetch('/user/logout')
      .then(this.props.updateLogOut);
  }

  handleSignUp(e) {
    e.preventDefault();
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name, password: this.state.password })
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
    }).then(this.props.updateRender)
      .then(() => {
        this.state.name = '';
        this.state.password = '';
      });
  }

  render() {
    return (
      <>
        <Login className="login-form" appState={this.props.state} state={this.state} handleChange={this.handleChange} handleSignUp={this.handleSignUp} handleLoginSubmit={!this.props.state.loggedIn ? this.handleLoginSubmit : this.handleLogOut} />
      </>
    );
  }
}

export default BannerRight;
