import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import PageNotFound from './components/PageNotFound';
// import  Cart  from "./pages/Cart/Cart";
import ScrolltoTop from './components/Backtotop';
import Register from './pages/Login/Register';
import Admin from './pages/Admin/Admin';
import Checkout from './components/Checkout';
import ShoppingCart from './pages/Shop/ShoppingCart';

function App() {
  const isAuthenticated = localStorage.getItem('login_token');

  const isDashboardRoute = window.location.pathname.startsWith('/dashboard');

  return (
    <>

      <Router>
        {!isDashboardRoute && <Navbar />}
        <ScrolltoTop />
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Menu" element={<Shop />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/PageNotFound" element={<PageNotFound />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/BEUser" element={<BEUser />} />
          <Route exact path="/checkout" element={<Checkout />} />
          {/* <Route exact path="/menu/cart" element={<ShoppingCart />} /> */}
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route
            exact
            path="/dashboard/*"
            element={isAuthenticated ? <Admin /> : <Navigate to="/Login" />}
          />
          <Route
            exact
            path="/Admin"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/Login" />}
          />
          {/* <Route exact path="/checkout" element={isAuthenticated ? <Checkout/>: <Navigate to="/Login"/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
