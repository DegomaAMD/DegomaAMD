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
// const aboutPage = footerItems[0];

function Footer() {
  return (
    
    <Box sx={{width: '100%', color: '#fff'}}>
      <Container sx={{ display:  { xs: 'block', sm: 'flex' }, justifyContent: 'space-around'}}>
        <div className="footerContent">
        <Box  component="div">
              <Link to={'/Home'}  >
                <img src={logo} alt="Vizmaker Logo" className='footerLogo'/>
              </Link>
          </Box>
      <Box sx={{ display:  { xs: 'block', sm: 'flex' }}}>
            {footerItems.map((item) => (
              <Button key={item} onClick={{scrollTo: 'top'}}>
                <Link to={'/PageNotFound'} className='bodyText1' sx={{color: '#fff'}}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </div>
      <div className="footerContent1">
        <Box>
        <p>
          105 Salem St, Boston
          Massachusetts
          02113
        </p>
        <h3>02 8396 5340</h3>
        <p>
          info@vizmaker.com
        </p>
        </Box>
      </div>

      <div className="footerContent1">
        <h3 style={{marginTop: '20px'}}>Business Hours</h3>
        <p>Monday to Saturday</p>
        <p>9:00am - 9:00pm</p>
      </div>
      
      </Container>
      <Box className='socialLinks'>
          <Link to={'https://www.facebook.com/'} target='blank'><FacebookIcon sx={{marginRight:'50px', color:'#fff'}} /></Link>
          <Link to={'https://www.instagram.com/'} target='blank'><InstagramIcon sx={{marginRight:'50px', color:'#fff'}}/></Link>
          <Link to={'https://web.telegram.org/'} target='blank'><TelegramIcon sx={{color:'#fff'}}/></Link>
        </Box>
      <p className='footerBottomMessage'>© 2023 Vizmaker Cafe. All rights reserved.</p>
    </Box>

  )
}

export default Footer
