import * as React from 'react';
import banner from '../assets/img/vizmaker-banner.png';
import '../App.css';
import MenuCards from './Card';
import Feedbacks from './Feedbacks';

function Home() {
  return (
    <div className='marginTop'>
      <img src={banner} alt='Home Banner' className='homeBanner'/>
      <MenuCards/>
      <Feedbacks/>
    </div>
  )
}

export default Home;
