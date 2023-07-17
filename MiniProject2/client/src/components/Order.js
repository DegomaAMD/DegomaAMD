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
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Success.');
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

function Order() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState('');
  const [id, setId] = useState('');

  const [formData, setFormData] = useState({
    product_id: '',
    user_id: '',
    order_quantity: '',
    total_order_amount: '',
  });

  const handleEdit = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowData.id);
    setFormData({ product_id: rowData.product_id, 
                  user_id: rowData.user_id, 
                  order_quantity: rowData.order_quantity, 
                  total_order_amount: rowData.total_order_amount });
    setTransactionType('edit');
  };

  const handleDelete = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowData.id);
    setFormData({ product_id: rowData.product_id, 
                  user_id: rowData.user_id, 
                  order_quantity: rowData.order_quantity, 
                  total_order_amount: rowData.total_order_amount });
    setTransactionType('delete');
  };
  const columns = [
    {
      name: 'Product ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'User ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Order quantity',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Order total amount',
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
        const response = await axios.get('http://127.0.0.1:8000/api/order', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login_token'),
          },
        });
        let orderDetails = response.data.order === undefined ? [] : response.data.order ;
        console.log("response",response)
        console.log(orderDetails);
        setData(orderDetails);
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
        product_id: '',
        user_id: '',
        order_quantity: '',
        total_order_amount: '',
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
          const response = await axios.post('http://127.0.0.1:8000/api/order', formData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        } else if (transactionType === 'edit') {
          const response = await axios.put(`http://127.0.0.1:8000/api/order/${id}`, formData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        } else if (transactionType === 'delete') {
          const response = await axios.delete(`http://127.0.0.1:8000/api/order/${id}`, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        }

        handleClose();
        setSuccess(true);
        
        // navigate('/');
      } catch (error) {
        let errorMessage = error.response.data.error;
        setError(errorMessage);
      }
      setSubmitLoading(false);
    }
  };

  const validateForm = () => {
    if (formData.product_id === undefined || formData.product_id === '') {
      setError('Product ID is required!');
      return false;
    } 
    else if (formData.user_id === undefined || formData.user_id === '') {
      setError('User ID is required!');
      return false;
    }
    else if (formData.order_quantity === undefined || formData.order_quantity === '') {
      setError('Order quantity Name is required!');
      return false;
    }
    else if (formData.total_order_amount === undefined || formData.total_order_amount === '') {
      setError('Total Amount!');
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
          title={'Order List'}
          data={data.map((d) => {
            return [d.product_id, d.user_id, d.order_quantity, d.total_order_amount];
          })}
          columns={columns}
          options={options}
        />
      )}

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {transactionType === 'add'
            ? 'Add Order'
            : transactionType === 'edit'
            ? 'Edit Order'
            : 'Delete Order'}
          {error && <Alert severity="error">{error}</Alert>}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="product_id"
                fullWidth
                label="Product ID"
                name="product_id"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.product_id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="user_id"
                fullWidth
                label="User ID"
                name="user_id"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.user_id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="order_quantity"
                fullWidth
                label="Order quantity"
                name="order_quantity"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.order_quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="total_order_amount"
                fullWidth
                label="Total order amount"
                name="total_order_amount"
                variant="standard"
                disabled={transactionType === 'delete' ? true : false}
                value={formData.total_order_amount}
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
              ? 'Add Order'
              : transactionType === 'edit'
              ? 'Edit Order'
              : 'Delete Order'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Order;
