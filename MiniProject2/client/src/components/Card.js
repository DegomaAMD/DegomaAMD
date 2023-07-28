import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.png';
import image4 from '../assets/img/image4.png';
import image5 from '../assets/img/image5.jpg';
import image6 from '../assets/img/image6.png';
import image7 from '../assets/img/image7.png';
import '../App.css';
import { Link } from 'react-router-dom';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function MenuCards() {
  return (
    <Container sx={{marginTop: '20px'}}>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={6}>     
        <Link to={'/Menu'} className="bodyText">
        <Card className='cards'>
              <CardActionArea sx={{backgroundColor:'#d4e9e2', display: {xs: 'flex', md: 'block'} }}>
        <CardMedia
          component="img"
          className='cardMenu'
          
          image={image1}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
            For your enjoy-mint
          </Typography>
          <Typography variant="body2" className='cardP'>
          Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.
          </Typography>
        </CardContent>
              </CardActionArea>
            </Card>
        </Link>              
         
        </Grid>
        <Grid xs={12} md={6}>
          <Link to={'/Menu'} className="bodyText">
          <Card className='cards'>
              <CardActionArea sx={{backgroundColor:'#cbe678' , display: {xs: 'flex', md: 'block'}}}>
        <CardMedia
          component="img"
          className='cardMenu'
          
          image={image2}
          alt="image1"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          Macadamia just dropped
          </Typography>
          <Typography variant="body2" className='cardP'>
          Smooth and lush, the new White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card>
          </Link>
          
        </Grid>
        <Grid xs={12} md={6} >   
        <Link to={'/Menu'} className="bodyText">  
          <Card className='cards'>
            <CardActionArea sx={{backgroundColor:'#eb81a5', display: {xs: 'flex', md: 'block'}}}>
          <CardMedia
          component="img"
          className='cardMenu'
          image={image6}
          alt="image1"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          Pineapple Passionfruit Lemonade Vizmaker Refreshers® beverage
          </Typography>
          <Typography variant="body2" className='cardP'>
          Tropical flavors of pineapple and passionfruit shaken with diced pineapple and refreshing lemonade.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card>   
        </Link>         
        </Grid>
        <Grid xs={12} md={6} >     
        <Link to={'/Menu'} className="bodyText">
          <Card className='cards'>
            <CardActionArea sx={{backgroundColor:'#eb81a5', display: {xs: 'flex', md: 'block'}}}>
          <CardMedia
          component="img"
          
          className='cardMenu'
          image={image7}
          alt="image1"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          Mango Dragonfruit Lemonade Vizmaker Refreshers® beverage
          </Typography>
          <Typography variant="body2" className='cardP'>
          Hand-shaken mango and dragonfruit flavors with tangy lemonade and real diced fruit.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card> 
          </Link>           
        </Grid>
        <Grid xs={12} md={6} >
          <Link to={'/Menu'} className="bodyText">       
          <Card className='cards'>
            <CardActionArea sx={{backgroundColor:'#cbe678', display: {xs: 'flex', md: 'block'}}}>
          <CardMedia
          component="img"
          className='cardMenu'
          
          image={image3}
          alt="image1"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          New Bumblebee Cake Pop
          </Typography>
          <Typography variant="body2" className='cardP'>
          Vanilla cake with buttercream dipped in chocolaty icing and finished with a bumblebee design.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card>   
          </Link>       
        </Grid>
        <Grid xs={12} md={6}>       
        <Link to={'/Menu'} className="bodyText"> 
          <Card className='cards'>
              <CardActionArea sx={{backgroundColor:'#cbe678', display: {xs: 'flex', md: 'block'}}}>
        <CardMedia
          component="img"
          className='cardMenu'
          
          image={image4}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          Bacon, Sausage & Egg Wrap
          </Typography>
          <Typography variant="body2" className='cardP'>
          Protein-packed ingredients with Cheddar cheese and potatoes wrapped in a flour tortilla.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card>    
          </Link>     
        </Grid>
        <Grid xs={12}> 
        <Link to={'/Menu'} className="bodyText">
          <Card className='cards'>
              <CardActionArea sx={{backgroundColor:'#eb81a5', display: {xs: 'flex', md: 'block'}}}>
        <CardMedia
          component="img"
          className='cardMenu'
          
          image={image5}
          alt="image1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardH5' >
          Shaken with sunshine
          </Typography>
          <Typography variant="body2" className='cardP'>
          Try these bright Vizmaker Refreshers® beverages: Mango Dragonfruit Lemonade, Pineapple Passionfruit Lemonade and Strawberry Açaí Lemonade.
          </Typography>
        </CardContent>
              </CardActionArea>
          </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
    </Container>
    
  );
}