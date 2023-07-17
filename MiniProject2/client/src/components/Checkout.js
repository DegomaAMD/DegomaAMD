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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get('http://127.0.0.1:8000/api/user') // Replace with the appropriate endpoint to fetch user data
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // Extract the form data from the event
    const formData = new FormData(event.target);

    // Convert the form data to JSON format
    const userData = Object.fromEntries(formData.entries());

    // Perform any additional validation or data manipulation here
    // ...

    // Submit the user data to the backend
    axios
      .post('http://127.0.0.1:8000/api/checkout', userData) // Replace with the appropriate endpoint for submitting user data
      .then((response) => {
        // Handle the successful submission response
        console.log('Order placed successfully');
        // Redirect the user to a success or confirmation page
        // ...
      })
      .catch((error) => {
        console.error('Error submitting user data:', error);
        setError('Failed to place the order');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
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
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              className={classes.formField}
              required
              name="address"
            />
          </Grid>
          {/* Add more form fields as needed */}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
