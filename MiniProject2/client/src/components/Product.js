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
import Form from 'react-bootstrap/Form';
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

function Product() {
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
    product_name: '',
    product_details: '',
    product_price: '',
    product_image: '',
  });

  const handleEdit = (rowIndex) => {
    const rowData = data[rowIndex];
    setOpen(true);
    setSuccess(false);
    setId(rowData.id);
    setFormData({ id: rowData.id,
      product_name: rowData.product_name, 
                product_details: rowData.product_details, 
                product_price: rowData.product_price, 
                product_image: rowData.product_image, 
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
      product_name: rowData.product_name, 
        product_details: rowData.product_details, 
        product_price: rowData.product_price, 
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
      name: 'Product Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Product Details',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Product Price',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Product Image',
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
        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login_token'),
          },
        });
        let Products = response.data.product === undefined ? [] : response.data.product ;
        console.log("response",response)
        console.log(Products);
        setData(Products);
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
        product_name: '',
        product_details: '',
        product_price: '',
        product_image: '',
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
          const response = await axios.post('http://127.0.0.1:8000/api/products', formData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        } else if (transactionType === 'edit') {
          const response = await axios.put(`http://127.0.0.1:8000/api/products/${id}`, formData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login_token'),
            },
          });
          console.log(response);
        } else if (transactionType === 'delete') {
          const response = await axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
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
          ? 'Product Details successfully created!'
          : transactionType === 'edit'
          ? 'Product Details successfuly updated!'
          : 'Product Details successfully deleted!';
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
    if (formData.product_name === undefined || formData.product_name === '') {
      setError('Product Name is required!');
      return false;
    } 
    else if (formData.product_details === undefined || formData.product_details === '') {
      setError('Product Details is required!');
      return false;
    }
    else if (formData.product_price === undefined || formData.product_price === '') {
      setError('Product Price is required!');
      return false;
    }
    else if (formData.product_image === undefined || formData.product_image === '') {
      setError('Product Price is required!');
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
          title={'Product List'}
          data={data.map((d) => {
            return [d.id, d.product_name, d.product_details, d.product_price, d.product_image];
          })}
          columns={columns}
          options={options}
        />
      )}

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {transactionType === 'add'
            ? 'Add Product'
            : transactionType === 'edit'
            ? 'Edit Product'
            : 'Delete Product'}
          {error && <Alert severity="error">{error}</Alert>}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="product_name"
                fullWidth
                label="Product Name"
                name="product_name"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.product_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="product_details"
                fullWidth
                label="Product Details"
                name="product_details"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.product_details}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="product_price"
                fullWidth
                label="Product Price"
                name="product_price"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.product_price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="product_image"
                fullWidth
                label="Product Image"
                name="product_image"
                disabled={transactionType === 'delete' ? true : false}
                variant="standard"
                value={formData.product_image}
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
              ? 'Add Product Details'
              : transactionType === 'edit'
              ? 'Edit Product Details'
              : 'Delete Product Details'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Product;


