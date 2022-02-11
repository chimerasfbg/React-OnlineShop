import React from "react";

import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product,onAddToCart }) => {



  // return <div>test</div>
  return (
    <div className="card">
      <img className="img" src={product.image.url} alt="image" />

      <div className="cardContent">
        <div className="cardTitle">
          <p>{product.name}</p>
          <p >{product.price.formatted}</p>
        </div>

        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: product.description}}></p>
        </div>
      </div>

      <div className="cardAction">
        <button onClick={()=>onAddToCart(product.id,1)}>
          <AddShoppingCart  />
        </button>
      </div>
    </div>
  );
};

export default Product;
