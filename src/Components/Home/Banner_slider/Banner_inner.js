import React from 'react';
import Slider from "react-slick";
import Banner_img from './Banner_img';

const Banner_inner = () => {
  var bannerslider = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="Banner_innner_slider">
        <Slider {...bannerslider}>
          <Banner_img bannr_img="Home_images/Frame 44@2x.png" />
          <Banner_img bannr_img="Home_images/Frame 44.png" />
          <Banner_img bannr_img="Home_images/Frame 41.png" />
          <Banner_img bannr_img="Home_images/Frame 42.png" />
          <Banner_img bannr_img="Home_images/Frame 43.png" />
        </Slider>
      </div>
    </>
  )
}

export default Banner_inner
