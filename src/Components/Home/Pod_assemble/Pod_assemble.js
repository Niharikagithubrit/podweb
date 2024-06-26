import React from 'react';
import Heading_para from '../Heading_para';
import Pos_assemble_slider from './Pos_assemble_slider';

const Pod_assemble = () => {
  return (
    <>
      <div className="Pod_assemble_section">
        <div className="container-fluid">
          <Heading_para headf="POD's Star-Studded Ensemble" paraf="When Brands and POD Get Together, Magic Unfolds!" />
          <Pos_assemble_slider />
        </div>
      </div>
    </>
  )
}

export default Pod_assemble
