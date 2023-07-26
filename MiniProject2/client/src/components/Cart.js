import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = styled((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  quantityField: {
    width: '50px',
    textAlign: 'center',
    '& input': {
      textAlign: 'center',
    },
  },
}));

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const classes = useStyles();

  const handleQuantityChange = (event, item) => {
    const newQuantity = event.target.value;
    updateQuantity(item, newQuantity);
  };

 const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      if ((item.id)) {
        total += item.product_price * item.quantity;
      }
    })
    return total.toLocaleString();
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Shopping Cart
      </Typography>
      {cartItems.length > 0 ? (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.product_name}
                secondary={
                  item.quantity > 1
                    ? `${item.product_price} x ${item.quantity}`
                    : item.product_price
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <input
                  className={classes.quantityField}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(event, item)}
                />
                <IconButton
                  edge="end"
                  aria-label="add"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  <AddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        
      ) : (
        <Typography variant="body1">Your cart is empty</Typography>
        )}
        <Typography variant="h6" className={classes.totalAmount}>
            Total Amount: {calculateTotalAmount()}
          </Typography>
        {cartItems.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>

      )};
    </div>
  )
}

export default ShoppingCart;
