import * as React from 'react';
import '../App.css';
import MenuCards from '../components/Card';
// import Feedbacks from './ContactUs';
import Banner from '../components/Banner';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MenuCards/>
      <ContactUs/>
    </div>
  )
}

export default Home;
