import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import BannerTop from './components/BannerTop.jsx';
import ProductContainer from './containers/ProductContainer.jsx';
import Profile from './components/Profile.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import NotFound from './components/NotFound.jsx';
import BannerRight from './containers/BannerRight.jsx';
import Checkout from './components/Checkout.jsx';
// import Storefront from './containers/Storefront.jsx';

import './stylesheets/styles.scss';

// const ReactRTC = require('react-rtc-real');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoppingCart: [],
      profile: {},
      loggedIn: false
    };
  }

  componentDidMount() {
    fetch('/item/loaditems')
      .then((res) => res.json())
      .then((products) => {
        this.setState({
          products,
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="storeFront">
          <BannerTop />
          <div className="feed">
            <Switch>
              <Route exact path="/" component={ProductContainer} />
              <Route path="/profile" component={Profile} />
              <Route path="/shoppingcart" component={ShoppingCart} />
              <Route path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <BannerRight cookies={this.props.cookies} />
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
