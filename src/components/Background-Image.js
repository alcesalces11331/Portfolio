import React from 'react';
import Image from 'react-bootstrap/Image';
import birdsFlying from '../images/birdsFlyingGracefulBW.jpg';
import ensoEcosystem from '../images/ensoEcosystem.jpg';


const BackgroundImage = props => {
    
    return(
        <div id="home-background-image-container">
            <div id="home-background-image-birdsFlying">
                <Image path={"/"} src={birdsFlying} alt="graceful birds, black and white" />
            </div>
            <div id="home-background-image-ensoEcosystem">
                <Image path={"/"} src={ensoEcosystem} alt="enso ecosystem" />
            </div>
        </div>
    )
}

export default BackgroundImage;