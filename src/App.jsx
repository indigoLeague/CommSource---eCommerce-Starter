import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import Admin from './components/Admin.jsx';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoppingCart: [],
      profile: {},
      loggedIn: false,
      username: ''
    };
    this.updateRender = this.updateRender.bind(this);
    this.updateLogOut = this.updateLogOut.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }


  componentDidMount() {
    if (this.props.cookies.cookies.userId) {
      fetch('/who')
        .then((res) => res.json())
        .then((data) => {
          this.setState((prevState) => ({
            ...prevState, loggedIn: !prevState.loggedIn, username: data.user.name
          }));
        });
    }

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

    //  *** TEMPORARY hard coding of intial state values for developement **

    const ditto = {
      name: 'ditto',
      description: 'pink flubber type transforming pokemon',
      price: '1772855.00',
      quantity: 2,
    };

    const dragonite = {
      name: 'dragonite',
      description: 'dragon type pokemon',
      price: '2000000.00',
      quantity: 1,
    };

    const pikachu = {
      name: 'pikachu',
      description: 'An electric type pokemon. This pokemon was thicc in season 1.',
      price: '955000.00',
      quantity: 4,
    };

    this.setState((prevState) => ({
      ...prevState,
      products: [ditto, dragonite, pikachu],
      // shoppingCart: [ditto, dragonite],
      profile: {},
      loggedIn: false
    }));

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
    // console.log('CART', Array.isArray(cart));
    // console.log('COOK', this.props.cookies.cookies.userId);
    if (this.props.cookies.cookies.userId) {
      fetch('/user/update', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: this.props.cookies.cookies.userId, cart })
      }).then((res) => res.json()).then((data) => console.log(data));
    }
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
    const { shoppingCart } = this.state;
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

  updateLogOut() {
    this.setState((prevState) => ({
      ...prevState, loggedIn: !prevState.loggedIn, username: ''
    }));
  }

  updateRender() {
    setTimeout(() => {
      // if (this.props.cookies.cookies.userId) {
      fetch('/who')
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            this.setState((prevState) => ({
              ...prevState, loggedIn: !prevState.loggedIn, username: data.user.name
            }));
          }
          console.log('STATE', this.state);
        });
      // }
    },
    1);
  }

  render() {
    return (
      <Router>
        <div className="storeFront">
          <BannerTop state={this.state} />
          <div className="feed">
            <Switch>
              <Route path="/admin" component={() => <Admin />} />
              <Route exact path="/" component={() => <ProductContainer products={this.state.products} addToCart={this.addToCart} />} />
              <Route path="/profile" component={() => <Profile username={this.state.username} />} />
              <Route
                path="/shoppingcart"
                component={
                () => (
                  <ShoppingCart
                    shoppingCart={this.state.shoppingCart}
                    profile={this.state.profile}
                    updateCart={this.updateCart}
                  />
                )
              }
              />
              <Route
                path="/checkout"
                component={
                  () => (
                    <Checkout
                      profile={this.state.profile}
                      shoppingCart={this.state.shoppingCart}
                    />
                  )
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
          <BannerRight state={this.state} updateLogOut={this.updateLogOut} updateRender={this.updateRender} />
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
