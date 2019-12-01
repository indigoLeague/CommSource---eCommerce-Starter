import React from 'react';

const ProductInvoice = (props) => {
  const quantitySold = props.product.quantitySold || 1;
  let price = props.product.price * quantitySold;
  price = props.makeCurrency(price);

  return (
    <tr>
      <td>{props.product.name}</td>
      <td className="rightNumbers">{price}</td>
    </tr>
  )
}

export default ProductInvoice






