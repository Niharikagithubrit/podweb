import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pos_assemble_slider = () => {
  var posassembslider = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
      breakpoint: 425,
      settings: {
        centerMode: false,
        slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3
      }
    }]
  };
  return (
    <>
      <div className="pos_assemble_slider">
        <Slider {...posassembslider}>
          <div className='slider_img'><img src="Home_images/Frame 28.png" alt="slider-img" /></div>
          <div className='slider_img'><img src="Home_images/Frame 30.png" alt="slider-img" /></div>
          <div className='slider_img'><img src="Home_images/Frame 31.png" alt="slider-img" /></div>
          <div className='slider_img'><img src="Home_images/Frame 32.png" alt="slider-img" /></div>
          <div className='slider_img'><img src="Home_images/Frame 30.png" alt="slider-img" /></div>
          <div className='slider_img'><img src="Home_images/Frame 32.png" alt="slider-img" /></div>
        </Slider>
      </div>
    </>
  )
}

export default Pos_assemble_slider
