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


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

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

function VizAdminUser() {
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
    username : '',
    email : '',
    password : '',
  });

  const handleEdit = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowIndex + 1);
    setFormData({ username: rowData.username, 
      email: rowData.email, 
      password: rowData.password, 
                });
                console.log(rowData)
    setTransactionType('edit');
  };

  const handleDelete = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowIndex + 1);
    setFormData({ username: rowData.username, 
      email: rowData.email, 
      password: rowData.password, 
                });
    setTransactionType('delete');
  };
  const columns = [
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
      username : '',
      email : '',
      password : '',
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
          ? 'Admin User successfully created!'
          : transactionType === 'edit'
          ? 'Admin User successfuly updated!'
          : 'Admin User successfully deleted!';
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
    if (formData.username === undefined || formData.username === '') {
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
    
    return true;
  };

  return (
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
            return [d.username,
              d.email,
              d.password,];
          })}
          columns={columns}
          options={options}
        />
      )}

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {transactionType === 'add'
            ? 'Add Admin'
            : transactionType === 'edit'
            ? 'Edit Admin'
            : 'Delete Admin'}
          {error && <Alert severity="error">{error}</Alert>}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
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
              ? 'Add Admin Information'
              : transactionType === 'edit'
              ? 'Edit Admin Information'
              : 'Delete Admin Information'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default VizAdminUser;