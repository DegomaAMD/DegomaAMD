import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Register from '../components/Register';


function Login() {
  return (
    <div className='marginTop'>
      <h1>Login</h1>
      <Box>
          <TextField required label="Email" type='email' placeholder='Enter your email here' className='contactForm' />
      </Box>
      <Box>
          <TextField required label="Password" type='password' placeholder="Enter the password here" className='contactForm' />
      </Box>
      <Register/>
    </div>
  )
}

export default Login
