import React from 'react'
import img from './nutrimama.png';
import './About.css'; 
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={img} alt='logo' height='50px' width='100%' />
      </div>


    </div>
  )
}

export default Footer