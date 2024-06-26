import React from 'react'
import Pixelplay from './PixelPlayground/Pixelplay';
import './Home.css';
import Podian_app from './Podian_app';
import Client from './Client/Client';
import Pod_assemble from './Pod_assemble/Pod_assemble';
import Popping from './Popping_section/Popping';
import Create_memories from './Create_memories/Create_memories';
import BookPhotoshot from './BookPhotoshot';
import Follower from './Follower';
import Banner_slider from './Banner_slider/Banner_slider';
import Video from './Video/Video';
import Explore_announe from './Explore_announce/Explore_announe';


const Home = () => {
  return (
    <>
      <div className="Home_main">
        <div className="">
          <BookPhotoshot />
          <Video />
          <Banner_slider />
          <Follower />
          <Explore_announe />
          <Create_memories />
          <Popping />
          <Pod_assemble />
          <Podian_app />
          <Client />
          <Pixelplay />
        </div>
      </div>
    </>
  )
}

export default Home;
