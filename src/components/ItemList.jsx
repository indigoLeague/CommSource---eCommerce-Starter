import React from 'react';

const ItemList = (props) => {
  let price = props.product.price * 1;
  price = price.toLocaleString('us-US', { style: 'currency', currency: 'USD' });

  return (
    <li className="cartListItem">
      <h3> {props.product.name} </h3>
      <p> Price/Pokemon: {price}</p>
      <p> Quantity: 1</p>
      <p> Description: {props.product.description}</p>
      <button onClick={() => props.updateCart(props.product.name)} > remove from cart </button>
    </li>
  )
}

export default ItemList
