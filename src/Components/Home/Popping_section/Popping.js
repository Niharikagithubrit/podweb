import React from 'react';
import Heading_para from '../Heading_para';
import Popping_slider from './Popping_slider';

const Popping = () => {
  return (
    <>
      <div className="Popping_section">
        <div className="container-fluid">
          <Heading_para headf="We're Popping Up Everywhere!" paraf="Your City, Your Moments - Discover Where POD's Lens Is Focused!" />
          <Popping_slider />
        </div>
      </div>
    </>
  )
}

export default Popping
