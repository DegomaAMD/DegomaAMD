import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../pages/Shop/Cafe.css';
import '../products';
import qq from '../assets/img/products/1.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '100%', // Added to ensure the image doesn't exceed its original size
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductItem = ({ product, addToCart }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const imagePath = require(`../assets/img/products/${product.product_image}`);

  return (
    <>
      <div className="product">
        <div className="description">
          <img src={imagePath} alt="Menus" />
          <p>
            <b>{product.product_name}</b>
          </p>
          <p>₱{product.product_price}</p>
          <button className="addToCartBttn" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
          <button className="addToCartBttn" onClick={handleOpen}>
            Learn more
          </button>
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
          '@media (max-width: 600px)': {
            maxWidth: '90vw',
          },
        }}
      >
        <Box sx={style}>
          <div>
            <img src={imagePath} alt="Menus" style={{ maxWidth: '100%' }} />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product.product_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product.product_details}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product.product_price}
          </Typography>
          <Box>
            <Button variant="contained" color="success" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProductItem;
