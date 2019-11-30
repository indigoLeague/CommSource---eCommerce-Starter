import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import ItemList from '../components/ItemList.jsx';

class ShoppingCart extends Component {
  constructor (props) {
    super(props);
  }

  generateList(shoppingCart) {

    const listedProducts = shoppingCart.map(element => {
      return < ItemList product={element} updateCart={this.props.updateCart} />
    });

    return listedProducts;
  }

  render() {
    return (
      <>
        <h1 className="cartHeader"> | Shopping Cart |</h1>
        
        <ul className="cartProductHeader shoppingList">
          {this.generateList(this.props.shoppingCart)}
        </ul>

        <div className="cartProductHeader">
          <Link to="/checkout" >
            <button className="checkNavButton"> proceed to checkout </button>
          </Link>
        </div>
        
      </>
    );
  }
}

export default withRouter(ShoppingCart);








