import * as React from 'react';
import '../App.css';
import MenuCards from '../components/Card';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/PageFooter';

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MenuCards/>
      <div className='footer'>
    <Footer />
    </div>
    </div>
  )
}

export default Home;
