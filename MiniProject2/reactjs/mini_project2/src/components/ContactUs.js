import React from 'react'
import '../App.css';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Footer from './PageFooter';

function ContactUs() {
  return (
    <div className='contactUs'>
        <Container sx={{textAlign:'center', marginTop: '15px'}}>
          <h1 id='contactUsTitle'>Contact Us</h1>
        <Card sx={{width:578, display:'block'}}>
      <CardContent>
            <Box>
                <TextField required label="Name" placeholder="Enter your name here"/>
            </Box>
            <Box>
                <TextField required label="Email" type='email' placeholder='Enter your email here'/>
            </Box>
            <Box>
                <TextField required label="Subject" placeholder="Enter the subject here"/>
            </Box>
            <Box>
                <TextField 
                    required  
                    multiline 
                    label="Message" 
                    id="userMessage"  
                    rows={5} 
                    placeholder='Enter your message here'/>
            </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Container>

       
      <Footer/>
    </div>
  )
}

export default ContactUs
