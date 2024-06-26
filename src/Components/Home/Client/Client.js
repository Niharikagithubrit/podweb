import React from 'react'
import Heading_para from '../Heading_para'
import Client_inner from './Client_inner'

const Client = () => {
    return (
        <>
            <div className="Client_Section">
                <Heading_para headf="What Clients Say" paraf="Lorem ipsum dolor sit amet consectetur. Facilisi nulla est morbi aliquet eu." />
                <div className="client_parent">
                    <div className="row">
                        <div className="col-md-4">
                            <Client_inner client_img="Home_images/Ellipse 18.png" client_name="Ishita Kaur" climg="Home_images/Group 289222.png" client_desc="Lorem ipsum dolor sit asas a amet consectetur. Egestas amet id nulla dolor pellentesque. Laoreet ante urna sit tincidunt egestas nullam. Massa aliquam sit at posuere. Massa dolor." />
                        </div>
                        <div className="col-md-4">
                            <Client_inner client_img="Home_images/Ellipse 18 (2).png" client_name="Anisha Sharma" climg="Home_images/Group 289222.png" client_desc="Lorem ipsum dolor sit asas a amet consectetur. Egestas amet id nulla dolor pellentesque. Laoreet ante urna sit tincidunt egestas nullam. Massa aliquam sit at posuere. Massa dolor." />
                        </div>
                        <div className="col-md-4">
                            <Client_inner client_img="Home_images/Ellipse 18 (1).png" client_name="Luciana López" climg="Home_images/Group 289222.png" client_desc="Lorem ipsum dolor sit asas a amet consectetur. Egestas amet id nulla dolor pellentesque. Laoreet ante urna sit tincidunt egestas nullam. Massa aliquam sit at posuere. Massa dolor." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client
