import React from 'react'
import '../css/products.css';
import CuiCard from './Card';
import { paperData } from '../prodData/paperData';
import { foilData } from '../prodData/foilData';
import CUICarousel from './CUICarousel';

const Products = () => {
  return (
    <div className='prodBox'>
      <div className='products'>Products
        <div className='product'> Nutrimama Butter Paper  </div>
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