import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BannerTop from './components/BannerTop.jsx';
import ProductContainer from './containers/ProductContainer.jsx';
import Profile from './components/Profile.jsx';
import ShoppingCart from './containers/ShoppingCart.jsx';
import NotFound from './components/NotFound.jsx';
import BannerRight from './containers/BannerRight.jsx';
import Checkout from './containers/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
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

    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {

    //  *** TEMPORARY hard coding of intial state values for developement **

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
      shoppingCart: [ditto, dragonite],
      profile: {},
      loggedIn: false
    });

    // *** uncomment the below when in production for db data ***

    // try {
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
    //     console.log('check products:', products)
    //   });
    // }
    // catch(error) {
    //   console.log("the following error occured getting product data:")
    //   console.log(error);
    // }  
  }

  // removes and item from the cart
  // should be refactored to dynamically remove or add an item
  // might be better to store cart products in an object rather than an array
  updateCart(productName) {
    const shoppingCart = this.state.shoppingCart;
    let productPosition;

    // get position of product with name
    for (let i = 0; i < shoppingCart.length; i += 1) {
      if (shoppingCart[i].name === productName) {
        productPosition = i;
        i = shoppingCart.length;
      }
    }

    shoppingCart.splice(productPosition, 1);

    return this.setState({ shoppingCart });
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
              <Route path="/shoppingcart" component={
                () => <ShoppingCart
                  shoppingCart={this.state.shoppingCart}
                  profile={this.state.profile}
                  updateCart={this.updateCart}
                />
              } />
              <Route
                path="/checkout"
                component={
                  () => <Checkout
                    profile={this.state.profile}
                    shoppingCart={this.state.shoppingCart}
                  />
                }
              />
              <Route
                path="/confirmation"
                component={
                  () => <OrderConfirmation />
                }
              />
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
