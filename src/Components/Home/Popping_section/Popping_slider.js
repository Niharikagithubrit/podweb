import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poppins_info from './Poppins_info';

const Popping_slider = () => {
  var poppingslider = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [{
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3
      }
    }
  ,
{
  breakpoint: 425,
  settings: {
    centerMode: false,
    slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 3
  } 
}]
  };
  return (
    <>
      <div className="popping_slider">
        <Slider {...poppingslider}>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958.png" alt="slider-img" />
            <Poppins_info poppins_name="Ahmedabad" poppins_shoot="20+ Shoots" />
          </div>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958 (1).png" alt="slider-img" />
            <Poppins_info poppins_name="Mumbai" poppins_shoot="20+ Shoots" />
          </div>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958 (2).png" alt="slider-img" />
            <Poppins_info poppins_name="Delhi" poppins_shoot="20+ Shoots" />
          </div>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958 (3).png" alt="slider-img" />
            <Poppins_info poppins_name="Vadodara" poppins_shoot="20+ Shoots" />
          </div>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958 (4).png" alt="slider-img" />
            <Poppins_info poppins_name="Surat" poppins_shoot="20+ Shoots" />
          </div>
          <div className='popping_slider_img'>
            <img src="Home_images/Rectangle 5958 (1).png" alt="slider-img" />
            <Poppins_info poppins_name="Mumbai" poppins_shoot="20+ Shoots" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Popping_slider
