import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ cartItems }) => {
  const itemCount = cartItems && Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} style={{color: "#fff"}} />
      <span style={{color: "#fff"}}>{itemCount}</span>
    </div>
  );
};

export default CartIcon;