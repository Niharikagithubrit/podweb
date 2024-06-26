import React from 'react'
import Explore_slider from './Explore_slider'

const Explore_announe = () => {
  return (
    <>
      <div className="explore_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="explore-head">
                <h3>Explore More Announcement</h3>
              </div>
            </div>
            <div className="col-md-7">
              <Explore_slider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore_announe
