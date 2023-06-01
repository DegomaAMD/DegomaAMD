import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' ;
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';
import ScrolltoTop from './components/Backtotop';

// import { Box } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ScrolltoTop/>
      <Routes>
        <Route exact path="" element={<Navigate to="/Home" />} />
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Menu" element={<Menu/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Shop" element={<Shop/>} />
        <Route exact path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
