import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";



const Restaurant = (props) => {
  
  const {id, title, image01, price} = props.item;



  return (
    <div className="product__item">
        <div className="product__img">
            <img src={image01} alt="product-img" className="w-50" />
        </div>
        
        <div className="product__content">
            <h5>
              <Link to={`/foods/${id}`}>{title}</Link>
            </h5>

        </div>
    </div>    
  );
};

export default Restaurant;