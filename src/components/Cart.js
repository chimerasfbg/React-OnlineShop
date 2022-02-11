import React from "react";
import CartItem from './CartItem'
import {Link} from 'react-router-dom';
const Cart = ({ cart }) => {
    
  const isEmpty = !cart.line_items?.length;

  const EmptyCart = () => (
    <p>You have no items in Your cart . 
    <Link to='/'>Start Adding Some!!!</Link></p>
  );

  const FilledCart = () => (
    <>
      <div className="cardContent flex ">
        {cart.line_items.map((item) => (
          <div key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <div>
        <p>Subtotal : {cart.subtotal.formatted_with_symbol}</p>
        <div>
          <button>Empty Cart</button>
          <button>Check Put</button>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <p>Your Shopping Cart</p>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
