import React, { useState } from 'react'
import '../App.css';
import { Container,  } from '@mui/material';
import TextField  from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Footer from './PageFooter';
import { useForm, ValidationError } from '@formspree/react';
import Form from 'react-bootstrap/Form';



function ContactUs() {
  
  const [state, handleSubmit] = useForm("mzblzzon");
  if (state.succeeded) {
      return 
      <p>Your message has been submitted.</p>;
      <p>Thank you for contacting us!</p>;
  }

  return (
    <div  className='contactUs'>
      <h1 style={{textAlign:'center'}} id='contactUsTitle'>Contact Us</h1>
        <Container sx={{textAlign:'center', marginTop: '15px', display:'flex', justifyContent:'center'}}>   
        <Card className='contactUsCard' sx={{width:578, display:'block'}}>
      <CardContent>
            <Form
            action="https://formspree.io/f/mzblzzon"
            method="POST">
            <Box>
                <TextField required label="First Name"  type='text' placeholder="Enter your firstname" className='contactForm' />
                <TextField required label="Last Name"  type='text' placeholder="Enter your lastname" className='contactForm' />
            </Box>
            <Box>
                <TextField required label="Email"  type='email' placeholder='Enter your email here' className='contactForm' />
            </Box>
            <Box>
                <TextField 
                    required  
                    multiline 
                    type='text'
                    label="Message" 
                    id="userMessage"  
                    rows={5} 
                    placeholder='Enter your message here' className='contactForm' />
            </Box>
            </Form>
            
      </CardContent>
      <CardActions className='Form'>
        <Button className='formButton' size="small" onClick={handleSubmit}>Submit</Button>
      </CardActions>
    </Card>
        </Container>

       
      <Footer/>
    </div>
  )
}

export default ContactUs;
