/* eslint-disable react/button-has-type */
import React from 'react';

function ProductCard(props) {

  return (
    <div className="productCard">
      <h4>{props.name}</h4>
      <img src="../assets/ecommerceItem.jpg" alt="Buy this awesome item!" />
      <p>{props.description}</p>
      <p>${props.price}</p>
      <p>{props.quantity} items left</p>
      <button onClick={() => props.addToCart(props)}>
        Add to Cart
      </button>
      {/* <button onClick={() => (itemQty < props.quantity) ? addItems(itemQty + 1) : props.quantity}>
        Remove from Cart
      </button> */}
    </div>
  )
};

export default ProductCard;
