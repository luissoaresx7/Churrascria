import React from 'react'

import productImg from '../../../assets/images/products_02.1.jpg'

import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="product__item">
        <div className="product__img">
            <img src={productImg} alt="product-img" />
        </div>
        
        <div className="product__content">
            <h5><Link>Carne</Link></h5>
            <div>
                <span className="product__price">R$24.00</span>
                <button className="addTOCart__btn">Add to Cart</button>
            </div>
        </div>
    </div>
    
  ) 
}

export default ProductCard