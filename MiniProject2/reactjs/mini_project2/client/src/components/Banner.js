import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/vizmaker-banner.png';
import '../App.css';
import { Button } from '@mui/material';

function Banner() {
  return (
    <div>
      <div className='banner'>
      <img src={banner} alt='Home Banner' className='bannerImage'/>
    </div>
    <div className='bannerLink'>
      <h1 className='bannerH1'>EVERYDAY</h1>
      <div style={{display:'flex'}}>
        <h1 className='bannerH1'>WITH </h1>
        <i className='bannerI'>Coffee</i>
      </div>
      
      <p className='bannerP' style={{color:'#fff'}}>Creating great coffee is an art that takes time and skill to perfect. <br/> And with our experience, we like to think that we’ve done just that. <br/>In that time we’ve discovered the finest beans, equipment and <br/> techniques to make sure that every cup makes the grade.</p>
      <div className='bannerButtons'>
      <Link to={'/Menu'}><Button className='bannerBtn' style={{marginRight:'10px'}}>Shop now</Button></Link>
      <Link to={'/About'}><Button className='bannerBtn' style={{marginLeft:'10px'}}>Learn more</Button></Link>
      </div>
      
    </div>
    </div>
    
  )
}
export default Banner
