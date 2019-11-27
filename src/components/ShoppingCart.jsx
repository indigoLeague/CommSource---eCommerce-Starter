import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <h1> This is the shopping card</h1>
        <h2> product 1</h2>
        <h2> product 2</h2>
        <h2> product 3</h2>
        <Link to="/checkout" >
          <button> proceed to checkout </button>
        </Link>
      </>
    );
  }
}

export default withRouter(ShoppingCart);








