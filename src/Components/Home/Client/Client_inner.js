import React from 'react'

const Client_inner = (props) => {
  return (
    <>
      <div className="client_inner">
        <div className="Client_img">
          <img src={props.client_img} alt="Client_img" />
        </div>
        <h3>{props.client_name}</h3>
        <div className="icon_img">
          <img src={props.climg} alt="icon_img" />
        </div>
        <p>{props.client_desc}</p>
      </div>
    </>
  )
}

export default Client_inner
