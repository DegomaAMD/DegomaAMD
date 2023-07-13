import React, { useState } from 'react'
import { Button, Container, Alert } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/img/vizmaker-banner.png';

function Login() {

  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitLoading(true);

    if(!validateForm()){
      setSubmitLoading(false);
      return;
    }else {
      try {
        const response = await Axios.post('http://127.0.0.1:8000/api/login', formData);
        const token = response.data.token;

        localStorage.setItem('login_token', token);
        Navigate('/');

      } catch(error) {
        let errorMessage = error.response.data.error;
        setError(errorMessage);
      }
      setSubmitLoading(false);
    }
  };


  const validateForm = () => {

    if (formData.username === undefined || formData.username === ''){
      setError('Email is required!');
      return false;
    } else if (formData.password === undefined || formData.password === '') {
      setError('Password is required!');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData((prevSatate) => ({
      ...prevSatate, [e.target.name] : e.target.value,
    }));
  };

  return (
    <div>
      <div className='bgImage'>
        <img src={BackgroundImage} alt='Background'/>
      </div>
    
    <Container sx={{display: 'flex', justifyContent:'center', textAlign:'center'}}>
      <div className='loginForm'>
        <form>
          <div>
            
          <h1 style={{marginTop: '30px'}}>Login</h1>
          </div>
          <div>
          {error && <Alert severity="error">{error}</Alert>}
          </div>
          <Box>
            <TextField className='textInput' value={formData.username} label='Username' type='text' placeholder='Enter your username' name='username' onChange={handleChange} required/>
            </Box>
          <Box>
            <TextField className='textInput' value={formData.password} label='Password' type='password' placeholder='Enter your password' name='password' onChange={handleChange} required/>
          </Box>
          <Box>
            <Button className='button' type='submit'onClick={handleLogin} disabled={submitLoading}>
            {submitLoading ? <CircularProgress size={'10px'} /> : ''}Login
            </Button>
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

    </div>
  )
    
}

export default Login