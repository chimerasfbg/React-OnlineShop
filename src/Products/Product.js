import React from "react";
import {MdAddCircleOutline} from "react-icons/md"
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart ,setSelectedImg}) => {
  // return <div>test</div>
 
  return (
    
    <div className="card">
      <img className="img" onClick={()=> setSelectedImg(product.image.url)} src={product.image.url} alt="image" />

      <div className="cardContent">
        <div className="cardTitle">
          <h1>{product.name}</h1>
          <h2>{product.price.formatted}</h2>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: product.description }}></h3>
      </div>

      <div className="cardAction">
          <MdAddCircleOutline className='cartBtn' onClick={() => onAddToCart(product.id, 1)}  />
      </div>
    </div>
  );
};

export default Product;
