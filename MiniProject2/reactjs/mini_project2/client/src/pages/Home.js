import * as React from 'react';
import '../App.css';
import MenuCards from '../components/Card';
// import Feedbacks from './ContactUs';
import Banner from '../components/Banner';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div>
      <Banner/>
      <MenuCards/>
      <ContactUs/>
    </div>
  )
}

export default Home;
