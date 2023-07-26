import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCart from '../../components/Cart';
import ProductItem from '../../components/ProductItem';
import Navbar from '../../components/Navbar';

const useStyles = styled((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  productItem: {
    marginBottom: theme.spacing(2),
  },
}));

const Shop = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
    // loadCartItems();
    fetchCartItems();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://127.0.0.1:8000/api/product', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
        console.log('response', response)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  // const loadCartItems = () => {
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  //   if (storedCartItems) {
  //     setCartItems(storedCartItems);
  //   }
  // };

  const saveCartItems = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const addToCart = (product) => {
    axios
      .post('http://127.0.0.1:8000/api/cart/add', product, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      }).then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(existingItem, existingItem.quantity + 1);
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };

  const fetchCartItems = () => {
    axios
      .get('http://127.0.0.1:8000/api/cart/items', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  };

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  useEffect(() => {
    saveCartItems();
  }, [cartItems]);

  const getToken = () => {
    return localStorage.getItem('login_token');
  };



  return (
    <div className={classes.container}>
      <div className="shop">
        <div className="shopTitle">
        <h1>Shop</h1>
      </div>
   </div>
      <div>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <div className={classes.productItem}>
                <ProductItem
                  product={product}
                  addToCart={addToCart}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default Shop;
