import React from 'react';
import Heading_para from '../Heading_para';
import Create_memories_slider from './Create_memories_slider';
import Podbutton from '../../Podbutton';

const Create_memories = () => {
  return (
    <>
      <div className="Create_memories_section">
        <div className="container-fluid">
          <Heading_para headf="Create memories not illusion" paraf="Start creating your memories by clicking more pictures to store in you gallery" />
          <Create_memories_slider />
          <div className="exploregallery">
            <Podbutton pdbtn="Explore Gallery" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Create_memories
