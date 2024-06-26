import React from 'react';
import Heading_para from './Heading_para';
import Podbutton from '../Podbutton';
import Pod_left_ul from './Pod_left_ul';

const Podian_app = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="podian_section">
          <div className="podcast_life_section">
            <div className="row">
              <div className="col-md-7">
                <div className="left_pod_content">
                  <Heading_para headf="PODIANs Life's..." paraf="Welcome to POD, your ultimate photography service app. We understand that life's most cherished moments deserve to be beautifully captured. With POD," />
                  <Pod_left_ul pod_info="POD: Your Visual Storytelling App" />
                  <Pod_left_ul pod_info="Picture-Perfect Moments Await with POD" />
                  <Pod_left_ul pod_info="Explore the World Through Your Lens with POD" />
                  <Podbutton pdbtn="Become a PODIAN" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right_pod_img">
                  <img src="Home_images/Group 289238.png" alt="pod_right_img" />
                </div>
              </div>
            </div>
          </div>
          <Heading_para headf="The Podian App" paraf="Lorem ipsum dolor sit amet consectetur. Ut morbi." />
          <div className='podian_socail_img'>
            <img src="Home_images/Frame 23 (1).png" alt="pod_social" />
            <img src="Home_images/5f3d1f341d264d27ac8b0a78_Apple App Store Badge 1.png" alt="pod_social" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Podian_app;
