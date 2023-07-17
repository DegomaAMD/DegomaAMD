import React, { useState } from 'react'
import { Button, Container } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/img/vizmaker-banner.png';
import './Login.css'


function Register() {
    const [email, setEmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [role, setRole] = useState('Customer')
    const [registerStatus, setRegisterStatus] = useState("");

 
  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
          setRegisterStatus("Account created successfully!")
          setEmail("");
          setusername("");
          setpassword("");
      }
    })
    
  }


  return (
    <div >
      <div className='bgImage'>
        <img src={BackgroundImage} alt='Background'/>
      </div>

    <Container sx={{display: 'flex', justifyContent:'center', textAlign:'center'}}>
        <div className='registerForm'>
        <form >
          <h1 style={{marginTop: '20px'}}>Sign-up</h1>
          <div>
            <h2>{registerStatus}</h2>
          </div>
          <Box>
          
            <TextField className='textInput' value={email} label='Email' type='email' placeholder='Enter your Email Address' name='email' onChange={(e) => {setEmail(e.target.value)}} required/>
          </Box>
          <Box>
    
            <TextField className='textInput' value={username}  label='Username' type='text' placeholder='Enter your username' name='username' onChange={(e) => {setusername(e.target.value)}} required/>
          </Box>
          <Box>
    
            <TextField className='textInput' value={password}  label='Password' type='password' placeholder='Enter your password' name='password' onChange={(e) => {setpassword(e.target.value)}} required/>
          </Box>
          <Box>
            {/* <Link to={'/Login'}> */}
              <Button className='button' type='submit' onClick={register}> 
                Submit
              </Button>
            {/* </Link> */}
            
          </Box>
          

          <div className='Login'>
          <p>Already have an account?</p>
          <Link className='button1' to={'/Login'} style={{textDecoration:'none'}}>
          <p style={{marginLeft:'10px'}}>Login</p>
          </Link>
        </div>
        
        </form>

      </div>
    </Container>
    </div>
  )
}

export default Register
