import React from 'react';

function Login(props) {
  console.log('APP', props.appState);
  return (
    <form onSubmit={props.handleLoginSubmit}>
      <div>
        <label>Username</label>
        <input type="text" name="name" value={props.state.name} onChange={(e) => props.handleChange(e)} />
      </div>
      <div>
        <label> Password</label>
        <input type="password" name="password" value={props.state.password} onChange={(e) => props.handleChange(e)} />
      </div>
      <input type="submit" value={props.appState.loggedIn ? 'Log Out' : 'Log In'} />
    </form>
  );
}

export default Login;
