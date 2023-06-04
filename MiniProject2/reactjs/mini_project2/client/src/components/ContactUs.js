import React from 'react'
import '../App.css';
import { Container, Typography } from '@mui/material';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Footer from './PageFooter';



function ContactUs() {
  return (
    <div  className='contactUs'>
      <h1 id='contactUsTitle'>Contact Us</h1>
        <Container sx={{textAlign:'center', marginTop: '15px', display:'flex', justifyContent:'center'}}>   
        <Card sx={{width:578, display:'block'}}>
      <CardContent>
            <Box>
              {errorMessage()}
            </Box>
            <Box>
                <TextField required label="Name" placeholder="Enter your name here" className='contactForm'/>
            </Box>
            <Box>
                <TextField required label="Email" type='email' placeholder='Enter your email here' className='contactForm' />
            </Box>
            <Box>
                <TextField required label="Subject" placeholder="Enter the subject here" className='contactForm' />
            </Box>
            <Box>
                <TextField 
                    required  
                    multiline 
                    label="Message" 
                    id="userMessage"  
                    rows={5} 
                    placeholder='Enter your message here' className='contactForm' />
            </Box>
      </CardContent>
      <CardActions className='contactForm'>
        <Button  size="small">Submit</Button>
      </CardActions>
    </Card>
        </Container>

       
      <Footer/>
    </div>
  )
}

export default ContactUs

const errorMessage = () =>{
  if (textFieldClasses.value === ''){
    <Alert severity="error"><Typography>Please fill-up the required fields.</Typography></Alert>
  } else {
    <Alert severity="success"><Typography>All Done.</Typography></Alert>
  }
}