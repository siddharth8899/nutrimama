import React from 'react'
import './products.css';
import CuiCard from './Card';
import { prodData } from './productsData';

const Products = () => {
  return (
    <div className='prodBox'>
    <div className='products'>Products
    {
      prodData.map(e => {
        return <CuiCard name={e.name} length={e.length} thickness={e.thickness} imgs={e.img} />
      })
    }
    </div>
    </div>
  )
}

export default Products