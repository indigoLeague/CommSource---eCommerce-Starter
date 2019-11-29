import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <h1 className="cartHeader"> | Shopping Cart |</h1>

        {/* 
            TO-DO:
            create a loop which will create a product summary for each 
            item the has been added to the shopping cart
        */}
        <h2 className="cartProductHeader"> Product Header 1</h2>
        <h2 className="cartProductHeader"> Product Header 2</h2>
        <h2 className="cartProductHeader"> Product Header 3</h2>
        <h2 className="cartProductHeader"> Product Header 4</h2>
        <Link to="/checkout" >
          <button className="cartProductHeader"> proceed to checkout </button>
        </Link>
      </>
    );
  }
}

export default withRouter(ShoppingCart);








