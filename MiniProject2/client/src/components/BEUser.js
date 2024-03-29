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
// import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




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


function UserBE() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState('');
  const [id, setId] = useState('');

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

  const handleEdit = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowData.id);
    setFormData({ id: rowData.id,
      firstname: rowData.firstname, 
      lastname: rowData.lastname, 
      username: rowData.username, 
      email: rowData.email, 
      password: rowData.password, 
      house_lot_number: rowData.house_lot_number, 
      street_name: rowData.street_name, 
      barangay_name: rowData.barangay_name, 
      city_name: rowData.city_name, 
      province_name: rowData.province_name, 
      region_name: rowData.region_name, 
      country_name: rowData.country_name, 
      postal_code: rowData.postal_code, 
      phone_number: rowData.phone_number, 
                });
                console.log('rowIndex: ', rowIndex)
                console.log('data: ', data)
    setTransactionType('edit');
  };

  const handleDelete = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowData.id);
    setFormData({ id: rowData.id,
      firstname: rowData.firstname, 
      lastname: rowData.lastname, 
      username: rowData.username, 
      email: rowData.email, 
      password: rowData.password, 
      house_lot_number: rowData.house_lot_number, 
      street_name: rowData.street_name, 
      barangay_name: rowData.barangay_name, 
      city_name: rowData.city_name, 
      province_name: rowData.province_name, 
      region_name: rowData.region_name, 
      country_name: rowData.country_name, 
      postal_code: rowData.postal_code, 
      phone_number: rowData.phone_number, 
                });
    setTransactionType('delete');
  };
  const columns = [
    {
      name: 'ID',
      options: {
        filter: true,
        sort: true,
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
      name: 'UserName',
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
      name: 'House and Lot Number',
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
      name: 'Postal',
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
  ];

  const options = {
    filterType: 'textField',
    selectableRows: 'none',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/User', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login_token'),
          },
        });
        let Customer = response.data.userbe === undefined ? [] : response.data.userbe ;
        console.log("response",response)
        console.log(Customer);
        setData(Customer);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [success]);

  const handleAdd = () => {
    setFormData({
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
        if (transactionType === 'add') {
          const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        } else if (transactionType === 'edit') {
          const response = await axios.put(`http://127.0.0.1:8000/api/User/${id}`, formData, {
            headers: {

              Authorization: 'Bearer ' + localStorage.getItem('login_token'),

            },
          });
          console.log(response);
        } else if (transactionType === 'delete') {
          const response = await axios.delete(`http://127.0.0.1:8000/api/User/${id}`, {
            headers: {

              Authorization: 'Bearer ' + localStorage.getItem('login_token'),

            },
          });
          console.log(response);
        }
        handleClose();
        setSuccess(true);
        const message =
        transactionType === 'add'
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
  };

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
    }
    else if (formData.email === undefined || formData.email === '') {
      setError('Email is required!');
      return false;
    }
    else if (formData.password === undefined || formData.password === '') {
      setError('Password is required!');
      return false;
    }
    else if (formData.house_lot_number === undefined || formData.house_lot_number === '') {
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

  return (
    <>
    <div style={{ marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '10px' }}>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AddCircleIcon />}
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <MUIDataTable
          loading={loading}
          title={'User Information'}
          data={data.map((d) => {
            return [d.id,
              d.firstname, 
              d.lastname, 
              d.username,
              d.email,
              d.password,
              d.house_lot_number,
              d.street_name,
              d.barangay_name,
              d.city_name,
              d.province_name,
              d.region_name,
              d.country_name,
              d.postal_code,
              d.phone_number,];
          })}
          columns={columns}
          options={options}
        />
      )}

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {transactionType === 'add'
            ? 'Add User'
            : transactionType === 'edit'
            ? 'Edit User'
            : 'Delete User'}
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
                label="Lastname"
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
                label="Username"
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
                label="House & Lot Number"
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
                name="postal_code"
                disabled={transactionType === 'delete' ? true : false}
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
            onClick={handleSubmit}
            disabled={submitLoading}
          >
            {submitLoading ? <CircularProgress size={'10px'} /> : ''}{' '}
            {transactionType === 'add'
              ? 'Add User Information'
              : transactionType === 'edit'
              ? 'Edit User Information'
              : 'Delete User Information'}
          </Button>

        </DialogActions>
      </BootstrapDialog>
    </div>
    </>
  );
}

export default UserBE;