// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography, Button, Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { CircularProgress } from '@mui/material';
// import Cart from '../../components/Cart';

// const useStyles = styled((theme) => ({
//   container: {
//     padding: theme.spacing(3),
//   },
//   productItem: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const ShoppingCart = () => {
//   const classes = useStyles();
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//     loadCartItems();
//     fetchCartItems();
//   }, []);

//   const fetchProducts = () => {
//     axios
//       .get('http://127.0.0.1:8000/api/product', {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       })
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//         console.log('response', response)
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       });
//   };

//   const loadCartItems = () => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
//     if (storedCartItems) {
//       setCartItems(storedCartItems);
//     }
//   };

//   const saveCartItems = () => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };
 

//   const fetchCartItems = () => {
//     axios
//       .get('http://127.0.0.1:8000/api/cart/items', {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       })
//       .then((response) => {
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cart items:', error);
//       });
//   };


//   const removeFromCart = (product) => {
//     setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
//   };

//   const updateQuantity = (product, newQuantity) => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === product.id) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   useEffect(() => {
//     saveCartItems();
//   }, [cartItems]);

//   const getToken = () => {
//     return localStorage.getItem('login_token');
//   };



//   return (
//     <>
//         <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
//     </>
    
//   );
// };

// export default ShoppingCart;
