import React from 'react';
import banner from '../assets/img/vizmaker-banner.png';
import '../App.css';

function Banner() {
  return (
    <div>
      <div className='banner'>
      <img src={banner} alt='Home Banner' className='bannerImage'/>
    </div>
    <div className='bannerLink'>
      <a href='https://www.facebook.com/' target='blank' id='bannerLink'><h3 >@vizmakercafe</h3></a>
      
    </div>
    </div>
    
  )
}
export default Banner
