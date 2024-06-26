import React from 'react'
import Follower_inner from './Follower_inner'

const Follower = () => {
  return (
    <>
      <div className="container">
        <div className="follower_section">
          <div className="row">
            <div className="col-md-3 col-3">
              <Follower_inner top="12" bottom="No. of Shoot Hours" />
            </div>
            <div className="col-md-3 col-3">
              <Follower_inner top="12K+" bottom="No. of Bookings" />
            </div>
            <div className="col-md-3 col-3">
              <Follower_inner top="5M" bottom="No. of PODIANs" />
            </div>
            <div className="col-md-3 col-3">
              <Follower_inner top="10M" bottom="No. of Users" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Follower
