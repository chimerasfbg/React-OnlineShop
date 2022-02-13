import React from "react";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className="card">
      <img className="img" src={item.image?.url} alt="image" />

      <div className="cardContent">
        <div className="cardTitle">
          <h2>{item.name}</h2>
          <p>{item.line_total.Formatted_with_symbol}</p>
        </div>
      </div>

      <div className="cardAction">
        <button className='cartButton' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
         <span>-</span> 
        </button>
        <p className='pbutton'>{item.quantity}</p>
        <button className='cartButton' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
        <span >+</span> 
        </button>
      </div>
      <button className=' btn 'onClick={()=>{handleRemoveFromCart(item.id)}}>Remove</button>
    </div>
  );
};

export default CartItem;
