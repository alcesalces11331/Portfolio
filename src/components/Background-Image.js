import React from 'react';
import Image from 'react-bootstrap/Image';
import oroborosEnso from '../images/oroborosEnso.png';
import ensoEcosystem from '../images/ensoEcosystem.jpg';


const BackgroundImage = props => {
    
    return(
        <div id="home-background-image-container">
            <div id="home-background-image-oroborosEnso">
                <Image path={"/"} src={oroborosEnso} alt="oroboso enso" className="App-logo-spin App-logo" roundedCircle />
            </div>
            <div id="home-background-image-ensoEcosystem">
                <Image path={"/"} src={ensoEcosystem} alt="enso ecosystem" />
            </div>
        </div>
    )
}

export default BackgroundImage;