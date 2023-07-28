import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../pages/Shop/Cafe.css';
import { useNavigate } from 'react-router-dom';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Updated to make the Modal responsive -> JP
  maxWidth: 400, // Added to ensure the Modal doesn't exceed a maximum width of 400px ->JP
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ProductItem = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const imagePath = require(`../assets/img/products/${product.product_image}`);
  const isAuthenticated = localStorage.getItem('login_token') ? true : false;

  return (
    <>

      <div className="product">
        <div className="description">
         
            <img src={imagePath} onClick={handleOpen} alt="Menus"/>
            
          <p><b>{product.product_name}</b></p>
          <p> ₱{product.product_price}</p>
           <button style={{marginRight: '5px'}} className="addToCartBttn" onClick={() => {isAuthenticated ? addToCart(product) : navigate('/Login')}}>
            Add To Cart
          </button> 
          <button className="addToCartBttn" onClick={handleOpen}>Learn more</button>
        </div>
      </div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box sx={style}>
      <div>
      <img src={imagePath} alt="Menus" style={{ maxWidth: '100%' }}/>
      </div>
      
      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
        {product.product_name}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {product.product_details}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {product.product_price}
      </Typography>
      <Box sx={{ mt: 2, display: 'flex' }}>
      {isAuthenticated ? <Button
      variant="contained"
      color="success"
      onClick={() => {isAuthenticated ? addToCart(product) : navigate('/Login')}}
      sx={{ flex: 1, marginRight: .5 }}
    >
      Add to Cart
    </Button> : navigate('/Login')}
    <Button
      variant="contained"
      color="error"
      onClick={handleClose}
      sx={{ flex: 1 }}
    >
      Close
    </Button>
    </Box>
    </Box>
    
  </Modal>
    </>
  
  );
  
};

export default ProductItem;