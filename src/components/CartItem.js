import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="card">
      <img className="img" src={item.media?.source} alt="image" />

      <div className="cardContent">
        <div className="cardTitle">
          <p>{item.name}</p>
          <p>{item.line_total.Formatted_with_symbol}</p>
        </div>
      </div>

      <div className="cardAction">
       <button>-</button>
       <p>{item.quantity}</p>
       <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
