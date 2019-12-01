import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

function ProductContainer(props) {

  // console.log('props in productContainer: ', props);
  const products = props.products.map((item, ind) => {
    return <ProductCard
      key={ind}
      name={item.name}
      description={item.description}
      price={item.price}
      quantity={item.quantity}
      addToCart={props.addToCart}
    />
  });

  return (
    <div className="productContainer">
      {products}
    </div>
  );
}

export default ProductContainer;
