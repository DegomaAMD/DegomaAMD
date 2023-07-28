import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  Container  from 'react-bootstrap/Container';
import toast from 'react-hot-toast';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import {
  Alert,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PageFooter from './PageFooter';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


const Profile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [id, setId] = useState('');
  const [success, setSuccess] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    
    id:'',
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    house_lot_number : '',
    street_name : '',
    barangay_name : '',
    city_name : '',
    province_name : '',
    region_name : '',
    country_name : '',
    postal_code : '',
    phone_number : '',
  });

  const handleEdit = () => {
    setOpen(true);
    setSuccess(false);
    setFormData({ id: data.id,
      firstname: data.firstname, 
      lastname: data.lastname, 
      username: data.username, 
      email: data.email, 
      password: data.password, 
      house_lot_number: data.house_lot_number, 
      street_name: data.street_name, 
      barangay_name: data.barangay_name, 
      city_name: data.city_name, 
      province_name: data.province_name, 
      region_name: data.region_name, 
      country_name: data.country_name, 
      postal_code: data.postal_code, 
      phone_number: data.phone_number, 
                });
                console.log('data: ', data)
    setTransactionType('edit');
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const token = localStorage.getItem('login_token');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        let Customer = response.data === undefined ? [] : response.data ;
        
        console.log("response",response)
        console.log(Customer.id);
        setData(Customer);
        setId(Customer.id);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [success]);


  const validateForm = () => {
    if (formData.firstname === undefined || formData.firstname === '') {
      setError('Firstname is required!');
      return false;
    } 
    else if (formData.lastname === undefined || formData.lastname === '') {
      setError('Lastname is required!');
      return false;
    }
    else if (formData.username === undefined || formData.username === '') {
      setError('Username is required!');
      return false;
    }else if (formData.house_lot_number === undefined || formData.house_lot_number === '') {
      setError('House & Lot Number is required!');
      return false;
    }
    else if (formData.street_name === undefined || formData.street_name === '') {
      setError('Street Name is required!');
      return false;
    }
    else if (formData.barangay_name === undefined || formData.barangay_name === '') {
      setError('Barangay Name is required!');
      return false;
    }
    else if (formData.city_name === undefined || formData.city_name === '') {
      setError('City Name is required!');
      return false;
    }
    else if (formData.province_name === undefined || formData.province_name === '') {
      setError('Province Name is required!');
      return false;
    }
    else if (formData.region_name === undefined || formData.region_name === '') {
      setError('Region Name is required!');
      return false;
    }
    else if (formData.country_name === undefined || formData.country_name === '') {
      setError('Country Name is required!');
      return false;
    }
    else if (formData.postal_code === undefined || formData.postal_code === '') {
      setError('Postal Code is required!');
      return false;
    }
    else if (formData.phone_number === undefined || formData.phone_number === '') {
      setError('Phone Number is required!');
      return false;
    }

    return true;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitLoading(true);

    

  if (!validateForm()) {
    setSubmitLoading(false);
    return;
  } else {
    try {
      if (transactionType === 'edit') {
        const response = await axios.put(`http://127.0.0.1:8000/api/User/${id}`, formData, {
          headers: {

            Authorization: 'Bearer ' + localStorage.getItem('login_token'),

          },
        });
        console.log(response);
      } 

      handleClose();
      setSuccess(true);
      const message = 'Your details have been successfuly updated!'
      
      // navigate('/');
    } catch (error) {
      let errorMessage = error.response.data.error;
      setError(errorMessage);
    }
    setSubmitLoading(false);
  }

  
};

const rowIndex = data.id;

  return (
    <>
        <Container style={{marginTop: '200px'}}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Container>
      <Grid container spacing={2} style={{margin: 'auto'}}>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstname">
                <Form.Label column sm="2">
                Firstname: 
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="firstname" plaintext readOnly  value={data.firstname} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="firstname"
                
                label="Firstname"
                name="firstname"
                disabled
                variant="standard"
                value={data.firstname}
        
              /> */}
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
                <Form.Label column sm="2">
                Lastname: 
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="lastname" plaintext readOnly  value={data.lastname} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="lastname"
                fullWidth
                label="Lastname"
                name="lastname"
                disabled
                variant="standard"
                value={data.lastname}
        
              /> */}
            </Grid>
            
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
                <Form.Label column sm="2">
                  Username: 
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="username" plaintext readOnly value={data.username} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="username"
                fullWidth
                label="Username"
              
                disabled
                variant="standard"
                value={data.username}
             
              /> */}
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="email" plaintext readOnly value={data.email} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="email"
                fullWidth
                label="Email"
                
                disabled
                variant="standard"
                value={data.email}
      
              /> */}
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="password" plaintext readOnly value={data.password} placeholder='Secured Password' />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="password"
                fullWidth
                label="Password"
                
                disabled
                variant="standard"
                value={data.password}
          
              /> */}
              
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
                <Form.Label column sm="2">
                Phone Number:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="phone_number" plaintext readOnly value={data.phone_number} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="phone_number"
                fullWidth
                label="Phone Number"
               
                disabled
                variant="standard"
                value={data.phone_number}

              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextHouse&LotNumber">
                <Form.Label column sm="2">
                House & Lot Number:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="house_lot_number" plaintext readOnly value={data.house_lot_number} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="house_lot_number"
                fullWidth
                label="House & Lot Number"
               
                disabled
                variant="standard"
                value={data.house_lot_number}
           
              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextStreet">
                <Form.Label column sm="2">
                Street:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="street_name" plaintext readOnly value={data.street_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="street_name"
                fullWidth
                label="Street"
                
                disabled
                variant="standard"
                value={data.street_name}
             
              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextBarangay">
                <Form.Label column sm="2">
                Barangay:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="barangay_name" plaintext readOnly value={data.barangay_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="barangay_name"
                fullWidth
                label="Barangay"
                
                disabled
                variant="standard"
                value={data.barangay_name}
          
              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextCity">
                <Form.Label column sm="2">
                City:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="city_name" plaintext readOnly value={data.city_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="city_name"
                fullWidth
                label="City"
              
                disabled
                variant="standard"
                value={data.city_name}
           
              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextProvince">
                <Form.Label column sm="2">
                Province:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="province_name" plaintext readOnly value={data.province_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="province_name"
                fullWidth
                label="Province"
               
                disabled
                variant="standard"
                value={data.province_name}
            
              /> */}
            </Grid>
            <Grid item xs={4}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextRegion">
                <Form.Label column sm="2">
                Region:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="region_name" plaintext readOnly value={data.region_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="region_name"
                fullWidth
                label="Region"
              
                disabled
                variant="standard"
                value={data.region_name}
             
              /> */}
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextCountry">
                <Form.Label column sm="2">
                Country:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="country_name" plaintext readOnly value={data.country_name} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="country_name"
                fullWidth
                label="Country"
               
                disabled
                variant="standard"
                value={data.country_name}
          
              /> */}
            </Grid>
            <Grid item xs={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPostalCode">
                <Form.Label column sm="2">
                Postal Code:
                </Form.Label>
                <Col sm="10">
                  <Form.Control id="postal_code" plaintext readOnly value={data.postal_code} />
                </Col>
                </Form.Group>
            </Form>
              {/* <TextField
                id="postal_code"
                fullWidth
                label="Postal Code"
           
                disabled
                variant="standard"
                value={data.postal_code}
      
              /> */}
            </Grid>
            
          </Grid>
          <Button
        className='btn'
        style={{marginBottom: '20px'}}
        variant="text"
        startIcon={<EditIcon />}
        color="primary"
        onClick={() => handleEdit()}
              >
                Edit
      </Button>
</Container>
      )}

       
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Information
          {error && <Alert severity="error">{error}</Alert>}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="firstname"
                fullWidth
                label="Firstname"
                name="firstname"
  
                variant="standard"
                value={formData.firstname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="lastname"
                fullWidth
                label="Lastname"
                name="lastname"
                
                variant="standard"
                value={formData.lastname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                fullWidth
                label="Username"
                name="username"
                disabled
                variant="standard"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                fullWidth
                label="Email"
                name="email"
                disabled
                variant="standard"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                fullWidth
                label="Secured Password"
                name="password"
                placeholder='Secured Password'
                variant="standard"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="house_lot_number"
                fullWidth
                label="House & Lot Number"
                name="house_lot_number"
                
                variant="standard"
                value={formData.house_lot_number}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="street_name"
                fullWidth
                label="Street"
                name="street_name"
                
                variant="standard"
                value={formData.street_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="barangay_name"
                fullWidth
                label="Barangay"
                name="barangay_name"
                
                variant="standard"
                value={formData.barangay_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="city_name"
                fullWidth
                label="City"
                name="city_name"
                
                variant="standard"
                value={formData.city_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="province_name"
                fullWidth
                label="Province"
                name="province_name"
                
                variant="standard"
                value={formData.province_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="region_name"
                fullWidth
                label="Region"
                name="region_name"
                
                variant="standard"
                value={formData.region_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="country_name"
                fullWidth
                label="Country"
                name="country_name"
                
                variant="standard"
                value={formData.country_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="postal_code"
                fullWidth
                label="Postal Code"
                name="postal_code"
                
                variant="standard"
                value={formData.postal_code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone_number"
                fullWidth
                label="Phone Number"
                name="phone_number"
                
                variant="standard"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ display: 'block', width: '40%', margin: '10px auto' }}
            onClick={handleSubmit}
            disabled={submitLoading}
          >
            {submitLoading ? <CircularProgress size={'10px'} /> : ''}{' '}
            Edit your details
          </Button>

        </DialogActions>
      </BootstrapDialog>
      
     
    </Container>
    <div className='footer'>
    <PageFooter />
    </div>
    </>

  );
};

export default Profile;
