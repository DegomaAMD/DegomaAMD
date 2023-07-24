import React, { useState } from 'react'
import { Button, Container, Alert } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/img/vizmaker-banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import './Login.css'


function Register() {
    const [role, setRole] = useState('Customer')
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      password: '',
    });
      const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   Axios
  //     .post("http://127.0.0.1:8000/api/register", formData) // Assuming your Laravel backend is hosted at the same domain as your React app
  //     .then((response) => {
  //       // Handle successful registration
  //       const token = response.data.token;
  //       localStorage.setItem('login_token', token);
  //       console.log("Registration successful!", response.data);
  //     })
  //     .catch((error) => {
  //       // Handle registration error
  //       let errorMessage = error.response.data.error;
  //       setError(errorMessage);
  //       console.error("Registration failed.", error.response.data);
  //     });
  // };
 
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitLoading(true);

    if(!validateForm()){
      setSubmitLoading(false);
      return;
    }else {
      try {
        const response = await Axios.post('http://127.0.0.1:8000/api/register', formData);
        const token = response.data.token;

        localStorage.setItem('login_token', token);

      } catch(error) {
        let errorMessage = error.response.data.error;
        setError(errorMessage);
      }
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
        <form onSubmit={handleRegister}>
          <h1 style={{marginTop: '20px'}}>Sign-up</h1>
          <div>
          {error && <Alert severity="error">{error}</Alert>}
          </div>
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
            top: '56%',
            right: '90px',
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
          <Box>
            {/* <Link to={'/Login'}> */}
              <Button className='button' type='submit'> 
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
