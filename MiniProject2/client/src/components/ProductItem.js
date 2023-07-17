import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ProductItem = ({ product, addToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={product.image}
        title={product.product_name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h6">
          {product.product_name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {product.product_price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
