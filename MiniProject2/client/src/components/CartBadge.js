import React from 'react';

const CartIcon = ({ cartItems }) => {
  const itemCount = cartItems && Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <div>
      <i className="fa fa-shopping-cart"></i>
      <span>{itemCount}</span>
    </div>
  );
};

export default CartIcon;