import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import BackgroundImage from '../../assets/img/vizmaker-banner.png';
import { Button, Container, Alert, CircularProgress } from '@mui/material/';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
const [showPassword1, setShowPassword1] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);
const [submitLoading, setSubmitLoading] = useState(false);
const [error, setError] = useState('');
const Navigate = useNavigate();
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!validateForm()) {
        setSubmitLoading(false);
        return;
    } else { 
    axios.post('http://127.0.0.1:8000/api/reset-password', {
      token,
      ...formData,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      let errorMessage = error.response.data.error;
        setError(errorMessage);
    });
    }
  };

  const validateForm = () => {

    if (formData.password === formData.password_confirmation) {
      setError('Password should be the same!');
      return false;
    } else if (formData.password === undefined || formData.password === '') {
      setError('Password is required!');
      return false;
    } else if (formData.password_confirmation === undefined || formData.password_confirmation === '') {
      setError('New password is required!');
      return false;
    }
    return true;
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
            
          <h1 style={{marginTop: '100px'}}>Reset Password</h1>
          </div>
          
          <Box sx={{ position: 'relative' }}>
            <TextField className='textInput' value={formData.password}  type={showPassword1 ? 'text' : 'password'} placeholder='Enter New password' name='password' onChange={handleChange} required/>
            <div
            
          style={{
            position: 'absolute',
            top: '49%',
            right: '30px',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          onClick={() => setShowPassword1(!showPassword1)}
        >
          {showPassword1 ? (
            <FontAwesomeIcon icon={faEyeSlash} style={{color: "#102f3a",}} />
          ) : (
            <FontAwesomeIcon icon={faEye} style={{color: "#102f3a",}} />
          )}
        </div>
            </Box>
          <Box sx={{ position: 'relative' }}>
            <TextField className='textInput' value={formData.password_confirmation}  type={showPassword2 ? 'text' : 'password'} placeholder='Confirm your new password' name='password_confirmation' onChange={handleChange} required />
            
          </Box>
          <Box>
          <div
          className='showPass2'
          
          onClick={() => setShowPassword2(!showPassword2)}
        >
          {showPassword2 ? (
            <FontAwesomeIcon icon={faEyeSlash} style={{color: "#102f3a",}} />
          ) : (
            <FontAwesomeIcon icon={faEye} style={{color: "#102f3a",}} />
          )}
        </div>
          </Box>
          <div>
          {error && <Alert severity="error">{error}</Alert>}
          </div>
          <Box>
            <Button className='button' type='submit'onClick={handleSubmit} disabled={submitLoading}>
          Submit
            </Button>
          </Box>

            
        </form>
      </div>
    </Container>

    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Confirm New Password:
        <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
      </label>
      <div>
          {error && <Alert severity="error">{error}</Alert>}
          </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
