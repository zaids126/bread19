import React from 'react';
import '../App.css'

const Nav = () => {
    return (
     
     
     <div className='navbar-container'>
<nav className="navbar navbar-expand-lg navbar-dark">
  <a href='#' className='text-white m-3'>bre.ad/jane</a>
  <button className='navbar-toggler'data-bs-toggle='collapse' data-bs-target='#navMenu'><span className='navbar-toggler-icon'></span></button>
  <div className='collapse navbar-collapse' id='navMenu'>
  <ul className='navbar-nav nav-list' >
    <li className='nav-item '>
      <a href='#' className='nav-link'>Offerings</a>
    </li>
    <li className='nav-item'>
      <a href='#' className='nav-link'>Other Links</a>
    </li>
    <li className='nav-item'>
      <a href='#' className='nav-link'>Testimonials</a>
    </li>
    <li className='nav-item'>
      <a href='#' className='nav-link'>Portfolio</a>
    </li>
    <li className='nav-item'>
      <a href='#' className='nav-link'>Contact me</a>
    </li>
    <div className='nav-button'>
  <button type='button' className="btn btn-outline-light book">Book Now</button>
  </div>
  </ul>
 

  </div>
  </nav>
 </div>
        
        
        
        
        
      
            
        
    )
}

export default Nav
