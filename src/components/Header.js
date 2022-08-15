import * as React from 'react';
import '../css/header.css';
import img from '../assets/logo/logo.png';
import Routing from './Routing';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='header'>
       <Link style={{ textDecoration: 'none' }} to="/">
          <img className='img' src={img} alt='Nutrimama' height='100px' width='400px' />
       </Link>
      <div className='menu-item-box'>
      <Routing />
      </div>
    </div>
  );
};
export default Header;
