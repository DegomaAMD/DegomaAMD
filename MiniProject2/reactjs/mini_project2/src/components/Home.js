import * as React from 'react';
import '../App.css';
import MenuCards from './Card';
// import Feedbacks from './ContactUs';
import Banner from './Banner';
import ContactUs from './ContactUs';

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
