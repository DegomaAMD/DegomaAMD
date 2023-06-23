import React from 'react'
import logo from '../assets/img/vizmaker-logo-transparent.png';
import banner from '../assets/img/pageNotFoundBG.png';
import '../App.css';

function PageNotFound() {
  return (
    <div >
        <img className='pageNotFoundBanner' src={banner} alt='Vizmaker Logo'/>
        <div className='pageNotFound'>
            <img src={logo} alt='Vizmaker Logo'/>
            <h1 className='pageNotFoundH1'>Page not found</h1>
        </div>
        
    </div>
  )
}

export default PageNotFound
