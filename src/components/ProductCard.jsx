/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function ProductCard(props) {
  const [itemQty, addItems] = useState(props.quantity);

  return (
    <div className="productCard">
      <h4>{props.name}</h4>
      <img src="../assets/ecommerceItem.jpg" alt="Buy this awesome item!" />
      <p>{props.description}</p>
      <p>${props.price}</p>
      <p>{itemQty} items left</p>
      <button onClick={(props) => {
        if (itemQty) {
          addItems(itemQty - 1);
          console.log(props.target);
          // props.addToCart(props.target);
        } else { 0 }
      }}>
        Add to Cart
      </button>
      <button onClick={() => (itemQty < props.quantity) ? addItems(itemQty + 1) : props.quantity}>
        Remove from Cart
      </button>
    </div >
  )
};

export default ProductCard;
