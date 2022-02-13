import React from "react";

import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart }) => {
  // return <div>test</div>
  return (
    <div className="card">
      <img className="img" src={product.image.url} alt="image" />

      <div className="cardContent">
        <div className="cardTitle">
          <h1>{product.name}</h1>
          <h2>{product.price.formatted}</h2>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: product.description }}></h3>
      </div>

      <div className="cardAction">
        <button className='cartBtn' onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart  />
        </button>
      </div>
    </div>
  );
};

export default Product;
