import React from 'react'

const Follower_inner = (props) => {
  return (
    <>
      <div className="follower_ineer">
        <h3>{props.top}</h3>
        <p>{props.bottom}</p>
      </div>
    </>
  )
}

export default Follower_inner
