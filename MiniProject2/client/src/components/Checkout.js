import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

const Checkout = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', address: '' });
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const getToken = () => {
    return localStorage.getItem('login_token');
  };
  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Retrieve cart data from LocalStorage and display it
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);
    setTotalAmount(calculateTotalAmount(cartData));
  }, []);

  

  const formatAmountWithCommas = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((total, item) => {
      const itemAmount = item.product_price * item.quantity;
      return total + itemAmount;
    }, 0);
    return formatAmountWithCommas(totalAmount);
  };

  const handlePlaceOrder = () => {
    const userId = userData.id; // Assuming the user ID is available in the `userData` object

  const ordersData = cartItems.map((item) => ({
    user_id: userId,
    product_id: item.id,
    order_quantity: item.quantity,
    total_order_amount: item.product_price * item.quantity,
  }));
    console.log(ordersData)
  
    // Assuming you have an API endpoint to place the order in the backend
    axios
      .post('http://127.0.0.1:8000/api/placeOrders', { orders: ordersData }, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        // Handle the response as needed (e.g., show success message, navigate to success page)
        console.log('Order placed successfully!');
        // Clear the cart and LocalStorage after successful order placement
        localStorage.removeItem('cart');
        navigate('/place-order');
      })
      .catch((error) => {
        // Handle the error (e.g., show error message)
        console.error('Error placing the order:', error);
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>User Information</h3>
        <p>Name: {userData.firstname + " " + userData.lastname}</p>
        <p>Address: {userData.house_lot_number + ", " + userData.street_name + ", " + userData.barangay_name + ", " + userData.city_name + ", " + userData.province_name + ", " + userData.region_name + ", " + userData.country_name + ", " + userData.postal_code}</p>
        <p>Phone Number: {userData.phone_number }</p>
      </div>
      <div>
        <h3>Cart Items</h3>
        {cartItems.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className='cartCard'>
              <p>
                {item.product_name} 
                </p>
                <p>Quantity: {item.quantity}</p>  
                <p>Amount: ₱{formatAmountWithCommas(item.product_price * item.quantity)}</p>
              
            </div>
          ))
        )}
        <p style={{fontSize: '22px', fontWeight: 'bold', marginTop: '16px', marginBottom: '16px'}}>Total Amount: ₱{calculateTotalAmount()}</p>
      </div>
      {cartItems.length > 0 && (
        <div>
          <Button style={{marginLeft: '5px'}} onClick={handlePlaceOrder}>Place Order</Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
