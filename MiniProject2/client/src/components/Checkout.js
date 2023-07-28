import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checkout = () => {
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
    // Assuming you have an API endpoint to place the order in the backend
    const orderData = { userData, cartItems };
    axios
      .post('http://127.0.0.1:8000/api/orders', orderData)
      .then((response) => {
        // Handle the response as needed (e.g., show success message, navigate to success page)
        console.log('Order placed successfully!');
        // Clear the cart and LocalStorage after successful order placement
        localStorage.removeItem('cart');
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
        <p>Name: {userData.name}</p>
        <p>Address: {userData.address}</p>
      </div>
      <div>
        <h3>Cart Items</h3>
        {cartItems.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} - Quantity: {item.quantity} - Amount: ₱{formatAmountWithCommas(item.product_price * item.quantity)}
              </p>
            </div>
          ))
        )}
        <p>Total Amount: ₱{calculateTotalAmount()}</p>
      </div>
      {cartItems.length > 0 && (
        <div>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
