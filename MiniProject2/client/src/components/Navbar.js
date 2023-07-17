import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/img/vizmaker-logo.png';
import { Link } from 'react-router-dom';
import '../App.css';
import CartBadge from './CartBadge';




const drawerWidth = 240;
const navItems = ['Home', 'Menu', 'About'];
const navItemsAdmin = ['Home','Admin', 'Reports'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuthenticated = localStorage.getItem('login_token') ? true : false;
  const handleLogout = () => {
    localStorage.removeItem('login_token');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box  component="div" sx={{ backgroundColor: '#FFBD59', padding:'5px'}}>
              <Link to={'/Home'}  >
                <img src={logo} alt="Vizmaker Logo" className='imgLogo'/>
              </Link>
          </Box>
      <Divider />
      <List >
        {isAuthenticated ? navItemsAdmin.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <ListItemText primary={<Link className='navBtn1 navBarItem' to={`/${item}`}>{item}</Link>
            
            } />
            
            </ListItemButton>
            
          </ListItem>
        )) : navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <ListItemText primary={<Link className='navBtn1 navBarItem' to={`/${item}`}>{item}</Link>
            
            } />
            
            </ListItemButton>
            
          </ListItem>
        ))}
        <div style={{textAlign:'start', marginLeft:'13px'}}>
        <Link to={'/Shop'} >
                <Button sx={{ color: '#000',marginRight:'10px', textAlign: 'start'}}>
                <CartBadge />
                </Button>
              </Link>
              <Box  component="div">
                {isAuthenticated ? 
                  <Link to={'/Login'} sx={{ display: { xs: 'none', sm: 'flex'}}}>
                    <Button className='btn' sx={{ color: '#000' }}>
                      Login
                    </Button>
                  </Link> 
                  :
                  <Link to={'/Login'} sx={{ display: { xs: 'none', sm: 'flex'}}}>
                    <Button className='btn' sx={{ color: '#000' }} onClick={handleLogout}>
                      Logout
                    </Button>
                  </Link>}
              </Box>
              </div>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className='navbar'>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <Box  component="div" sx={{ display: { xs: 'none', sm: 'block' }}}>
              <Link to={'/Home'}  >
                <img src={logo} alt="Vizmaker Logo" className='imgLogo'/>
              </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginTop: '7px'}}>
            {navItems.map((item) => (
              <Button key={item} >
                <Link to={`/${item}`} className='navBtn navBarItem'>
                  {item}
                </Link>
              </Button>
            ))}
            <Link to={'/Shop'}  sx={{ display: 'flex' }}>
                <Button sx={{marginRight:'10px'}}>
                <CartBadge />
                </Button>
              </Link>
              <Box  component="div" sx={{ display: { xs: 'none', sm: 'block' }}}>
              <Link to={'/Login'} sx={{ display: { xs: 'none', sm: 'flex'}}}>
                <Button className='btn' sx={{ color: '#000' }}>
                  Login
                </Button>
              </Link>
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    
  );
}


export default Navbar;

