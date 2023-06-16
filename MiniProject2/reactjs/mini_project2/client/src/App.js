import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' ;
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import  Shop  from "./pages/Shop/Cafe";
import About from './pages/About/About';
import Login from './pages/Login/Login';   
import PageNotFound from './components/PageNotFound';
import  Cart  from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/menu-context";
import ScrolltoTop from './components/Backtotop';
import Register from './pages/Login/Register';


function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
      <ScrolltoTop/>
      <Navbar/>
      <Routes>
        <Route exact path="" element={<Navigate to="/Home" />} />
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Menu" element={<Shop/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Shop" element={<Cart/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/PageNotFound" element={<PageNotFound/>} />
        <Route exact path="/Register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>

  );
}

export default App;
