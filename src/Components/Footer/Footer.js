import React from 'react'
import './Footer.css';
import Footeronesection from './Footeronesection';
import Footertwosection from './Footertwosection';
import Footerthreesection from './Footerthreesection';
import Footerfourthsection from './Footerfourthsection';
import Copyright from './Copyright';
import Emailsection from './Emailsection';
const Footer = () => {
  return (
    <>
      <div className="footer_Section">
        <div className="newdletter_box">
          <Emailsection />
        </div>
        <div className="container cn-section">
          <div className="row">
            <div className="col-md-5">
              <Footeronesection />
            </div>
            <div className="col-md-2">
              <Footertwosection />
            </div>
            <div className="col-md-2">
              <Footerthreesection />
            </div>
            <div className="col-md-3">
              <Footerfourthsection />
            </div>
          </div>
        </div>
        <div className="copyright_sdection">
          <Copyright copyrgt="Copyright @2023 by Podian Pvt Ltd." />
        </div>
      </div>
    </>
  )
}

export default Footer
