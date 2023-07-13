import React from 'react'
import AboutUsBanner from '../../assets/img/aboutUs-banner.jpg';
import './About.css';
import { Container } from '@mui/material';
import PageFooter from '../../components/PageFooter';

function About() {
  return (
    <div>
    
   <Container className='AboutUs'>
      <h1 style={{marginTop: '50px', textAlign:'center'}}>About Vizmaker</h1>
      <div className='aboutUsBanner'>
       <img className='aboutUsImg' src={AboutUsBanner} alt='About Us Banner'/>
      </div>
      <p>Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary-tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site. The coffee we cook is the coffee we like to drink, and we trust you like it as well. At <b>Vizmaker</b>, we pursue a straightforward arrangement of convictions.</p>
      <b>Straightforwardness is significantly more than exactly where we get our beans from.</b>
      <p>The primary thing we did when we began our organization was to feature our honor-winning ranches. This thought of straightforwardness naturally advanced to the manner in which we worked in different territories as well – our baristas are constantly present to talk about blending tips, our client benefit group is there to walk you through your coffee questions, and our broiling group to demonstrate to you how they function.</p>
      <b>A culture of consistent learning is the way to continue driving coffee forward.</b>
      <p>We are reliably inquiring about, testing, and executing best practices all throughout our business to increase present expectations. Making refractometers fundamental for our bistro blending.</p>
      <b>Straightforwardness is significantly more than exactly where we get our beans from.</b>
      <p>In spite of the fact that we have a committed sourcing group for green beans and have put resources into building up quality broiling parameters, we realize that significantly more advances still need to become alright to mix a decent container.</p>
      <p>This is the reason we have worked intimately with our Director of Training and our Q Grade guaranteed Director of Coffee to make industry-driving strategies, for example, furnishing baristas with evaluating and announcing devices for accuracy, preparing and measuring each and every bunch that is broiled to guarantee steady quality.</p>
    </Container>
    <div className='footer'>
    <PageFooter />
    </div>
    
    </div>
  )
}

export default About
