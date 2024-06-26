import React from 'react';
import Heading_para from '../Heading_para';

const Video = () => {
  return (
    <>
      <div className="container">
        <div className="video_section">
          <div className="overlay"></div>
          <video width="100%" autoPlay loop muted>
            <source src="video/rain.mp4" type="video/mp4"
            />
          </video>
          <div className="video_content">
            <Heading_para headf="PIXELS THAT INSPIRES " paraf="POD - India’s first personal photographer booking platform." />
            <div className="kahinbhi">
              #kahibhikabhibhi 📸
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
