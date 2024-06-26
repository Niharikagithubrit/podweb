import React from 'react'

const Heading_para = (props) => {
  return (
    <>
      <div className="pixel_play_inner">
        <div className="para_head">
          <h3>{props.headf}</h3>
          <p>{props.paraf}</p>
        </div>
      </div>
    </>
  )
}

export default Heading_para
