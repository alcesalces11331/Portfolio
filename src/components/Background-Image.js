import React from 'react';
import Image from 'react-bootstrap/Image';
import oroborosEnso from '../images/oroborosEnso.png';


const BackgroundImage = props => {
    
    return(
        <div id="home-background-image-main">
            <Image path={"/"} src={oroborosEnso} alt="oroboso enso" className="App-logo-spin App-logo" roundedCircle />
        </div>
    )
}

export default BackgroundImage;