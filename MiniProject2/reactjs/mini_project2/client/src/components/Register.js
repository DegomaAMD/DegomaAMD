// import React, { useState } from 'react';
// import Axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import { response } from 'express';



// function Register() {

//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");
  
//   const register = () => {
//     Axios.post('https://localhost:3001/register', {
//       username:usernameReg, 
//       password:passwordReg
//     }).then((response) => {
//       console.log(response);
//     })
//   }
  
//   return (
//     <div className='marginTop'>
//       <h1>Register</h1>
//       <Box>
//           <TextField required label="Email" type='email' placeholder='Enter your email here' className='contactForm' onChange={(event) => {setUsernameReg(event.target.value)}}/>
//       </Box>
//       <Box>
//           <TextField required label="Password" type='password' placeholder="Enter the password here" className='contactForm' onChange={(event) => {setPasswordReg(event.target.value)}} />
//       </Box>
//       <Box>
//         <button onChange={register}>Register</button>
//       </Box>
//     </div>
//   )
// }

// export default Register
