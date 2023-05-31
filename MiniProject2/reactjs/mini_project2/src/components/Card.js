import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.png';
import image4 from '../assets/img/image4.png';
import '../App.css';

export default function ActionAreaCard() {
  return (
    <Container className='marginTop'>
        <Card sx={{ maxWidth: 1440  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="610"
          width="800"
          image={image1}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            For your enjoy-mint
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="610"
          image={image2}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            For your enjoy-mint
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="610"
          image={image3}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            For your enjoy-mint
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="610"
          image={image4}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            For your enjoy-mint
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
    
  );
}