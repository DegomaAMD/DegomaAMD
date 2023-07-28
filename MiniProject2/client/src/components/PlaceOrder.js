import React from 'react';
import BackgroundImage from '../assets/img/vizmaker-banner.png';


const PlaceOrder = () => {
  return (
    <div>
        <div className='bgImage'>
        <img src={BackgroundImage} alt='Background'/>
      </div>
      <h2>Order Placed Successfully</h2>
      <p>Thank you for your order! Your product(s) have been successfully placed.</p>
    </div>
  );
};

export default PlaceOrder;