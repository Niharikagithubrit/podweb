import React from 'react'

const Poppins_info = (props) => {
  return (
    <>
      <div className="popping_information">
        <h5>{props.poppins_name}</h5>
        <p>{props.poppins_shoot}</p>
      </div>
    </>
  )
}

export default Poppins_info
