import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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


function BEUser() {
const [data, setData] = useState([]);
const [loading, setloading] = useState(true);
const [open, setOpen] = useState(false);
const [error, seterror] = useState('');
const [submitLoading, setSubmitLoading] = useState(false);
const [success, setSuccess] = useState(false);
const navigate = useNavigate();
const [transactionType, setTransactionType] = useState('');
const [id, setId] = useState('');


const [formData, setFormData] = useState({
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  house_lot_number: '',
  street_name: '',
  barangay_name: '',
  city_name: '',
  province_name: '',
  region_name: '',
  country_name: '',
  postal_code: '',
  phone_number: '',
});

const handleEdit = (rowIndex) =>{
     const rowData = data[rowIndex];
     setOpen(true);
     setSuccess(false);
     setId(rowData.id);
     setTransactionType('edit');
     setFormData({ firstname: rowData.firstname, lastname: rowData.lastname,
                   username: rowData.username, email: rowData.email,
                   password: rowData.password, house_lot_number: rowData.house_lot_number,
                   street_name: rowData.street_name, barangay_name: rowData.barangay_name,
                   city_name: rowData.city_name, province_name: rowData.province_name,
                   region_name: rowData.region_name, country_name: rowData.country_name,
                   postal_code: rowData.postal_code, phone_number: rowData.phone_number});
};

const handleDelete = (rowIndex) =>{
    setTransactionType('delete');
    const rowData = data[rowIndex];
     setOpen(true);
     setSuccess(false);
     setId(rowData.id);
     setFormData({ firstname: rowData.firstname, lastname: rowData.lastname,
                   username: rowData.username, email: rowData.email,
                   password: rowData.password, house_lot_number: rowData.house_lot_number,
                   street_name: rowData.street_name, barangay_name: rowData.barangay_name,
                   city_name: rowData.city_name, province_name: rowData.province_name,
                   region_name: rowData.region_name, country_name: rowData.country_name,
                   postal_code: rowData.postal_code, phone_number: rowData.phone_number});
};

const columns = [
  {
    name: 'Actions',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        const rowIndex = tableMeta.rowIndex;
        return (
          <>
            <Button
              variant="text"
              startIcon={<EditIcon />}
              color="primary"
              onClick={() => handleEdit(rowIndex)}
            >
              Edit
            </Button>
            <Button
              variant="text"
              startIcon={<DeleteIcon />}
              color="error"
              onClick={() => handleDelete(rowIndex)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  },
  {
    name: 'First Name',
    options: {
      filter: true,
      sort: true,
    },    
 },
 {
  name: 'Last Name',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'User Name',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Email',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Password',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'House Lot Number',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Street',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Barangay',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'City',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Province',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Region',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Country',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Postal Code',
  options: {
    filter: true,
    sort: true,
  },    
},
{
  name: 'Phone Number',
  options: {
    filter: true,
    sort: true,
  },    
},
];

const options = {
    filterType: 'checkbox',
    selectableRows: false,
  };

useEffect(() => {
  const fetchData = async () => {
       try {
            const response = await axios.get('http://127.0.0.1:8000/api/User',{
                headers: {
                  Authorization : 'Bearer' + localStorage.getItem('login_token'),
                },
            });
            let User = response.data.User;

            console.log(User);
            setData(User);
            setloading(false);             
       } catch (error) {
            console.log(error);
            setloading(false);
       }
  }

  fetchData();
  
}, [success]);

  const handleAdd = () => {
    setFormData({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      house_lot_number: '',
      street_name: '',
      barangay_name: '',
      city_name: '',
      province_name: '',
      region_name: '',
      country_name: '',
      postal_code: '',
      phone_number: '',
    });
    setOpen(true);
    setSuccess(false);
    setTransactionType('add');
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {

    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
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

        if(transactionType === 'add'){
          const response = await axios.post('http://127.0.0.1:8000/api/User', formData, {
            headers: {
              Authorization : 'Bearer' + localStorage.getItem('login_token'),
            },
        });
        console.log(response);
        }else if(transactionType === 'edit'){
          const response = await axios.put(`http://127.0.0.1:8000/api/User/${id}`, formData, {
            headers: {
              Authorization : 'Bearer' + localStorage.getItem('login_token'),
            },
        });
        console.log(response);
        }else if(transactionType === 'delete'){
          const response = await axios.delete(`http://127.0.0.1:8000/api/User/${id}`, {
            headers: {
              Authorization : 'Bearer' + localStorage.getItem('login_token'),
            },
        });
        console.log(response);
        }

       
      handleClose();
      setSuccess(true);
      const message =
          transactionType == 'add'
            ? 'User Details successfully created!'
            : transactionType === 'edit'
            ? 'User Details successfuly updated!'
            : 'User Details successfully deleted!';
        toast(message, {
          duration: 4000,
          position: 'top-center',

          // Styling
          style: {},
          className: '',

          // Custom Icon
          icon: '👏',

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
        // navigate('/');
      } catch (error) {
        let errorMessage = error.response.data.error;
        setError(errorMessage);
      }
      setSubmitLoading(false);
    }
  }

  const validateForm = () => {
    if (formData.firstname === undefined || formData.firstname === '') {
      setError('First Name is required!');
      return false;
    } else if (formData.lastname === undefined || formData.lastname === '') {
      setError('Last Name is required!');
      return false;
    } else if (formData.username === undefined || formData.username === '') {
      setError('User name is required!');
      return false;
    } else if (formData.email === undefined || formData.email === '') {
      setError('Email is required!');
      return false;
    } else if (formData.password === undefined || formData.password === '') {
      setError('Password is required!');
      return false;
    } else if (formData.house_lot_number === undefined || formData.house_lot_number === '') {
      setError('House Lot Number is required!');
      return false;
    } else if (formData.street_name === undefined || formData.street_name === '') {
      setError('Street is required!');
      return false;
    } else if (formData.barangay_name === undefined || formData.barangay_name === '') {
      setError('Barangay is required!');
      return false;
    } else if (formData.city_name === undefined || formData.city_name === '') {
      setError('City is required!');
      return false;
    } else if (formData.province_name === undefined || formData.province_name === '') {
      setError('Province is required!');
      return false;
    } else if (formData.region_name === undefined || formData.region_name === '') {
      setError('Region is required!');
      return false;
    } else if (formData.country_name === undefined || formData.country_name === '') {
      setError('Country is required!');
      return false;
    } else if (formData.postal_code === undefined || formData.postal_code === '') {
      setError('Postal Code is required!');
      return false;
    } else if (formData.phone_number === undefined || formData.phone_number === '') {
      setError('Phone Number is required!');
      return false;
    }

    return true;
  };


  return ( 
   <div style={{marginTop: '50px'}}>
    <div style={{display:'flex', justifyContent:'end'}}> 
     <Button variant='outlined' color='secondary' startIcon={<AddCircleIcon/>} 
       onclick={handleAdd}
       > 
        ADD
     </Button>
     </div>
      {loading ? ( 
        <div style={{display:'flex', justifyContent: 'center', marginBottom: '10px' }}> 
        <CircularProgress/> 
        </div>
    ):( 
       <MUIDataTable 
         loading={loading} 
         title={"Customer Information"} 
         data={data.map((d) => {
              return [d.firstname, d.lastname, d.username, d.email, d.password,
                      d.house_lot_number, d.street_name, barangay_name, d.city_name,
                      d.province_name, d.region_name, d.country_name, d.postal_code, 
                      d.phone_number];
         })} 
         columns={columns}  
         options={options}
      />  
      )}


       <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
           {transactionType === 'add'
            ? 'Add User Details'
            : transactionType === 'edit'
            ? 'Edit User Details'
            : 'Delete User Details'}
           {error && <Alert severity="error">{error}</Alert>}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             <TextField
              id="firstname"
              fullWidth
              label="First Name"
              name="firstname"
              disabled={transactionType === 'delete' ? true : false}
              variant="standard"
              value={formData.firstname}
              onChange={handleChange}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
              id="lastname"
              fullWidth
              label="Last Name"
              name="lastname"
              disabled={transactionType === 'delete' ? true : false}
              variant="standard"
              value={formData.lastname}
              onChange={handleChange}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
              id="username"
              fullWidth
              label="User name"
              name="username"
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
              variant="standard"
              value={formData.email}
              onChange={handleChange}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
              id="password"
              fullWidth
              label="Password"
              name="password"
              disabled={transactionType === 'delete' ? true : false}
              variant="standard"
              value={formData.password}
              onChange={handleChange}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
              id="house_lot_number"
              fullWidth
              label="House Lot Number"
              name="house_lot_number"
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
              disabled={transactionType === 'delete' ? true : false}
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
                onclick={handleSubmit}
                disabled={submitLoading}
               >
                {submitLoading ? <CircularProgress size={'10px'} /> : ''}{' '}
                {transactionType === 'add'
                  ? 'Add User Details'
                  : transactionType === 'edit'
                  ? 'Edit User Details'
                  : 'Delete User Details'}
              </Button>  
        </DialogActions>
      </BootstrapDialog>


    </div>
 );
}


export default BEUser;



