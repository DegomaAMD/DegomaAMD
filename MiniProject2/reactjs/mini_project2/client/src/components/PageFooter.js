import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import logo from '../assets/img/vizmaker-logo-transparent.png';
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


const footerItems = ['About Vizmaker', 'Careers', 'Business Patners', 'Order and Pick-up'];

function Footer() {
  return (
    
    <Box sx={{width: '100%', bgcolor: 'inherit', color: '#1c110a'}}>
      <Container sx={{ display:  { xs: 'block', sm: 'flex' }}}>
        <div className="footerContent">
        <Box  component="div">
              <Link to={'/Home'}  >
                <img src={logo} alt="Vizmaker Logo" className='footerLogo'/>
              </Link>
          </Box>
      <Box sx={{ display: 'flex'}}>
            {footerItems.map((item) => (
              <Button key={item} >
                <Link to={`/${item}`} className='bodyText' sx={{color: '#fff'}}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </div>
      <div className="footerContent1">
        <blockquote>
          105 Salem St, Boston
          Massachusetts
          02113
        </blockquote>
        <blockquote>
          <h3>02 8396 5340</h3>
          info@vizmaker.com
        </blockquote>
        <Box sx={{display:'flex', marginTop: '10px', textAlign: 'center'}} >
          <FacebookIcon sx={{marginRight:'5px'}} />
          <InstagramIcon sx={{marginRight:'5px'}}/>
          <TelegramIcon/>
        </Box>
      </div>

      <div className="footerContent1">
        <h3>Business Hours</h3>
        <p>Monday to Sunday</p>
        <p>9:00 am - 9:00pm</p>
      </div>
      </Container>
    </Box>

  )
}

export default Footer
