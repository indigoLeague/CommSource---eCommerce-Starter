import React from 'react';
import Storefront from './containers/Storefront.jsx';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/styles.scss';
import Checkout from './components/Checkout.jsx';

// const ReactRTC = require('react-rtc-real');

class App extends React.Component {
  render() {
    return (
      <>
        <Router> 
          <Switch>
            <Route
              exact
              path="/"
              component={
                () => <Storefront/>
              }
            />
            <Route
              exact
              path="/checkout"
              component={
                () => (
                  <Checkout/>
                )
              }
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
