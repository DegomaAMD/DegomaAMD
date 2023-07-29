import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductItem from '../../components/ProductItem';
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../components/PageFooter';

import 'react-toastify/dist/ReactToastify.css';


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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
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
        setLoading(false);
        console.log('response', response)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  const handleAddToCart = (product) => {
    // Retrieve existing cart data from LocalStorage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cartData.find(item => item.id === product.id);

    if (existingProduct) {
      // Increment quantity if already in cart
      existingProduct.quantity += 1;
    } else {
      // Add the product to the cart with quantity 1
      cartData.push({ ...product, quantity: 1 });

    }
    toast.success('Added to cart', {
      position: 'bottom-right',
      autoClose: 2000, // Close the toast after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    // Save updated cart data to LocalStorage
    localStorage.setItem('cart', JSON.stringify(cartData));

  };


  const getToken = () => {
    return localStorage.getItem('login_token');
  };



  return (
    <div className={classes.container}>
      <ToastContainer />
      <div className="shop">
        <div className="shopTitle">
        <h1>Shop</h1>
      </div>
   </div>
      <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress style={{color: '#102F3A', marginTop: '50px'}} />
        </div>
      ) : (
        <div>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <div className={classes.productItem}>
                <ProductItem
                  product={product}
                  addToCart={handleAddToCart}
                />
                
              </div>
            </Grid>
          ))}
        </Grid>
        </div>)}
      </div>

      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
};

export default Shop;
