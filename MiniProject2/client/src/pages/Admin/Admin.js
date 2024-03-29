import * as React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
// import PageNotFound from '../../components/PageNotFound';
import Order from '../../components/Order';
import Product from '../../components/Product';
import { Toaster } from 'react-hot-toast';
import UserBE from '../../components/BEUser';
import Dashboard from '../../components/Dashboard';
import Login from '../Login/Login';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Admin() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('login_token');
    navigate('/Login');
  };

  const handleMenuClick = (url) => {
    navigate(url);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: 'linear-gradient(45deg, #2f891e, transparent)' }}
      >
        <Toolbar component="div" sx={{ backgroundColor: '#102F3A', padding:'5px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Vizmaker Cafe Dashboard
          </Typography>
          <Button
            className='btn'
            variant="contained"
            background="success"
            sx={{
              height: 'fit-content',
              marginLeft: 'auto',
              color: '#000'
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#102F3A'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: 'white', fontWeight: 'bold' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ background: '#3e6364' }}>
            <ListItemButton>
              <ListItemIcon>{<DashboardIcon sx={{ color: '#FFBD59' }} />}</ListItemIcon>
              <ListItemText
                primary={
                  <Button
                    className='btn'
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={() => handleMenuClick('/dashboard/Overview')}
                  >
                    Dashboard
                  </Button>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ background: '#3e6364' }}>
            <ListItemButton>
              <ListItemIcon>{<PeopleIcon sx={{ color: '#FFBD59' }} />}</ListItemIcon>
              <ListItemText
                primary={
                  <Button
                  className='btn'
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={() => handleMenuClick('/dashboard/Users')}
                  >
                    Users
                  </Button>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ background: '#3e6364' }}>
            <ListItemButton>
              <ListItemIcon>{<ShoppingCartIcon sx={{ color: '#FFBD59' }} />}</ListItemIcon>
              <ListItemText
                primary={
                  <Button
                  className='btn'
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={() => handleMenuClick('/dashboard/Products')}
                  >
                    Products
                  </Button>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ background: '#3e6364' }}>
            <ListItemButton>
              <ListItemIcon>{<AssignmentIcon sx={{ color: '#FFBD59' }} />}</ListItemIcon>
              <ListItemText
                primary={
                  <Button
                  className='btn'
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={() => handleMenuClick('/dashboard/Orders')}
                  >
                    Orders
                  </Button>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <Routes>
          <Route path="/Overview" element={<Dashboard />} />
          <Route path="/Users" element={<UserBE />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Orders" element={<Order />} />
        </Routes>
        <Toaster />
      </Main>
    </Box>
  );
}