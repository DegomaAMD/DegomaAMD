import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Box } from '@mui/material';
import BackgroundImage from '../assets/img/vizmaker-banner.png';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  card: {
    borderRadius: 12,
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxWidth: 400,
    width: '90%',
    margin: 'auto',
    padding: '20px',
  },
  typography: {
    fontSize: '24px',
  },
});

const PlaceOrder = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3" component="h2" align="center">
            Order Placed Successfully!
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" component="p" align="center">
              Thank you for your order! Your product(s) have been successfully placed.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceOrder;
