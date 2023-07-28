// import React from 'react';
// import { styled } from '@mui/material/styles';
// import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { Link } from 'react-router-dom';
// import RemoveIcon from '@mui/icons-material/Remove';

// const useStyles = styled((theme) => ({
//   container: {
//     marginTop: theme.spacing(3),
//     padding: theme.spacing(3),
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   quantityField: {
//     width: '50px',
//     textAlign: 'center',
//     '& input': {
//       textAlign: 'center',
//     },
//   },
// }));

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
//   const classes = useStyles();

//   const handleQuantityChange = (event, item) => {
//     const newQuantity = event.target.value;
//     updateQuantity(item, newQuantity);
//   };

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Retrieve cart data from LocalStorage and display it
//     const cartData = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(cartData);
//   }, []);

//  const calculateTotalAmount = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       if ((item.id)) {
//         total += item.product_price * item.quantity;
//       }
//     })
//     return total.toLocaleString();
//   };

//   return (
//     <div className={classes.container}>
//       <Typography variant="h6" className={classes.title}>
//         Shopping Cart
//       </Typography>
//       {cartItems.length > 0 ? (
//         <List>
//           {cartItems.map((item) => (
//             <ListItem key={item.id}>
//               <ListItemText
//                 primary={item.product_name}
//                 secondary={
//                   item.quantity > 1
//                     ? `${item.product_price} x ${item.quantity}`
//                     : item.product_price
//                 }
//               />
//               <ListItemSecondaryAction>
//                 <IconButton
//                   edge="end"
//                   aria-label="delete"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//                 <IconButton
//                   edge="end"
//                   aria-label="remove"
//                   onClick={() => updateQuantity(item, item.quantity - 1)}
//                 >
//                   <RemoveIcon />
//                 </IconButton>
//                 <input
//                   className={classes.quantityField}
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(event) => handleQuantityChange(event, item)}
//                 />
//                 <IconButton
//                   edge="end"
//                   aria-label="add"
//                   onClick={() => updateQuantity(item, item.quantity + 1)}
//                 >
//                   <AddIcon />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
        
//       ) : (
//         <Typography variant="body1">Your cart is empty</Typography>
//         )}
//         <Typography variant="h6" className={classes.totalAmount}>
//             Total Amount: {calculateTotalAmount()}
//           </Typography>
//         {cartItems.length > 0 && (
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.checkoutButton}
//             component={Link}
//             to="/checkout"
//           >
//             Checkout
//           </Button>

//       )};
//     </div>
//   )
// }

// export default Cart;


import React, { useEffect, useState } from 'react';
import '../pages/Shop/Cafe.css';
import  Button  from 'react-bootstrap/Button';
import Footer from './PageFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  // const imagePath = require(`../assets/img/products/${product.product_image}`);
  // console.log(product.product_image)

  useEffect(() => {
    // Retrieve cart data from LocalStorage and display it
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);
  }, []);

  const handleQuantityChange = (item, newQuantity) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrementQuantity = (item) => {
    handleQuantityChange(item, item.quantity + 1);
  };

  const handleDecrementQuantity = (item) => {
    handleQuantityChange(item, item.quantity - 1);
  };

  const handleDeleteItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const formatAmountWithCommas = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((total, item) => {
      const itemAmount = item.product_price * item.quantity;
      return total + itemAmount;
    }, 0);
    return formatAmountWithCommas(totalAmount);
  };

  return (
    <div>
      <Container>
      <h1 style={{marginTop: '60px', textAlign:'center', fontWeight: 'bolder'}}>Cart</h1>
      {cartItems.length > 0 && (
        <div style={{textAlign: 'end', margin: '5px'}}>
          <button className="addToCartBttn2" onClick={handleClearCart}><FontAwesomeIcon icon={faTrash} style={{color: "#fff"}} /> Clear Cart</button>
        </div>
      )}
      {cartItems.length === 0 ? (
        <div className='CartText'>
          <p>Your Cart is empty</p>
        </div>
        
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className='cartCard'>
            {/* <div>
              <img src={imagePath} alt="Menus"/>
            </div> */}
            
            <h4>{item.product_name}</h4>

              <div style={{display: 'flex'}}>
              <button className="addToCartBttn1" onClick={() => handleDecrementQuantity(item)}>-</button>
              <Form.Control className='quantityForm'
        type="number"
        width={'10%'}
        value={item.quantity}
        onChange={(e) =>
          handleQuantityChange(item, parseInt(e.target.value))
        }
      />
              <button className="addToCartBttn1" onClick={() => handleIncrementQuantity(item)}>+</button>
              <button className="addToCartBttn1" style={{marginLeft: '5px'}} onClick={() => handleDeleteItem(item)}>
                <FontAwesomeIcon icon={faTrash} style={{color: "#000"}} />
              </button>
              </div>
            <p style={{marginTop: '16px'}}>
              <span style={{fontSize: '18px', fontWeight: 'bold'}}>Amount:</span> ₱{formatAmountWithCommas(item.product_price * item.quantity)}
            </p>
          </div>
        ))
      )}
      <div>
      {cartItems.length > 0 && <><p style={{fontSize: '22px', fontWeight: 'bold', marginTop: '16px', marginBottom: '16px'}}> Total Amount: ₱{calculateTotalAmount()}</p>
      <div style={{margin: '10px'}}>
      <Link to="/Menu">
            <Button>Continue Shopping</Button>
          </Link>
      <Link to="/checkout">
            <Button style={{marginLeft: '5px'}}>Checkout</Button>
          </Link>
      </div></>}
      </div>
      
      
          </Container>
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Cart;
