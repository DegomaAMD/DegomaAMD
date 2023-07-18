import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchSelectedProducts();
  }, []);

  const fetchUserData = () => {
    axios
      .get('http://127.0.0.1:8000/api/user') // Replace with the appropriate endpoint to fetch user data
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const fetchSelectedProducts = () => {
    axios
      .get('http://127.0.0.1:8000/api/cart/items') // Replace with the appropriate endpoint to fetch selected products from the cart
      .then((response) => {
        setSelectedProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching selected products:', error);
      });
  };

  const handlePlaceOrder = () => {
    const order = {
      user: userData,
      products: selectedProducts,
    };

    axios
      .post('http://127.0.0.1:8000/api/order', order) // Replace with the appropriate endpoint to send the order data
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        // Add any additional logic or navigation after placing the order
      })
      .catch((error) => {
        console.error('Error placing the order:', error);
      });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Checkout
      </Typography>

      <Typography variant="h6">User Information:</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            fullWidth
            className={classes.formField}
            value={userData.name || ''}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            fullWidth
            className={classes.formField}
            value={userData.email || ''}
            disabled
          />
        </Grid>
        {/* Add more user information fields as needed */}
      </Grid>

      <Typography variant="h6" className={classes.title}>
        Selected Products:
      </Typography>
      {selectedProducts.length > 0 ? (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>{product.product_name}</li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1">No products selected for checkout</Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </div>
  );
};

export default Checkout;
