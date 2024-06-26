import React from 'react'
import Podbutton from '../../Podbutton'

const Pixelplayinner = (props) => {
  return (
    <>
      <div className="picel_media_inner">
        <h3>{props.pixelhead}</h3>
        <p>{props.pixelpara}</p>
        <Podbutton pdbtn="Explore Blogs" />
      </div>
    </>
  )
}

export default Pixelplayinner
