import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = ({
  cart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) => {
  const isEmpty = !cart.line_items?.length;

  const EmptyCart = () => (
    <h2>
      You have no items in Your cart .<br/><Link to="/">Start Adding Some!!!</Link>
    </h2>
  );

  const FilledCart = () => (
    <>
      <div className='cartFlex'>
        {cart.line_items.map((item) => (
          <div key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ))}
      </div>
      <div className="totalPayment">
        <h1>Subtotal : {cart.subtotal.formatted_with_symbol}</h1>
        <div>
          <button className="btn medium" onClick={handleEmptyCart}>Empty Cart</button>
          <button className="btn medium" >Check Out</button>
        </div>
      </div>
    </>
  );
  return (
    <div className='mainCart'>
      <h1>Your Shopping Cart</h1>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
