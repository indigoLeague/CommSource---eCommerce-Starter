import React from 'react';

const ItemList = (props) => {
  console.log("ran ItemList")

  return (
    <li>
      <p> {props.product.name} </p>
      <p> Total Price: {props.product.price * 1}</p>
      <p> Quantity: 1</p>
      <p> Description: {props.product.description}</p>
      <button onClick={() => props.updateCart(props.product.name)} > remove from cart </button>
    </li>
  )
}

export default ItemList
