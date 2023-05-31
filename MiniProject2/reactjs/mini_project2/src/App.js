import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';

// import { Box } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
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
