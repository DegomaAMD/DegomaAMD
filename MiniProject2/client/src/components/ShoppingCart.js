import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
  totalAmount: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
  },
}));

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleQuantityChange = (event, item) => {
    const newQuantity = event.target.value;
    updateQuantity(item, newQuantity);
  };

  const handleItemCheckboxChange = (event, item) => {
    const itemId = item.id;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItemId) => selectedItemId !== itemId)
      );
    }
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      if (selectedItems.includes(item.id)) {
        total += item.product_price * item.quantity;
      }
    });
    return total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Shopping Cart
      </Typography>
      {cartItems.length > 0 ? (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onChange={(event) => handleItemCheckboxChange(event, item)}
                />
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
          <Typography variant="h6" className={classes.totalAmount}>
            Total Amount: {calculateTotalAmount()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.checkoutButton}
            component={Link}
            to={{
              pathname: '/checkout',
              state: { selectedItems }
            }}
          >
            Checkout
          </Button>
         
        </>
      ) : (
        <Typography variant="body1">Your cart is empty</Typography>
      )}
    </div>
  );
};

export default ShoppingCart;
