import React from 'react';
import Image from 'react-bootstrap/Image';
import birdsFlying from '../images/birdsFlyingGracefulBW.jpg';
import ensoEcosystem from '../images/ensoEcosystem.jpg';
import ancientTreeBwWithTheWind from '../images/ancientTreeBwWithTheWind.jpg';


const BackgroundImage = props => {
    
    return(
        <div id="background-image-container">
            <div id="background-image-birdsFlying" className="about-hide">
                <Image path={"/"} src={birdsFlying} alt="graceful birds, black and white" />
            </div>
            <div id="background-image-ensoEcosystem" className="about-hide">
                <Image path={"/"} src={ensoEcosystem} alt="enso ecosystem" />
            </div>
            <div id="background-image-ancientTree">
                <Image src={ancientTreeBwWithTheWind} alt="ancient tree with wind" />
            </div>
        </div>
    )
}

export default BackgroundImage;