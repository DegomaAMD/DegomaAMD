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
import Axios from 'axios';



function ContactUs() {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [contactStatus, setcontactStatus] = useState("");

  
  const contact = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/messages", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    }).then((response) => {
      if(response.data.message){
        setcontactStatus(response.data.message);
      }else{
        setcontactStatus("Thank you for contacting us. Your message has been submitted!")
      }
    })
  }

  return (
    <div  className='contactUs'>
      <h1 style={{textAlign:'center'}} id='contactUsTitle'>Contact Us</h1>
        <Container sx={{textAlign:'center', marginTop: '15px', display:'flex', justifyContent:'center'}}>   
        <Card sx={{width:578, display:'block'}}>
      <CardContent>
            <Box>
            <h2>{contactStatus}</h2>
            </Box>
            <Box>
                <TextField required label="First Name" type='text' placeholder="Enter your firstname" className='contactForm' onChange={(e) => {setfirstname(e.target.value)}}/>
                <TextField required label="Last Name" type='text' placeholder="Enter your lastname" className='contactForm' onChange={(e) => {setlastname(e.target.value)}}/>
            </Box>
            <Box>
                <TextField required label="Email" type='email' placeholder='Enter your email here' className='contactForm' onChange={(e) => {setemail(e.target.value)}}/>
            </Box>
            <Box>
                <TextField 
                    required  
                    multiline 
                    label="Message" 
                    id="userMessage"  
                    rows={5} 
                    placeholder='Enter your message here' className='contactForm' onChange={(e) => {setmessage(e.target.value)}}/>
            </Box>
      </CardContent>
      <CardActions className='Form'>
        <Button className='formButton' size="small" onClick={contact}>Submit</Button>
      </CardActions>
    </Card>
        </Container>

       
      <Footer/>
    </div>
  )
}

export default ContactUs;
