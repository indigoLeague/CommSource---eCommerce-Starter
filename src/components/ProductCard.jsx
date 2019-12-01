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
      <button onClick={() => (itemQty) ? addItems(itemQty - 1) : 0}>
        Add to Cart
      </button>
      <button onClick={() => (itemQty < props.quantity) ? addItems(itemQty + 1) : props.quantity}>
        Remove from Cart
      </button>
    </div>
  )
};

export default ProductCard;
