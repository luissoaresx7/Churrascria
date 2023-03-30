
import React from 'react';
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.png';
import ava02 from '../../../assets/images/ava-2.png';
import ava03 from '../../../assets/images/ava-3.png';
import ava04 from '../../../assets/images/ava-4.png';

import '../../../styles/slider.css';

const DescricaoSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplayspeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
  <Slider {...settings}>
    <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quis maxime tempore sed dolores, deleniti repellendus hic magnam 
          ipsa tenetur labore nesciunt facere facilis illo delectus saepe iste nisi ex.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jonas Dias</h6>
        </div>
    </div>
    <div>
    <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quis maxime tempore sed dolores, deleniti repellendus hic magnam 
          ipsa tenetur labore nesciunt facere facilis illo delectus saepe iste nisi ex.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Michelle Sampaio</h6>
        </div>
    </div>
    <div>
    <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quis maxime tempore sed dolores, deleniti repellendus hic magnam 
          ipsa tenetur labore nesciunt facere facilis illo delectus saepe iste nisi ex.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Carolina Silva</h6>
        </div>
    </div>
    <div>
    <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quis maxime tempore sed dolores, deleniti repellendus hic magnam 
          ipsa tenetur labore nesciunt facere facilis illo delectus saepe iste nisi ex.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />
          <h6>Marcos Cleyton</h6>
        </div>
    </div>
  </Slider>
);
};

export default DescricaoSlider;