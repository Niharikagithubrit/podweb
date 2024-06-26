import React from 'react'
import { NavLink } from 'react-router-dom'

const Footerfourthsection = () => {
  return (
    <>
      <div className="footer_forth_box">
        <div className="footer-fouth-head">
          <h3>Follow on</h3>
        </div>
        <div className="social__media_link">
          <ul>
            <li><NavLink className="nav-link" to=""><img src="footer_image/Facebook.png" alt="social_link" /></NavLink></li>
            <li><NavLink className="nav-link" to=""><img src="footer_image/Twitter.png" alt="social_link" /></NavLink></li>
            <li><NavLink className="nav-link" to=""><img src="footer_image/Instagram.png" alt="social_link" /></NavLink></li>
            <li><NavLink className="nav-link" to=""><img src="footer_image/LinkedIn.png" alt="social_link" /></NavLink></li>
            <li><NavLink className="nav-link" to=""><img src="footer_image/YouTube.png" alt="social_link" /></NavLink></li>
          </ul>
        </div>
        <div className="footer-fouth-head">
          <h3>Download on </h3>
        </div>
        <div className="footer_img_btm">
          <img src="footer_image/Frame 23.png" alt="footer_img_btm" />
          <img src="footer_image/Group.png" alt="footer_img_btm" />
        </div>
      </div>
    </>
  )
}

export default Footerfourthsection
