import React from 'react';
import { NavLink } from 'react-router-dom';

const Footermenu = (props) => {
  return (
    <>
      <div className="footer_menu_secvtion">
        <div className="footer-head">
          <h3>{props.foothead}</h3>
          <div className="footer_links">
            <ul>
              <li>
                <NavLink className="nav-link" to="">{props.footlink1}</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">{props.footlink2}</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">{props.footlink3}</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">{props.footlink4}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footermenu
