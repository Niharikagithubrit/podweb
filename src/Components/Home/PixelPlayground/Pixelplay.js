import React from 'react'
import Pixelplayinner from './Pixelplayinner'
import Heading_para from '../Heading_para';

const Pixelplay = () => {
    const pixel_block_one = {
        backgroundImage:
            "url('Home_images/Rectangle 5963 (1).png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const pixel_block_two = {
        backgroundImage:
            "url('Home_images/Rectangle 5964.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const pixel_block_three = {
        backgroundImage:
            "url('Home_images/Rectangle5963.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <>
            <div className="container-fluid">
                <div className="pixel_play_box">
                    <Heading_para headf="POD's Pixel Playground" paraf="Start creating your memories by clicking more pictures to store in you gallery" />
                    <div className="inner_play_bottom">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="pixel_block_one pixel_mar" style={pixel_block_one}>
                                    <Pixelplayinner pixelhead="New Blog" pixelpara="How Kodachrome Film Changed the History of Photography" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pixel_block_two pixel_mar" style={pixel_block_two}>
                                    <Pixelplayinner pixelhead="New Blog" pixelpara="How Kodachrome Film Changed the History of Photography" />
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="pixel_block_three pixel_mar" style={pixel_block_three}>
                                    <Pixelplayinner pixelhead="New Blog" pixelpara="How Kodachrome Film Changed the History of Photography" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pixelplay
