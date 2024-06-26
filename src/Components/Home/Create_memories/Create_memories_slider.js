import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Create_memories_slider = () => {
  var creatememories = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 0.25,
    slidesToShow: 7,
    slidesToScroll: 1,
    
    responsive: [{
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3
      }
    },
{
  breakpoint: 500,
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
      <div className="Create_memories_slider">
        <Slider {...creatememories}>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959.png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958 (7).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958 (5).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (3).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959 (1).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958@2xgbhf.png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958 (6).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (4).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959 (2).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958 (8).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958@2x.png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (5).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959@2x.png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958 (9).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958 (5).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (3).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959 (1).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958@2xgbhf.png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958 (6).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (4).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5959 (2).png" alt="slider-img" />
            <img src="Home_images/Rectangle 5958 (8).png" alt="slider-img" /></div>
          <div className='memories_slider_img'><img src="Home_images/Rectangle 5958@2x.png" alt="slider-img" />
            <img src="Home_images/Rectangle 5959 (5).png" alt="slider-img" /></div>
        </Slider>
      </div>
    </>
  )
}

export default Create_memories_slider
