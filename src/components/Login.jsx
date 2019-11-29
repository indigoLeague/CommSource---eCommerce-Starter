import React from 'react';

function Login(props) {
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
      {/* <input type="hidden" name="_csrf" value="_csrf" /> */}

      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
