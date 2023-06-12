import React, { useState } from 'react'
import { Button, Container } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Alert} from '@mui/material/';
import Axios from 'axios';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].email);
      }
    })
  }
  return (
    <Container sx={{display: 'flex', justifyContent:'center', textAlign:'center'}}>
      <div className='loginForm'>
        <form>
          <div>
            
          <h1 style={{marginTop: '30px'}}>Login</h1>
          </div>
          <div>
            <h2>{loginStatus}</h2>
          </div>
          <Box>
            <TextField className='textInput' label='Username' type='text' placeholder='Enter your username' name='username' onChange={(e) => {setusername(e.target.value)}} required/>
            </Box>
          <Box>
            <TextField className='textInput' label='Password' type='password' placeholder='Enter your password' name='password' onChange={(e) => {setpassword(e.target.value)}} required/>
          </Box>
          <Box>
          <Button className='button' type='submit' onClick={login}>Login</Button>
          
          
            </Box>
        <div className='Register'>
          <p>Need an account?</p>
          <Link className='button1' to={'/Register'} style={{textDecoration:'none'}}>
          <p style={{marginLeft:'10px'}}>Sign-Up</p>
          </Link>
        </div>
            
        </form>
      </div>
    </Container>


  )
    
}

export default Login