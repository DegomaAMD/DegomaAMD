import React, { useState } from 'react'
import { Button, Container, Alert, CircularProgress } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/img/vizmaker-banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      role: 'customer'
    });
      const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

    
  
 
  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSubmitLoading(true);

    if (!validateForm()) {
          setSubmitLoading(false);
          return;
      } else {
        Axios.post('http://127.0.0.1:8000/api/register', formData)
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/login');
      })
      .catch((error) => {
      let errorMessage = error.response.data.error;
       setError(errorMessage);
        console.error(error);
      });
      setSubmitLoading(false);
    }
  };

  const validateForm = () => {

    if (formData.username === undefined || formData.username === ''){
      setError('Username is required!');
      return false;
    } else if (formData.email === undefined || formData.email === '') {
      setError('Email is required!');
      return false;
    } else if (formData.password === undefined || formData.password === '') {
      setError('Password is required!');
      return false;
    } else if (formData.password.length <= 5) {
      setError('Password should be more than 5 characters!');
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
    <div >
      <div className='bgImage'>
        <img src={BackgroundImage} alt='Background'/>
      </div>

    <Container sx={{display: 'flex', justifyContent:'center', textAlign:'center'}}>
        <div className='registerForm'>
        <form >
          <h1 style={{marginTop: '20px'}}>Sign-up</h1>
          
          <Box>    
            <TextField className='textInput' value={formData.email} label='Email' type='email' placeholder='Enter your Email Address' name='email' onChange={handleChange} required/>
          </Box>
          <Box>
            <TextField className='textInput' value={formData.username}  label='Username' type='text' placeholder='Enter your username' name='username' onChange={handleChange} required/>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <TextField className='textInput' value={formData.password}  label='Password'  type={showPassword ? 'text' : 'password'} placeholder='Enter your password' name='password' onChange={handleChange} required />
          </Box>
          <div
          style={{
            position: 'absolute',
            top: '45%',
            right: '79px',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} style={{color: "#102f3a",}} />
          ) : (
            <FontAwesomeIcon icon={faEye} style={{color: "#102f3a",}} />
          )}
        </div>
          <div style={{display: 'none'}}>
            <TextField className='textInput' value={formData.role}  type='text' placeholder='CUSTOMER' name='Customer' disabled/>
          </div>
        <div>
          {error && <Alert severity="error">{error}</Alert>}
          </div>
          <Box>
              <Button className='button' type='submit' onClick={handleRegister} disabled={submitLoading}> 
              {submitLoading ? <CircularProgress size={'10px'} /> : ''}Submit
              </Button> 
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
