import React from 'react'

const Pod_left_ul = (props) => {
  return (
    <>
      <div className="pod_left">
        <ul>
          <li><img src="Home_images/Group (1).png" alt="right_icon_orange" /><span>{props.pod_info}</span></li>
        </ul>
      </div>
    </>
  )
}

export default Pod_left_ul
