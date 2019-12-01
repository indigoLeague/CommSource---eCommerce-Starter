import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {

    const ditto = {
      name: "ditto",
      description: "pink flubber type transforming pokemon",
      price: "1772855.00",
      quantity: 2,
    }

    const dragonite = {
      name: "dragonite",
      description: "dragon type pokemon",
      price: "2000000.00",
      quantity: 1,
    }

    const pikachu = {
      name: "pikachu",
      description: "An electric type pokemon. This pokemon was thicc in season 1.",
      price: "955000.00",
      quantity: 4,
    }

    this.setState({
      products: [ditto, dragonite, pikachu],
      // shoppingCart: [ditto, dragonite],
      profile: {},
      loggedIn: false
    });

    // fetch('/item/loaditems')
    //   .then(res => res.json())
    //   .then(products => {
    //     this.setState({
    //       products,
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  addToCart(item) {
    const cart = this.state.shoppingCart;
    cart.push(item);
    return this.setState({ shoppingCart: cart });
    // console.log('shoppingCart after adding item: ', this.state.shoppingCart);
  }

  render() {
    return (
      <Router>
        <div className="storeFront">
          <BannerTop />
          <div className="feed">
            <Switch>
              <Route exact path="/" component={() => <ProductContainer products={this.state.products} addToCart={this.addToCart} />} />
              <Route path="/profile" component={Profile} />
              <Route path="/shoppingcart" component={ShoppingCart} />
              <Route path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <BannerRight />
        </div>
      </Router>
    );
  }
}

export default App;
