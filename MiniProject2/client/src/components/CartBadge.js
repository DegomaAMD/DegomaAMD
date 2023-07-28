import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';



const CartBadge = ({ cartItems  }) => {
// const [itemCount, setItemCount] = useState(0);

//   useEffect(() => {
//     setItemCount(cartItems.length);
//   }, [cartItems]);

  return(
    <div>
      <FontAwesomeIcon icon={faShoppingCart} style={{color: "#fff"}} />
      {/* {itemCount} */}
    </div>
  )
  
  
  
  
};

export default CartBadge;