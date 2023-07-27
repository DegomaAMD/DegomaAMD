import React from 'react'
import logo from '../assets/img/vizmaker-logo-transparent.png';
import banner from '../assets/img/pageNotFoundBG.png';
import '../App.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div >
        <img className='pageNotFoundBanner' src={banner} alt='Vizmaker Logo'/>
        <div className='pageNotFound'>
            <img src={logo} alt='Vizmaker Logo'/>
            <h1 className='pageNotFoundH1'>Whoops, that Page is under construction.</h1>
            <p>
            The link you clicked may be broken or the page may have been under construction.
            </p>
            <p>
            You can try again or get to the <Link to={'/home'}>home page</Link>
            </p>
        </div>
        
    </div>
  )
}

export default PageNotFound
