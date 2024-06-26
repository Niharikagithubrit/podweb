import React from 'react';
import Slider from "react-slick";

const Explore_slider = () => {
  var explore_slider = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    initialSlide: 0.5,
    slidesToScroll: 1.5,
    slidesToShow: 1.5
  };
  return (
    <>
      <div className="explore_slider_section">
        <Slider {...explore_slider}>
          <div className='explore_sli_img'>
            <div className="top_explore">
              <img src="Home_images/Rectangle 5958 (10).png" alt="slider-img" />
              <div className="bottom_explore">
                <h3>Lorem ipsum</h3>
                <p> Lorem ipsum dolor sit amet consectetur. Sed massa.</p>
              </div>
            </div>
          </div>
          <div className='explore_sli_img'>
            <div className="top_explore">
              <img src="Home_images/Rectangle 5958 (10).png" alt="slider-img" />
              <div className="bottom_explore">
                <h3>Lorem ipsum</h3>
                <p> Lorem ipsum dolor sit amet consectetur. Sed massa.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Explore_slider
