import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BannerTop from './components/BannerTop.jsx';
import ProductContainer from './containers/ProductContainer.jsx';
import Profile from './components/Profile.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import NotFound from './components/NotFound.jsx';
import BannerRight from './containers/BannerRight.jsx';
// import Storefront from './containers/Storefront.jsx';

import './stylesheets/styles.scss';

// const ReactRTC = require('react-rtc-real');

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route component={NotFound} />
        </Switch>
        <BannerTop />
        <BannerRight />
      </Router>
    );
  }
}

export default App;
