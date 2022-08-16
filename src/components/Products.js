import React, { useEffect } from 'react'
import '../css/products.css';
import CuiCard from './Card';
import { paperData } from '../prodData/paperData';
import { foilData } from '../prodData/foilData';
import CUICarousel from './CUICarousel';
import { Link } from 'react-router-dom';

const Products = () => {

  useEffect(() => {
   window.scrollTo(0,0)
  }, [])
  

  return (
    <div className='prodBox'>
      <div className='products'><Link style={{ textDecoration: 'none', color: '#21a0e3' }} to="/products">Our Products</Link>
        <div className='product'> Nutrimama Food Wrapping Paper  </div>
        <CUICarousel>
          {
            paperData.map(e => {
              return <CuiCard name={e.name} length={e.length} thickness={e.thickness} imgs={e.img} key={e.id}/>
            })
          }
        </CUICarousel>
        <div className='product'>Nutrimama Aluminium Foil </div>
        <CUICarousel>
          {
            foilData.map(e => {
              return <CuiCard name={e.name} length={e.length} thickness={e.thickness} imgs={e.img} key={e.id}/>
            })
          }
        </CUICarousel>
      </div>
    </div>
  )
}

export default Products